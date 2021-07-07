package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.NotificationsBO;
import com.example.demo.entity.NotificationsMaster;
import com.example.demo.repository.MasterRepository;
import com.example.demo.repository.TransactionRepository;

@Service
public class NotificationsService {

	@Autowired
	private TransactionRepository transactionRepo;
	
	@Autowired
	private MasterRepository masterRepo;
	
	//to save in transaction
	public NotificationsBO save(NotificationsBO notification) {
		
		return this.transactionRepo.save(notification);
	}
	
	//to save in master
     public NotificationsMaster save(NotificationsMaster notification) {
    	 
    	 return this.masterRepo.save(notification);
	}
    
     //to find the notifications of an employee
//     public List<String> getNotificationByEmployeeId(int employeeId) {
//    	 
//    	 List<NotificationsBO> transactions = this.transactionRepo.findByEmployeeId(employeeId);
//    	 List<String> notifications = new ArrayList<>();
//    	 for(NotificationsBO eachTransaction : transactions) {    		
//    			 int nid = eachTransaction.getNotificationId();
//        		 NotificationsMaster masterInfo = this.masterRepo.findByNotificationId(nid);
//        		 String description = masterInfo.getDescription();
//        		 notifications.add(description);
//    		 }    	 
//    	 return notifications;
//     } 

     
     public List<NotificationsBO> getNotifications(int employeeId){
    	 
    	 List<NotificationsBO> transactions = this.transactionRepo.findByEmployeeIdAndIsRead(employeeId);
    	 
    	 for(NotificationsBO eachTransaction : transactions) {    		
			 int nid = eachTransaction.getNotificationId();
    		 NotificationsMaster masterInfo = this.masterRepo.findByNotificationId(nid);
    		 eachTransaction.setMasterObj(masterInfo);
    	 }
    	 
    	 return transactions;
     }

  
     public List<NotificationsBO> updateReadStatus(List<NotificationsBO> update){
    	 
    	for(NotificationsBO eachNotification: update) {
    		eachNotification.setRead(true);
    		this.transactionRepo.save(eachNotification);
    	}
		return update;    	 
     }

















}
