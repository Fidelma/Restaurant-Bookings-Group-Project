package com.codeclan.restaurant_bookings.RestaurantBookings.controllers;

import com.codeclan.restaurant_bookings.RestaurantBookings.models.Customer;
import com.codeclan.restaurant_bookings.RestaurantBookings.repositories.CustomerRepositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/customers")
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

    @GetMapping(value="/{firstName}/{lastName}")
    public List<Customer>
    findCustomerByFirstNameAndLastName(@PathVariable String firstName, @PathVariable String lastName) {
        return customerRepository.findCustomerByFirstNameAndLastName(firstName, lastName);
    }

}
