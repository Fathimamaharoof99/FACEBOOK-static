$(document).ready(function(){
    $("#submit").valiate({
        rules:{
                semail:{
                 required:true,
                  email:true
                  },
       
       password:{
        minlength:6,
        maxlength:8
       }

    },
    messages:{
       semail:{
        required:"it is compulsory"
       } 
    } 

})
})
