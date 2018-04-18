function rendAnimate(index) {
    for (var i=1;i<7;i++){
        if(index==i){
            var animData = {
                container: document.getElementById('bodymovin'+index),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: '../bodymovin/icon'+index+'.json'

            };
            var anim = bodymovin.loadAnimation(animData);
            anim.setDirection(0);
            anim.play();
        }else{
            var animData = {
                container: document.getElementById('bodymovin'+i),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: '../bodymovin/icon'+i+'.json'

            };
            var anim = bodymovin.loadAnimation(animData);
            var that = $("#bodymovin"+i);
            (function(anim) {
                that.mouseover(function() {
                    anim.setDirection(0);
                    anim.play();
                });
                that.mouseleave(function(){
                    anim.goToAndStop(0, true);
                });
                that.click(function(){
                    anim.goToAndStop(15, true);
                });
            })(anim);
        }
    };
}
