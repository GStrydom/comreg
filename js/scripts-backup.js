simpleAJAXLibREGPMBDBN = {
	init: function () {
		this.fetchJSON('https://secure.onreg.com/onreg2/users/reports_public.php?id=3820&list=true&type=xml&reportid=2005&checksum=67c4f8fe5f359933f448f378bb9f2f40');
	},

	fetchJSON: function (url) {
		var root = 'https://query.yahooapis.com/v1/public/yql?q=';
		var yql = 'select * from xml where url="' + url + '"';
		var proxy_url = root + encodeURIComponent(yql) + '&format=json&diagnostics=false&callback=simpleAJAXLibREGPMBDBN.display';
		document.getElementsByTagName('body')[0].appendChild(this.jsTag(proxy_url));
	},

	jsTag: function (url) {
		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('src', url);
		return script;
	},

	display: function (results) {
		var regPMBCOUNT = 0;
		var regDBNCOUNT = 0;
		var regPMBDBNTOTAL = 0;

		repData = results.query.results.xml.reportdata;

		for (var key in repData) {
			if (repData.hasOwnProperty(key)) {
				for (var i=0; i<repData[key].length; i++) {
					if (repData[key][i].EntryLocation == "Durban") {
						regDBNCOUNT += Number(repData[key][i].RegistrationCount);
					} else if (repData[key][i].EntryLocation == "Pietermaritzburg") {
						regPMBCOUNT += Number(repData[key][i].RegistrationCount);
					}  else if (repData[key][i].EntryLocation == "Total") {
						regPMBDBNTOTAL += Number(repData[key][i].RegistrationCount);
					}
				}
			}
		}
		$('#durban-registered').html(regDBNCOUNT);
		$('#pmb-registered').html(regPMBCOUNT);
		$('#total-registered').html(regPMBDBNTOTAL);
	}
};


simpleAJAXLibRMF = {
	init: function () {
		this.fetchJSON('https://secure.onreg.com/onreg2/users/reports_public.php?id=3820&list=true&type=xml&reportid=2007&checksum=358936464c8c8e9672756e8a79804b6b');
	},

	fetchJSON: function (url) {
		var root = 'https://query.yahooapis.com/v1/public/yql?q=';
		var yql = 'select * from xml where url="' + url + '"';
		var proxy_url = root + encodeURIComponent(yql) + '&format=json&diagnostics=false&callback=simpleAJAXLibRMF.display';
		document.getElementsByTagName('body')[0].appendChild(this.jsTag(proxy_url));
	},

	jsTag: function (url) {
		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('src', url);
		return script;
	},

	display: function (results) {
		var regMaleCount = results.query.results.xml.reportdata.record[0].computed;
		var regFemaleCount = results.query.results.xml.reportdata.record[1].computed;
		var regMFTotalCount = results.query.results.xml.reportdata.record[2].computed;

		$('#regmalecount').html(regMaleCount);
		$('#regfemalecount').html(regFemaleCount);
		$('#regmftotalcount').html(regMFTotalCount);
	}
};

simpleAJAXLibINTROASA = {
	init: function () {
		this.fetchJSON('https://secure.onreg.com/onreg2/users/reports_public.php?id=3820&list=true&type=xml&reportid=2006&checksum=3526a1aeb30b86b85067d203908808df');
	},

	fetchJSON: function (url) {
		var root = 'https://query.yahooapis.com/v1/public/yql?q=';
		var yql = 'select * from xml where url="' + url + '"';
		var proxy_url = root + encodeURIComponent(yql) + '&format=json&diagnostics=false&callback=simpleAJAXLibINTROASA.display';
		document.getElementsByTagName('body')[0].appendChild(this.jsTag(proxy_url));
	},

	jsTag: function (url) {
		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('src', url);
		return script;
	},

	display: function (results) {
		var regSACount = results.query.results.xml.reportdata.record[0].computed;
		var regROACount = results.query.results.xml.reportdata.record[1].computed;
		var regINTCount = results.query.results.xml.reportdata.record[2].computed;

		$('#regintcount').html(regINTCount);
		$('#regsacount').html(regSACount);
		$('#regroacount').html(regROACount);

		// Work out the percentage...
		regINTCount = Number(regINTCount);
		regROACount = Number(regROACount);
		regSACount = Number(regSACount);

		var regINTROASATotalCount = regINTCount + regROACount + regSACount;

		$('#regintroasatotalcount').html(String(regINTROASATotalCount));
	}
};

