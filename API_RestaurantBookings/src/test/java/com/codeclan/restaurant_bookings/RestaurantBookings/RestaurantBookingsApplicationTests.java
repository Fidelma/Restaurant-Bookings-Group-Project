package com.codeclan.restaurant_bookings.RestaurantBookings;

import com.codeclan.restaurant_bookings.RestaurantBookings.models.Booking;
import com.codeclan.restaurant_bookings.RestaurantBookings.repositories.BookingRepositories.BookingRepository;
import com.codeclan.restaurant_bookings.RestaurantBookings.repositories.CustomerRepositories.CustomerRepository;
import com.codeclan.restaurant_bookings.RestaurantBookings.repositories.RestaurantTableRepositories.RestaurantTableRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RestaurantBookingsApplicationTests {

    @Autowired
    RestaurantTableRepository restaurantTableRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    BookingRepository bookingRepository;

	@Test
	public void contextLoads() {
	}

    @Test
    public void getAllBookingsByDate() {
        List<Booking> found = bookingRepository.findBookingsByDate("1/11/2019");
        assertEquals("1/11/2019", found.get(0).getDate());
    }

    @Test
    public void getAllBookingsByCustomerId() {
	    List<Booking> found = bookingRepository.findBookingsByCustomerId( 1L);
	    assertEquals("1/11/2019", found.get(0).getDate());

    }

    @Test
    public void getCustomerByFirstName()
        





}
