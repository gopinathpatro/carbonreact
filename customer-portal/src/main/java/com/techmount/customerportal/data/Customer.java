package com.techmount.customerportal.data;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategy.UpperCamelCaseStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

@Component
@JsonNaming(value = UpperCamelCaseStrategy.class)
public class Customer {
	
	@JsonProperty("id")
	private String id;
	
	private String firstName;
	
	private String lastName;
	
	private String Address;
	
	private String Country;
	
	public Customer() {

	}

	public Customer(String id, String firstName, String lastName, String address, String country) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		Address = address;
		Country = country;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	public String getCountry() {
		return Country;
	}

	public void setCountry(String country) {
		Country = country;
	}

	@Override
	public String toString() {
		return "Customer {id:" + id + ", firstName:" + firstName + ", lastName:" + lastName + ", Address:" + Address
				+ ", Country:" + Country + "}";
	}
	
}
