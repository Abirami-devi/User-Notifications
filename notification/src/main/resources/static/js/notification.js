window.onload = function () {
	changeStatus();
  }
  var timeout = setInterval(httpGet,5000);
  var Http = new XMLHttpRequest();
  function httpGet()
  {
    
//    Http.responseType = 'json';
//    const url='http://localhost:8080/api/v1/employee/notifications/'+101;
//    Http.onreadystatechange = function() {
//      if(this.readyState==4 && this.status==200) {
//        var notifications = JSON.parse(this.responseText);
//        displayData(notifications);
       //code to change image 
      
//    }
//    Http.open("GET", url, true);
//    Http.send();
//    }
  }
  
  function displayData(data) {
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
	
  totalCount.innerHTML=data.length+ " Notifications";
  div6.appendChild(totalCount);
  div5.appendChild(div6);
  div4.appendChild(div5);
   
	  notificationData.appendChild(div4);

}	
	document.getElementById("notificationID").onclick= changeStatus();
				
	var xhr = new XMLHttpRequest();
	function changeStatus(){
	alert("enter changestatus");
	const url='http://localhost:8080/api/v1/employee/notifications/'+101;
    Http.onreadystatechange = function() {
			alert("enterr if")
      if(this.readyState==4 && this.status==200) {
        var notifications = JSON.parse(this.responseText);
		displayData(notifications);
		alert("Display data");
	}
	xhr.open("GET", url, true);
    xhr.send();
	
	}
}

