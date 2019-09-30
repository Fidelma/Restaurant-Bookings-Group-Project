package com.codeclan.restaurant_bookings.RestaurantBookings.repositories.BookingRepositories;

import com.codeclan.restaurant_bookings.RestaurantBookings.models.Booking;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;


public class BookingRepositoryImpl {

    @Autowired
    EntityManager entityManager;

//    @Transactional
//    public List<Booking> findBookingsByCustomerId(Long id) {
//        List<Booking> results = null;
//        try {
//            Session session = entityManager.unwrap(Session.class);
//            Criteria cr = session.createCriteria(Booking.class);
//            cr.createAlias("customer", "customerAlias");
//            cr.add(Restrictions.eq("customerAlias.id", id));
//            results =cr.list();
//        }
//        catch (HibernateException ex) {
//            ex.printStackTrace();
//        }
//        return results;
//    }

}

