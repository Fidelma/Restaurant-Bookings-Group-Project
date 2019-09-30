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

//    @Transactional
//    public List<Customer> findCustomerByFirstAndLastName(String firstName, long lastName){
//        List<Customer> results = null;
//
//        try {
//            Session session = entityManager.unwrap(Session.class);
//            Criteria cr = session.createCriteria(Customer.class);
//            cr.createAlias("customer", "customerAlias");
//            cr.add(Restrictions.eq("customerAlias.firstName", firstName));
//            cr.add(Restrictions.eq("customerAlias.lastName", lastName));
//            results = cr.list();
//        }
//
//        catch (HibernateException ex) {
//            ex.printStackTrace();
//        }
//        return results;
//    }
}
