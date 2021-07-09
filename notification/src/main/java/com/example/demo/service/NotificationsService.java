package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.EmployeeBO;
import com.example.demo.entity.NotificationsBO;
import com.example.demo.entity.NotificationsMaster;
import com.example.demo.repository.EmployeeRepository;
import com.example.demo.repository.MasterRepository;
import com.example.demo.repository.TransactionRepository;

@Service
public class NotificationsService {

	@Autowired
	private TransactionRepository transactionRepo;
	
	@Autowired
	private MasterRepository masterRepo;
	
	@Autowired
	private EmployeeRepository repo;
     
     //to get notifications
     public List<NotificationsBO> getNotifications(int employeeId){
    	 
    	 List<NotificationsBO> transactions = this.transactionRepo.findByEmployeeIdAndIsRead(employeeId);
    	 
    	 for(NotificationsBO eachTransaction : transactions) {    		
			 int nid = eachTransaction.getNotificationId();
    		 NotificationsMaster masterInfo = this.masterRepo.findByNotificationId(nid);
    		 eachTransaction.setMasterObj(masterInfo);
    	 }
    	 return transactions;
     }

  
     //to update notifications
     public List<NotificationsBO> updateReadStatus(List<NotificationsBO> update){
    	 
    	for(NotificationsBO eachNotification: update) {
    		eachNotification.setRead(true);
    		this.transactionRepo.save(eachNotification);
    	}
		return update;    	 
     }
     
     //to get user profile details
     public EmployeeBO getEmployeeDetails(int employeeId) {
 		
       	 EmployeeBO details = this.repo.findByEmployeeId(employeeId);
       	 return details;
    	}

     public List<EmployeeBO> getAdminContact() {
		
    	 List<EmployeeBO> employeeDetails = this.repo.findAll();
    	 List<EmployeeBO> admins = new ArrayList<>();;    	 
    	 for(EmployeeBO eachEmployee : employeeDetails) {

    		 if(eachEmployee.isAdmin()==true) {
    			 admins.add(eachEmployee);
    		 }
       	 }
		 return admins;
       }


















}
