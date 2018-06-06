var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
var parameters = "";
try {
    var urlquery = location.href.split("?");
    parameters = urlquery[1];
    if (typeof (parameters) !== "undefined") {
        parameters = "?" + parameters;
    } else {
        parameters = "";
    }
} catch (e) {
}
if (isMobile.any()) {
    location.href = "mobile/index.html" + parameters;
}