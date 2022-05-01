/**
 * 
 */
package com.group.config;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import lombok.extern.slf4j.Slf4j;

/**
 * 인터셉터로 요청URI 정보 로그출력
 * WebMvcConfig에 인터셉터로 등록함.
 * @author SUN 2018.11.02
 *
 */
@Slf4j
@Component
public class LoggerInterceptor extends HandlerInterceptorAdapter {
	@Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if (log.isDebugEnabled()) {
            log.debug("\n=====          START         =======================================================================");
            log.debug(" Request URI \t:  " + request.getRequestURI());
        }
        return super.preHandle(request, response, handler);
    }
     
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        if (log.isDebugEnabled()) {
            log.debug("\n=====           END          =======================================================================\n");
        }
    }

}
