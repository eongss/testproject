package com.group.operationalStatus.controller;

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
@RequestMapping("/operational")
public class OperationalStatusController {
	
	@GetMapping( "/dashboard")
	public String dashboard(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","dashboard" );
		model.addAttribute("nav2","dashboard" );
		return "operationalStatus/dashboard";
	}
	
	@GetMapping( "/dysgenesis")
	public String dysgenesis(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","operational" );
		model.addAttribute("nav2","dysgenesis" );
		return "operationalStatus/dysgenesis";
	}
	
	@GetMapping( "/station1")
	public String station1(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","operational" );
		model.addAttribute("nav2","station1" );
		return "operationalStatus/station1";
	}
	
	@GetMapping( "/station2")
	public String station2(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","operational" );
		model.addAttribute("nav2","station2" );
		return "operationalStatus/station2";
	}
	
	@GetMapping( "/production")
	public String production(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","operational" );
		model.addAttribute("nav2","production" );
		return "operationalStatus/production";
	}
	
	@GetMapping( "/sell")
	public String sell(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","operational" );
		model.addAttribute("nav2","sell" );
		return "operationalStatus/sell";
	}
	
	@GetMapping( "/market")
	public String market(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","operational" );
		model.addAttribute("nav2","market" );
		return "operationalStatus/market";
	}
	
	@GetMapping( "/server")
	public String server(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","operational" );
		model.addAttribute("nav2","server" );
		return "operationalStatus/server";
	}

}
