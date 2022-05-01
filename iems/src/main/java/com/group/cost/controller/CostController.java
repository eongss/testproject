package com.group.cost.controller;

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
@RequestMapping("/cost")
public class CostController {
	
	@GetMapping( "/smpLand")
	public String smpLand(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","cost" );
		model.addAttribute("nav2","smpLand" );
		return "cost/smpLand";
	}
	
	@GetMapping( "/smpIsland")
	public String smpIsland(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","cost" );
		model.addAttribute("nav2","smpIsland" );
		return "cost/smpIsland";
	}
	
	@GetMapping( "/rec")
	public String rec(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","cost" );
		model.addAttribute("nav2","rec" );
		return "cost/rec";
	}
	

}
