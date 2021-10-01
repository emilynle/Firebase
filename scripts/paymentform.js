(function (window) {
    var PAY_FORM_SELECTOR = '[data-coffee-order="form"]';
    var App = window.App;
   
    var FormHandler = App.FormHandler;
   
    var payFormHandler = new FormHandler(PAY_FORM_SELECTOR);
    payFormHandler.addSubmitHandler(function(data) {
        var paymentconf = "Thank you for your payment, ";
        var $message = $("#conf-message");
        $message.empty();

        paymentconf += data["title"] + " " + data["username"];
        
        $message.append(paymentconf);

        $('#confirmation').modal('appear'); 
    });
   })(window);