package com.techmount.customerportal.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.techmount.customerportal.data.Customer;
import com.techmount.customerportal.data.Customers;
import com.techmount.customerportal.data.repo.CustomerRepository;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepository repository;

	public Customers getAllCustomers() {
		List<Customer> customers = new ArrayList<Customer>();
		
		customers = repository.findAll();
		
		/*Customer customer1 = new Customer("G001", "Gopinath", "Patro", "Odisha", "India");
		Customer customer2 = new Customer("G002", "Ravishankar", "Ramaswamy", "Shimoga", "India");
		Customer customer3 = new Customer("G003", "Naveen", "G", "Tumkur", "India");
		Customer customer4 = new Customer("G004", "Dipak", "Pratap", "Odisha", "India");

		customers.add(customer1);
		customers.add(customer2);
		customers.add(customer3);
		customers.add(customer4);*/
		
		Customers allCustomers = new Customers(customers, Customer.getHeaders());
		
		return allCustomers;
	}
}
