$('.order__form').submit(e => {
    e.preventDefault();

    $.fancybox.open({
        src: "#modal",
        type: "inline"
    })
})

$('.js-close-modal').click(e => {
    e.preventDefault();

    $.fancybox.close();
})