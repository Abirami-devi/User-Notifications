window.onload = function () {
	httpGet();
	userprofile();
  }
  var timeout = setInterval(httpGet,20000);
  function httpGet(){
    var Http = new XMLHttpRequest();
  Http.responseType = 'json';
  const url='http://localhost:8080/api/v1/employee/notifications/'+101; // use own URL
  console.log(url);
  Http.onreadystatechange = function() {
    if(this.readyState==4 && this.status==200) {
      console.log(Http.response);
      		displayData(Http.response);
    }
  }
  Http.open("GET", url, true);
  Http.send(); 
  } 
  
  function displayData(data) {
	
	if(data.length>0){
		document.getElementById("notificationID").src = "images/yes_notification.png";
	}
	else{
		document.getElementById("notificationID").src = "images/notification.png";
	}
	console.log();
    var notificationData = document.getElementById("childTag");
    
    notificationData.innerHTML=" ";
    for(var rows = 0; rows < data.length; rows++){
   
  var img = document.createElement('img');
  img.setAttribute("src", "images/notification-icon.png");
  img.setAttribute("alt", "notifyicon");
  img.className = "notification-icon float-start";

  var div1 = document.createElement('div');
  div1.className = "topnav-border";
  var div2 = document.createElement('div');
  div2.className = "col-md-12 float-start w-100";
  var para = document.createElement('p');
  para.className = "float-start notification-content";
  var div3 = document.createElement('div');
  div3.className = "float-end";
  var timeEntry = document.createElement('h6');
  timeEntry.className = "notification-time float-end";
  para.innerHTML = data[rows].masterObj.description;
  var generatedtime = data[rows].generatedTime;
  var time;
  hours = +(generatedtime[0] + generatedtime[1]);
  minutes = +(generatedtime[3] + generatedtime[4]);
  if(hours>12) {
    hours = hours - 12;
    time = hours + ":" + minutes + " PM" 
  }
  else {
    time = hours + ":" + minutes + " AM" 
  }
  timeEntry.innerHTML = time;
  div2.appendChild(img);
  div2.appendChild(para);
  div3.appendChild(timeEntry);
  div1.appendChild(div2);
  div1.appendChild(div3);
  
  notificationData.appendChild(div1);
  
   
     }
     /*Notification Count*/
  var div4 = document.createElement('div');
  var div5 = document.createElement('div');
  div5.className = "col-md-12 mt-3";
  var div6 = document.createElement('div');
  div6.className = "col-md-6 float-start";
  var totalCount = document.createElement('h6');
  totalCount.className = "total-records";
  var div7 = document.createElement('div');
  div7.className = "col-md-6 float-end";
  var markAsRead = document.createElement('h6');
  markAsRead.className = "float-end total-records";
  markAsRead.setAttribute("id", "markAsRead");
	
  totalCount.innerHTML=data.length+ " Notifications";
  markAsRead.innerHTML = "Mark as read";
  if(data.length>0){
  		div7.appendChild(markAsRead);
	}
  div6.appendChild(totalCount);
  div5.appendChild(div6);
  div5.appendChild(div7);
  div4.appendChild(div5);
   
	  notificationData.appendChild(div4);
	  document.getElementById("markAsRead").addEventListener("click",changeStatus);
}	
				
 	    var update = new XMLHttpRequest();
   function changeStatus(){
		update.open("PUT","http://localhost:8080/api/v1/employee/update/"+101,true);
		update.setRequestHeader("Content-Type","application/json");
		update.onreadystatechange = function(){
			if(update.readyState==4 && update.status==200) {
      			console.log(update.response);
      			imageChange();

			}		
		}
		
   		update.send();
   		//httpGet();
}
	
	function imageChange(){
	document.getElementById("notificationID").src = "images/notification.png";
	httpGet();
	}
	//Notification js ends here 
	
	//User profile js starts here
	
	document.getElementById("userprofile-icon").addEventListener("click",userprofile);
	
  function userprofile(){
	//alert("user profile");
    var Http = new XMLHttpRequest();
  Http.responseType = 'json';
  const url='http://localhost:8080/api/v1/userprofile/'+1; // use own URL
  console.log(url);
  Http.onreadystatechange = function() {
    if(this.readyState==4 && this.status==200) {
      console.log(Http.response);
      		userprofileData(Http.response);
    }
  }
  Http.open("GET", url, true);
  Http.send(); 
  } 	

	function userprofileData(data){
				
		var employeeName = document.getElementById("employeeName");
		var domainName = document.getElementById("domainName");
		var employeeId = document.getElementById("employeeId");
		var domainLead = document.getElementById("domainLead");
		var projectName = document.getElementById("projectName");
		var projectLead = document.getElementById("projectLead");
		var employeeIcon = document.getElementById("userprofile-icon");
				
		employeeName.innerHTML = data.employeeName;
		domainName.innerHTML = data.domainName;
		employeeId.innerHTML = "Employee Id: "+data.employeeId;
		domainLead.innerHTML = "Domain Lead: "+ data.domainLead;
		projectName.innerHTML = "Project: "+ data.projectName;
		projectLead.innerHTML = "Project lead: " + data.projectLead;
		
		var splitName = data.employeeName.split(' ');
    	var initials = splitName.shift().charAt(0) + splitName.pop().charAt(0);
    	
    	employeeIcon.innerHTML = initials;
		
	}
	
	var logoutButton = document.getElementById("logout");
	logoutButton.addEventListener("click",logout);
	
	function logout(){
		window.location.href = "/cab-application-login.html"			
	}





	
