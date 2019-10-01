package com.codeclan.restaurant_bookings.RestaurantBookings.configs;

import com.codeclan.restaurant_bookings.RestaurantBookings.models.Booking;
import com.codeclan.restaurant_bookings.RestaurantBookings.models.Customer;
import com.codeclan.restaurant_bookings.RestaurantBookings.models.RestaurantTable;

public interface RepositoryRestConfigurer {


    @Override

    public interface configureRepositoryRestConfiguration(
    RepositoryRestConfiguration config)

    {
        config.exposedIdsFor(Booking.class, Customer.class, RestaurantTable.class);
    }

}