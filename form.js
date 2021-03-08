$(document).ready(function(){
    // set initially button state hidden
    $("#btn").hide();
    // use keyup event on email field
    $("#email").keyup(function(){
        if(validateEmail()){
            // if the email is validated
            // set input email border green
            $("#email").css("border","2px solid green");
            // and set label 
            $("#emailMsg").html("<p class='text-success'>Validated</p>");
        }else{
            // if the email is not validated
            // set border red
            $("#email").css("border","2px solid red");
            $("#emailMsg").html("<p class='text-danger'>Un-validated</p>");
        }
        buttonState();
    });
    // use keyup event on password
    $("#pass").keyup(function(){
        // check
        if(validatePassword()){
            // set input password border green
            $("#pass").css("border","2px solid green");
            //set passMsg 
            $("#passMsg").html("<p class='text-success'>Password validated</p>");
        }else{
                // set input password border red
            $("#pass").css("border","2px solid red");
            //set passMsg 
            $("#passMsg").html("<p class='text-danger'>Password not valid</p>");
        }
        buttonState();
    });

     // use keyup event on Name
     $("#name").keyup(function(){
        // check
        if(validateName()){
            // set input Name border green
            $("#name").css("border","2px solid green");
            //set passMsg 
            $("#namemsg").html("<p class='text-success'>Name validated</p>");
        }else{
                // set input password border red
            $("#name").css("border","2px solid red");
            //set passMsg 
            $("#namemsg").html("<p class='text-danger'>Name not valid</p>");
        }
        buttonState();
    });
   
     // use keyup event on Name
     $("#number").keyup(function(){
        // check
        if(validateNumber()){
            // set input Name border green
            $("#number").css("border","2px solid green");
            //set passMsg 
            $("#nummsg").html("<p class='text-success'>Number validated</p>");
        }else{
                // set input password border red
            $("#number").css("border","2px solid red");
            //set passMsg 
            $("#nummsg").html("<p class='text-danger'>Number not valid</p>");
        }
        buttonState();
    });







});

function buttonState(){
    if(validateEmail() && validatePassword() && validateNumber()){
        // if the both email and password are validate
        // then button should show visible
        $("#btn").show();
    }else{
        // if both email and pasword are not validated
        // button state should hidden
        $("#btn").hide();
    }
}
function validateEmail(){
    // get value of input email
    var email=$("#email").val();
    // use reular expression
     var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
     if(reg.test(email)){
         return true;
     }else{
         return false;
     }

}
function validatePassword(){
    //get input password value
    var pass=$("#pass").val();
    // check it s length
    if(pass.length > 7){
        return true;
    }else{
        return false;
    }

}
function validateName(){
var name = $("#name").val();

if(name.length > 2){
    return true;
}else{
    return false;
}

}

function validateNumber(){
var number = $("#number").val();

if(number.length > 9){
return true;
}else{
    return false;
}

}
