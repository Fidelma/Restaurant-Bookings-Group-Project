package com.codeclan.restaurant_bookings.RestaurantBookings.repositories.RestaurantTableRepositories;

import com.codeclan.restaurant_bookings.RestaurantBookings.models.RestaurantTable;
import org.hibernate.annotations.Table;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RestaurantTableRepository extends JpaRepository<RestaurantTable, Long>, RestaurantTableRepositoryCustom {

    List<RestaurantTable> findRestaurantTableById(long id);
}
