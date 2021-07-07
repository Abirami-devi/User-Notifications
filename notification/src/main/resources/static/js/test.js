window.onload = function () {
	httpGet();
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





	
