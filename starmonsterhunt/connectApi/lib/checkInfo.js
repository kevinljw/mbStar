/**
 * Created by jMBP on 12/07/2017.
 */


function checkID(target) {
    var idNum = target.value;
    
    console.log(target.id);
    console.log('checkID:'+idNum);
    idNum = idNum.toUpperCase();
    console.log('checkID:'+idNum);
    $(".idN").value = id;
    tab = "ABCDEFGHJKLMNPQRSTUVXYWZIO"
    A1 = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3);
    A2 = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5);
    Mx = new Array(9, 8, 7, 6, 5, 4, 3, 2, 1, 1);

    if (id.length != 10)
    {  console.log('false');
        return false ;
    }
    i = tab.indexOf(id.charAt(0));
    if (i == -1)
    {  console.log('false');
        return false;
    }
    sum = A1[i] + A2[i] * 9;

    for (i = 1; i < 10; i++) {
        v = parseInt(id.charAt(i));
        if (isNaN(v))
        {
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
    if (checkNum.length != 17 ) {
        alert("wrong！");
        return false;
    }
    else
    {

    }


}

function checkPhone(target)
{
    var myNum = target.value;
    console.log(myNum);
}

function checkDate(target)
{
    var myNum = target.value;
    console.log(myNum);
}