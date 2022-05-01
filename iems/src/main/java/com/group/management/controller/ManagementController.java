package com.group.management.controller;

import java.util.Locale;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/management")
public class ManagementController {

	@GetMapping( "/powerPlant")
	public String powerPlant(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","management" );
		model.addAttribute("nav2","powerPlant" );
		return "management/powerPlant";
	}
	
	@GetMapping( "/facilities")
	public String facilities(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","management" );
		model.addAttribute("nav2","facilities" );
		return "management/facilities";
	}
	
	@GetMapping( "/menu")
	public String menu(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","management" );
		model.addAttribute("nav2","menu" );
		return "management/menu";
	}
	
	@GetMapping( "/role")
	public String role(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","management" );
		model.addAttribute("nav2","role" );
		return "management/role";
	}
	
	@GetMapping( "/user")
	public String user(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","management" );
		model.addAttribute("nav2","user" );
		return "management/user";
	}
	
	@GetMapping( "/code")
	public String code(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","management" );
		model.addAttribute("nav2","code" );
		return "management/code";
	}
	
}
