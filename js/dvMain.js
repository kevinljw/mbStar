/**
 * Created by LJW.
 */
//var ss = "A";
var ab0 = ["", false];
var ab1 = ["", false];
var ab2 = ["", false];
var ab3 = ["", false];
var ab4 = ["", false];
var ab5 = ["", false];
var ab6 = ["", false];
var ab7 = ["", false];
var ab8 = ["", false];
var ab9 = ["", false];
var ab10 = ["", false];
var ab11 = ["", false];
var ab12 = ["", false];
var ab13 = ["", false];
var ab14 = ["", false];
var ab15 = ["", false];
var ab16 = ["", false];
var ab17 = ["", false];
var ab18 = ["", false];
var ab19 = ["", false];
var ab20 = ["", false];
var ab21 = ["", false];
var ab22 = ["", false];
var ab23 = ["", false];
var ab24 = ["", false];
var ab25 = ["", false];
var ab26 = ["", false];
var ab27 = ["", false];
var ab28 = ["", false];

var rList = [];

var ab = [ab0, ab1, ab2, ab3, ab4, ab5, ab6, ab7, ab8, ab9, ab10, ab11, ab12, ab13, ab14, ab15, ab16, ab17, ab18, ab19, ab20, ab21, ab22, ab23, ab24, ab25, ab26, ab27, ab28];

var ad1=false;
var cd1=false;
var cd2=false;
var cd3=false;

$(function () {
    init();
    datePick();
    evt();
    getRemains();
});

