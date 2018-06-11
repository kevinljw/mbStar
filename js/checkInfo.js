/**
 * Created by LJW.
 */
function testing(target) {
    console.log(target.value);
}

function checkName(target) {

    var myName = target.value;
    for (var i = 0; i < myName.length; i++) {
        if (myName.charCodeAt(i) < 0x4E00 || myName.charCodeAt(i) > 0x9FA5) {
            // console.log("false");
            return false;
        }
        else {
            // console.log('true');
            return true;
        }
    }


}
function checkID(target) {

    var id = target.value;
    id = id.toUpperCase();
    // console.log('checkID:'+id);

    tab = "ABCDEFGHJKLMNPQRSTUVXYWZIO"
    A1 = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3);
    A2 = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5);
    Mx = new Array(9, 8, 7, 6, 5, 4, 3, 2, 1, 1);

    if (id.length != 10) {
        console.log('false');
        return false;
    }
    i = tab.indexOf(id.charAt(0));
    if (i == -1) {
        console.log('false');
        return false;
    }
    sum = A1[i] + A2[i] * 9;

    for (i = 1; i < 10; i++) {
        v = parseInt(id.charAt(i));
        if (isNaN(v)) {
            console.log('false');
            return false;
        }
        sum = sum + v * Mx[i];
    }
    if (sum % 10 != 0) {
        console.log('false');
        return false;
    }
    else {
        console.log('true');
        return true;
    }
}

function checkEmail(target) {

    var strEmail = target.value;
    console.log(strEmail);
    emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

    if (strEmail.search(emailRule) != -1) {
        console.log('true');
        return true;
    }
    else {
        console.log('false');
        return false;
    }
}

function checkCarNum(target) {

    var checkNum = target.value;
    var regExp = /^[\d|a-zA-Z]+$/;

    if (checkNum.length != 17) {
        console.log('false');
        return false;
    }
    else {
        if (regExp.test(checkNum)) {
            console.log('true');
            return true;
        }
        else {
            console.log('false');
            return false;
        }

    }
}

function checkPhone(target) {
    var myNum = target.value;
    var regExp = /^\d+$/;
    console.log(myNum);
    if (myNum.length != 10) {
        console.log('not phone');
        return false;
    }
    else {
        if (regExp.test(myNum)) {

            v = parseInt(myNum.charAt(0));
            w = parseInt(myNum.charAt(1));
            if (v == 0 && w == 9) {
                // console.log('true');
                return true;
            }
            else {
                // console.log('false');
                return false;
            }
        }
        else {
            // console.log('false');
            return false;
        }
    }
}

function checkDate(target) {
    var myNum = target.value;
    return true;
}


