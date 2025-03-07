/* 
 Name: Bach Hoang
 File: homework2.js
  Date Created: 2024-03-07
  Date Updated: 2024-03-07
  Version: 1.00
  Description: MIS 7375 Homework 2 .
 
*/
// Set up some starting points
function setup()
  {
    var error_flag = 0;
    console.log(error_flag);
  }

/*
dob function
This function checks the date of birth field to make sure it is a valid date.
*/
  document.addEventListener('DOMContentLoaded', (event) => {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('dob').setAttribute('max', today);
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 120);
    document.getElementById('dob').setAttribute('min', minDate.toISOString().split('T')[0]);

    const dobInput = document.getElementById('dob');
    const dateError = document.getElementById('date-error');

    dobInput.addEventListener('change', () => {
        const dobValue = new Date(dobInput.value);
        if (dobValue > new Date(today) || dobValue < minDate) {
            dateError.style.display = 'inline';
        } else {
            dateError.style.display = 'none';
        }
    });

    const ssnDisplayInput = document.getElementById('ssn-display');
    const ssnHiddenInput = document.getElementById('ssn');
    const ssnError = document.getElementById('ssn-error');
    
    ssnDisplayInput.addEventListener('input', () => {
        let value = ssnDisplayInput.value.replace(/\D/g, ''); // Remove all non-digit characters
        let formattedValue = '';
        let obscuredValue = '';

        if (value.length > 3 && value.length <= 5) {
            formattedValue = value.substr(0, 3) + '-' + value.substr(3);
            obscuredValue = '***-**-' + value.substr(3);
        } else if (value.length > 5) {
            formattedValue = value.substr(0, 3) + '-' + value.substr(3, 2) + '-' + value.substr(5, 4);
            obscuredValue = '***-**-' + value.substr(5, 4);
        } else {
            formattedValue = value;
            obscuredValue = value;
        }

        ssnDisplayInput.value = formattedValue;
        ssnHiddenInput.value = value;
        
        const regex = /^\d{3}-\d{2}-\d{4}$/;
        if (!regex.test(formattedValue)) {
            ssnError.style.display = 'inline';
        } else {
            ssnError.style.display = 'none';
        }
    });
});
/*
Slider function
This function sets up the slider for the self rate field.
*/

document.addEventListener('DOMContentLoaded', (event) => {
  const selfRateSlider = document.getElementById('self_rate');
  const selfRateOutput = document.getElementById('feeling_scale');

  selfRateOutput.innerHTML = selfRateSlider.value;

  selfRateSlider.oninput = function() {
      selfRateOutput.innerHTML = this.value;
  }
});

/* 
This subroutine simply retrieves the data names and entered data from the form.
This code doesn't require that you know how many elements are in your form OR the names of the variables. 
*/
function removedata1() {
  document.getElementById("outputformdata").innerHTML = "(you started over)";
}
 
function getdata1() {
  var formcontents = document.getElementById("signup");
  var formoutput;
  var datatype;
  var i;
  formoutput = "<table class='output'><th>Dataname</th><th>Type</th><th>Value</th>";
  for (i = 0; i < formcontents.length; i++) {
            console.log("item: "+i+" "+formcontents.elements[i].name+" = "+formcontents.elements[i].value);
            //if (formcontents.elements[i].value !="") {
              datatype = formcontents.elements[i].type;
              switch (datatype) {
                case "checkbox":
                  if (formcontents.elements[i].checked) {
                    formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                    formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                    formoutput = formoutput +"<td class='outputdata'>Checked</td></tr>";
                  }
                  break;
               case "radio":
                    if (formcontents.elements[i].checked) {
                      formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                      formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                      formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                    }
                  break;
                case "button": case "submit": case "reset":
                  break;
                default:
                  formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                  formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                  formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                }
        

  }

   if (formoutput.length>0) { 
      formoutput = formoutput + "</table>";
      document.getElementById("outputformdata").innerHTML = formoutput;
   }
}


/* function getrangedata() {
  var slider = document.getElementById("budget");
  document.getElementById("rangedisplay").value = slider;
}
*/

/* This version gets the data from the form explicitely by field name. 
function getdata2()
*/

