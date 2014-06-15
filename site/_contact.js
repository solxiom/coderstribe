/*
 * author Kavan Soleimanbeigi
 */
function setUpContactForm() {
    $("#contact_form > textarea, #contact_form > input").on("focus", function() {
        var ar = ["", "Name", "Email", "Subject", "Message"];
        if ($(this).val() === ar[$(this).index()]) {
            $(this).val("");
            $(this).removeClass("emptyFormField");
            $(this).addClass("notEmptyFormField");
        }
    })
    $("#contact_form > textarea, #contact_form > input").on("focusout", function() {
        var ar = ["", "Name", "Email", "Subject", "Message"];
        if ($(this).val() === "") {
            $(this).val(ar[$(this).index()]);
            $(this).removeClass("notEmptyFormField");
            $(this).addClass("emptyFormField");

        }
    })
    $("#contact_form > input[type='submit']").on("mouseover",function(){
        $(this).css("background","#7fe442");
    });
    $("#contact_form > input[type='submit']").on("mouseout",function(){
        $(this).css("background","#83b13b");
    });
}

