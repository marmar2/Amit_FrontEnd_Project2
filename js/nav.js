let root = document.documentElement;

window.addEventListener("resize", (e) => {
	
  const windowWidth = window.innerWidth;
  
  if (windowWidth > 760) {
	  document.querySelector(".toggle").style.cssText= "display:none";
	  document.querySelector(".nav-links").style.cssText= "display:block";
	  }
  if (windowWidth < 760) {
	  
	  document.querySelector(".toggle").style.cssText= "display:block; float=right; height:40px;";
	  document.querySelector(".nav-links").style.cssText= "display:none";
	  
	  }
});


  document.querySelector(".small").addEventListener("click", function(){
	  
	   let toggleList = document.getElementById("tog");
	   let display = document.querySelector(".toggle");
	   let displayV = window.getComputedStyle(display);
	   let displayValue = displayV.display;
	   
	if (displayValue !== "none" ){   
	   console.log("hoiiii");
	  if (toggleList.classList.contains("toggle-list")){
		  
		  toggleList.classList.add("toggle-list-responsive");
		  toggleList.classList.remove("toggle-list");
		  
		  toggleList.style.cssText= "display:block";
		  
	  } else if (toggleList.classList.contains("toggle-list-responsive")){
		  
		  toggleList.classList.add("toggle-list");
		  toggleList.classList.remove("toggle-list-responsive");
		  
		  toggleList.style.cssText= "display:none";

	  } 
	}  
	  
  })
  
  
  
  
  var navContainer = document.querySelector(".nav-links");
  
  let navList = navContainer.querySelectorAll('a');
   
  
  for (var z = 0; z < navList.length; z++) {
	  
	  
    navList[z].addEventListener('click', function() {
      console.log(navList[z])
	  for (var s=0; s < navList.length; s++){
		  
		  navList[s].classList.remove('active');
	  }
	  
	  navList[z].classList.add(' active');
  });
}


//ajdust nav options according to value isLogged
document.addEventListener('DOMContentLoaded',function(){

   let reg = document.querySelectorAll(".register");
   let logIn = document.querySelectorAll(".login");
   let pro = document.querySelectorAll(".profile");
   let logOut = document.querySelectorAll(".logout");
	
	if(sessionStorage.getItem("isLogged") == "true"){
          
		for (var i=0; i < 2; i++){  
		  reg[i].style.display="none";
		  logIn[i].style.display="none";
		  pro[i].style.display="inline";
		  logOut[i].style.display="inline";
		} 
		
	} else if(sessionStorage.getItem("isLogged") == null){
		
		for (var i=0; i < 2; i++){
		  reg[i].style.display="inline";
		  logIn[i].style.display="inline";
		  pro[i].style.display="none";
		  logOut[i].style.display="none";
		}  
	}
	
	//Change dark and light mode on page load
	if (localStorage.getItem("mode") === null || localStorage.getItem("mode") === "light") {
	
		
		//Apply dark or light theme
		darkMode.src = "Images/dark.png"
        root.style.setProperty('--nav',  "#ededed");
        root.style.setProperty('--sec',  "#d8ed8a");
        root.style.setProperty('--primary',  "#778e5c");
        root.style.setProperty('--back',  "#2b2c2e");
		body.style.backgroundColor = "#FFFFFF"
		
		
	}else if (localStorage.getItem("mode") === "dark"){

		//Apply dark or light theme
		darkMode.src = "Images/light.png"
        root.style.setProperty('--nav',  "#2b2c2e");
        root.style.setProperty('--sec',  "#778e5c");
        root.style.setProperty('--primary',  "#d8ed8a");
        root.style.setProperty('--back',  "#ededed");
		body.style.backgroundColor = "#2b2c2e"
	}
	
	
});	

// On logout delete session stored parameters (username and Password,......)

  let logout = document.querySelector(".logout");

 logout.addEventListener('click', function(){
	 
	 sessionStorage.removeItem("stored");
	 sessionStorage.removeItem("isLogged"); 
	 
 });



 
//Dark and Light mode

let darkMode = document.querySelector(".darklightmode");
let mode;
let body = document.body;
 
 darkMode.addEventListener('click', function(){
	 
	 // console.log(localStorage.getItem("mode"))
	 
 if (localStorage.getItem("mode") === null || localStorage.getItem("mode") === "light") {
	 
	 
        localStorage.setItem("mode" , "dark")
		darkMode.src = "Images/light.png"
		
		//Apply dark or light theme
        root.style.setProperty('--nav',  "#2b2c2e");
        root.style.setProperty('--sec',  "#778e5c");
        root.style.setProperty('--primary',  "#d8ed8a");
        root.style.setProperty('--back',  "#ededed");
		body.style.backgroundColor = "#2b2c2e"
		
		
	}else if (localStorage.getItem("mode") === "dark"){
		
		localStorage.setItem("mode" , "light")
		darkMode.src = "Images/dark.png"
		
		//Apply dark or light theme
        root.style.setProperty('--nav',  "#ededed");
        root.style.setProperty('--sec',  "#d8ed8a");
        root.style.setProperty('--primary',  "#778e5c");
        root.style.setProperty('--back',  "#2b2c2e");
		body.style.backgroundColor = "#FFFFFF"
	}
	

	 
 });