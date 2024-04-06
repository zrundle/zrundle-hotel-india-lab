//Data Validation for letter input only
$("#userName").keyup(function (e) {

    e.preventDefault();
    this.value = this.value.replace(/[^a-z]/g, "");

});

$("#passWord").keyup(function (e) {

    e.preventDefault();
    this.value = this.value.replace(/[^a-z]/g, "");
    
});

//Data validation for numbers only
$("#cardNumber").keyup(function (e) {

    e.preventDefault();
    this.value = this.value.replace(/[^0-9\.]/g, "");
    
});

$("#expDate").keyup(function (e) {

    e.preventDefault();
    this.value = this.value.replace(/[^0-9\.]/g, "");

});

$("#cvvNumber").keyup(function (e) {

    e.preventDefault();
    this.value = this.value.replace(/[^0-9\.]/g, "");

});
