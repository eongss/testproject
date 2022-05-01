/**
 * 
 */
package com.group.config;

import java.io.IOException;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * 인증 실패 핸들러
 * @author SUN
 *
 */
public class LoginFailureHandler implements AuthenticationFailureHandler {
	
	@SuppressWarnings("unused")
	private ObjectMapper objectMapper = new ObjectMapper();
	
	@Override
	public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException exception) throws IOException, ServletException {
		String msg = "";
		response.setStatus(HttpStatus.UNAUTHORIZED.value());
		Map<String, Object> data = new HashMap<>();
		data.put("timestamp", Calendar.getInstance().getTime());
		data.put("exception", exception.getMessage());
		msg = exception.getMessage();
		request.getRequestDispatcher("/login?failure=true&msg="+msg).forward(request, response);

	}

}
