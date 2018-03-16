
  function checkForm()
{
  var name = document.getElementById("fullname").value;
  var email = document.getElementById("yremail").value;
  var message = document.getElementById("message").value;
  var titlealert = document.getElementById("titleerrormsg");
  var emailalert = document.getElementById("emailerrormsg");
  var namealert = document.getElementById("nameerrormsg");
  var optionalert = document.getElementById("optionerrormsg");
  var msgalert = document.getElementById("msgerrormsg");
  var optreferral = document.getElementById("optreferral");
  var optlinked = document.getElementById("optlinked");
  var optother = document.getElementById("optother");
  var is_valid = true;
  if (email==null || email=="")
    {
     emailalert.style.display = "inline";
     titlealert.style.display = "inline";
     is_valid=false;
    }
  else 
    {
     emailalert.style.display = "none";
   }
  if (name==null || name=="")
    {
     namealert.style.display = "inline";
     is_valid=false;
    }
  else 
    {
     namealert.style.display = "none";
    
    }
  if (optreferral.checked == false && optlinked.checked == false && optother.checked == false)
  {
     optionalert.style.display = "inline";
     is_valid=false;
  }     
else
  {
  optionalert.style.display = "none";
  }
if (message==null || message=="")
    {
     msgalert.style.display = "inline";
     is_valid=false;
    }
  else 
    {
     msgalert.style.display = "none";
   }
 if (is_valid == false)
    {
      titlealert.style.display = "inline";
      return false;
    }
  else 
  {
    titlealert.style.display = "none";
  return true;
}
  }



