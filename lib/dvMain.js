/**
 * Created by jMBP on 13/07/2017.
 */
var stgW=0;
var stgH=0;
var scRate=1;
var menuBt=false;
var $getMenu=$(".menuList");
$(function () {
    init();
    evt();
});

window.onload = function () {
    TweenMax.to($('.loadingPage'), 0.3, {autoAlpha: 0});
    // console.log( "loading!" );
};


$(window).resize(window_resize);


function window_resize()
{
    //console.log( "resize!" );
    init();

}

function init()
{
    // console.log("setup everything");
    stgW = window.innerWidth;
    stgH = window.innerHeight;
    menuBt = false;
    //

    var $main=$('.bPic');
    $main.height = stgH-200;
    $main.width = stgW;

    
    // console.log("stgH:"+stgH);
    // console.log("mainH:"+$main.height);
    scRate = stgW/stgH;
    //if screen rate > 1
    if(scRate>1)
    {
        //橫式
    }
    else
    {
        //直式
    }

    TweenMax.to($getMenu, 0.3, {x: 0, ease: Power2.easeInOut});
    TweenMax.to($('.hMenuSmall div'), 0.3, {css: {backgroundColor: '#fff'}});

}
function evt()
{
    $('.hMenuSmall').on('click', function () {
        if (menuBt == false) {
            TweenMax.to($getMenu, 0.3, {x: -240, ease: Power2.easeInOut});
            TweenMax.to($('.hMenuSmall div'), 0.3, {css: {backgroundColor: '#ff0000'}});
            menuBt = true;
        }
        else {
            TweenMax.to($getMenu, 0.3, {x: 0, ease: Power2.easeInOut});
            TweenMax.to($('.hMenuSmall div'), 0.3, {css: {backgroundColor: '#fff'}});
            menuBt = false;
        }
    });
}