function init() {
    $('section').hide();
    $('#kv').show();
    $('#rule').show();
    $('#map').show();
    $('#footer').show();

}
var isDebugMode = false;
function getRemains(){
    $.ajax({
         url: (isDebugMode?'//localhost:3000':'//mbstarmonster.ml')+'/api/remains',
        type: "GET",
        dataType: "json",
        jsonpCallback: "result",
        success: result
    });
    function result(resJSON) {
        // console.log('-----------');
//        console.log(resJSON);
//        rList = resJSON;
        resJSON.forEach(function(d){
            rList[d.key]=d.value;
        });
//        console.log(rList);
        setSessionDropDown();
    }
}
function setSessionDropDown(){
    sp = $("#SessionPlace").find(":selected").val();
    if(rList[sp]){
//        console.log(sp, rList[sp]);
        rList[sp].forEach(function(num,idx){
//            console.log(num,idx);
            if(num<3 && num>=1){
                num = 3;
            }
            else if(num<0){
                num = 0;
            }
            $("#SessionTime>option:nth-child("+(idx+1)+")").text($("#SessionTime>option:nth-child("+(idx+1)+")").val()+" 剩餘"+num+"人");
        })
    }
//    
}
function writeResult() {


//    if (ss == "A") {
//        $('.Sessions').html("10:00-13:00");
//
//    }
//    else if (ss == "B") {
//
//        $('.Sessions').html("13:00-16:00");
//    }
//    else {
//        $('.Sessions').html("16:00-19:00");
//
//    }
    $('.SessionTime').html($("#SessionTime").find(":selected").val());
    $('.SessionPlace').html($("#SessionPlace").find(":selected").val());
    
    $('.A1Name').html(ab0[0]);
    $('.A1Sex').html(ab1[0]);
    $('.A1Phone').html(ab2[0]);
    $('.A1Email').html(ab3[0]);
    $('.A1ID').html(ab4[0]);
    $('.CarNum').html(ab5[0]);
    $('.A1Bday').html(ab6[0]);
    $('.A2Name').html(ab7[0]);
    $('.A2Sex').html(ab8[0]);
    $('.A2Phone').html(ab9[0]);
    $('.A2Email').html(ab10[0]);
    $('.A2ID').html(ab11[0]);
    $('.A2Bday').html(ab12[0]);
    $('.C1Name').html(ab13[0]);
    $('.C1Sex').html(ab14[0]);
    $('.C1ID').html(ab15[0]);
    $('.C1Bday').html(ab16[0]);
    $('.C2Name').html(ab17[0]);
    $('.C2Sex').html(ab18[0]);
    $('.C2ID').html(ab19[0]);
    $('.C2Bday').html(ab20[0]);
    $('.C3Name').html(ab21[0]);
    $('.C3Sex').html(ab22[0]);
    $('.C3ID').html(ab23[0]);
    $('.C3Bday').html(ab24[0]);
    $('.C4Name').html(ab25[0]);
    $('.C4Sex').html(ab26[0]);
    $('.C4ID').html(ab27[0]);
    $('.C4Bday').html(ab28[0]);
    
    //form val
    
    $('#_sessionPlace').val($("#SessionPlace").find(":selected").val());
    $('#_sessionTime').val($("#SessionTime").find(":selected").val());
    $('#_A1Name').val(ab0[0]);
    $('#_A1Sex').val(ab1[0]);
    $('#_A1Phone').val(ab2[0]);
    $('#_A1Email').val(ab3[0]);
    $('#_A1ID').val(ab4[0]);
    $('#_CarNum').val(ab5[0]);
    $('#_A1BdayY').val(ab6[0].split("/")[0]);
    $('#_A1BdayM').val(ab6[0].split("/")[1]);
    $('#_A1BdayD').val(ab6[0].split("/")[2]);
    
    $('#_A2Name').val(ab7[0]);
    $('#_A2Sex').val(ab8[0]);
    $('#_A2Phone').val(ab9[0]);
    $('#_A2Email').val(ab10[0]);
    $('#_A2ID').val(ab11[0]);
    $('#_A2BdayY').val(ab12[0].split("/")[0]);
    $('#_A2BdayM').val(ab12[0].split("/")[1]);
    $('#_A2BdayD').val(ab12[0].split("/")[2]);
    
    $('#_C1Name').val(ab13[0]);
    $('#_C2Name').val(ab17[0]);
    $('#_C3Name').val(ab21[0]);
    $('#_C4Name').val(ab25[0]);
    
    $('#_C1Sex').val(ab14[0]);
    $('#_C2Sex').val(ab18[0]);
    $('#_C3Sex').val(ab22[0]);
    $('#_C4Sex').val(ab26[0]);
    
    $('#_C1ID').val(ab15[0]);
    $('#_C2ID').val(ab19[0]);
    $('#_C3ID').val(ab23[0]);
    $('#_C4ID').val(ab27[0]);
    
    
    $('#_C1BdayY').val(ab16[0].split("/")[0]);
    $('#_C1BdayM').val(ab16[0].split("/")[1]);
    $('#_C1BdayD').val(ab16[0].split("/")[2]);
    
    $('#_C2BdayY').val(ab20[0].split("/")[0]);
    $('#_C2BdayM').val(ab20[0].split("/")[1]);
    $('#_C2BdayD').val(ab20[0].split("/")[2]);
    
    $('#_C3BdayY').val(ab24[0].split("/")[0]);
    $('#_C3BdayM').val(ab24[0].split("/")[1]);
    $('#_C3BdayD').val(ab24[0].split("/")[2]);
    
    $('#_C4BdayY').val(ab28[0].split("/")[0]);
    $('#_C4BdayM').val(ab28[0].split("/")[1]);
    $('#_C4BdayD').val(ab28[0].split("/")[2]);
    

    console.log("child"+cd1+cd2+cd3);
    $('.ad01').show();
    $('.cd01').show();
    $('.cd02').show();
    $('.cd03').show();

    if(ad1==false)
    {
        $('.ad01').hide();
    }
    else
    {
        $('.ad01').show();
    }

    if(cd1==false)
    {
        $('.cd01').hide();
    }
    else
    {
        $('.cd01').show();
    }
    if(cd2==false)
    {
        $('.cd02').hide();
    } else
    {
        $('.cd02').show();
    }
    if(cd3==false)
    {
        $('.cd03').hide();
    } else
    {
        $('.cd03').show();
    }

}
function isRemainingNum(){
    var ss2 = parseInt($("#SessionTime").find(":selected").text().split("剩餘")[1]);
    if(ss2<1){
        alert("名額已滿，請選擇其他時段");
        return false;
    }
    else{
        return true;
    }
    
//        console.log(ss2);
}
function evt() {
    $('.btn-back').on('click', function () {

        showIndex();
    });


    $('.btn-preview').on('click', function () {

        if (checkChild()) {
            $('#form2').hide();
            $('#result').show();
            writeResult()
            CallGaBtn('Preview');
        }

    });
    $('.btn-next').on('click', function () {

        if (checkAdult()) {
            $('#form1').hide();
            $('#form2').show();
            CallGaBtn('Next_1');
        }

    });
    $('.btn-submit').one('click', function () {
        
        if ($('#checkRule')[0].checked) {
//            console.log($("#benzForm").serializeArray());
//            sendInfo();
//            $('.btn-submit>img').attr("src","images/layout/btn_sendInfo_down.png");
//            $('.btn-submit').removeClass("btn-submit");
//            
            $.ajax({
                url: (isDebugMode?'//localhost:3000':'//mbstarmonster.ml')+'/api/newPost',
                type: "POST",
                data: $("#benzForm").serializeArray(),
                dataType: "json",
                jsonpCallback: "result",
                success: result
            });  
            
            function result(resJSON) {
//                console.log(resJSON);
                if(resJSON.nModified){
                    $("#benzForm").submit();
                }
                else{
                    alert("名額已滿，請選擇其他時段");
                }
                
            }
            
            CallGaBtn('Send');

        }
        else {
            alert("請勾選");
        }
    });
    $('.kv .btn-go').on('click', function () {
        CallGaBtn('Signup_1');
    });
    $('.nl0').on('click', function () {
        CallGaBtn('MBOfficial');
    });
    $('.nl1').on('click', function () {
        CallGaBtn('Contactus');
    });
    $('.btn-rule-up').on('click', function () {
        CallGaBtn('Moreinfo_1');
    });
    $('.btn-rule-bottom').on('click', function () {
        CallGaBtn('Moreinfo_2');
    });
    $('.btn-go-bottom').on('click', function () {
        CallGaBtn('Signup_2');
    });


    $('.btn-go').on('click', showAdult);

    $('#form2 .btn-prev').on('click', function () {
        $('#form1').show();
        $('#form2').hide();
    });
    $('#result .btn-prev').on('click', function () {
        $('#result').hide();
        $('#form2').show();
    });

    $("#SessionPlace").change(function () {
        setSessionDropDown();        
    });
    $("#SessionTime").change(function () {
        isRemainingNum();
        
    });
    $("#A1Name").change(function () {
        ab0[0] = this.value;
        ab0[1] = checkName(this);
        if (ab0[1] == true) {
            $("#A1Name").css("border-color", " #085e97");
        }
        else {
            $("#A1Name").css("border-color", "#f00");
        }
        // console.log(ab0);
    });

    $(".A1SexC").change(function () {
        ab1[0] = this.value;
        ab1[1] = true;
        if (ab1[1] == true) {
            $(".A1SexC").css("border-color", " #085e97");
        }
        else {
            $(".A1SexC").css("border-color", "#f00");
        }
    });

    $("#A1Phone").change(function () {

        ab2[0] = this.value;
        ab2[1] = checkPhone(this);

        if (ab2[1] == true) {
            $("#A1Phone").css("border-color", " #085e97");
        }
        else {
            $("#A1Phone").css("border-color", "#f00");
        }
    });

    $("#A1Email").change(function () {
        ab3[1] = checkEmail(this);
        ab3[0] = this.value;


        if (ab3[1] == true) {
            $("#A1Email").css("border-color", " #085e97");
        }
        else {
            $("#A1Email").css("border-color", "#f00");
        }
    });

    $("#A1ID").change(function () {
        ab4[1] = checkID(this);
        ab4[0] = this.value;


        if (ab4[1] == true) {
            $("#A1ID").css("border-color", " #085e97");
        }
        else {
            $("#A1ID").css("border-color", "#f00");
        }
    });

    $("#CarNum").change(function () {
        ab5[1] = checkCarNum(this);
        ab5[0] = this.value;


//        $.ajax({
//             url: '//www.mercedesgenuineparts.com.tw/api/starmonsterhuntcarnum.ashx',
//
//            data: {
//                CarNum: ab5[0],
//            },
//            type: "POST",
//            dataType: "json",
//            jsonpCallback: "result",
//            success: result
//        });

//        function result(responseText) {
//            // console.log('-----------');
//            console.log(responseText);
//            if (responseText.succ == "Y") {
//                $("#CarNum").css("border-color", " #085e97");
//            } else {
//                alert(responseText.Msg);
//                ab5[1] = false;
//                $("#CarNum").css("border-color", "#f00");
//            }
//
//        }


        if (ab5[1] == true) {
            $("#CarNum").css("border-color", " #085e97");
        }
        else {
            $("#CarNum").css("border-color", "#f00");
        }
    });

    $("#A1Bday").change(function () {
        ab6[1] = checkDate(this);
        ab6[0] = this.value;
        if (ab6[1] == true) {
            $("#A1Bday").css("border-color", " #085e97");
        }
        else {
            $("#A1Bday").css("border-color", "#f00");
        }

    });

    $("#A2Name").change(function () {
        ab7[1] = checkName(this);
        ab7[0] = this.value;
        if (ab7[1] == true) {
            $("#A2Name").css("border-color", " #085e97");
        }
        else {
            $("#A2Name").css("border-color", "#f00");
        }

    });

    $(".A2SexC").change(function () {
        ab8[0] = this.value;
        ab8[1] = true;
        if (ab8[1] == true) {
            $("#A2SexC").css("border-color", " #085e97");
        }
        else {
            $("#A2SexC").css("border-color", "#f00");
        }
    });

    $("#A2Phone").change(function () {
        ab9[1] = checkPhone(this);
        ab9[0] = this.value;
        if (ab9[1] == true) {
            $("#A2Phone").css("border-color", " #085e97");
        }
        else {
            $("#A2Phone").css("border-color", "#f00");
        }
    });

    $("#A2Email").change(function () {
        ab10[1] = checkEmail(this);
        ab10[0] = this.value;
        if (ab10[1] == true) {
            $("#A2Email").css("border-color", " #085e97");
        }
        else {
            $("#A2Email").css("border-color", "#f00");
        }
    });

    $("#A2ID").change(function () {
        ab11[1] = checkID(this);
        ab11[0] = this.value;
        if (ab11[1] == true) {
            $("#A2ID").css("border-color", " #085e97");
        }
        else {
            $("#A2ID").css("border-color", "#f00");
        }
    });

    $("#A2Bday").change(function () {
        ab12[1] = checkDate(this);
        ab12[0] = this.value;
        if (ab12[1] == true) {
            $("#A2Bday").css("border-color", " #085e97");
        }
        else {
            $("#A2Bday").css("border-color", "#f00");
        }
    });


    $("#C1Name").change(function () {
        ab13[0] = this.value;
        ab13[1] = checkName(this);
        if (ab13[1] == true) {
            $("#C1Name").css("border-color", " #085e97");
        }
        else {
            $("#C1Name").css("border-color", "#f00");
        }
    });

    $(".C1SexC").change(function () {
        ab14[0] = this.value;
        ab14[1] = true;
        if (ab14[1] == true) {
            $("#C1SexC").css("border-color", " #085e97");
        }
        else {
            $("#C1SexC").css("border-color", "#f00");
        }
    });

    $("#C1ID").change(function () {
        ab15[1] = checkID(this);
        ab15[0] = this.value;
        if (ab15[1] == true) {
            $("#C1ID").css("border-color", " #085e97");
        }
        else {
            $("#C1ID").css("border-color", "#f00");
        }
    });

    $("#C1Bday").change(function () {
        ab16[1] = checkDate(this);
        ab16[0] = this.value;
        if (ab16[1] == true) {
            $("#C1Bday").css("border-color", " #085e97");
        }
        else {
            $("#C1Bday").css("border-color", "#f00");
        }
    });

    $("#C2Name").change(function () {
        ab17[0] = this.value;
        ab17[1] = checkName(this);
        if (ab17[1] == true) {
            $("#C2Name").css("border-color", " #085e97");
        }
        else {
            $("#C2Name").css("border-color", "#f00");
        }
    });

    $(".C2SexC").change(function () {
        ab18[0] = this.value;
        ab18[1] = true;
        if (ab18[1] == true) {
            $("#C2SexC").css("border-color", " #085e97");
        }
        else {
            $("#C2SexC").css("border-color", "#f00");
        }
    });

    $("#C2ID").change(function () {
        ab19[1] = checkID(this);
        ab19[0] = this.value;
        if (ab19[1] == true) {
            $("#C2ID").css("border-color", " #085e97");
        }
        else {
            $("#C2ID").css("border-color", "#f00");
        }
    });

    $("#C2Bday").change(function () {
        ab20[1] = checkDate(this);
        ab20[0] = this.value;
        if (ab20[1] == true) {
            $("#C2Bday").css("border-color", " #085e97");
        }
        else {
            $("#C2Bday").css("border-color", "#f00");
        }
    });

    $("#C3Name").change(function () {
        ab21[0] = this.value;
        ab21[1] = checkName(this);
        if (ab21[1] == true) {
            $("#C3Name").css("border-color", " #085e97");
        }
        else {
            $("#C3Name").css("border-color", "#f00");
        }
    });

    $(".C3SexC").change(function () {
        ab22[0] = this.value;
        ab22[1] = true;
        if (ab22[1] == true) {
            $("#C3SexC").css("border-color", " #085e97");
        }
        else {
            $("#C3SexC").css("border-color", "#f00");
        }
    });

    $("#C3ID").change(function () {
        ab23[1] = checkID(this);
        ab23[0] = this.value;
        if (ab23[1] == true) {
            $("#C3ID").css("border-color", " #085e97");
        }
        else {
            $("#C3ID").css("border-color", "#f00");
        }
    });

    $("#C3Bday").change(function () {
        ab24[1] = checkDate(this);
        ab24[0] = this.value;
        if (ab24[1] == true) {
            $("#C3Bday").css("border-color", " #085e97");
        }
        else {
            $("#C3Bday").css("border-color", "#f00");
        }
    });

    $("#C4Name").change(function () {
        ab25[0] = this.value;
        ab25[1] = checkName(this);
        if (ab25[1] == true) {
            $("#C4Name").css("border-color", " #085e97");
        }
        else {
            $("#C4Name").css("border-color", "#f00");
        }
    });

    $(".C4SexC").change(function () {
        ab26[0] = this.value;
        ab26[1] = true;
        if (ab26[1] == true) {
            $("#C4SexC").css("border-color", " #085e97");
        }
        else {
            $("#C4SexC").css("border-color", "#f00");
        }
    });

    $("#C4ID").change(function () {
        ab27[1] = checkID(this);
        ab27[0] = this.value;
        if (ab27[1] == true) {
            $("#C4ID").css("border-color", " #085e97");
        }
        else {
            $("#C4ID").css("border-color", "#f00");
        }
    });

    $("#C4Bday").change(function () {
        ab28[1] = checkDate(this);
        ab28[0] = this.value;
        if (ab28[1] == true) {
            $("#C4Bday").css("border-color", " #085e97");
        }
        else {
            $("#C4Bday").css("border-color", "#f00");
        }
    });
}

