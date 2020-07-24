package com.techmount.customerportal.data.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.techmount.customerportal.data.Customer;

@Repository
public interface CustomerRepository extends MongoRepository<Customer, String> {

}
