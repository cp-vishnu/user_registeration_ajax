function validate() {
var phone = document.getElementById('phone').value
var email = document.getElementById('email').value
var phone_error = document.getElementById('phone_error')
var email_error = document.getElementById('email_error')
var main_error = document.getElementById('main_error')

var flag =0

var pattern = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;

  if (phone == "") {
    
    phone_error.innerHTML = "please enter your phone number"
    phone_error.style.color = "red"
    return false
  } else {
    if (phone.length == 10) {

      phone_error.innerHTML = ""
      flag +=1;
      // return false
    } else {
      console.log(phone.length)
      
      phone_error.innerHTML = 'number should be 10'
      phone_error.style.color = "red"

    }


  }

if (email == "") {
 
  email_error.innerHTML = "please fill your email"
  email_error.style.color = "red"
  return false
} else {

  if (email.match(pattern) == null) {
    
    email_error.innerHTML = "email should be in format"
    email_error.style.color = "red"
    return false
  } email_error.innerHTML = ""
  flag += 1;
}

console.log(flag)

if(flag === 2){

  var button = document.getElementById('form')
  
  button.addEventListener('submit', function(e){
    e.preventDefault()

    var formData = new FormData();


    formData.append('fname', document.getElementById('fname').value);
    formData.append('phone', document.getElementById('phone').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('img1', document.getElementById('img1').files[0]);
    // console.log(document.getElementById('img1').value)

    var xml = new XMLHttpRequest();


    xml.open('POST', 'superglobels.php', true);
    xml.onreadystatechange = function () {
      if (xml.readyState == 4 && xml.status == 200) {
        // alert('successfully Registerd')
        document.getElementById('fname').value = ''
        document.getElementById('phone').value = ''
        document.getElementById('email').value = ''
        document.getElementById('img1').value = ''
      }
    };
    xml.send(formData);

  })
 


  
   
  
}
else{
  main_error.innerHTML ='please fill all field'
  main_error.style.color = "red"
}

        

}
