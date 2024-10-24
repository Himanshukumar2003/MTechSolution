(function () {
    emailjs.init("ZiGOKhJS1_g0I_jmM");
  })();
  
  
  function setupRealTimeValidation(
    inputField,
    errorField,
    validationFn,
    errorMsg
  ) {
    inputField.addEventListener("input", function () {
      const value = inputField.value.trim();
      if (validationFn(value)) {
        errorField.innerHTML = ""; 
      } else {
        errorField.innerHTML = `<p style="color:red;">${errorMsg}</p>`; 
      }
    });
  }
  
  
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }
  
  document
    .getElementById("main_contact_form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); 
  
      
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();
  
      
      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const subjectError = document.getElementById("subjectError");
      const messageError = document.getElementById("messageError");
  
      let isValid = true;
  
      
      if (!name) {
        nameError.innerHTML = '<p style="color:red;">Name is required.</p>';
        isValid = false;
      } else {
        nameError.innerHTML = "";
      }
  
      if (!email) {
        emailError.innerHTML = '<p style="color:red;">Email is required.</p>';
        isValid = false;
      } else if (!validateEmail(email)) {
        emailError.innerHTML = '<p style="color:red;">Invalid email format.</p>';
        isValid = false;
      } else {
        emailError.innerHTML = "";
      }
  
      if (!subject) {
        subjectError.innerHTML = '<p style="color:red;">Subject is required.</p>';
        isValid = false;
      } else {
        subjectError.innerHTML = "";
      }
  
      if (!message) {
        messageError.innerHTML = '<p style="color:red;">Message is required.</p>';
        isValid = false;
      } else {
        messageError.innerHTML = "";
      }
  
      if (!isValid) {
        return; 
      }
  
      document.getElementById("success_fail_info").innerHTML = "";
  
      emailjs
        .send("service_kpg6pt5", "template_m1niftv", {
          name: name,
          email: email,
          subject: subject,
          message: message,
        })
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById("success_fail_info").innerHTML =
              '<p style="color:green;">Message sent successfully!</p>';
            document.getElementById("main_contact_form").reset();
            setTimeout(function () {
              document.getElementById("success_fail_info").innerHTML = "";
            }, 5000);
          },
          function (error) {
            console.log("FAILED...", error);
            document.getElementById("success_fail_info").innerHTML =
              '<p style="color:red;">Message failed to send. Please try again later.</p>';
          }
        );
    });
  
  setupRealTimeValidation(
    document.getElementById("name"),
    document.getElementById("nameError"),
    function (value) {
      return value !== "";
    },
    "Name is required."
  );
  
  setupRealTimeValidation(
    document.getElementById("email"),
    document.getElementById("emailError"),
    validateEmail,
    "Invalid email format."
  );
  
  setupRealTimeValidation(
    document.getElementById("subject"),
    document.getElementById("subjectError"),
    function (value) {
      return value !== "";
    },
    "Subject is required."
  );
  
  setupRealTimeValidation(
    document.getElementById("message"),
    document.getElementById("messageError"),
    function (value) {
      return value !== "";
    },
    "Message is required."
  );
  