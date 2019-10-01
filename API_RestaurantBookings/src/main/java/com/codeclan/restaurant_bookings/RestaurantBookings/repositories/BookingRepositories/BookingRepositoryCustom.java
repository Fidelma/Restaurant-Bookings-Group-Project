package com.codeclan.restaurant_bookings.RestaurantBookings.repositories.BookingRepositories;

import com.codeclan.restaurant_bookings.RestaurantBookings.models.Booking;

import java.util.List;

public interface BookingRepositoryCustom {
    List<Booking> findBookingsByCustomerId(Long id);

}
