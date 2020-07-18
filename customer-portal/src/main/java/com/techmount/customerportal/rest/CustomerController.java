package com.techmount.customerportal.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techmount.customerportal.data.Customer;
import com.techmount.customerportal.service.CustomerService;

@RestController()
public class CustomerController {
	
	@Autowired
	private CustomerService service;
	
	@GetMapping("/customer/all")
	private List<Customer> getAll() {
		return service.getAllCustomers();
	}
}
