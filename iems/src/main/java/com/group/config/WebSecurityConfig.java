package com.group.config;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.DelegatingPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;
import org.springframework.security.crypto.password.StandardPasswordEncoder;
import org.springframework.security.web.firewall.DefaultHttpFirewall;
import org.springframework.security.web.firewall.HttpFirewall;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@SuppressWarnings("deprecation")
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled=true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{
	
	@Autowired
	private LoginSuccessHandler loginSuccessHandler;
	
	@Autowired
	private UserAuthenticationProvider userAuthenticationProvider;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		http
		.authorizeRequests()
			.antMatchers("/login","/signup/**","/assets/**").permitAll()
			.anyRequest().authenticated()
			.and()
		.formLogin()
			.loginPage("/login")
			.loginProcessingUrl("/login")
			.successHandler(loginSuccessHandler)
			.failureHandler(loginFailureHandler())
			.usernameParameter("securedUsername")
			.passwordParameter("securedPassword")
			.and()
		.logout()
			.deleteCookies("remove")
			.invalidateHttpSession(true)
			.clearAuthentication(true)
			.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
			.logoutSuccessUrl("/")
			.and()
	    .sessionManagement()
             .maximumSessions(2)
             .expiredUrl("/login?expire=true")
             .and()
 			.invalidSessionUrl("/login")
 			.and()
		.csrf().disable();
		
	}
	
	/**
     * BCryptPasswordEncoder: bcrypt 해시 알고리즘을 이용하여 입력받은 데이터를 암호화한다
     * 단방향 DB암호화 처리시 사용
     * @return
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        Map<String, PasswordEncoder> encoders = new HashMap<>(); 
        String idForEncode = "EMSBcryptEncoders"; 
        encoders.put(idForEncode, new BCryptPasswordEncoder()); 
        encoders.put("noop", NoOpPasswordEncoder.getInstance()); 
        encoders.put("pbkdf2", new Pbkdf2PasswordEncoder()); 
        encoders.put("sha256", new StandardPasswordEncoder()); 

        return new DelegatingPasswordEncoder(idForEncode, encoders);
    }
    
    /**
     * 로그인 인증 핵심
     * DB사용자 조회 인증처리 CUSTOM LOGIN 인증
     * @param auth
     * @throws Exception
     */
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(userAuthenticationProvider);
    }
    
    
    @Bean
    public HttpFirewall defaultHttpFirewall() {
        return new DefaultHttpFirewall();
    }
	
    /**
     * LoginFailureHandler Bean방식으로 등록
     */
    @Bean
    public LoginFailureHandler loginFailureHandler() {
    	return new LoginFailureHandler();
    }

}