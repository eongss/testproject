/**
 * 
 */
package com.group.config;

import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.spec.RSAPublicKeySpec;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.crypto.Cipher;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.SpringSecurityMessageSource;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.group.user.service.UserService;
import com.group.user.vo.LoginVO;
import com.group.user.vo.UserVO;

import lombok.extern.slf4j.Slf4j;

/**
 * Spring WebSecurityConfig AuthenticationProvider
 * @author SUN
 *
 */
@Slf4j
@Service
public class UserAuthenticationProvider implements AuthenticationProvider {
	
	@SuppressWarnings("unused")
	private static final String ROLE_PREFIX = "ROLE_";
	
	@Autowired
	private UserService userService;
	
	protected MessageSourceAccessor messages = SpringSecurityMessageSource.getAccessor();
	
	@Autowired
	private PasswordEncoder passwordEncoder;
		
	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		
		// 저장된 보안키값 읽어오기
		ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
		HttpSession session = attributes.getRequest().getSession();
				
		// RSA 암호화 개인키 세션에서 가져온다(복호화용도). (/login 시 개인키생성하여 세션에 저장함)
		PrivateKey privateKey = (PrivateKey)session.getAttribute("_rsaPrivateKey_");
		// 개인키는 가져오는 즉시 세션에서 삭제한다.
		session.removeAttribute("_rasPrivateKey_");
				
		// 로그인 유저 ID / Password 조회 (RSA로 암호화되어 넘어온다.)
		String securedUserId = authentication.getName();
		String securedPassword = authentication.getCredentials().toString();
		
		String userId = "";
		
		try {
			// 사용자ID 복호화 (DB조회용)
			userId = decryptRsa(privateKey, securedUserId);
		} catch (Exception e) {
			e.printStackTrace();
			throw new UsernameNotFoundException(messages.getMessage(
					"RSA USERID DECRYP ERROR", new Object[] { userId }, "RSA로 암호화된 사용자ID를 복호화하는 중 오류(decryptRsa)"));
		}
		
		List<UserVO> userList = userService.userVoSelectList(userId);
		
		if(userList == null || userList.size() < 1) {
			throw new UsernameNotFoundException(messages.getMessage(
					"userMapper.selectUserList.notFound", new Object[] { userId }, "{0} 사용자가 존재하지 않습니다."));
		}
		
		UserVO userVO = userList.get(0);
		
		String dbPassword = userVO.getPassword();
		String password = "";
		boolean isPasswordMatched = false; 
		
		try {
			// 패스워드 복호화 (DB패스워드와 비교용)
			password = decryptRsa(privateKey, securedPassword);
		} catch (Exception e) {
			log.warn(userId + " RAS decrypt Error! ");
			e.printStackTrace();
			throw new UsernameNotFoundException(messages.getMessage(
					"RSA_PASSWORD_DECRYP_ERROR", new Object[] { userId }, "{0} 사용자의 password RSA 복호화 오류(decryptRsa)"));
		}
		
		// 단방향 암호화된 패스워드 비교시
		// 단방향 암호화 적용시 다시 확인 필요
		isPasswordMatched = passwordEncoder.matches(password, dbPassword);
		
		if(true) {
			LoginVO loginVO = new LoginVO(userVO);
			List<String> roles = getRoles(userId);
			
			loginVO.setAuths(roles);
			loginVO.setAuthTopMenus(userService.selectAuthLevel1MenuList(userId));
			loginVO.setAuthLevel1Menus(userService.selectAuthLevel2MenuList(userId));
			
			Collection<? extends GrantedAuthority> authorities = loginVO.getAuthorities();
			
			if (authorities == null) {
				throw new BadCredentialsException(messages.getMessage(
						"SimpleGrantedAuthority.noAuthority", new Object[] { userId }, "{0} 사용자의 권한이 존재하지않습니다."));
			}
			
			UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(loginVO, loginVO.getPassword(), authorities);
			authenticationToken.setDetails(loginVO);
			
			return authenticationToken;
		}else {
			throw new UsernameNotFoundException(messages.getMessage(
					"User.notFound", new Object[] { userId }, "{0} 사용자의 password가 일치하지 않습니다. "));
		}
		
	}

	private List<String> getRoles(String userId) {
		List<String> roles = userService.authoritySelectList(userId);
		
		Boolean hasAdminRole = false;
		Boolean hasUserRole = false;
		for(String role : roles) {
			if("ADMIN_ROLE".equals(role)) hasAdminRole = true;
			if("USER_ROLE".equals(role)) hasUserRole= true;
		}
		
		if(hasAdminRole) {
			roles.add("ADMIN");
		}
		if(hasUserRole) {
			roles.add("USER");
		}
			
		return roles;
	}




	@Override
	public boolean supports(Class<?> authentication) {
		return (UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication));
	}
	


	 /**
     * 복호화
     * 
     * @param privateKey
     * @param securedValue
     * @return
     * @throws Exception
     */
	public static String decryptRsa(PrivateKey privateKey, String securedValue) throws Exception {
        Cipher cipher = Cipher.getInstance("RSA");
        byte[] encryptedBytes = hexToByteArray(securedValue);
        cipher.init(Cipher.DECRYPT_MODE, privateKey);
        byte[] decryptedBytes = cipher.doFinal(encryptedBytes);
        String decryptedValue = new String(decryptedBytes, "utf-8"); // 문자 인코딩 주의.
        return decryptedValue;
    }
 
    /**
     * 16진 문자열을 byte 배열로 변환한다.
     * 
     * @param hex
     * @return
     */
    public static byte[] hexToByteArray(String hex) {
        if (hex == null || hex.length() % 2 != 0) { return new byte[] {}; }
 
        byte[] bytes = new byte[hex.length() / 2];
        for (int i = 0; i < hex.length(); i += 2) {
            byte value = (byte) Integer.parseInt(hex.substring(i, i + 2), 16);
            bytes[(int) Math.floor(i / 2)] = value;
        }
        return bytes;
    }

    /**
     * 16진 문자열을 byte 배열로 변환한다.
     * 
     * @param hex
     * @return
     */
    public static Map<String, Object> createRsa(HttpSession session)throws Exception {
    	
    	Map<String,Object> result = new HashMap<String,Object>();
    	
    	// RSA 암호화생성
        KeyPairGenerator generator = KeyPairGenerator.getInstance("RSA");
        generator.initialize(1024);
        
        KeyPair keyPair = generator.genKeyPair();
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        
        PublicKey publicKey = keyPair.getPublic();
        PrivateKey privateKey = keyPair.getPrivate();

        session.setAttribute("_rsaPrivateKey_", privateKey);   //세션에 RSA 개인키를 세션에 저장한다.
        log.info("PK: {}", privateKey.toString());
        
        RSAPublicKeySpec publicSpec = (RSAPublicKeySpec) keyFactory.getKeySpec(publicKey, RSAPublicKeySpec.class);
        String rsaPublicKeyModulus = publicSpec.getModulus().toString(16);
        String rsaPublicKeyExponent = publicSpec.getPublicExponent().toString(16);
        
        result.put("rsaPublicKeyModulus", rsaPublicKeyModulus);
        result.put("rsaPublicKeyExponent", rsaPublicKeyExponent);
        
        return result;
    }


}
