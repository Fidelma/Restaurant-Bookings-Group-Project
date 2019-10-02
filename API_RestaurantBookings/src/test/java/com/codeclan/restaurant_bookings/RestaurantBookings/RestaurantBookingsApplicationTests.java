package com.codeclan.restaurant_bookings.RestaurantBookings;

import com.codeclan.restaurant_bookings.RestaurantBookings.models.Booking;
import com.codeclan.restaurant_bookings.RestaurantBookings.models.Customer;
import com.codeclan.restaurant_bookings.RestaurantBookings.models.RestaurantTable;
import com.codeclan.restaurant_bookings.RestaurantBookings.repositories.BookingRepositories.BookingRepository;
import com.codeclan.restaurant_bookings.RestaurantBookings.repositories.CustomerRepositories.CustomerRepository;
import com.codeclan.restaurant_bookings.RestaurantBookings.repositories.RestaurantTableRepositories.RestaurantTableRepository;
import org.hibernate.annotations.Table;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;
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
        LocalDate date = LocalDate.of(2015, 12, 31);
        List<Booking> found = bookingRepository.findBookingsByDate(date);
        assertEquals(date, found.get(0).getDate());
    }

    @Test
    public void getAllBookingsByCustomerId() {
	    List<Booking> found = bookingRepository.findBookingsByCustomerId( 1L);
	    assertEquals(4, found.get(0).getNumberOfGuests());

    }

    @Test
    public void getCustomerByFirstName() {
	    List<Customer> found = customerRepository.findCustomerByFirstName("Fidelma");
	    assertEquals("Begean", found.get(0).getLastName());
    }

    @Test
    public void getCustomerByLastName() {
        List<Customer> found = customerRepository.findCustomerByLastName("Begean");
        assertEquals("Fidelma", found.get(0).getFirstName());
    }

    @Test
    public void getCustomerByFirstAndLastName() {
        List<Customer> found = customerRepository.findCustomerByFirstNameAndLastName("Fidelma", "Begean");
//        assertEquals("07708311940", found.get(0).getPhoneNumber());
        assertEquals("Fidelma", found.get(0).getFirstName());
        assertEquals("Begean",found.get(0).getLastName());
    }

    @Test
    public void getCustomerById() {
	    List<Customer> found = customerRepository.findCustomerById(1L);
	    assertEquals("Fidelma", found.get(0).getFirstName());
    }

    @Test
    public void getBookingById() {
        List<Booking> found = bookingRepository.findBookingById(1L);
        assertEquals(4, found.get(0).getNumberOfGuests());
    }

    @Test
    public void getBookingByDateAndTime() {
        LocalDate date = LocalDate.of(2015, 12, 31);
        List<Booking> found = bookingRepository.findBookingByDateAndTime(date, "20:30");
	    assertEquals(4,found.get(0).getNumberOfGuests());
    }

    @Test
    public void getCustomerByBookingId() {
        List<Customer> found = customerRepository.findCustomerById(1L);
        assertEquals("Fidelma", found.get(0).getFirstName());

    }

    @Test
    public void canSaveBooking() {
	    Customer customer1 = new Customer("Richard", "Trist", "0909909874");
	    customerRepository.save(customer1);
	    RestaurantTable table1 = new RestaurantTable(4, 4, "round-small");
	    restaurantTableRepository.save(table1);
        LocalDate date = LocalDate.of(2015, 12, 31);
        Booking booking2 = new Booking(date, "20:30", 4, customer1, table1);
	    bookingRepository.save(booking2);
    }

    @Test
    public void canGetTableById() {
	    List<RestaurantTable> found = restaurantTableRepository.findRestaurantTableById(1L);
	    assertEquals(2, found.get(0).getNumberOfChairs());

    }





}
