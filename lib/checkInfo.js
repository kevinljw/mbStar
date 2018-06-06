/**
 * Created by jMBP on 12/07/2017.
 */


function checkID() {
    var id = $(".idN").val();
    console.log('checkID:'+id);
    id = id.toUpperCase();
    console.log('checkID:'+id);
    $(".idN").value = id;
    tab = "ABCDEFGHJKLMNPQRSTUVXYWZIO"
    A1 = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3);
    A2 = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5);
    Mx = new Array(9, 8, 7, 6, 5, 4, 3, 2, 1, 1);

    if (id.length != 10) return false;
    i = tab.indexOf(id.charAt(0));
    if (i == -1) return false;
    sum = A1[i] + A2[i] * 9;

    for (i = 1; i < 10; i++) {
        v = parseInt(id.charAt(i));
        if (isNaN(v)) return false;
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


function checkEmail() {


    var strEmail = $(".mAdd").val();

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
function checkCarNum() {
    if (document.a.b.value.length > 18) {
        alert("wrong！");
    }
    document.a.b.focus();
    return false;
}
