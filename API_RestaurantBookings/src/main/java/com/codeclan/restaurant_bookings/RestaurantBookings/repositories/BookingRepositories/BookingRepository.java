package com.codeclan.restaurant_bookings.RestaurantBookings.repositories.BookingRepositories;

import com.codeclan.restaurant_bookings.RestaurantBookings.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long>, BookingRepositoryCustom {
    List<Booking> findBookingsByDate(String date);

    List<Booking> findBookingsByCustomerId(Long id);


}
