package com.example.demo.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.demo.entity.NotificationsBO;

public interface TransactionRepository extends MongoRepository<NotificationsBO, Integer> {

	@Query(value = "{employeeId : ?0 , isRead:{$eq : false}}")
	List<NotificationsBO> findByEmployeeIdAndIsRead(int employeeId);

//	List<NotificationsBO> save(List<NotificationsBO> update);
	

	
}
