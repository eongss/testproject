/**
 * 
 */
package com.group.config;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * 인터셉터 및 ArgumentResolver 등록
 * @author SUN
 * 
 * 주의 !!
 * @EnableWebMvc 적용시 Spring Boot의 기본설정을 사용할 수 없음.
 * 기본설정 사용하지 않게되면 Custom설정을 등록해줘야함.
 * Custom설정 예) 
 *   - static 리소스 설정 : addResourceHandler, 
 *   - JSP 리졸뷰 설정 : configureResolvers
 *   - 서블릿 전달 : configureDefaultServletHandling
 */
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
//public class WebMvcConfig extends WebMvcConfigurationSupport {
	
	@SuppressWarnings("unused")
	private static final String CLASSPATH_RESOURCE_LOCATIONS = "classpath:/static/";
	
	@Autowired
	private LoggerInterceptor loggerInterceptor;
	
	@Autowired
	private LoginUserInterceptor loginUserInterceptor;
	
	
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(loggerInterceptor)
			.addPathPatterns("/**")
			.excludePathPatterns("/**/js/*","/**/css/*","/**/img/*", "/**/images/*","/**/font/*", "/**/ri/**/*","/**/*.js","/**/*.css");  // 제외설정시사용
		registry.addInterceptor(loginUserInterceptor)
			.addPathPatterns("/**")
			.excludePathPatterns("/login", "/**/css/**","/**/js/**","/webjars/**/*","/**/ri/**","/**/img/**","/**/images/**","/resources/**","/**/font/**","/**/favicon.ico",
					             "/pics/**/*", "/**/get*","/**/select*","/**/insert*","/**/update*","/**/delete","/**/merge*", "/**/download");
	}
	
	@Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
        argumentResolvers.add(new LoginUserHandlerArgumentResolver());
    }
	
	
	
}
