$(function(){
    var loc = window.location.href; 
    var rol = loc.split("#");

    // Check to see if location href is present

    if (rol[1]== "Non-Clinical" || rol[1]=="Clinical"){
        var r = rol[1];
        if (rol[1]== "Non-Clinical"){
            $('.role-switch').addClass("non-clinical");
        } else {

            $('.role-switch').removeClass("non-clinical");
        }

    } else {

        // Add "role-switch" class to any section that should be hidden
        var dialog = "<div id='cover'></div><div id='dialog'><div>" +       
                    "<h1 style='margin-top:0px;'>SELECT A ROLE</h1><p>Please choose a role below to view the appropriate content.</p>" + 
                    "<a class='btn-launch roleplay' href='#Clinical' alt='Clinical Staff Button'>Clinical Staff</a>" +
                    "<a class='btn-launch roleplay' href='#Non-Clinical' alt='Non-Clinical Staff Button'>Non-Clinical Staff</a>" +
                    "</div></div>";

        $('#body').css("overflow", "hidden");
        $('#body').append(dialog);

    }


    $('.roleplay').click(function(e){

        var btnName = $(this).attr("href");
        if (btnName == "#Non-Clinical"){
           $('.role-switch').addClass("non-clinical");
        } else {

           // Do nothing
        }

        hideRoleSwitchDialog();

    });


    function hideRoleSwitchDialog() {
        $('#cover').fadeOut(500);
        $('#dialog').fadeOut(250, function() {
            $('#body').delay(1000).css("overflow", "inherit").attr("style", " " );
        });
    }          
});