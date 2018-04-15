var name = "somoveLanguage";
function chgLang(value) {
    SetCookie(name, value);
    console.log("come in chgLang" + name + value);
    // location.reload();
}
function SetCookie(name, value) {
    var Days = 30; //此 cookie 将被保存 30 天
    var exp = new Date(); //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
function getCookie(name){  //取cookies函数
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return null
}
$(function() {
    var uulanguage = (navigator.language || navigator.browserLanguage).toLowerCase();
    console.log("come in readly" + uulanguage);

    if (uulanguage.indexOf("en") > -1) {
        $("[data-localize]").localize("text", {   //**主要的代码** jquery.localize.js 底层实现切换逻辑
            pathPrefix: "lang",
            language: "en"
        });
        $(".language>img").attr('src',"images/icon_flag_eng@2x.png");
        $(".navBar .en").addClass('active').siblings().removeClass('active');
        console.log("come in en");
    } else if (uulanguage.indexOf("zh") > -1) {
        $("[data-localize]").localize("text", {
            pathPrefix: "lang",
            language: "zh"
        });
        $(".language>img").attr('src',"images/icon_flag_china@2x.png");
        $(".navBar .zh").addClass('active').siblings().removeClass('active');
        console.log("come in zh-cn");
    } else {
        $("[data-localize]").localize("text", {
            pathPrefix: "lang",
            language: "en"
        });
        $(".language>img").attr('src',"images/icon_flag_eng@2x.png");
        $(".navBar .en").addClass('active').siblings().removeClass('active');
        console.log("come in moren en");
    };
    //根据cookie选择语言
    if (getCookie(name)) {
        if (getCookie(name) == "zh") {
            $("[data-localize]").localize("text", {
                pathPrefix: "lang",
                language: "zh"
            });
            $(".language>img").attr('src',"images/icon_flag_china@2x.png");
            $(".navBar .zh").addClass('active').siblings().removeClass('active');
            console.log("come in cookie zh");
        }
        if (getCookie(name) == "en") {
            $("[data-localize]").localize("text", {
                pathPrefix: "lang",
                language: "en"
            });
            $(".language>img").attr('src',"images/icon_flag_eng@2x.png");
            $(".navBar .en").addClass('active').siblings().removeClass('active');
            console.log("come in cookie en");
        }
    }
});