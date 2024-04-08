//Data Validation for letter input only
$("#userName").keyup(function (e) {

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


$(function() {
    console.log( "ready!" );
  
  //click the eye icon w/class reveal 
  $(".reveal").on('click',function() {
    let $pwd = $(".pwd");
    
    if ($pwd.attr('type') === 'password') {
        $pwd.attr('type', 'text');
       $(this).children('i').addClass('bi-eye-slash-fill').removeClass('bi-eye-fill');
    } else {
        $pwd.attr('type', 'password');
     $(this).children('i').removeClass('bi-eye-slash-fill').addClass('bi-eye-fill');
    }
});
  
});
