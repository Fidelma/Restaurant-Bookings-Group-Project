package com.codeclan.restaurant_bookings.RestaurantBookings.repositories.CustomerRepositories;

import com.codeclan.restaurant_bookings.RestaurantBookings.models.Booking;
import com.codeclan.restaurant_bookings.RestaurantBookings.models.Customer;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class CustomerRepositoryImpl {

    @Autowired
    EntityManager entityManager;


}
