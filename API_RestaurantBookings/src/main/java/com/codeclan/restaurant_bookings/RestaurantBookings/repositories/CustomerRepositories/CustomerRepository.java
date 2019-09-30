package com.codeclan.restaurant_bookings.RestaurantBookings.repositories.CustomerRepositories;

import com.codeclan.restaurant_bookings.RestaurantBookings.models.Booking;
import com.codeclan.restaurant_bookings.RestaurantBookings.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, Long>, CustomerRepositoryCustom {
    List<Customer> findCustomerByFirstName(String firstName);


    List<Customer> findCustomerByLastName(String lastName);

    List<Customer> findCustomerById(Long id);



//    List<Customer> findCustomerByFirstAndLastName(String firstName, String lastName);
}
