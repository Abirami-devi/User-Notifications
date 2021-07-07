package com.example.demo.businessLayer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.entity.NotificationsBO;
import com.example.demo.service.NotificationsService;

@Component
public class NotificationBusinessLayer {
	
	@Autowired
	private NotificationsService service;

	public List<NotificationsBO> getNotifications(int employeeId){
		
		return this.service.getNotifications(employeeId);
	}

	public List<NotificationsBO> updatedNotifications(List<NotificationsBO> updated){
		
		return this.service.updateReadStatus(updated);
	}

}
