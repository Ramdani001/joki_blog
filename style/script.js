// set delay 10s
var delay = 1000;
 
$(window).on("load", function() {
    setTimeout(function(){
        $("#loading").addClass("d-none");
        $(".loader").addClass("d-none");
    },1000);
});