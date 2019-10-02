package com.codeclan.restaurant_bookings.RestaurantBookings.repositories.BookingRepositories;

import com.codeclan.restaurant_bookings.RestaurantBookings.models.Booking;
import com.codeclan.restaurant_bookings.RestaurantBookings.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Time;
import java.time.LocalDate;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long>, BookingRepositoryCustom {
    List<Booking> findBookingsByDate(String date);

    List<Booking> findBookingsByCustomerId(Long id);


    List<Booking> findBookingById(long id);


    List<Booking> findBookingByDateAndTime(String date, String time);
}
