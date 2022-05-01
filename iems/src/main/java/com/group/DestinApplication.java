package com.group;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DestinApplication {

	public static void main(String[] args) {
		SpringApplication.run(DestinApplication.class, args);
	}

	// 생성되는 bean 정보 확인 테스트용	
	// Spring 구동시점에 실행됨
//	@Bean
//	public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
//		return args -> {
//			System.out.println("Let's inspect the beans provided by Spring Boot:");
//
//		    String[] beanNames = ctx.getBeanDefinitionNames();
//		    Arrays.sort(beanNames);
//		    for (String beanName : beanNames) {
//		        System.out.println(beanName);
//		    }
//		};
//	}	
	
}
