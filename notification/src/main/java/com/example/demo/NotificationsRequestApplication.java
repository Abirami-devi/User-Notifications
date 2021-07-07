package com.example.demo;

import java.time.LocalTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.demo.entity.NotificationsBO;
import com.example.demo.entity.NotificationsMaster;
import com.example.demo.repository.MasterRepository;
import com.example.demo.repository.TransactionRepository;

@SpringBootApplication
public class NotificationsRequestApplication {

	public static void main(String[] args) {
		SpringApplication.run(NotificationsRequestApplication.class, args);
	}

	@Bean
	public CommandLineRunner runner() {
		
		return new CommandLineRunner() {
			
			@Autowired
			TransactionRepository transactionRepo;
			
			@Autowired
			MasterRepository masterRepo;
			
			@Override
			public void run(String... args) throws Exception {
				
				NotificationsBO notifications = new NotificationsBO(5, 102, "Employee", "Tripsheet Generated", 5, LocalTime.now(), false, LocalTime.now(),new NotificationsMaster());
				transactionRepo.save(notifications);
				NotificationsMaster notification = new NotificationsMaster(5, "Your trip sheet has been generated");
				masterRepo.save(notification);
			}
		};
	}
}
