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

    //checking firstname input if it is valid with condition that 1 to 30 characters and Letters, apostrophes and dashes only
    const firstNameInput = document.getElementById('firstname');
    const namePattern = /^[A-Za-z'-]{1,30}$/;
    const middlenamePattern = /^[A-Za-z]{0,1}$/;
    const nameError = document.getElementById('first-name-error');

    firstNameInput.addEventListener('change', () => {
      if (!namePattern.test(firstNameInput.value)) {
        nameError.style.display = 'inline';
      } else {
        nameError.style.display = 'none';
      }
    });

    //checking middle name input if it is valid with condition that 1 to 30 characters and Letters, apostrophes and dashes only
    const middleNameInput = document.getElementById('middleinit');
    const middleNameError = document.getElementById('middle-name-error');
  
    middleNameInput.addEventListener('change', () => {
      if (!middlenamePattern.test(middleNameInput.value)) {
        middleNameError.style.display = 'inline';
      } else {
        middleNameError.style.display = 'none';
      }
    });

    const lastNameInput = document.getElementById('lastname');
    const lastNameError = document.getElementById('last-name-error');
  
    lastNameInput.addEventListener('change', () => {
      if (!namePattern.test(lastNameInput.value)) {
        lastNameError.style.display = 'inline';
      } else {
        lastNameError.style.display = 'none';
      }
    });

  //checking address input if it is valid with condition that 2 to 30 characters and Letters, number, dashes and space only
  
  const addressPattern = /^[A-Za-z0-9\- ]{2,30}$/;
  const addressInput = document.getElementById('addr1');
  const addressError = document.getElementById('address1-error');

  addressInput.addEventListener('change', () => {
    if (!addressPattern.test(addressInput.value)) {
      addressError.style.display = 'inline';
    } else {
      addressError.style.display = 'none';
    }
  });

    //checking address2 input if it is valid with condition that 0 to 30 characters and Letters, apostrophes, number and dashes only
  const address2Input = document.getElementById('addr2');
  const address2Error = document.getElementById('address2-error'); 
  const address2Pattern = /^[A-Za-z0-9\- ]{0,30}$/;

  address2Input.addEventListener('change', () => {
    if (!address2Pattern.test(address2Input.value)) {
      address2Error.style.display = 'inline';
    } else {
      address2Error.style.display = 'none';
    }
  });

  //checking email input if it is valid with condition that format name@domain.tld
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');

  emailInput.addEventListener('change', () => {
    if (!emailPattern.test(emailInput.value)) {
      emailError.style.display = 'inline';
    } else {
      emailError.style.display = 'none';
    }
  });

  //checking zip input if it is valid with condition that 5 digits only, but allow up to 10 characters including a - so in case they enter the zip+4 version, i.e. 77002-1234.
  const zipPattern = /^[0-9]{5}(-[0-9]{4})?$/;
  const zipInput = document.getElementById('zip');
  const zipError = document.getElementById('zip-error');

  zipInput.addEventListener('change', () => {
    if (!zipPattern.test(zipInput.value)) {
      zipError.style.display = 'inline';
    } else {
      zipError.style.display = 'none';
    }
  });

  //check phone input if it is valid with condition that 10 digits only and format the user input to 000-000-0000 and allow dashes
  
  const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
  const phoneInput = document.getElementById('phone');
  const phoneError = document.getElementById('phone-error');

  phoneInput.addEventListener('change', () => {
      if (!phonePattern.test(phoneInput.value)) {
        phoneError.style.display = 'inline';
      } else {
        phoneError.style.display = 'none';
      }
  });
  
  //check userid input if it is valid with condition that 5 to 30 No special characters allowed. just letters, numbers (as long as the first character is NOT a number), and an underscore or dash and no spaces.
  const useridPattern = /^[a-zA-Z][a-zA-Z0-9_-]{4,29}$/;
  const useridInput = document.getElementById('userid');
  const useridError = document.getElementById('userid-error');

  useridInput.addEventListener('change', () => {
    if (!useridPattern.test(useridInput.value)) {
      useridError.style.display = 'inline';
    } else {
      useridError.style.display = 'none';
    }
  });

  const cityPattern = /^[A-Za-z0-9\- ]{2,30}$/;
  const cityInput = document.getElementById('city');
  const cityError = document.getElementById('city-error');

  cityInput.addEventListener('change', () => {
    if (!cityPattern.test(cityInput.value)) {
      cityError.style.display = 'inline';
    } else {
      cityError.style.display = 'none';
    }
  });

});

