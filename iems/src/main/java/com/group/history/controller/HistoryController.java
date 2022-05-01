package com.group.history.controller;

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
@RequestMapping("/history")
public class HistoryController {
	
	@GetMapping( "/price")
	public String price(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","history" );
		model.addAttribute("nav2","price" );
		return "history/price";
	}
	
	@GetMapping( "/dysgenesis")
	public String dysgenesis(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","history" );
		model.addAttribute("nav2","dysgenesis" );
		return "history/dysgenesis";
	}
	
	@GetMapping( "/production")
	public String production(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","history" );
		model.addAttribute("nav2","production" );
		return "history/production";
	}
	
	@GetMapping( "/sell")
	public String sell(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","history" );
		model.addAttribute("nav2","sell" );
		return "history/sell";
	}
	
	@GetMapping( "/connection")
	public String connection(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","history" );
		model.addAttribute("nav2","connection" );
		return "history/connection";
	}

}