// sendToserver
function sendInfo() {

//    $.ajax({
//        // url: '//www.mercedesgenuineparts.com.tw/api/starmonsterhuntcarnum.ashx',
//        url: '//www.mercedesgenuineparts.com.tw/api/starmonsterhuntnew.ashx',
//        data: {
//            Sessions: ss,
//            A1Name: ab0[0],
//            A1Sex: ab1[0],
//            A1Phone: ab2[0],
//            A1Email: ab3[0],
//            A1ID: ab4[0],
//            CarNum: ab5[0],
//            A1Bday: ab6[0],
//            A2Name: ab7[0],
//            A2Sex: ab8[0],
//            A2Phone: ab9[0],
//            A2Email: ab10[0],
//            A2ID: ab11[0],
//            A2Bday: ab12[0],
//            C1Name: ab13[0],
//            C1Sex: ab14[0],
//            C1ID: ab15[0],
//            C1Bday: ab16[0],
//            C2Name: ab17[0],
//            C2Sex: ab18[0],
//            C2ID: ab19[0],
//            C2Bday: ab20[0],
//            C3Name: ab21[0],
//            C3Sex: ab22[0],
//            C3ID: ab23[0],
//            C3Bday: ab24[0],
//            C4Name: ab25[0],
//            C4Sex: ab26[0],
//            C4ID: ab27[0],
//            C4Bday: ab28[0]
//        },
//        type: "POST",
//        dataType: "json",
//        jsonpCallback: "result",
//        success: result
//    });
  

    function result(responseText) {
        // console.log('-----------');
        console.log(responseText);
        if (responseText.succ == "Y") {
            // console.log("gj");
            showResult();
        } else {

            alert(responseText.Msg);
            // console.log("sth wrong");
        }

    }

}