simpleAJAXLibENTINTROASA = {
	init: function () {
		this.fetchJSON('https://secure.onreg.com/onreg2/users/reports_public.php?id=3820&list=true&type=xml&reportid=2009&checksum=b53bc2a9caeaac3acce849c12b4f9000');
	},

	fetchJSON: function (url) {
		var root = 'https://query.yahooapis.com/v1/public/yql?q=';
		var yql = 'select * from xml where url="' + url + '"';
		var proxy_url = root + encodeURIComponent(yql) + '&format=json&diagnostics=false&callback=simpleAJAXLibENTINTROASA.display';
		document.getElementsByTagName('body')[0].appendChild(this.jsTag(proxy_url));
	},

	jsTag: function (url) {
		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('src', url);
		return script;
	},

	display: function (results) {
		var entSACount = results.query.results.xml.reportdata.record[0].computed;
		var entROACount = results.query.results.xml.reportdata.record[1].computed;
		var entINTCount = results.query.results.xml.reportdata.record[2].computed;

		$('#entsacount').html(entSACount);
		$('#entroacount').html(entROACount);
		$('#entintcount').html(entINTCount);

		// Work out the percentage...
		entSACount = Number(entSACount);
		entROACount = Number(entROACount);
		entINTCount = Number(entINTCount);

		var entINTROASATotalCount = entINTCount + entROACount + entSACount;
		
		$('#entintroasatotalcount').html(String(entINTROASATotalCount));
	}
};

simpleAJAXLibENTRMF = {
	init: function () {
		this.fetchJSON('https://secure.onreg.com/onreg2/users/reports_public.php?id=3820&list=true&type=xml&reportid=2010&checksum=ebe1b57fb9a2f6f56e0919488dad9365');
	},

	fetchJSON: function (url) {
		var root = 'https://query.yahooapis.com/v1/public/yql?q=';
		var yql = 'select * from xml where url="' + url + '"';
		var proxy_url = root + encodeURIComponent(yql) + '&format=json&diagnostics=false&callback=simpleAJAXLibENTRMF.display';
		document.getElementsByTagName('body')[0].appendChild(this.jsTag(proxy_url));
	},

	jsTag: function (url) {
		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('src', url);
		return script;
	},

	display: function (results) {
		var entMaleCount = results.query.results.xml.reportdata.record[0].computed;
		var entFemaleCount = results.query.results.xml.reportdata.record[1].computed;
		var entMFTotalCount = results.query.results.xml.reportdata.record[2].computed;

		$('#entmalecount').html(entMaleCount);
		$('#entfemalecount').html(entFemaleCount);
		$('#entmftotalcount').html(entMFTotalCount);
	}
};

simpleAJAXLibLASTHOUR = {
	init: function () {
		this.fetchJSON('https://secure.onreg.com/onreg2/users/reports_public.php?id=3820&list=true&type=xml&reportid=2008&checksum=5f1f1e59adc2b6aaa3107625e7fee16c');
	},

	fetchJSON: function (url) {
		var root = 'https://query.yahooapis.com/v1/public/yql?q=';
		var yql = 'select * from xml where url="' + url + '"';
		var proxy_url = root + encodeURIComponent(yql) + '&format=json&diagnostics=false&callback=simpleAJAXLibLASTHOUR.display';
		document.getElementsByTagName('body')[0].appendChild(this.jsTag(proxy_url));
	},

	jsTag: function (url) {
		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('src', url);
		return script;
	},

	display: function (results) {

	}
};

