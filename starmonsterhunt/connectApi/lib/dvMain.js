/**
 * Created by jMBP on 13/07/2017.
 */

var stgW = 0;
var stgH = 0;
var scRate = 1;
var menuBt = false;
var $getMenu = $(".menuList");
var a1N, a1S, a1P, a1E, a1I, a1C, a1B;
var a2N, a2S, a2P, a2E, a2I, a2B;
var c1N, c1S, c1P, c1E, c1I, c1C, c1B;

$(function () {
    init();
    evt();
});

window.onload = function () {
    TweenMax.to($('.loadingPage'), 0.3, {autoAlpha: 0});
    // console.log( "loading!" );
};


$(window).resize(window_resize);


function window_resize() {
    //console.log( "resize!" );
    init();

}

function init() {
    // console.log("setup everything");
    stgW = window.innerWidth;
    stgH = window.innerHeight;
    menuBt = false;
    //
    var $main = $('.main');
    $main.height = stgH;
    $main.width = stgW;
    // console.log("stgH:"+stgH);
    // console.log("mainH:"+$main.height);
    scRate = stgW / stgH;
    //if screen rate > 1
    if (scRate > 1) {
        //橫式
    }
    else {
        //直式
    }

    TweenMax.to($getMenu, 0.3, {x: 0, ease: Power2.easeInOut});
    TweenMax.to($('.hMenuSmall div'), 0.3, {css: {backgroundColor: '#fff'}});

}
function evt() {
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

    $('#SB').on('click', function () {
        sendInfo();
    })
}


function sendInfo() {

    // console.log("a1" + a1N);
    $.ajax({
        url: '//www.mercedesgenuineparts.com.tw/api/starmonsterhunt.ashx',
        data: {
            Sessions: a1N,
            A1Name: a1N,
            A1Sex: a1S,
            A1Phone: a1P,
            A1Email: a1E,
            A1ID: a1I,
            CarNum: a1C,
            A1Bday: a1B
            //
            // A2Name: (共同參加人姓名)
            // A2Sex: (共同參加人性別)
            // A2Phone: (共同參加人電話)
            // A2Email: (共同參加人Email)
            // A2ID: (共同參加人身分證字號)
            // A2Bday: (共同參加人生日)
            //
            // C1Name: (孩童1姓名)
            // C1Sex: (孩童1性別)
            // C1ID: (孩童1身分證字號)
            // C1Bday: (孩童1生日)
            //
            // C2Name: (孩童2姓名)
            // C2Sex: (孩童2性別)
            // C2ID: (孩童2身分證字號)
            // C2Bday: (孩童2生日)
            //
            // C3Name: (孩童3姓名)
            // C3Sex: (孩童3性別)
            // C3ID: (孩童3身分證字號)
            // C3Bday:(孩童3生日)
            //
            // C4Name: (孩童4姓名)
            // C4Sex: (孩童4性別)
            // C4ID: (孩童4身分證字號)
            // C4Bday: (孩童4生日)

        },
        type: "POST",
        dataType: "json",
        jsonpCallback: "result",
        success: result
    });

    function result(responseText) {
        // console.log('-----------');
        console.log(responseText);
        if (responseText.succ == "Y") {
            alert('GJ');
            console.log("gj");
        } else {
            alert(responseText.err);
            console.log("sth wrong");
        }

    }

}
