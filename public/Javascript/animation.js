var controller = new ScrollMagic.Controller();
tween = TweenMax.from(".text1",2,{x:400, ease:Back.easeOut.config(1.3)});
tween1 = TweenMax.from(".text2",2,{x:-400, ease:Back.easeOut.config(1.3)});
tween2 = TweenMax.from(".text3",2,{x:400, ease:Back.easeOut.config(1.3)});
var scene = new ScrollMagic.Scene({
    triggerElement: ".text1",
    triggerHook: 1,
    reverse:false
}).setTween(tween);
var scene1 = new ScrollMagic.Scene({
    triggerElement: ".text2",
    triggerHook: 1,
    reverse:false
}).setTween(tween1);
var scene2 = new ScrollMagic.Scene({
    triggerElement: ".text3",
    triggerHook: 1,
    reverse:false
}).setTween(tween2);

    controller.addScene([scene,scene1,scene2]);
