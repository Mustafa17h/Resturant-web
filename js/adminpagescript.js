var x = true;
function changeBk()
 {
     
  if (x===true) 
    {
        document.getElementById("Bk").style.backgroundImage = "url(images/q1.jpg)";
        x=false;
    }
    else
   {
    document.getElementById("Bk").style.backgroundImage = "url(images/i6.png)";
    x=true;
   }
  

}


function removeBk(){

    document.getElementById("Bk").style.backgroundImage = "none";
}


function hideNav()
{

 var x = document.getElementById("nav");
 if (x.style.display === "block") {
   x.style.display = "none";
 } else {
   x.style.display = "block";
 }

}


var x=true;
function changeColor(){

    //  document.getElementById("nav").style.backgroundColor = "#292c29";

    if (x===true) 
    {
        document.getElementById("nav").style.backgroundColor = "#292c29";
        x=false;
    }
    else
   {
    document.getElementById("nav").style.backgroundColor = "#374a37";
    x=true;
   }
 


 }





function changeSize()
{
   

    var x = document.getElementById("home");
  if (x.style.fontSize === "16px") 
   {
    x.style.fontSize = "20px";
    document.getElementById("java").style.fontSize="45px";

    document.getElementById("about").style.fontSize="20px";
    document.getElementById("menu").style.fontSize="20px";
    document.getElementById("contact").style.fontSize="20px";
    document.getElementById("logout").style.fontSize="20px";

   }
   else 
   {
    x.style.fontSize= "16px";
    document.getElementById("java").style.fontSize="40px";
     document.getElementById("about").style.fontSize="16px";
    document.getElementById("menu").style.fontSize="16px";
    document.getElementById("contact").style.fontSize="16px";
    document.getElementById("logout").style.fontSize="16px";


  }

}

function changeFont() 
{  
  var x = document.getElementById("home");
  if (x.style.fontStyle === "normal") 
   {
    x.style.fontStyle = "italic";

    document.getElementById("java").style.fontStyle ="italic";
    document.getElementById("about").style.fontStyle ="italic";
    document.getElementById("menu").style.fontStyle ="italic";
    document.getElementById("contact").style.fontStyle ="italic";
    document.getElementById("logout").style.fontStyle ="italic";
   }
   else 
   {
    x.style.fontStyle = "normal";
    document.getElementById("java").style.fontStyle ="normal";
     document.getElementById("about").style.fontStyle ="normal";
    document.getElementById("menu").style.fontStyle ="normal";
    document.getElementById("contact").style.fontStyle ="normal";
    document.getElementById("logout").style.fontStyle ="normal";


  }


}


function logout()
{

  alert("log out");
    

}


