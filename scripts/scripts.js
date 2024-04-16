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

$(".gender").click(function(){
    selected_value = $("input:radio[name='gender']:checked").val();
    if(selected_value === "Male"){
        $("#Message").empty().append('<p>Your pronouns are he/him.</p>');
    } else if (selected_value === "Female"){
        $("#Message").empty().append('<p>Your pronouns are she/her.</p>');
    } else {
        $("#Message").empty().append('<p>Enter your pronouns: <input id="pronoun" class="form-control" type="text" placeholder="Enter Pronouns" name="Pronoun-Text-Box"></p>');
    }

});



//click the eye icon w/class reveal
$(function() { 

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
