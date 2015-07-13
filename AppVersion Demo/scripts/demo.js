(function (global) {
    var DemoViewModel,
        app = global.app = global.app || {};

    DemoViewModel = kendo.data.ObservableObject.extend({

        getVersion: function () {
            if (!this.checkSimulator()) {
                cordova.getAppVersion(function(value) {
                    alert(value);
                });
            }
        },

        getPackageName: function () {
            if (!this.checkSimulator()) {
                cordova.getAppVersion.getPackageName(function(value) {
                    alert(value);
                });
            }
        },
      
        getAppName: function () {
            if (!this.checkSimulator()) {
                cordova.getAppVersion.getAppName(function(value) {
                    alert(value);
                });
            }
        },

        getVersionNumber: function () {
            if (!this.checkSimulator()) {
                cordova.getAppVersion.getVersionNumber(function(value) {
                    alert(value);
                });
            }
        },

        getVersionCode: function () {
            if (!this.checkSimulator()) {
                cordova.getAppVersion.getVersionCode(function(value) {
                    alert(value);
                });
            }
        },

        checkSimulator: function() {
            if (window.navigator.simulator === true) {
                alert('This plugin is not available in the simulator.');
                return true;
            } else if (cordova.getAppVersion === undefined) {
                alert('Plugin not found. Maybe you are running in AppBuilder Companion app which currently does not support this plugin.');
                return true;
            } else {
                return false;
            }
        }
    });

    app.demoService = {
        viewModel: new DemoViewModel()
    };
})(window);