/* These are the subroutines to check inidivudial fields  */
function checkfirstname()
    {
        x = document.getElementById("firstname").value;
        if( x.length<2) { 
              document.getElementById("name_message").innerHTML = "Invalid name... too short.";  
              error_flag = 1;
        }
        else {
            if (x.match(/^[A-Za-z'-]+$/)) {
              document.getElementById("name_message").innerHTML = "";  
            }
            else  {
              document.getElementById("name_message").innerHTML = "Invalid characters in name.";
              error_flag = 1;
              }
        }
    }
function checkmiddle()
    {
        x = document.getElementById("middleinit").value;
        if( x.length>0) { 
              if (x.match(/^[A-Za-z'-]+$/)) {
              document.getElementById("name_message").innerHTML = "";  
            }
            else  {
              document.getElementById("name_message").innerHTML = "Invalid characters in name.";
              error_flag = 1;
              }
        }
    }
function checklastname()
    {
        x = document.getElementById("lastname").value;
        if( x.length<2) { 
              document.getElementById("name_message").innerHTML = "Invalid name... too short.";
              error_flag = 1;  
        }
        else {
            if (x.match(/^[A-Za-z'-]+$/)) {
              document.getElementById("name_message").innerHTML = "";  
            }
            else  {
              document.getElementById("name_message").innerHTML = "Invalid characters in name.";
              error_flag = 1;
              }
        }
    }

// Deal with password    
function passwordentry() 
    {
    var passwordoutput;
    var passwordinput = document.getElementById("password1").value;
    console.log(passwordinput);
    // Validate lowercase letters
    if(passwordinput.search(/[a-z]/) < 0 ) {
      passwordoutput = "Enter At least 1 lower case letter";
      error_flag = 1;
    } else {
      passwordoutput = "";
    }
    document.getElementById("password_message1").innerHTML = passwordoutput;
    // Validate capital letters
    if(passwordinput.search(/[A-Z]/)< 0)  {  
      passwordoutput = "Enter at least 1 upper case letter";
      error_flag = 1;
    } else {
      passwordoutput = "";
    }
    document.getElementById("password_message2").innerHTML = passwordoutput;
  // Validate numbers
   if(passwordinput.search(/[0-9]/)<0 ) {   
    passwordoutput = "EnteraAt least 1 number";
    error_flag = 1;
    } else {
    passwordoutput = "Got at least 1 number";
    }
    document.getElementById("password_message3").innerHTML = passwordoutput;
    // Validate special chars
   if(passwordinput.search(/[!\@#\$%&*\-_\\.+\(\)]/)<0 ) {   
    passwordoutput = "Enter At least 1 special character";
    error_flag = 1;
    } else {
    passwordoutput = "Got at least 1 special character";
    }
    document.getElementById("password_message4").innerHTML = passwordoutput;
  // Validate length
  if(passwordinput.length < 8) {
      passwordoutput = "Enter a Minimum 8 characters";
      error_flag = 1;
  } else {
      passwordoutput = "Password is now 8 or more characters";
  }
  document.getElementById("password_message5").innerHTML = passwordoutput;
  }

// Check that both passwords match
function checkpassword2() {
    x=document.getElementById("password1").value;
    y=document.getElementById("password2").value;
    if ( x==y ) 
    {
      document.getElementById("password2_text").innerHTML = "Passwords match!";
    } else  
      {
         document.getElementById("password2_text").innerHTML = "Passwords DO NOT match!";
         error_flag = 1;
      }
    }
// Check other fields
function checkaddr1() {
    x = document.getElementById("addr1").value;
    console.log(x.value);
    console.log(x.length);
    if (x.length < 2 ) {  
      document.getElementById("addr1_message").innerHTML = "Enter something on address line";  
      error_flag = 1; 
      console.log(error_flag);
      }
      else { 
          document.getElementById("addr1_message").innerHTML = "";  
      }
      console.log(addr1_message);
}
function checkaddr2() {}

function checkcity() {
         if (document.getElementById("city").value.match(/^[ a-zA-Z3-5'-]+$/)) {
              document.getElementById("city_message").innerHTML = "";  
            }
            else  {
              document.getElementById("city_message").innerHTML = "Invalid characters in City name.";
              error_flag = 1;
              }
}
function checkstate() {
        z=document.getElementById("state").value;
        if(z=="") { 
              document.getElementById("state_message").innerHTML = "Please choose a state";  
              error_flag = 1;
        }
        else {
          document.getElementById("state_message").innerHTML = ""; 
        }
}
//    if (document.getElementById("state").length = 0 ) {  error_flag = 1; }

// Check everything
    function checkform() 
      {
        error_flag = "0";
        checkfirstname();
        checkmiddle();
        checklastname();
        checkaddr1();
        checkaddr2();
        // etc...
        passwordentry();
        console.log("Error flag: "+error_flag);
        if (error_flag == "1")
        {
          alert("Please fix the indicated errors!");
        }
        else {
          document.getElementById("submit").disabled = false;
        }
      }
    /* End of document: homework3.js */