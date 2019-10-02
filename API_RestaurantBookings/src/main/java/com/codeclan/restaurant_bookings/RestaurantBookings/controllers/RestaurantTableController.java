package com.codeclan.restaurant_bookings.RestaurantBookings.controllers;


import com.codeclan.restaurant_bookings.RestaurantBookings.models.RestaurantTable;
import com.codeclan.restaurant_bookings.RestaurantBookings.repositories.RestaurantTableRepositories.RestaurantTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/restaurantTables")
public class RestaurantTableController {

    @Autowired
    RestaurantTableRepository restaurantTableRepository;

    @GetMapping(value="/{id}")
    public List<RestaurantTable> findRestaurantTableById(@PathVariable long id) {
        return restaurantTableRepository.findRestaurantTableById(id);
    }

    @GetMapping(value="tableNumber/{tableNumber}")
    public List<RestaurantTable> findRestaurantTableByTableNumber(@PathVariable int tableNumber) {
        return restaurantTableRepository.findRestaurantTableByTableNumber(tableNumber);
    }
}
