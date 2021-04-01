$(function() {
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
        default:
            element = "";
            break;
    }
    if (element != "") {
        $("#" + element).addClass('active');
    }
})