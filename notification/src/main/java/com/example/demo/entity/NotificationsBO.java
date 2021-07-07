package com.example.demo.entity;

import java.time.LocalTime;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level=AccessLevel.PRIVATE)
@Document(collection = "NotificationsTransaction")
public class NotificationsBO {

	@Id
	int bookingId;
	int employeeId;
	String role;
	String status;
	int notificationId;
	LocalTime generatedTime;
	boolean isRead;
	LocalTime readTime;
	
	NotificationsMaster masterObj;
}
