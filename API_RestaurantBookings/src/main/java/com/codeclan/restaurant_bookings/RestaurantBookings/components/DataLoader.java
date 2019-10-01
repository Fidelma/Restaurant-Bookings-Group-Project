package com.codeclan.restaurant_bookings.RestaurantBookings.components;

import com.codeclan.restaurant_bookings.RestaurantBookings.models.Booking;
import com.codeclan.restaurant_bookings.RestaurantBookings.models.Customer;
import com.codeclan.restaurant_bookings.RestaurantBookings.models.RestaurantTable;
import com.codeclan.restaurant_bookings.RestaurantBookings.repositories.BookingRepositories.BookingRepository;
import com.codeclan.restaurant_bookings.RestaurantBookings.repositories.CustomerRepositories.CustomerRepository;
import com.codeclan.restaurant_bookings.RestaurantBookings.repositories.RestaurantTableRepositories.RestaurantTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.sql.Time;
import java.time.Clock;
import java.time.LocalDate;

import static java.time.LocalDate.of;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    RestaurantTableRepository restaurantTableRepository;


    @Autowired
    BookingRepository bookingRepository;


    public DataLoader() {

    }

    public void run(ApplicationArguments args) {

        Customer customer1 = new Customer("Fidelma", "Begean", "07708311940");
        customerRepository.save(customer1);


        Customer customer2 = new Customer("Rich", "Trist", "0293894434");
        customerRepository.save(customer2);


        RestaurantTable restaurantTable1 = new RestaurantTable(2, 2, "small-round");
        restaurantTableRepository.save(restaurantTable1);


        RestaurantTable restaurantTable2 = new RestaurantTable(4, 2, "medium-rectangle");
        restaurantTableRepository.save(restaurantTable2);


        RestaurantTable restaurantTable3 = new RestaurantTable(4, 3, "medium-rectangle");
        restaurantTableRepository.save(restaurantTable3);


        RestaurantTable restaurantTable4 = new RestaurantTable(4, 4, "medium-rectangle");
        restaurantTableRepository.save(restaurantTable4);


        RestaurantTable restaurantTable5 = new RestaurantTable(5, 5, "large-round");
        restaurantTableRepository.save(restaurantTable5);


        RestaurantTable restaurantTable6 = new RestaurantTable(6, 6, "large-square");
        restaurantTableRepository.save(restaurantTable6);


        LocalDate date = LocalDate.of(2015, 12, 31);
        Booking booking1 = new Booking(date, "20:30", 4, customer1, restaurantTable2);
        bookingRepository.save(booking1);

    }


    }

