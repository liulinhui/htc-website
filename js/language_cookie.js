var name = "somoveLanguage";
function chgLang(value) {
    SetCookie(name, value);
    console.log("come in chgLang" + name + value);
    window.location.reload();
}
function SetCookie(name, value) {
    var Days = 30; //此 cookie 将被保存 30 天
    var exp = new Date(); //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString()+";path=/;";
}
function getCookie(name){  //取cookies函数
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return null
}
$(function() {
    //根据cookie选择语言
    if (getCookie(name)) {
        if (getCookie(name) === "zh") {
            $("[data-localize]").localize("text", {
                pathPrefix: "lang",
                language: "zh"
            });
            console.log("come in cookie zh");
        }else if (getCookie(name) === "en") {
            $("[data-localize]").localize("text", {
                pathPrefix: "lang",
                language: "en"
            });
            console.log("come in cookie en");
        }else if (getCookie(name) === "jp") {
            $("[data-localize]").localize("text", {
                pathPrefix: "lang",
                language: "jp"
            });
            console.log("come in cookie jp");
        }else {
            $("[data-localize]").localize("text", {
                pathPrefix: "lang",
                language: "en"
            });
            console.log("come in cookie en");
        }
    }else{
        // 当cookie里没有保存语言时，选择默认语言英语
        $("[data-localize]").localize("text", {
            pathPrefix: "lang",
            language: "en"
        });
        // $(".language>img").attr('src',"images/icon_flag_eng@2x.png");
        console.log("come in en");
    }
});