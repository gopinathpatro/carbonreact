package com.techmount.customerportal.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.techmount.customerportal.data.Customer;

@Service
public class CustomerService {

	public List<Customer> getAllCustomers() {
		List<Customer> customers = new ArrayList<Customer>();
		
		Customer customer1 = new Customer("G001", "Gopinath", "Patro", "Odisha", "India");
		Customer customer2 = new Customer("G002", "Ravishankar", "Ramaswamy", "Shimoga", "India");
		Customer customer3 = new Customer("G003", "Naveen", "G", "Tumkur", "India");
		Customer customer4 = new Customer("G004", "Dipak", "Pratap", "Odisha", "India");

		customers.add(customer1);
		customers.add(customer2);
		customers.add(customer3);
		customers.add(customer4);
		
		return customers;
	}
}
