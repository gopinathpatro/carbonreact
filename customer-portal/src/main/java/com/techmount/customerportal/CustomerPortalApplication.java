package com.techmount.customerportal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.techmount.customerportal.data.repo.CustomerRepository;

@SpringBootApplication
@EnableMongoRepositories(basePackageClasses = CustomerRepository.class)
public class CustomerPortalApplication {

	public static void main(String[] args) {
		SpringApplication.run(CustomerPortalApplication.class, args);
	}

}