function checkAdult() {

    var checkBoolean = true;
    var checkC = 0;

    for (var j = 7; j < 13; j++) {
        if (ab[j][0] == "") {
            checkC++;
        }
    }
    if (checkC == 6) {
        for (var i = 0; i < 7; i++) {
            if (ab[i][1] == false) {
                checkBoolean = false;
                if (i == 0) {
                    $("#A1Name").css("border-color", "#f00");
                }
                else if (i == 1) {
                    $(".A1Sex").css("border-color", "#f00");
                }
                else if (i == 2) {
                    $("#A1Phone").css("border-color", "#f00");
                }
                else if (i == 3) {
                    $("#A1Email").css("border-color", "#f00");
                }
                else if (i == 4) {
                    $("#A1ID").css("border-color", "#f00");
                }
                else if (i == 5) {
                    $("#CarNum").css("border-color", "#f00");
                }
                else if (i == 6) {
                    $("#A1Bday").css("border-color", "#f00");
                }
            }
            else {

            }
        }
    }
    else if (checkC == 0) {
        ad1=true;
        for (var i = 0; i < 12; i++) {
            if (ab[i][1] == false) {
                checkBoolean = false;
                if (i == 0) {
                    $("#A1Name").css("border-color", "#f00");
                }
                else if (i == 1) {
                    $(".A1Sex").css("border-color", "#f00");
                }
                else if (i == 2) {
                    $("#A1Phone").css("border-color", "#f00");
                }
                else if (i == 3) {
                    $("#A1Email").css("border-color", "#f00");
                }
                else if (i == 4) {
                    $("#A1ID").css("border-color", "#f00");
                }
                else if (i == 5) {
                    $("#CarNum").css("border-color", "#f00");
                }
                else if (i == 6) {
                    $("#A1Bday").css("border-color", "#f00");
                }
                else if (i == 7) {
                    $("#A2Name").css("border-color", "#f00");
                    console.log("hello");
                }
                else if (i == 8) {
                    $(".A2Sex").css("border-color", "#f00");
                }
                else if (i == 9) {
                    $("#A2Phone").css("border-color", "#f00");
                }
                else if (i == 10) {
                    $("#A2Email").css("border-color", "#f00");
                }
                else if (i == 11) {
                    $("#A2ID").css("border-color", "#f00");
                }
                else if (i == 12) {
                    $("#A2Bday").css("border-color", "#f00");
                }


            }
            else {

            }
        }
    }
    else {
        checkBoolean = false;

        for (var i = 0; i < 13; i++) {
            if (ab[i][1] == false) {
                if (i == 0) {
                    $("#A1Name").css("border-color", "#f00");
                }
                else if (i == 1) {
                    $(".A1Sex").css("border-color", "#f00");
                }
                else if (i == 2) {
                    $("#A1Phone").css("border-color", "#f00");
                }
                else if (i == 3) {
                    $("#A1Email").css("border-color", "#f00");
                }
                else if (i == 4) {
                    $("#A1ID").css("border-color", "#f00");
                }
                else if (i == 5) {
                    $("#CarNum").css("border-color", "#f00");
                }
                else if (i == 6) {
                    $("#A1Bday").css("border-color", "#f00");
                }
                else if (i == 7) {
                    $("#A2Name").css("border-color", "#f00");
                    console.log("hello");
                }
                else if (i == 8) {
                    $(".A2Sex").css("border-color", "#f00");
                }
                else if (i == 9) {
                    $("#A2Phone").css("border-color", "#f00");
                }
                else if (i == 10) {
                    $("#A2Email").css("border-color", "#f00");
                }
                else if (i == 11) {
                    $("#A2ID").css("border-color", "#f00");
                }
                else if (i == 12) {
                    $("#A2Bday").css("border-color", "#f00");
                }

            }

        }
    }

    console.log(checkC);

    if (checkBoolean == false) {
        // console.log("stop here");
        alert("請完整填寫正確資訊");
         return true;
    }
    else {
        console.log("goNext");
        return true;
    }
}
function checkChild() {
    var checkBL = true;
    var checkC = 0;
    cd1=false;
    cd2=false;
    cd3=false;

    console.log("check children"+checkC);

    for (var i = 17; i < 29; i++) {
        if (ab[i][0] == "") {
            checkC++;
        }
    }
    console.log("check children0"+checkC);
    if (checkC == 12) {
        cd1=false;
        cd2=false;
        cd3=false;

        for (var i = 13; i < 17; i++) {
            if (ab[i][1] == false) {
                checkBL = false;
                if (i == 13) {
                    $("#C1Name").css("border-color", "#f00");
                }
                if (i == 14) {
                    $(".C1SexC").css("border-color", "#f00");
                }
                if (i == 15) {
                    $("#C1ID").css("border-color", "#f00");
                }
                if (i == 16) {
                    $("#C1Bday").css("border-color", "#f00");
                }


            }
        }
    }
    else if (checkC == 8) {
        cd1=true;
        cd2=false;
        cd3=false;

        for (var i = 13; i < 21; i++) {
            if (ab[i][1] == false) {
                checkBL = false;
                if (i == 13) {
                    $("#C1Name").css("border-color", "#f00");
                }
                if (i == 14) {
                    $(".C1SexC").css("border-color", "#f00");
                }
                if (i == 15) {
                    $("#C1ID").css("border-color", "#f00");
                }
                if (i == 16) {
                    $("#C1Bday").css("border-color", "#f00");
                }
                if (i == 17) {
                    $("#C2Name").css("border-color", "#f00");
                }
                if (i == 18) {
                    $(".C2SexC").css("border-color", "#f00");
                }
                if (i == 19) {
                    $("#C2ID").css("border-color", "#f00");
                }
                if (i == 20) {
                    $("#C2Bday").css("border-color", "#f00");
                }

            }
        }
    }
    else if (checkC == 4) {
        cd1=true;
        cd2=true;
        cd3=false;
        for (var i = 13; i < 25; i++) {
            if (ab[i][1] == false) {
                checkBL = false;
                if (i == 13) {
                    $("#C1Name").css("border-color", "#f00");
                }
                if (i == 14) {
                    $(".C1SexC").css("border-color", "#f00");
                }
                if (i == 15) {
                    $("#C1ID").css("border-color", "#f00");
                }
                if (i == 16) {
                    $("#C1Bday").css("border-color", "#f00");
                }
                if (i == 17) {
                    $("#C2Name").css("border-color", "#f00");
                }
                if (i == 18) {
                    $(".C2SexC").css("border-color", "#f00");
                }
                if (i == 19) {
                    $("#C2ID").css("border-color", "#f00");
                }
                if (i == 20) {
                    $("#C2Bday").css("border-color", "#f00");
                }
                if (i == 21) {
                    $("#C3Name").css("border-color", "#f00");
                }
                if (i == 22) {
                    $(".C3SexC").css("border-color", "#f00");
                }
                if (i == 23) {
                    $("#C3ID").css("border-color", "#f00");
                }
                if (i == 24) {
                    $("#C3Bday").css("border-color", "#f00");
                }


            }
        }
    }
    else if (checkC == 0) {
        cd1=true;
        cd2=true;
        cd3=true;
        for (var i = 13; i < 29; i++) {
            if (ab[i][1] == false) {
                checkBL = false;
                if (i == 13) {
                    $("#C1Name").css("border-color", "#f00");
                }
                if (i == 14) {
                    $(".C1SexC").css("border-color", "#f00");
                }
                if (i == 15) {
                    $("#C1ID").css("border-color", "#f00");
                }
                if (i == 16) {
                    $("#C1Bday").css("border-color", "#f00");
                }
                if (i == 17) {
                    $("#C2Name").css("border-color", "#f00");
                }
                if (i == 18) {
                    $(".C2SexC").css("border-color", "#f00");
                }
                if (i == 19) {
                    $("#C2ID").css("border-color", "#f00");
                }
                if (i == 20) {
                    $("#C2Bday").css("border-color", "#f00");
                }
                if (i == 21) {
                    $("#C3Name").css("border-color", "#f00");
                }
                if (i == 22) {
                    $(".C3SexC").css("border-color", "#f00");
                }
                if (i == 23) {
                    $("#C3ID").css("border-color", "#f00");
                }
                if (i == 24) {
                    $("#C3Bday").css("border-color", "#f00");
                }
                if (i == 25) {
                    $("#C4Name").css("border-color", "#f00");
                }
                if (i == 26) {
                    $(".C4SexC").css("border-color", "#f00");
                }
                if (i == 27) {
                    $("#C4ID").css("border-color", "#f00");
                }
                if (i == 28) {
                    $("#C4Bday").css("border-color", "#f00");
                }
            }
        }
    }
    else {
        checkBL = false;
        for (var i = 13; i < 29; i++) {
            if (ab[i][1] == false) {
                checkBL = false;
                if (i == 13) {
                    $("#C1Name").css("border-color", "#f00");
                }
                if (i == 14) {
                    $(".C1SexC").css("border-color", "#f00");
                }
                if (i == 15) {
                    $("#C1ID").css("border-color", "#f00");
                }
                if (i == 16) {
                    $("#C1Bday").css("border-color", "#f00");
                }
                if (i == 17) {
                    $("#C2Name").css("border-color", "#f00");
                }
                if (i == 18) {
                    $(".C2SexC").css("border-color", "#f00");
                }
                if (i == 19) {
                    $("#C2ID").css("border-color", "#f00");
                }
                if (i == 20) {
                    $("#C2Bday").css("border-color", "#f00");
                }
                if (i == 21) {
                    $("#C3Name").css("border-color", "#f00");
                }
                if (i == 22) {
                    $(".C3SexC").css("border-color", "#f00");
                }
                if (i == 23) {
                    $("#C3ID").css("border-color", "#f00");
                }
                if (i == 24) {
                    $("#C3Bday").css("border-color", "#f00");
                }
                if (i == 25) {
                    $("#C4Name").css("border-color", "#f00");
                }
                if (i == 26) {
                    $(".C4SexC").css("border-color", "#f00");
                }
                if (i == 27) {
                    $("#C4ID").css("border-color", "#f00");
                }
                if (i == 28) {
                    $("#C4Bday").css("border-color", "#f00");
                }
            }
        }
    }
    if (checkBL == false) {
        alert("請完整填寫正確資訊");
         // return true;
    }
    else {
        // console.log("goNext");
        return true;
    }
}