/**
 * Created by
 */


$(function () {

    init();
});


function init(){


}



//scrollTo
function scrollTo(id){
    console.log(id);
    $("html, body").delay(0).animate({scrollTop: $(id).offset().top }, 1500);
}