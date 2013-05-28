// set the username and the password
username = 'insert here the username used to login';
password = 'here the password';

var baseUri

// set the uri
if (OS_IOS) {
	// since the iOS Simulator uses the host machine network
	// we can use directly localhost
	
	baseUri = 'http://localhost:8080';
	
} else if (OS_ANDROID) {
	
	// each instance of the Android emulator runs behind a virtual router/firewall service 
	// that isolates it from your development machine's network the 10.0.2.2 is a special alias 
	// to your host loopback interface (i.e., 127.0.0.1 on your development machine)
	// [http://developer.android.com/tools/devices/emulator.html#networkaddresses]
	
	baseUri = 'httl://10.0.2.2:8080'
}

function doClick(e) {
	var xhr = Ti.Network.createHTTPClient({
		onload : function(e) {
			console.log(this.responseText);
		},
		onerror : function(e) {
			console.log(e.error);
		}
	});

	xhr.validatesSecureCertificate = true;
	xhr.open('POST', baseUri + '/the/rest/of/your/address');

	authstr = 'Basic ' + Titanium.Utils.base64encode(username + ':' + password);
	xhr.setRequestHeader('Authorization', authstr);

	xhr.send();

}

$.index.open();
