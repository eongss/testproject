package com.group.statistics.controller;

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
@RequestMapping("/statistics")
public class StatisticsController {
	
	@GetMapping( "/constitute")
	public String constitute(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","statistics" );
		model.addAttribute("nav2","constitute" );
		return "statistics/constitute";
	}

	@GetMapping( "/efficiency")
	public String efficiency(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","statistics" );
		model.addAttribute("nav2","efficiency" );
		return "statistics/efficiency";
	}
	
	@GetMapping( "/manage")
	public String manage(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","statistics" );
		model.addAttribute("nav2","manage" );
		return "statistics/manage";
	}
	
	@GetMapping( "/sell")
	public String sell(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","statistics" );
		model.addAttribute("nav2","sell" );
		return "statistics/sell";
	}
	
	@GetMapping( "/facilities")
	public String facilities(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","statistics" );
		model.addAttribute("nav2","facilities" );
		return "statistics/facilities";
	}
	
	@GetMapping( "/operationEfficiency")
	public String operationEfficiency(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","statistics" );
		model.addAttribute("nav2","operationEfficiency" );
		return "statistics/operationEfficiency";
	}
	
	@GetMapping( "/operatingEnvironment")
	public String operatingEnvironment(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","statistics" );
		model.addAttribute("nav2","operatingEnvironment" );
		return "statistics/operatingEnvironment";
	}
	

}
