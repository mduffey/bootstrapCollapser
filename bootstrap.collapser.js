$(window).load(function() {
    FindCollapsers(document);
});

function FindCollapsers(item) {
    $(item).find('[data-collapse="yes"]').each(function (i) {
        FindCollapsers(this);
        BuildCollapsePanel(this);
    });
}

function BuildCollapsePanel(item) {
    var html = $(item).html();
    $(item).addClass('panel');
    var paneltype = 'panel-' + $(item).data('paneltype');
    $(item).addClass(paneltype);
    var content = '<div class="panel-heading"><h3 class="panel-title"><a href="#' +
        $(item).data('collapseid') + '" data-toggle="collapse" data-parent="#accordion">' +
        $(item).data('collapsetitle') + '</a></h3></div><div id="' + $(item).data('collapseid') + '" class="panel-collapse collapse">' +
        '<div class="panel-body">' + html + '</div></div>';
    $(item).html(content);
    $(item).removeData('collapseid');
    $(item).removeData('collapsetitle');
    $(item).removeData('collapse');
}