simpleAJAXLibGREENNUMBER = {
	init: function () {
		this.fetchJSON('https://secure.onreg.com/onreg2/users/reports_public.php?id=3820&list=true&type=xml&reportid=2011&checksum=3c767c87eb3fda0e5dce736ec4e765c4');
	},

	fetchJSON: function (url) {
		var root = 'https://query.yahooapis.com/v1/public/yql?q=';
		var yql = 'select * from xml where url="' + url + '"';
		var proxy_url = root + encodeURIComponent(yql) + '&format=json&diagnostics=false&callback=simpleAJAXLibGREENNUMBER.display';
		document.getElementsByTagName('body')[0].appendChild(this.jsTag(proxy_url));
	},

	jsTag: function (url) {
		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('src', url);
		return script;
	},

	display: function (results) {
		var greenNumber = 0;
		var novice = 0;
		var other = 0;
		var greenTotal = 0;

		repData = results.query.results.xml.reportdata;

		for (var key in repData) {
			if (repData.hasOwnProperty(key)) {
				for (var i=0; i<repData[key].length; i++) {
					if (repData[key][i].Finishes == "Green Number") {
						greenNumber += Number(repData[key][i].computed);
					} else if (repData[key][i].Finishes == "Novice") {
						novice += Number(repData[key][i].computed);
					}  else if (repData[key][i].Finishes == "Other") {
						other += Number(repData[key][i].computed);
					} else if (repData[key][i].Finishes == "Total") {
						greenTotal += Number(repData[key][i].computed);
					}
				}
			}
		}
		$('#entgreennumber').html(greenNumber);
		$('#entnovice').html(novice);
		$('#entother').html(other);
		$('#entgreennumbertotal').html(greenTotal);
	}
};


function getTheDate() {
    var month, date, day, hour, min;
    var raw_date = new Date();
    date = raw_date.getDate();
    date = String(date);
    if (date.length == 1) {
        date = "0" + date;
    }
    var r_month = raw_date.getMonth();
    if (r_month == 0) {
        month = 'JAN';
    } else if (r_month == 1) {
        month = 'FEB';
    } else if (r_month == 2) {
        month = 'MAR';
    } else if (r_month == 3) {
        month = 'APR';
    } else if (r_month == 4) {
        month = 'MAY';
    } else if (r_month == 5) {
        month = 'JUN';
    } else if (r_month == 6) {
        month = 'JUL';
    } else if (r_month == 7) {
        month = 'AUG';
    } else if (r_month == 8) {
        month = 'SEP';
    } else if (r_month == 9) {
        month = 'OCT';
    } else if (r_month == 10) {
        month = 'NOV';
    } else if (r_month == 11) {
        month = 'DEC';
    }
    hour = raw_date.getHours();
    hour = String(hour);
    if(hour.length == 1) {
        hour = "0" + hour;
    }
    min = raw_date.getMinutes();
    min = String(min);
    if(min.length == 1) {
        min = "0" + min;
    }
    var totDate = date + " " + month + " "+ hour + ":" + min;
    $('.dateSec').html(totDate);
}

simpleAJAXLib = {
    init: function () {
        this.fetchJSON('https://secure.onreg.com/onreg2/users/reports_public.php?id=3820&list=true&type=xml&reportid=2012&checksum=4e139233ed0b390957f85ccc7519d5e9');
    },

    fetchJSON: function (url) {
        var root = 'https://query.yahooapis.com/v1/public/yql?q=';
        var yql = 'select * from xml where url="' + url + '"';
        var proxy_url = root + encodeURIComponent(yql) + '&format=json&diagnostics=false&callback=simpleAJAXLib.display';
        document.getElementsByTagName('body')[0].appendChild(this.jsTag(proxy_url));
    },

    jsTag: function (url) {
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', url);
        return script;
    },

    display: function (results) {

        // The total entered amount.
        var entTOTAL = results.query.results.xml.reportdata.record[16].RegistrationCount;

        // REGISTRATION DBN PMB
        var regDBN = results.query.results.xml.reportdata.record[0].RegistrationCount;
        var regPMB = results.query.results.xml.reportdata.record[1].RegistrationCount;
        var regDBNPMBTOTAL = results.query.results.xml.reportdata.record[2].RegistrationCount

        $('#durban-registered').html(regDBN);
        $('#pmb-registered').html(regPMB);
        $('#total-registered').html(regDBNPMBTOTAL);

        var regDBNPercent = (Number(regDBN) / Number(entTOTAL)) * 100;
        var regDBNPercent = "(" + String(regDBNPercent) + "%)";
        
        var regPMBPercent = (Number(regPMB) / Number(entTOTAL)) * 100;
        var regPMBPercent = "(" + String(regPMBPercent) + "%)";

        var regDBNPMBTotalPercent = (Number(regDBNPMBTotalPercent) / Number(entTOTAL)) * 100;
        var regDBNPMBTotalPercent = "(" + String(regDBNPMBTotalPercent) + "%)";

        $('#regdbnpercent').html(regDBNPercent);
        $('#regpmbpercent').html(regPMBPercent);
        $('#regdbnpmbtotalpercent').html(regDBNPMBTotalPercent);
    }
};

