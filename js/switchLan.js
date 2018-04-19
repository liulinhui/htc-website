$(document).ready(function () {
    // 语言切换按钮功能
    $(".language").mouseover(function () {
        $(".language ul").stop().slideDown();
    });
    $(".language").mouseout(function () {
        $(".language ul").stop().slideUp();
    });
    $(".nav .zh").click(function () {
        chgLang("zh");
    });
    $(".nav .en").click(function () {
        chgLang("en");
    });
    $(".nav .jp").click(function () {
        chgLang("jp");
    });
})