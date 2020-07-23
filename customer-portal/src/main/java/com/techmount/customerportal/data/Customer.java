package com.techmount.customerportal.data;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategy.UpperCamelCaseStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

@Document(collection = "customer")
@JsonNaming(value = UpperCamelCaseStrategy.class)
public class Customer {
	
	@Id
	@JsonIgnore
	private ObjectId _id;
	
	@JsonProperty("id")
	private String id;
	
	private String firstName;
	
	private String lastName;
	
	private String address;
	
	private String country;
	
	public Customer() {

	}

	public Customer(String id, String firstName, String lastName, String address, String country) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.country = country;
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
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	@Override
	public String toString() {
		return "Customer {id:" + id + ", firstName:" + firstName + ", lastName:" + lastName + ", Address:" + address
				+ ", Country:" + country + "}";
	}
	
	public static List<JavaJSONMapping> getHeaders() {
		List<JavaJSONMapping> headers = new ArrayList<JavaJSONMapping>();
		headers.add(new JavaJSONMapping("FirstName", "First Name"));
		headers.add(new JavaJSONMapping("LastName", "Last Name"));
		headers.add(new JavaJSONMapping("id", "ID"));
		headers.add(new JavaJSONMapping("Address", "Address"));
		headers.add(new JavaJSONMapping("Country", "Country"));
		
		return headers;
	}
}
