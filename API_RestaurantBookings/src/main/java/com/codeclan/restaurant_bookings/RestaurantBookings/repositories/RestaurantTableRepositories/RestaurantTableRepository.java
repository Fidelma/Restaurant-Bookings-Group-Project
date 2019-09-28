package com.codeclan.restaurant_bookings.RestaurantBookings.repositories.RestaurantTableRepositories;

import com.codeclan.restaurant_bookings.RestaurantBookings.models.RestaurantTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantTableRepository extends JpaRepository<RestaurantTable, Long>, RestaurantTableRepositoryCustom {
}
