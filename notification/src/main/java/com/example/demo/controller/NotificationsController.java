package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.businessLayer.NotificationBusinessLayer;
import com.example.demo.entity.NotificationsBO;
import com.example.demo.entity.NotificationsMaster;
import com.example.demo.repository.TransactionRepository;
import com.example.demo.service.NotificationsService;

@RestController
@RequestMapping(path="/api/v1/")
public class NotificationsController {

	@Autowired
	private NotificationsService service;
	
	@Autowired
	private NotificationBusinessLayer blObject;
	
	//to post a notification in transaction repository
	@PostMapping(path = "/notification")
	public NotificationsBO addNotification(@RequestBody NotificationsBO notification) {
		
		return this.service.save(notification);
	}
	
	//to post a description in master repository
	@PostMapping(path = "/notification/description")
	public NotificationsMaster addDescription(@RequestBody NotificationsMaster notification) {
		
		return this.service.save(notification);
	}
	
	@GetMapping(path = "employee/notifications/{employeeId}")
	public List<NotificationsBO> getNotifications(@PathVariable("employeeId")int employeeId) {
		
	List<NotificationsBO> result = 	this.blObject.getNotifications(employeeId);
	
	//update method
//	this.blObject.updatedNotifications(result);
	return result;
	}
	
	@PutMapping(path = "employee/update/{employeeId}")
	public List<NotificationsBO> updateStatus(@PathVariable("employeeId")int employeeId){
		
		List<NotificationsBO> result = 	this.blObject.getNotifications(employeeId);
		this.blObject.updatedNotifications(result);
		return result;
	}


}
