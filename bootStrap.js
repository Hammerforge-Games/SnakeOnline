//INSTALL
//Register service worker phase
if ("sericeWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker.register("/worker.js").then(function(registration) {
            //Registration was successful
            console.log("ServiceWorker registration successful with scope: ", registration.scope);
        }, function(err) {
            //registration failed
            console.log("ServiceWorker registration failed: ", err);
        });
    });
}

//Cache static assets phase

//Activation phase

//send status message


// BootStrap my own module and require library (GLOBAL)
var require = () => ({}); 
var module = {}; 
module.exports = () => ({});