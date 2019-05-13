var DEFAULT_HOST = '101.200.233.58:85';
var PM_WEBSERVICE_URL = 'http://101.200.233.58:85/flowwebservice/services/flowWebservice?wsdl';
var FUND_WEBSERVICE_URL = 'http://101.200.233.58:85/MobileOffice/';

//var DEFAULT_HOST = 'app.crbcint.com:89';
//var PM_WEBSERVICE_URL = 'http://pm2.crbcint.com:8091/flowwebservice/services/flowWebservice?wsdl';
//var FUND_WEBSERVICE_URL = 'http://app.crbcint.com:89/MobileOffice/';

function getLocalStoreageHost() {
	var host = window.localStorage.getItem(SET_HOST);
	if(isNullStr(host)) {
		host = DEFAULT_HOST;
	}
	return host;
}

function getHost() {
	var host = getLocalStoreageHost();
	return 'http://' + host + '/MobileOffice/';
}

var SET_HOST = 'SET_HOST';

var TIMEOUT = 30000;

var PAGE_SIZE = 20;
var MAX_PAGE_SIZE = 19860727;

// 下面是LocalStorage key
var TokenKey = "TokenKey";
var UserName = "UserName";
var LoginName = "LoginName";
var PwdCyp = "PwdCyp";
var EmpId = 'EmpId';
//部门名称2018-06-04 by LJT
var DEPNAME="DepName";

var SaveUserName = 'SaveUserName';
var SavePwd = 'SavePwd';

var CheckSavePwd = 'CheckSavePwd';
var CheckAutoLogin = 'CheckAutoLogin';

var FIR_APP_ID = '5cd14edcca87a80c74edfacc';
var FIR_API_TOKEN = 'c839f0ff4fcc621a9110569f173342d4';
var FIR_CHECK_URL = 'http://api.fir.im/apps/latest/' + FIR_APP_ID + '?api_token=' + FIR_API_TOKEN;

var FIR_LINK_Android = 'https://fir.im/watn';
var FIR_LINK_IOS = "https://fir.im/lp9x";

var FONT_SIZE = 'FONT_SIZE';

var HOME_ACTION_TYPE = 'HOME_ACTION_TYPE';
var HOME_ACTION_TAP = '单击';
var HOME_ACTION_DOUBLETAP = '双击';
var HOME_ACTION_LONGTAP = '长按';