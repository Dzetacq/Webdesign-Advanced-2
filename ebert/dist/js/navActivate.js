$(function() {
    console.log(document.location.href);
    pageName = document.location.href.match(/[^\/]+$/)[0];
    var element = "";
    switch (pageName) {
        case "index.html":
            element = "nav-welcome";
            break;
        case "left.html":
            element = "nav-left";
            break;
        case "right.html":
            element = "nav-right";
            break;
    }
    console.log(element);
    console.log($("header li"));
    $("#" + element).addClass('active');
})