/*
ssn masking fuction
*/

/*
Phone edditing function
*/
function formatPhoneNumber(input) {
  const value = input.value.replace(/\D/g, ''); // Remove all non-digit characters
  let formattedValue = '';

  if (value.length > 0) {
      formattedValue = value.substring(0, 3);
  }
  if (value.length > 3) {
      formattedValue += '-' + value.substring(3, 6);
  }
  if (value.length > 6) {
      formattedValue += '-' + value.substring(6, 10);
  }
  input.value = formattedValue;
}

/*
Slider function
This function sets up the slider for the self rate field.
*/

document.addEventListener('DOMContentLoaded', (event) => {
  const selfRateSlider = document.getElementById('self_rate');
  const selfRateOutput = document.getElementById('feeling_scale');
  const selfRateValue = document.getElementById('how_you_feel');

  selfRateOutput.innerHTML = selfRateSlider.value;

  selfRateSlider.oninput = function() {
      selfRateOutput.innerHTML = this.value;
  }

  function changeFeelingScaleColor(value) {
    const feelingScale = document.getElementById('feeling_scale');
    const howYouFeel = document.getElementById('how_you_feel');
    feelingScale.classList.remove('feeling-low', 'feeling-medium', 'feeling-high');
    if (value < 3) {
      feelingScale.classList.add('feeling-low');
    } else if (value < 7) {
      feelingScale.classList.add('feeling-medium');
    } else {
      feelingScale.classList.add('feeling-high');
    }
  }

  changeFeelingScaleColor(selfRateSlider.value);
  changeFeelingScaleColor(selfRateValue.value);
});

