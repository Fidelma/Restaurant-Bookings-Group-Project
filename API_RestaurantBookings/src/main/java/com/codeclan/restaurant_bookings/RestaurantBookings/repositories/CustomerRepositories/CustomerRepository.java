package com.codeclan.restaurant_bookings.RestaurantBookings.repositories.CustomerRepositories;

import com.codeclan.restaurant_bookings.RestaurantBookings.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long>, CustomerRepositoryCustom {
}
