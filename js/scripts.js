
function Contact(first, last, address, city, state) {
  this.firstName = first;
  this.lastName = last;
  this.address = address;
  this.city = city;
  this.state = state;
}



$(document).ready(function() {
    $("form#new-contact").submit(function(event) {
      event.preventDefault();

      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
      var inputtedaddress = $("input#address").val();
      var inputtedcity = $("input#city").val();
      var inputtedstate = $("input#state").val();

      var newContact = new Contact(inputtedFirstName,inputtedLastName,inputtedaddress,inputtedcity, inputtedstate);



      $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");
      $("ul#contacts").append("<li><span class='contact'>" +  newContact.address + "</span></li>");
      $("ul#contacts").append("<li><span class='contact'>" +  newContact.city + "</span></li>");
      $("ul#contacts").append("<li><span class='contact'>" +  newContact.state + "</span></li>");
    });













});
