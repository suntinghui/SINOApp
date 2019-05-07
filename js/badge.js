function requestBadge() {
	totalBadgeNum = 0;

	requestOtherBadge(); // 其他
	requestPMBadge(); // 项目管理
	requestQHBadge(); // 企划管理
	requestFundBadge(); // 资金管理
	requestExBadge(); // 专家服务和方案审批
	requestFinanceBadge(); // 财务中心
}

function requestOtherBadge() {
	console.log('刷新角标...');
	var url = getHost() + "HomeTip.ashx?Commond=GetHandCountTip&tokenKey=" + window.localStorage.getItem(TokenKey);
	mui.ajax(url, {
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		timeout: TIMEOUT, //超时时间设置为10秒；
		headers: {
			'Content-Type': 'application/json'
		},
		success: function(data) {
			console.log("Badge：" + JSON.stringify(data));

			refreshBadge(data);
		},
		error: function(xhr, type, errorThrown) {
			hideProgressDialog();
			console.log(getHttpErrorDesp(type));
		}
	});
}

function requestPMBadge() {
	console.log('刷新项目管理角标...');

	var paramDic = {
		//'employeeid': window.localStorage.getItem(EmpId)
		'arg0': window.localStorage.getItem(EmpId)
	};

	var data = getWebservicesData('getFlowNum', paramDic);

	mui.ajax(PM_WEBSERVICE_URL, {
		data: data,
		dataType: 'xml', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		timeout: TIMEOUT, //超时时间设置为10秒；
		headers: {
			'Content-Type': 'text/xml'
		},
		success: function(data) {
			refreshPMBadge(data);
		},
		error: function(xhr, type, errorThrown) {
			hideProgressDialog();
			//异常处理；
			console.log(type);
		}
	});
}

function requestQHBadge() {
	console.log('刷新企划管理角标...');

	var paramDic = {
		//'employeeid': window.localStorage.getItem(EmpId)
		'arg0': window.localStorage.getItem(EmpId)
	};

	var data = getWebservicesData('getFlowNumQH', paramDic);

	mui.ajax(PM_WEBSERVICE_URL, {
		data: data,
		dataType: 'xml', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		timeout: TIMEOUT, //超时时间设置为10秒；
		headers: {
			'Content-Type': 'text/xml'
		},
		success: function(data) {
			refreshQHBadge(data);
		},
		error: function(xhr, type, errorThrown) {
			hideProgressDialog();
			//异常处理；
			console.log(type);
		}
	});
}

function requestFundBadge() {
	console.log('刷新资金管理角标...');

	var url = FUND_WEBSERVICE_URL + "WebService.ashx?Commond=getToAuditBillCountByUser&userRecId=" + window.localStorage.getItem(EmpId) + "&password=" + window.localStorage.getItem(PwdCyp);
	mui.ajax(url, {
		dataType: 'json',
		type: 'get',
		timeout: TIMEOUT,
		headers: {
			'Content-Type': 'application/json'
		},
		success: function(data) {
			hideProgressDialog();

			refreshFundBadge(data);
		},
		error: function(xhr, type, errorThrown) {
			hideProgressDialog();
		}
	});

}

function requestExBadge() {
	console.log('刷新专家服务和方案审批角标...');

	var url = 'http://117.107.162.17:8089/crbcexpmobile/sys/Login_getnums.action?param1=' + window.localStorage.getItem(LoginName) + '&param2=' + window.localStorage.getItem(PwdCyp);
	mui.ajax(url, {
		dataType: 'json',
		type: 'get',
		timeout: TIMEOUT,
		headers: {
			'Content-Type': 'application/json'
		},
		success: function(data) {
			hideProgressDialog();

			refreshExBadge(data);
		},
		error: function(xhr, type, errorThrown) {
			hideProgressDialog();
		}
	});
}

function requestFinanceBadge() {
	console.log('刷新财务中心角标...');

	var url = "http://117.107.162.16/cwbase/web/session/gsidp/ZJGL/service/ToDoTasks.asmx/getCount?userCode=" + window.localStorage.getItem(LoginName) + "&portalCode=0002";
	mui.ajax(url, {
		dataType: 'json',
		type: 'get',
		timeout: TIMEOUT,
		success: function(data) {
			hideProgressDialog();

			refreshFinanceBadge(data);
		},
		error: function(xhr, type, errorThrown) {
			hideProgressDialog();
		}
	});
}