/*
if(event.item.index == 0) {
    simpleAJAXLibREGPMBDBN.init();
} else if (event.item.index == 1) {
    simpleAJAXLibLASTHOUR.init();
} else if (event.item.index == 2) {
    simpleAJAXLibINTROASA.init();
} else if (event.item.index == 3) {
    simpleAJAXLibRMF.init();
} else if (event.item.index == 4) {
    simpleAJAXLibENTINTROASA.init();
} else if (event.item.index == 5) {
    simpleAJAXLibENTRMF.init();
} else if (event.item.index == 6) {
    simpleAJAXLibGREENNUMBER.init();
}
*/

/*

// REG LAST HOUR
var regDBNHOUR = results.query.results.xml.reportdata.record[7].RegistrationCount;
var regPMBHOUR = results.query.results.xml.reportdata.record[8].RegistrationCount;
var regDBNPMBHOUR = results.query.results.xml.reportdata.record[9].RegistrationCount;

$('#regdbnhour').html(regDBNHour);
$('#regpmbhour').html(regPMBHour);
$('#regdbnpmbhour').html(regDBNPMBHOUR);

var regDBNHOURPercent = (Number(regDBNHOUR) / Number(entTOTAL)) * 100;
regDBNHOURPercent = "(" + String(regDBNHOURPercent) + "%)";

var regPMBHOURPercent = (Number(regPMBHour) / Number(entTOTAL)) * 100;
regPMBHOURPercent = "(" + String(regPMBHOURPercent) + "%)";

var regDBNPMBHOURPercent = (Number(regDBNPMBHOUR) / Number(entTOTAL)) * 100;
regDBNPMBHOURPercent = "(" + String(regDBNPMBHOURPercent) + "%)";

$('#regdbnhourpercent').html(regDBNHOURPercent);
$('#regpmbhourpercent').html(regPMBHOURPercent);
$('#regdbnpmbhourpercent').html(regDBNPMBHOURPercent);


//  REGISTRATION SA ROA INT
var regSA = results.query.results.xml.reportdata.record[3].RegistrationCount;
var regROA = results.query.results.xml.reportdata.record[4].RegistrationCount;
var regINT = results.query.results.xml.reportdata.record[5].RegistrationCount;
var regSAROAINTTOTAL = results.query.results.xml.reportdata.record[6].RegistrationCount;

$('#regsacount').html(regSA);
$('#regroacount').html(regROA);
$('#regintcount').html(regINT);
$('#regsaroainttotalcount').html(regINT);

var regSAPercent = (Number(regSA) / Number(entTOTAL)) * 100;
regSAPercent = "(" + String(regSAPercent) + "%)";

var regROAPercent = (Number(regROA) / Number(entTOTAL)) * 100;
regROAPercent = "(" + String(regROAPercent) + "%)";

var regINTPercent = (Number(regINT) / Number(entTOTAL)) * 100;
regINTPercent = "(" + String(regINTPercent) + "%)";

var regSAROAINTTOALPercent = (Number(regSAROAINTTOTAL) / Number(entTOTAL)) * 100;
regSAROAINTTOALPercent = "(" + String(regSAROAINTTOALPercent) + "%)";

$('#regsapercent').html(regSAPercent);
$('#regroapercent').html(regROAPercent);
$('#regintpercent').html(regINTPercent);
$('#regsaroainttotalpercent').html(regSAROAINTTOALPercent);


// REG MALE FEMALE
var regMALE = results.query.results.xml.reportdata.record[10].RegistrationCount;
var regFEMALE = results.query.results.xml.reportdata.record[11].RegistrationCount;
var regMALEFEMALETOTAL = results.query.results.xml.reportdata.record[12].RegistrationCount;

$('#regmalecount').html(regMALE);
$('#regfemalecount').html(regFEMALE);
$('#regmftotalcount').html(regMALEFEMALETOTAL);

var regMALEPercent = (Number(regMALE) / Number(entTOTAL)) * 100;
regMALEPercent = "(" + String(regMALEPercent) + "%)";

var regFEMALEPercent = (Number(regFEMALE) / Number(entTOTAL)) * 100;
regFEMALEPercent = "(" + String(regFEMALEPercent) + "%)";

var regMFTOTALPercent = (Number(regMALEFEMALETOTAL) / Number(entTOTAL)) * 100;
regMFTOTALPercent = "(" + String(regMFTOTALPercent) + "%)";

$('#regmalepercent').html(regMALEPercent);
$('#regfemalepercent').html(regFEMALEPercent);
$('#regmftotalpercent').html(regMFTOTALPercent);


// ENTERED SA ROA INT
var entSA = results.query.results.xml.reportdata.record[13].RegistrationCount;
var entROA = results.query.results.xml.reportdata.record[14].RegistrationCount;
var entINT = results.query.results.xml.reportdata.record[15].RegistrationCount;

$('#entsacount').html(entSA);
$('#entroacount').html(entROA);
$('#entintcount').html(entINT);
$('#entsaroainttotal').html(entTOTAL);

var entSAPercent = (Number(entSA) / Number(entTOTAL)) * 100;
entSAPercent = "(" + String(entSAPercent) + "%)";

var entROAPercent = (Number(entROA) / Number(entTOTAL)) * 100;
entROAPercent = "(" + String(entROAPercent) + "%)";

var entINTPercent = (Number(entINT) / Number(entTOTAL)) * 100;
entINTPercent = "(" + String(entINTPercent) + "%)";

var entSAROAINTTOTALPercent = (Number(entTOTAL) / Number(entTOTAL)) * 100;
entSAROAINTTOTALPercent = "(" + String(entSAROAINTTOTALPercent) + "%)";

$('#entsapercent').html(entSAPercent);
$('#entroapercent').html(entROAPercent);
$('#entintpercent').html(entINTPercent);
$('#entsaroainttotalpercent').html(entSAROAINTTOTALPercent);


// ENTERED MALE FEMALE
var entMALE = results.query.results.xml.reportdata.record[17].RegistrationCount;
var entFEMALE = results.query.results.xml.reportdata.record[18].RegistrationCount;
var entMFTOTAL = results.query.results.xml.reportdata.record[19].RegistrationCount;

$('#entmalecount').html(entMALE);
$('#entfemalecount').html(entFEMALE);
$('#entmftotalcount').html(entMFTOTAL);

var entMALEPercent = (Number(entMALE) / Number(entTOTAL)) * 100;
entMALEPercent = "(" + String(entMALEPercent) + "%)";

var entFEMALEPERCENT = (Number(entFEMALE) / Number(entTOTAL)) * 100;
entFEMALEPercent = "(" + String(entFEMALEPercent) + "%)";

var entMFTOTALPercent = (Number(entMFTOTAL) / Number(entTOTAL)) * 100;
entMFTOTALPercent = "(" + String(entMFTOTALPercent) + "%)";

$('#entmalepercent').html(entMALEPercent);
$('#entfemalepercent').html(entFEMALEPercent);
$('#entmftotalpercent').html(entMFTOTALPercent);

*/

