// JavaScript Document

$(function() {
  $("form[name='registration']").validate({
    rules: {
      fname: "required",
      lname: "required",
      address1: "required",
      city: "required", 
      state: "required",
      zipcode: "required",
      phone: {required:true, phoneUS: true}
    },
    messages: {
      fname: "* Please enter your first name",
      lname: "* Please enter your last name",
      address1: "* Please enter your street address",
      city: "* Please enter your city",
      state: "* Please enter your state",
      zipcode: "* Please enter your zip code",
      phone: "* Please enter your phone number"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});