function datePick() {

    // var endDate = new Date();

    $('#A1Bday,#A2Bday').datepicker({
        language: "zh-TW",
        format: "yyyy/mm/dd",
        orientation: "bottom auto",
        autoclose: true,
        todayHighlight: true,
        weekStart: 0,
        startDate: "1917-01-01",
        endDate: "1999-07-01"
    })
    ;$('#C1Bday,#C2Bday,#C3Bday,#C4Bday').datepicker({
        language: "zh-TW",
        format: "yyyy/mm/dd",
        orientation: "bottom auto",
        autoclose: true,
        todayHighlight: true,
        weekStart: 0,
        startDate: "2000-01-01",
        endDate: "2018-07-31"
    });
}

function scrollTo(id) {
    //console.log(id);
    var _top = $(id).offset().top - 100;
    $("html, body").delay(0).animate({scrollTop: _top}, 1000);
}
function showAdult() {

    $('section').hide();
    $('#kv').show();
    $('#form1').show();
    scrollTo('#form1');
}
function showResult() {
    $('#thank-you').show();
    $('#result').hide();
}
function showIndex() {
    $('section').hide();
    $('#kv').show();
    $('#rule').show();
    $('#map').show();
    $('#footer').show();

    ss = "A";
    ab0 = ["", false];
    ab1 = ["", false];
    ab2 = ["", false];
    ab3 = ["", false];
    ab4 = ["", false];
    ab5 = ["", false];
    ab6 = ["", false];
    ab7 = ["", false];
    ab8 = ["", false];
    ab9 = ["", false];
    ab10 = ["", false];
    ab11 = ["", false];
    ab12 = ["", false];
    ab13 = ["", false];
    ab14 = ["", false];
    ab15 = ["", false];
    ab16 = ["", false];
    ab17 = ["", false];
    ab18 = ["", false];
    ab19 = ["", false];
    ab20 = ["", false];
    ab21 = ["", false];
    ab22 = ["", false];
    ab23 = ["", false];
    ab24 = ["", false];
    ab25 = ["", false];
    ab26 = ["", false];
    ab27 = ["", false];
    ab28 = ["", false];

    location.reload();

}
