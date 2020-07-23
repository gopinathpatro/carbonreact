package com.techmount.customerportal.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techmount.customerportal.data.Customers;
import com.techmount.customerportal.service.CustomerService;

@RestController()
public class CustomerController {
	
	@Autowired
	private CustomerService service;
	
	@GetMapping("/customer/all")
	private Customers getAll() {
		return service.getAllCustomers();
	}
}
