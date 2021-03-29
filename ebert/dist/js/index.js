$(function() {
    $("main").hide();
    $("header").load("/ebert/dist/html/header.html");
    $("footer").load("/ebert/dist/html/footer.html");
    $("main").slideDown();
    $("#left").on('click', function() {
        closeModal('#get-started');
        window.location.href = "/ebert/dist/html/left.html";
    });
    $("#right").on('click', function() {
        closeModal('#get-started');
        window.location.href = "/ebert/dist/html/right.html";
    });
    $("#get-closed").on('click', function() {
        closeModal('#get-started');
    })
})

function closeModal(id) {
    $(id).modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
}