/* // REGISTRATION DBN PMB
			        var regDBN = jsonObj.xml.reportdata.record[0].RegistrationCount;
			        var regPMB = jsonObj.xml.reportdata.record[1].RegistrationCount;
			        var regDBNPMBTOTAL = jsonObj.xml.reportdata.record[2].RegistrationCount

			        $('#durban-registered').html(regDBN);
			        $('#pmb-registered').html(regPMB);
			        $('#total-registered').html(regDBNPMBTOTAL);

			        var regDBNPercent = ((Number(regDBN) / Number(entTOTAL)) * 100).toFixed(0);
			        var regDBNPercent = "(" + String(regDBNPercent) + "%)";
			        
			        var regPMBPercent = ((Number(regPMB) / Number(entTOTAL)) * 100).toFixed(0);
			        var regPMBPercent = "(" + String(regPMBPercent) + "%)";

			        var regDBNPMBTotalPercent = ((Number(regDBNPMBTOTAL) / Number(entTOTAL)) * 100).toFixed(0);
			        var regDBNPMBTotalPercent = "(" + String(regDBNPMBTotalPercent) + "%)";

			        $('#regdbnpercent').html(regDBNPercent);
			        $('#regpmbpercent').html(regPMBPercent);
			        $('#regdbnpmbtotalpercent').html(regDBNPMBTotalPercent);


			        // REG LAST HOUR
					var regDBNHOUR = jsonObj.xml.reportdata.record[10].RegistrationCount;
					var regPMBHOUR = jsonObj.xml.reportdata.record[11].RegistrationCount;
					var regDBNPMBHOUR = jsonObj.xml.reportdata.record[12].RegistrationCount;

					/*$('#regdbnhour').html(regDBNHOUR);
					$('#regpmbhour').html(regPMBHOUR);
					$('#regdbnpmbhour').html(regDBNPMBHOUR);

					var regDBNHOURPercent = ((Number(regDBNHOUR) / Number(entTOTAL)) * 100).toFixed(0);
					regDBNHOURPercent = "(" + String(regDBNHOURPercent) + "%)";

					var regPMBHOURPercent = ((Number(regPMBHOUR) / Number(entTOTAL)) * 100).toFixed(0);
					regPMBHOURPercent = "(" + String(regPMBHOURPercent) + "%)";

					var regDBNPMBHOURPercent = ((Number(regDBNPMBHOUR) / Number(entTOTAL)) * 100).toFixed(0);
					regDBNPMBHOURPercent = "(" + String(regDBNPMBHOURPercent) + "%)";

					$('#regdbnhourpercent').html(regDBNHOURPercent);
					$('#regpmbhourpercent').html(regPMBHOURPercent);
					$('#regdbnpmbhourpercent').html(regDBNPMBHOURPercent);

					//  REGISTRATION SA ROA INT
					var regSA = jsonObj.xml.reportdata.record[3].RegistrationCount;
					var regROA = jsonObj.xml.reportdata.record[4].RegistrationCount;
					var regINT = jsonObj.xml.reportdata.record[5].RegistrationCount;
					var regSAROAINTTOTAL = jsonObj.xml.reportdata.record[6].RegistrationCount;

					$('#regsacount').html(regSA);
					$('#regroacount').html(regROA);
					$('#regintcount').html(regINT);
					$('#regsaroainttotalcount').html(regINT);

					var regSAPercent = ((Number(regSA) / Number(entTOTAL)) * 100).toFixed(0);
					regSAPercent = "(" + String(regSAPercent) + "%)";

					var regROAPercent = ((Number(regROA) / Number(entTOTAL)) * 100).toFixed(0);
					regROAPercent = "(" + String(regROAPercent) + "%)";

					var regINTPercent = ((Number(regINT) / Number(entTOTAL)) * 100).toFixed(0);
					regINTPercent = "(" + String(regINTPercent) + "%)";

					var regSAROAINTTOALPercent = ((Number(regSAROAINTTOTAL) / Number(entTOTAL)) * 100).toFixed(0);
					regSAROAINTTOALPercent = "(" + String(regSAROAINTTOALPercent) + "%)";

					$('#regsapercent').html(regSAPercent);
					$('#regroapercent').html(regROAPercent);
					$('#regintpercent').html(regINTPercent);
					$('#regsaroainttotalpercent').html(regSAROAINTTOALPercent);

					// REG MALE FEMALE
					var regMALE = jsonObj.xml.reportdata.record[7].RegistrationCount;
					var regFEMALE = jsonObj.xml.reportdata.record[8].RegistrationCount;
					var regMALEFEMALETOTAL = jsonObj.xml.reportdata.record[9].RegistrationCount;

					$('#regmalecount').html(regMALE);
					$('#regfemalecount').html(regFEMALE);
					$('#regmftotalcount').html(regMALEFEMALETOTAL);

					var regMALEPercent = ((Number(regMALE) / Number(entTOTAL)) * 100).toFixed(0);
					regMALEPercent = "(" + String(regMALEPercent) + "%)";

					var regFEMALEPercent = ((Number(regFEMALE) / Number(entTOTAL)) * 100).toFixed(0);
					regFEMALEPercent = "(" + String(regFEMALEPercent) + "%)";

					var regMFTOTALPercent = ((Number(regMALEFEMALETOTAL) / Number(entTOTAL)) * 100).toFixed(0);
					regMFTOTALPercent = "(" + String(regMFTOTALPercent) + "%)";

					$('#regmalepercent').html(regMALEPercent);
					$('#regfemalepercent').html(regFEMALEPercent);
					$('#regmftotalpercent').html(regMFTOTALPercent);

					// ENTERED SA ROA INT
					var entSA = jsonObj.xml.reportdata.record[13].RegistrationCount;
					var entROA = jsonObj.xml.reportdata.record[14].RegistrationCount;
					var entINT = jsonObj.xml.reportdata.record[15].RegistrationCount;

					$('#entsacount').html(entSA);
					$('#entroacount').html(entROA);
					$('#entintcount').html(entINT);
					$('#entsaroainttotal').html(entTOTAL);

					var entSAPercent = ((Number(entSA) / Number(entTOTAL)) * 100).toFixed(0);
					entSAPercent = "(" + String(entSAPercent) + "%)";

					var entROAPercent = ((Number(entROA) / Number(entTOTAL)) * 100).toFixed(0);
					entROAPercent = "(" + String(entROAPercent) + "%)";

					var entINTPercent = ((Number(entINT) / Number(entTOTAL)) * 100).toFixed(0);
					entINTPercent = "(" + String(entINTPercent) + "%)";

					var entSAROAINTTOTALPercent = ((Number(entTOTAL) / Number(entTOTAL)) * 100).toFixed(0);
					entSAROAINTTOTALPercent = "(" + String(entSAROAINTTOTALPercent) + "%)";

					$('#entsapercent').html(entSAPercent);
					$('#entroapercent').html(entROAPercent);
					$('#entintpercent').html(entINTPercent);
					$('#entsaroainttotalpercent').html(entSAROAINTTOTALPercent);

					// ENTERED MALE FEMALE
					var entMALE = jsonObj.xml.reportdata.record[17].RegistrationCount;
					var entFEMALE = jsonObj.xml.reportdata.record[18].RegistrationCount;
					var entMFTOTAL = jsonObj.xml.reportdata.record[19].RegistrationCount;

					$('#entmalecount').html(entMALE);
					$('#entfemalecount').html(entFEMALE);
					$('#entmftotalcount').html(entMFTOTAL);

					var entMALEPercent = ((Number(entMALE) / Number(entTOTAL)) * 100).toFixed(0);
					entMALEPercent = "(" + String(entMALEPercent) + "%)";

					var entFEMALEPercent = ((Number(entFEMALE) / Number(entTOTAL)) * 100).toFixed(0);
					entFEMALEPercent = "(" + String(entFEMALEPercent) + "%)";

					var entMFTOTALPercent = ((Number(entMFTOTAL) / Number(entTOTAL)) * 100).toFixed(0);
					entMFTOTALPercent = "(" + String(entMFTOTALPercent) + "%)";

					$('#entmalepercent').html(entMALEPercent);
					$('#entfemalepercent').html(entFEMALEPercent);
					$('#entmftotalpercent').html(entMFTOTALPercent);

					// ENTERED GREEN NUMBER NOVICE OTHER
					var entGREEN = jsonObj.xml.reportdata.record[20].RegistrationCount;
					var entNOVICE = jsonObj.xml.reportdata.record[21].RegistrationCount;
					var entOTHER = jsonObj.xml.reportdata.record[22].RegistrationCount;
					var entGREENNOVICETOTAL = jsonObj.xml.reportdata.record[23].RegistrationCount;

					$('#entgreennumber').html(entGREEN);
					$('#entnovice').html(entNOVICE);
					$('#entother').html(entOTHER);
					$('#entgreennumbertotal').html(entGREENNOVICETOTAL);

					var entGREENPercent = ((Number(entGREEN) / Number(entTOTAL)) * 100).toFixed(0);
					entGREENPercent = "(" + String(entGREENPercent) + "%)";

					var entNOVICEPercent = ((Number(entNOVICE) / Number(entTOTAL)) * 100).toFixed(0);
					entNOVICEPercent = "(" + String(entNOVICEPercent) + "%)";

					var entOTHERPercent = ((Number(entOTHER) / Number(entTOTAL)) * 100).toFixed(0);
					entOTHERPercent = "(" + String(entOTHERPercent) + "%)";

					var entGREENTOTALPercent = ((Number(entGREENNOVICETOTAL) / Number(entTOTAL)) * 100).toFixed(0);
					entGREENTOTALPercent = "(" + String(entGREENTOTALPercent) + "%)";

					$('#entgreenpercent').html(entGREENPercent);
					$('#entnovicepercent').html(entNOVICEPercent);
					$('#entotherpercent').html(entOTHERPercent);
					$('#entgreentotalpercent').html(entGREENTOTALPercent);
					*/