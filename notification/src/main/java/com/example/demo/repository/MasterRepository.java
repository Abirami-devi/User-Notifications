package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.demo.entity.NotificationsMaster;

public interface MasterRepository extends MongoRepository<NotificationsMaster, Integer> {

	NotificationsMaster findByNotificationId(int notificationId);


}
