package com.techmount.customerportal.data;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.PropertyNamingStrategy.UpperCamelCaseStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

@Component
@JsonNaming(value = UpperCamelCaseStrategy.class)
public class Customers {
	private List<Customer> customers;
	
	private List<JavaJSONMapping> headers;
	
	public Customers() {

	}

	public Customers(List<Customer> customers, List<JavaJSONMapping> headers) {
		super();
		this.customers = customers;
		this.headers = headers;
	}

	public List<Customer> getCustomers() {
		return customers;
	}

	public void setCustomers(List<Customer> customers) {
		this.customers = customers;
	}

	public List<JavaJSONMapping> getHeaders() {
		return headers;
	}

	public void setHeaders(List<JavaJSONMapping> headers) {
		this.headers = headers;
	}

	@Override
	public String toString() {
		return "Customers {customers:" + customers + ", headers:" + headers + "}";
	}
}
