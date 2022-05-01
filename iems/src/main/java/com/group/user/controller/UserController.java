package com.group.user.controller;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.spec.InvalidKeySpecException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.group.config.UserAuthenticationProvider;
import com.group.user.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class UserController {

	
	@Autowired
	UserAuthenticationProvider userAuthenticationProvider;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	
	@RequestMapping(value = "/login", method = {RequestMethod.GET, RequestMethod.POST})
	public String login(Model model, HttpSession session, HttpServletResponse response) throws IOException, NoSuchAlgorithmException, InvalidKeySpecException {
      
		log.debug("Welcome login! {}");

		Map map = new HashMap();
      
		try {
			map = userAuthenticationProvider.createRsa(session);
			model.addAttribute("rsaPublicKeyModulus", map.get("rsaPublicKeyModulus").toString());
			model.addAttribute("rsaPublicKeyExponent", map.get("rsaPublicKeyExponent").toString());
		} catch (Exception e) {
			e.printStackTrace();
		}
      
      return "login";
	}  
	
	/*
	 * @GetMapping("/signup") public String signup(Model model, HttpSession session,
	 * HttpServletResponse response)throws IOException, NoSuchAlgorithmException,
	 * InvalidKeySpecException {
	 * 
	 * log.debug("Welcome signUpPage! {}");
	 * 
	 * Map map = new HashMap();
	 * 
	 * try { map = userAuthenticationProvider.createRsa(session);
	 * model.addAttribute("rsaPublicKeyModulus",
	 * map.get("rsaPublicKeyModulus").toString());
	 * model.addAttribute("rsaPublicKeyExponent",
	 * map.get("rsaPublicKeyExponent").toString()); } catch (Exception e) {
	 * e.printStackTrace(); }
	 * 
	 * return "/signup"; }
	 * 
	 * @RequestMapping(value = "/signup", method = {RequestMethod.POST})
	 * 
	 * @ResponseBody public Map<String, Object> signUp(@RequestParam
	 * Map<String,Object> params, HttpSession session)throws Exception{
	 * 
	 * Map<String,Object> result = new HashMap<String,Object>(); String isemail ="";
	 * String ispassword =""; String ispone ="";
	 * 
	 * // RSA 암호화 개인키 세션에서 가져온다(복호화용도). (/login 시 개인키생성하여 세션에 저장함) PrivateKey
	 * privateKey = (PrivateKey)session.getAttribute("_rsaPrivateKey_"); // 개인키는
	 * 가져오는 즉시 세션에서 삭제한다. session.removeAttribute("_rasPrivateKey_");
	 * 
	 * if(privateKey != null) { if(params.get("name") != null && params.get("email")
	 * != null && params.get("password") != null ) {
	 * 
	 * isemail = params.get("email").toString(); ispassword =
	 * params.get("password").toString();
	 * 
	 * // RSA 복호화 isemail = userAuthenticationProvider.decryptRsa(privateKey,
	 * isemail); ispassword = userAuthenticationProvider.decryptRsa(privateKey,
	 * ispassword);
	 * 
	 * String encrypted = passwordEncoder.encode(ispassword);
	 * 
	 * params.put("id", isemail); params.put("passencrypted", encrypted);
	 * 
	 * userService.userInfoInsert(params);
	 * 
	 * result.put("result", "SUCCESS"); }else { result.put("result", "ERROR");
	 * result.put("msg", "필수값이 NULL 입니다."); } }
	 * 
	 * return result; }
	 */
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView index() {
		ModelAndView model = new ModelAndView("index");
		return model;
	}
}
