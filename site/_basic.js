/* 
 *author Kavan Soleimanbeigi
 */

$("document").ready(function() {

    setNavHandlers();
    start();
    $(window).on('hashchange', function() {
        var hash = window.location.hash;
        hash = hash.substring(1);
        navToPage(hash);
    })

});
function start() {
    var hash = window.location.hash;
    hash = hash.substring(1);
    navToPage(hash);
}
function navToPage(page) {
    if (page === "" || page === "home") {
        navigate_home();
    } else if (page === "story") {
        navigate_story();
    } else if (page === "contact") {
        navigate_contact();
    } else if (page === "blog") {
       navigate_blog();
    }
}

function setNavHandlers() {
    $("#header_navbar span:nth-child(1)").click(function() {
        navigate_home();
    });
    $("#bottom_nav span:nth-child(1)").click(function() {
        navigate_home();
    });
    $("#header_navbar span:nth-child(2)").click(function() {
        navigate_story();
    });
    $("#bottom_nav span:nth-child(2)").click(function() {
        navigate_story();
    });
    $("#header_navbar span:nth-child(3)").click(function() {
       navigate_blog();
    });
    $("#bottom_nav span:nth-child(3)").click(function() {
        navigate_blog();
    });
    $("#header_navbar span:nth-child(4)").click(function() {
        navigate_contact();
    });
    $("#bottom_nav span:nth-child(4)").click(function() {
        navigate_contact();
    });
}
function navigate_home() {
//    window.location=  "";
    hideBeforeNav();
    $("#main_content").html($("#homeTemplate").html());
    changeNavStyle(1);
    showAfterNav();
    setWindowLoc("home");
}
function navigate_story() {
//    window.location=  "";
    hideBeforeNav();
    $("#main_content").html($("#storyTemplate").html());
    changeNavStyle(2);
    showAfterNav();
    setWindowLoc("story");

}
function navigate_blog() {
    hideBeforeNav();
    $("#main_content").html($("#blogTemplate").html());
    changeNavStyle(3);
    showAfterNav();
    setWindowLoc("blog");
}
function navigate_contact() {
//    window.location=  "";
    hideBeforeNav();
    $("#main_content").html($("#contactTemplate").html());
    changeNavStyle(4);
    showAfterNav();
    setWindowLoc("contact");
    setUpContactForm();

}
function hideBeforeNav() {
    $("#main_content").css("display", "none");
    $("footer").css("display", "none");

}
function showAfterNav() {
    $("#main_content").fadeIn("slow");
    $("footer").fadeIn("slow");

}
function setWindowLoc(param) {
    window.location = location.protocol + "//" + location.host + "/site/" + "#" + param;
}
function changeNavStyle(index) {
    $("#header_navbar span").removeClass("choosed");
    $("#bottom_nav span").removeClass("choosed");
    $("#header_navbar span:nth-child(" + index + ")").addClass("choosed");
    $("#bottom_nav span:nth-child(" + index + ")").addClass("choosed");
}

