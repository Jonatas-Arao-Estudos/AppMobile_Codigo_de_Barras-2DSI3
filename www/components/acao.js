// This is a JavaScript file

$(document).on("click","#scan",function(){
  cordova.plugins.barcodeScanner.scan(
        function (result) {
            $('.modal').modal();
            if(result.text == '280720550')
            {
            $('#280720550').modal('open');
            }
            else if(result.text == '989895555')
            {
            $('#989895555').modal('open');
            }
            else if(result.text == '85236987')
            {
            $('#85236987').modal('open');
            }
            else if(result.text == '85369877444')
            {
            $('#85369877444').modal('open');
            }
            else if(result.cancelled){
            $('#cancelado').modal('open');
            }
            else{
            $('#invalido').modal('open');
            }
        },
        function (error) {
            alert("Scanning failed: " + error);
        },
        {
            preferFrontCamera : false, // iOS and Android
            showFlipCameraButton : true, // iOS and Android
            showTorchButton : true, // iOS and Android
            torchOn: false, // Android, launch with the torch switched on (if available)
            saveHistory: false, // Android, save scan history (default false)
            prompt : "Place a barcode inside the scan area", // Android
            resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            formats : "QR_CODE,CODE_39", // default: all but PDF_417 and RSS_EXPANDED
            orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
            disableAnimations : true, // iOS
            disableSuccessBeep: true // iOS and Android
        }
    );
});