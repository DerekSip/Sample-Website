$(document).ready(function() {
    $("#basic-form").validate({
    rules: {
    name : {
    required: true,
    minlength: 3
    },
    username : {
    required: true,
    minlength: 6
    },
    password1: {
        required: true,
        minlength: 5
    },
    password2: {
        required: true,
        minlength: 5,
        equalTo: "#password1"
    },
    age: {
    required: true,
    number: true,
    min: 18
    },
    email: {
    required: true,
    email: true
    }
  },
  messages : {
    name: {
      minlength: "Name should be at least 3 characters"
    },
    username:{
      minlength: "Your username should be 6 characters",
    },
    password1:{
        minlength: "Your password should be 10 characters",
    },
    password2:{
        minlength: "Your password should be 10 characters",
    },
    age: {
      required: "Please enter your age",
      number: "Please enter your age as a numerical value",
      min: "You must be at least 18 years old"
    },
    email: {
      email: "The email should be in the format: abc@gmail.com"
    }
  }
});
});


