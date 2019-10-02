package com.codeclan.restaurant_bookings.RestaurantBookings.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="restaurantTables")
public class RestaurantTable {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "numberOfChairs")
    private int numberOfChairs;

    @Column(name="tableNumber")
    private int tableNumber;

    @Column(name="tableType")
    private String tableType;

    @OneToMany(mappedBy = "restaurantTable", fetch = FetchType.LAZY)
    private List<Booking>bookings;

    public RestaurantTable(int numberOfChairs, int tableNumber, String tableType) {
        this.numberOfChairs = numberOfChairs;
        this.tableNumber = tableNumber;
        this.tableType = tableType;
        this.bookings = new ArrayList<>();
    }

    public RestaurantTable() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getNumberOfChairs() {
        return numberOfChairs;
    }

    public void setNumberOfChairs(int numberOfChairs) {
        this.numberOfChairs = numberOfChairs;
    }

    public int getTableNumber() {
        return tableNumber;
    }

    public void setTableNumber(int tableNumber) {
        this.tableNumber = tableNumber;
    }

    public String getTableType() {
        return tableType;
    }

    public void setTableType(String tableType) {
        this.tableType = tableType;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }
}
