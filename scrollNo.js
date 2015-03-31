function scrollToBottom(){
    console.log("Picked up scroll event.");
    window.scrollTo(0, document.body.scrollHeight);
}

$('document').ready(function(){
    $('body').onscroll = scrollToBottom();
    $('div').each(function(){
        $(this).onscroll = scrollToBottom();
    });
});
