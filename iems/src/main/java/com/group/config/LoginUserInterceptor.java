package com.group.config;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.group.user.vo.LoginVO;

import lombok.extern.slf4j.Slf4j;
/**
 * loginUser 자동 삽입
 * @author SUN
 *
 */
@Slf4j
@Component
public class LoginUserInterceptor extends HandlerInterceptorAdapter {
	
	@Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		
		if (authentication != null && authentication.getPrincipal() instanceof LoginVO) {
			LoginVO loginUser = (LoginVO)authentication.getPrincipal();
			loginUser.setPassword("");
			loginUser.setUsername(loginUser.getName());
			request.setAttribute("user", loginUser);
        }
		
        return super.preHandle(request, response, handler);
    }
}
