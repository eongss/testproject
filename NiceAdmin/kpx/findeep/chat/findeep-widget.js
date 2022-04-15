$('#findeep-widget-chat-btn').click(function (e) {
    if (!$(this).data('isLoad')) {
        $('.findeep-widget-container').prepend('<div class="findeep-widget-chat"><iframe id="findeep-widget-chat-iframe" title="챗봇" src="/findeepChat.es" allow="microphone; autoplay" allowusermedia="true" style="position:relative!important;height:100%!important;width:100%!important;border:none!important;"></iframe></div>');
        $(this).data('isLoad', true);
    }

    toggleFab();

    if ($('.findeep-widget-chat').hasClass('findeep-widget-is-visible')) {
        var iframe = $("#findeep-widget-chat-iframe")[0];
        setTimeout(function () {
            $(iframe).contents().find("button:eq(0)").focus();
        }, 300);
    }
});

function toggleFab() {
    $('#findeep-widget-chat-btn').children('i').toggleClass('zmdi-comment-more').toggleClass('zmdi-close').toggleClass('findeep-widget-chat-btn-active');
    $('.findeep-widget-fab').toggleClass('close');
    $('.findeep-widget-chat').toggleClass('findeep-widget-is-visible');
}