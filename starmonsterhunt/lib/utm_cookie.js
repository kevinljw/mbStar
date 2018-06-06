/**
 *
 * @authors  SusanPH.Huang
 * @agancy  OgilvyOne
 * @Client    Airwaves
 * @date      2014-09-12
 * @version 1.0
 */

var  Util = {

	toGetParam:function(name, casesensitive) {
		name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
		var href = window.location.href;

		if (!casesensitive) name = name.toLowerCase();
		if (!casesensitive) href = href.toLowerCase();

		var regexS = "[\\?&]" + name + "=([^&#]*)";
		var regex = new RegExp(regexS);
		var results = regex.exec(href);

		if (results == null) {
			return "";
		} else {
			return results[1];
		}
	},

	toShowMsg:function(msg) {
		console.log(msg);
	},

	toTracking:function (type,code) {

		if(type=="PAGE") {

			ga('send', 'pageview', code);

		} else if(type=="BUTTON") {

			ga('send', 'event', 'button', 'click', code);
		}

		console.log(code);
	}
};

		

