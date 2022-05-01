package com.group.measure.controller;

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
@RequestMapping("/measure")
public class MeasureController {
	
	@GetMapping( "/facilities")
	public String facilities(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","measure" );
		model.addAttribute("nav2","facilities" );
		return "measure/facilities";
	}
	
	@GetMapping( "/electricity")
	public String electricity(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","measure" );
		model.addAttribute("nav2","electricity" );
		return "measure/electricity";
	}
	
	@GetMapping( "/weather")
	public String weather(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","measure" );
		model.addAttribute("nav2","weather" );
		return "measure/weather";
	}
	
	@GetMapping( "/server")
	public String server(@RequestParam Map<String, Object> params, Locale locale, Model model) {
		
		model.addAttribute("nav1","measure" );
		model.addAttribute("nav2","server" );
		return "measure/server";
	}

}
