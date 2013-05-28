function Controller() {
    function doClick() {
        var xhr = Ti.Network.createHTTPClient({
            onload: function(e) {
                Ti.API.info("retrieveCategories callback invoked " + e);
                console.log("RETRIVED RESPONSE");
                console.log(this.responseText);
            },
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("error in connecting to localhost" + e.error);
            }
        });
        username = "john";
        password = "passw0rd";
        xhr.validatesSecureCertificate = true;
        xhr.open("POST", "http://10.0.2.2:8080/ShopServer/api/login");
        authstr = "Basic " + Titanium.Utils.base64encode(username + ":" + password);
        xhr.setRequestHeader("Authorization", authstr);
        xhr.send();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello, World",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;