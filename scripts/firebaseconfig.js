
(function (window) {
  'use strict';
  var App = window.App || {};

  var FirebaseConfig = {
    apiKey: "AIzaSyCI7cMXNnjX2Cd_JBREFxlNBZJt_Ruw3Fw",
    authDomain: "coffeerun-9c7cf.firebaseapp.com",
    projectId: "coffeerun-9c7cf",
    storageBucket: "coffeerun-9c7cf.appspot.com",
    messagingSenderId: "978715600030",
    appId: "1:978715600030:web:957a07fb21a2691cf0878f",
    measurementId: "G-B6STR379R6"
  };

  App.FirebaseConfig = FirebaseConfig;
  firebase.initializeApp(App.FirebaseConfig);

  window.App = App;
})(window);