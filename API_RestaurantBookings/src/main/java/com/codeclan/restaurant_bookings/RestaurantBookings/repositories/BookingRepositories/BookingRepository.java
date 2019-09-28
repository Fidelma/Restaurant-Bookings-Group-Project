package com.codeclan.restaurant_bookings.RestaurantBookings.repositories.BookingRepositories;

import com.codeclan.restaurant_bookings.RestaurantBookings.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long>, BookingRepositoryCustom {
}
