package com.checongbinh.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TrangChuController {
	@RequestMapping("/")
	public String ViewTrangChu() {
		return "trangchu";
	}
	@RequestMapping("/login")
	@ResponseBody
	public String Login() {
		return "Login";
	}
}