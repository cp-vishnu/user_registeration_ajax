function validate() {
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var phone_error = document.getElementById('phone_error');
  var email_error = document.getElementById('email_error');
  var main_error = document.getElementById('main_error');

  var isValid = true;

  // Check phone number
  if (phone === '') {
    phone_error.innerHTML = 'Please enter your phone number';
    phone_error.style.color = 'red';
    isValid = false;
  } else if (!/^\d{10}$/.test(phone)) {
    phone_error.innerHTML = 'Phone number should be 10 digits';
    phone_error.style.color = 'red';
    isValid = false;
  } else {
    phone_error.innerHTML = '';
  }

  // Check email
  if (email === '') {
    email_error.innerHTML = 'Please fill in your email';
    email_error.style.color = 'red';
    isValid = false;
  } else if (!/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/.test(email)) {
    email_error.innerHTML = 'Email should be in a valid format';
    email_error.style.color = 'red';
    isValid = false;
  } else {
    email_error.innerHTML = '';
  }

  // Submit form data
  if (isValid) {
    var button = document.getElementById('form');
    button.addEventListener('submit', function (e) {
      e.preventDefault();

      var formData = new FormData();

      formData.append('fname', document.getElementById('fname').value);
      formData.append('phone', phone);
      formData.append('email', email);
      formData.append('img1', document.getElementById('img1').files[0]);

      var xml = new XMLHttpRequest();
      xml.open('POST', 'superglobels.php', true);
      xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == 200) {
          document.getElementById('main_error').innerHTML = xml.responseText;
          document.getElementById('fname').value = '';
          document.getElementById('phone').value = '';
          document.getElementById('email').value = '';
          document.getElementById('img1').value = '';
        }
      };
      xml.send(formData);
    });
  }
}
