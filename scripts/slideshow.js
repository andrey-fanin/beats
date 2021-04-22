const findBlockByAlias = (alias) => {
    return $('.review__item').filter((ndx, item) => {
        return $(item).attr('data-linked-with') == alias;
    });
}
$('.interactive-avatar__link').click(e => {
    e.preventDefault();
    
    const $this = $(e.currentTarget);
    const target = $this.attr('data-open');
    const itemToShow = findBlockByAlias(target);
    const curItem = $this.closest('.reviewers__item');

    itemToShow.addClass('active').siblings().removeClass('active');
    curItem.addClass("reviewers__item--active").siblings().removeClass('reviewers__item--active');
})