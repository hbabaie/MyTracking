var mytracking = {
    createGPSTrakingListener: function (RemoteServer, PersonnelId, Interval, successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'MyTracking', // mapped to our native Java class called "Calendar"
            'StartListening', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "RemoteServer" : RemoteServer,
                "PersonnelId" : PersonnelId,
                "Interval": Interval
            }]
        );
    }
}
module.exports = mytracking;
