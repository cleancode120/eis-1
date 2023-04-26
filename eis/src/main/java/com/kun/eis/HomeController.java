package com.kun.eis;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	/*@RequestMapping(value="/")
	public String testList(@ModelAttribute("searchVO") TestVO vo, Model model, HttpSession session) throws Exception {	
		
		return "/home.tiles";
	}*/
	
}
