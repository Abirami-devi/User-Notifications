package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.businessLayer.NotificationBusinessLayer;
import com.example.demo.entity.NotificationsBO;

@RestController
@RequestMapping(path="/api/v1/")
public class NotificationsController {

	@Autowired
	private NotificationBusinessLayer blObject;
	
	//to get the notifications
	@GetMapping(path = "employee/notifications/{employeeId}")
	public List<NotificationsBO> getNotifications(@PathVariable("employeeId")int employeeId) {
		
	List<NotificationsBO> result = 	this.blObject.getNotifications(employeeId);
	
	return result;
	
	}
	
	//to update the status og notifications
	@PutMapping(path = "employee/update/{employeeId}")
	public List<NotificationsBO> updateStatus(@PathVariable("employeeId")int employeeId){
		
		List<NotificationsBO> result = 	this.blObject.getNotifications(employeeId);
		this.blObject.updatedNotifications(result);
		return result;
	}


}
