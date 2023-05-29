function send() {
    var  username=document.getElementById("idd").value;
   var kk=document.getElementById("pass").value;
   if(username=="admin"&&kk=="123456")
   {
    setTimeout(function() {window.location = "admin.html" });
   }
  else
  {
      window.alert("You can't access this page")
  }
}