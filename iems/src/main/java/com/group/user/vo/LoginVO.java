package com.group.user.vo;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class LoginVO implements UserDetails{

	// web form
	private String username;
	private String password;
		
	private int pmk;
	private String id;
	private String DBpassword;
	private String name;
	private String creation_date;
	private List<String> auths;
	private List<Map<String, Object>> authTopMenus;
	private List<Map<String, Object>> authLevel1Menus;
	
	public LoginVO() {}
	
	public LoginVO(UserVO userVO) {
		this.pmk = userVO.getPmk();
		this.id = userVO.getId();
		this.DBpassword = userVO.getPassword();
		this.name = userVO.getName();
		this.creation_date = userVO.getCreation_date();
	}
	

	//계정의 권한 목록을 리턴
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<GrantedAuthority> authorities = new ArrayList<>();
        for (String auth : this.auths) {
            authorities.add(new SimpleGrantedAuthority(auth));
        }
        return authorities;
	}


	//계정의 비밀번호를 리턴
	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return null;
	}

	//계정의 고유한 값을 리턴
	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return null;
	}

	//계정의 만료 여부 리턴
	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	//계정의 잠김 여부 리턴
	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}


	//비밀번호 만료 여부 리턴
	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
	//계정의 활성화 여부 리턴
	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}



}