/* 
This subroutine simply retrieves the data names and entered data from the form.
This code doesn't require that you know how many elements are in your form OR the names of the variables. 
*/
function removedata1() {
  alert("You have removed the data from the form.");
  //document.getElementById("outputformdata").innerHTML = "(you started over)";
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
      const namePattern = /^[A-Za-z'-]{1,30}$/;
        x = document.getElementById("firstname").value;
        if( x.length<2) { 
              //document.getElementById("name_message").innerHTML = "Invalid name... too short.";  
              error_flag = 1;
        }
        else {
            if (namePattern.test(x)) {
              //document.getElementById("name_message").innerHTML = "";  
            }
            else  {
              //document.getElementById("name_message").innerHTML = "Invalid characters in name.";
              error_flag = 1;
              }
        }
    }
function checkmiddle()
    {
      const middlenamePattern = /^[A-Za-z]{0,1}$/;
        x = document.getElementById("middleinit").value;
        if( x.length>0) { 
              if (middlenamePattern.test(x)) {
              //document.getElementById("name_message").innerHTML = "";  
            }
            else  {
              //document.getElementById("name_message").innerHTML = "Invalid characters in name.";
              error_flag = 1;
              }
        }
    }
function checklastname()
    {
        const namePattern = /^[A-Za-z'-]{1,30}$/;
        x = document.getElementById("lastname").value;
        if( x.length<2) { 
              //document.getElementById("name_message").innerHTML = "Invalid name... too short.";
              error_flag = 1;  
        }
        else {
            if (namePattern.test(x)) {
              //document.getElementById("name_message").innerHTML = "";  
            }
            else  {
              //document.getElementById("name_message").innerHTML = "Invalid characters in name.";
              error_flag = 1;
              }
        }
    }

    function checkemail()
    {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        x = document.getElementById("email").value;
        if (emailPattern.test(x)) {
              //document.getElementById("name_message").innerHTML = "";  
        }
        else  {
          //document.getElementById("name_message").innerHTML = "Invalid characters in name.";
          error_flag = 1;
        }
    }
    function checkphone()
    {
      const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        x = document.getElementById("phone").value;
        if (phonePattern.test(x)) {
              //document.getElementById("name_message").innerHTML = "";  
        }
        else  {
              //document.getElementById("name_message").innerHTML = "Invalid characters in name.";
              error_flag = 1;
        }
    }

    function checkaddress()
    {
      const addressPattern = /^[A-Za-z0-9\- ]{2,30}$/;
        x = document.getElementById("addr1").value;
        if (addressPattern.test(x)) {
              //document.getElementById("name_message").innerHTML = "";  
        }
        else  {
              //document.getElementById("name_message").innerHTML = "Invalid characters in name.";
              error_flag = 1;
        }
    }

    function checkuserid()
    {
      const useridPattern = /^[a-zA-Z][a-zA-Z0-9_-]{4,29}$/;
        x = document.getElementById("userid").value;
        if (useridPattern.test(x)) {
              //document.getElementById("name_message").innerHTML = "";  
        }
        else  {
              //document.getElementById("name_message").innerHTML = "Invalid characters in name.";
              error_flag = 1;
        }
    }

    function checkcity()
    {
      const cityPattern = /^[A-Za-z0-9\- ]{2,30}$/;
        x = document.getElementById("city").value;
        if (cityPattern.test(x)) {
              //document.getElementById("name_message").innerHTML = "";  
        }
        else  {
              //document.getElementById("name_message").innerHTML = "Invalid characters in name.";
              error_flag = 1;
        }
    }

    function checkzip()
    {
      const zipPattern = /^[0-9]{5}(-[0-9]{4})?$/;
        x = document.getElementById("zip").value;
        if( x.length<5) { 
              //document.getElementById("name_message").innerHTML = "Invalid name... too short.";
              error_flag = 1;  
        }
        else {
            if (zipPattern.test(x)) {
              //document.getElementById("name_message").innerHTML = "";  
            }
            else  {
              //document.getElementById("name_message").innerHTML = "Invalid characters in name.";
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
    passwordoutput = "Entera At least 1 number";
    error_flag = 1;
    } else {
    passwordoutput = "";
    }
    document.getElementById("password_message3").innerHTML = passwordoutput;
    // Validate special chars
   if(passwordinput.search(/[!\@#\$%&*\-_\\.+\(\)]/)<0 ) {   
    passwordoutput = "Enter At least 1 special character";
    error_flag = 1;
    } else {
    passwordoutput = "";
    }
    document.getElementById("password_message4").innerHTML = passwordoutput;
  // Validate length
  if(passwordinput.length < 8) {
      passwordoutput = "Enter a Minimum 8 characters";
      error_flag = 1;
  } else {
      passwordoutput = "";
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

function checkstate() {
        z=document.getElementById("state").value;
        if(z=="") { 
              //document.getElementById("state_message").innerHTML = "Please choose a state";  
              error_flag = 1;
        }
        else {
          //document.getElementById("state_message").innerHTML = ""; 
        }
}
//    if (document.getElementById("state").length = 0 ) {  error_flag = 1; }

const textInput = document.getElementById('userid');
const submitButton = document.getElementById('check2');

submitButton.addEventListener('click', function() {
  const inputText = textInput.value;
  const lowercaseText = inputText.toLowerCase();
  textInput.value = lowercaseText;
  error_flag = "0";

  checkfirstname();
  checkmiddle();
  checklastname();
  checkemail();
  checkphone();
  checkaddress();
  checkcity();
  checkzip();
  checkstate();
  passwordentry();
  checkpassword2();
  checkuserid();


  console.log("Error flag: "+error_flag);
        if (error_flag == "1")
        {
          alert("Please fix the indicated errors!");
        }
        else {
          alert("Form is good!");
          document.getElementById("submit").disabled = false;
        }
});

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
/* References: 
https://profjake.w3spaces.com/MIS3371/homework3.html
 */