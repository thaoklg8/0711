function hiddenMenu() {
    var hidden = document.getElementById('page__menu--right');
    if (hidden.style.display === 'none') {
        hidden.style.display = 'block';
    } else hidden.style.display = 'none';
}
$(function() {
    $("#page__menu").load("/html/menu.html");
});
$(function() {
    $("#page__footer").load("/html/footer.html");
});
$(function() {
    $("#page__partner").load("/html/partner.html");
});
$(function() {
    $("#page__partner--slide").load("/html/slide.html");
});