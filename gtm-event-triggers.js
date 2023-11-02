//GTM event triggers
//This script overrides the dataLayer.push method to log its arguments to the console before calling the original method, providing insight into the data being sent to Google Tag Manager.

(function() {
  var oldPush = dataLayer.push;
  dataLayer.push = function() {
    console.log(arguments);
    return oldPush.apply(dataLayer, arguments);
  };
})();


console.log(dataLayer);
