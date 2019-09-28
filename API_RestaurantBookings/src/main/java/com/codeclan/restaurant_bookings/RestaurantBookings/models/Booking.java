package com.codeclan.restaurant_bookings.RestaurantBookings.models;

import sun.util.calendar.LocalGregorianCalendar;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Table(name="bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="date")
    private String date;

    @Column(name="time")
    private double time;

    @Column(name="numberOfGuests")
    private int numberOfGuests;

    @ManyToOne
    @JoinColumn(name="customer_id", nullable = false)
    private Customer customer;

    @ManyToOne
    @JoinColumn(name="restaurantTable_id", nullable = false)
    private RestaurantTable restaurantTable;

    public Booking(String date, double time, int numberOfGuests, Customer customer, RestaurantTable restaurantTable) {
        this.date = date;
        this.time = time;
        this.numberOfGuests = numberOfGuests;
        this.customer = customer;
        this.restaurantTable = restaurantTable;

    }

    public Booking() {
    }

    public Long getBookingId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public double getTime() {
        return time;
    }

    public void setTime(double time) {
        this.time = time;
    }

    public int getNumberOfGuests() {
        return numberOfGuests;
    }

    public void setNumberOfGuests(int numberOfGuests) {
        this.numberOfGuests = numberOfGuests;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public RestaurantTable getRestaurantTable() {
        return restaurantTable;
    }

    public void setRestaurantTable(RestaurantTable restaurantTable) {
        this.restaurantTable = restaurantTable;
    }
}
