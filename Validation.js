function validate()
{
//	alert("check1");
   var name = document.getElementById("name");
   //alert(name.value);
   var  Gender = document.getElementById("Gender");
   var Age = document.getElementById("Age");
   var DOB = document.getElementById("DOB");
   var con_number = document.getElementById("con_number");
   var Email = document.getElementById("Email");
   var Password = document.getElementById("Password");
   var con_Password = document.getElementById("con_Password");
   //alert("check2");
   if(name.value == null || name.value == "")
	   {
	      document.getElementById("name_error").innerHTML = "*NAME FIELD CANNOT BE EMPTY"; 
	     // alert("check3");
	      return false;
	   }
//   if(Gender[0].checked == false  && Gender[1].checked == false)
//   {
//      document.getElementById("gender_error").innerHTML = "*PLEASE SELECT THE GENDER"; 
//     // alert("check3");
//      return false;
//   }
   alert("check3");
   if(Age.value == null || Age.value == "")
   {
      document.getElementById("age_error").innerHTML = "*AGE FIELD CANNOT BE EMPTY"; 
      document.getElementById("age_error").focus();
      alert("check3");
      return false;
   }
  // alert("check3");
   if(DOB.value == null || DOB.value == "")
   {
      document.getElementById("DOB_error").innerHTML = "*DOB FIELD CANNOT BE EMPTY"; 
      document.getElementById("DOB_error").focus();
     // alert("check3");
      return false;
   }
   alert("check3"); 
   if(con_number.value == null || con_number.value == "")
   {
      document.getElementById("number_error").innerHTML = "*NUMBER FIELD CANNOT BE EMPTY"; 
      document.getElementById("number_error").focus();
     // alert("check3");
      return false;
   }
  // alert("check3");
   if(Email.value == null || Email.value == "")
   {
      document.getElementById("email_error").innerHTML = "*EMAIL CANNOT BE EMPTY"; 
      document.getElementById("email_error").focus();
     // alert("check3");
      return false;
   }
   if(Password.value == null || Password.value == "")
   {
      document.getElementById("password_error").innerHTML = "*PASSWORD FIELD CANNOT BE EMPTY"; 
      document.getElementById("password_error").focus();
     // alert("check3");
      return false;
   }
   if(con_Password.value == null || con_Password.value == "")
   {
      document.getElementById("con_password_error").innerHTML = "*PLEASE RE-ENTER PASSWORD"; 
      document.getElementById("con_password_error").focus();
     // alert("check3");
      return false;
   }
                        alert("Thank You For Registering with us");
   return true;
}
function inline_validate()
{
	return true;
	}
