/**
 * Created by joepm.hsu on 2017/7/14.
 */
$(function () {

    TweenMax.to($('.cloud0_stay'), 3, {repeatDelay: 57, repeat: -1, autoAlpha: 1});
    TweenMax.to($('.cloud0_stay'), 60, {repeat: -1, x: -1800, ease: Power0.easeNone});

    TweenMax.to($('.cloud1_stay'), 3, {repeatDelay: 27, repeat: -1, autoAlpha: 1});
    TweenMax.to($('.cloud1_stay'), 30, {repeat: -1, x: -1600, ease: Power0.easeNone});

    TweenMax.to($('.cloud0'), 60, {repeat: -1, x: -2944, ease: Power0.easeNone});
    TweenMax.to($('.cloud1'), 50, {repeat: -1, x: -2220, ease: Power0.easeNone});
    TweenMax.to($('.cloud2'), 45, {repeat: -1, x: -2620, ease: Power0.easeNone});
    TweenMax.to($('.cloud3'), 55, {repeat: -1, x: -2520, ease: Power0.easeNone});


    TweenMax.to($('.wave0'), 5, {yoyo: true, repeat: -1, x: 50, ease: Power2.easeInOut});
    TweenMax.to($('.wave1'), 6, {yoyo: true, repeat: -1, x: -50, ease: Power2.easeInOut});
    TweenMax.to($('.wave2'), 4, {yoyo: true, repeat: -1, x: 50, ease: Power2.easeInOut});
    TweenMax.to($('.wave3'), 5, {yoyo: true, repeat: -1, x: -50, ease: Power2.easeInOut});
    TweenMax.to($('.wave4'), 6, {yoyo: true, repeat: -1, x: 50, ease: Power2.easeInOut});

    //TweenMax.to($('.textPop'), 0.3, {yoyo: true, repeat: -1,/* rotation: -5, */scale: 1.05, ease: Power2.easeIn});
    TweenMax.to($('.cta'), 0.3, {yoyo: true, repeat: -1, /* rotation: -5, scale: 1.05,*/x: 10, ease: Power2.easeIn});
    TweenMax.to($('.monster'), 0.3, {repeatDelay: 0.8, yoyo: true, repeat: -1, /* rotation: -5, scale: 1.05,*/y: -3, ease: Power2.easeInOut});

});