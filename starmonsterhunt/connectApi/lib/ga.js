(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'xxxxxx', 'auto');
//ga('send', 'pageview');


function CallGaBtn(arg_code) {
    ga('send', 'event', 'buttons', 'click', arg_code);
    //onsole.log(arg_code)
}

function CallGaPage(arg_code) {
    ga('send', 'pageview', arg_code);
}

