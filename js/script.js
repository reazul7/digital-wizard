// script for counter
var isAlreadyRun = false;
      
      $(window).scroll( function(){
      
          $('.counter-show').each( function(i){
      
              var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
              var bottom_of_window = $(window).scrollTop() + $(window).height();
      
      
                  if( bottom_of_window > ( bottom_of_object + 20 )  ){
                      if (!isAlreadyRun) {
                          $('.count-number').each(function () {
                          
                          $(this).prop('Counter', 0).animate({
                              Counter: $(this).text()
                          }, {
                                  duration: 2000,
                                  easing: 'swing',
                                  step: function (now) {
                                      $(this).text(Math.ceil(now));
                                  }
                              });
                          });
                      }
                      isAlreadyRun = true;
                  }
          }); 
      
      });


// mail
function sendMail(params) {
    var tempParams = {
        name:document.getElementById("toName").value,
        phone:document.getElementById("toPhone").value,
        email:document.getElementById("toEmail").value,
        url:document.getElementById("toURL").value,
    };

    emailjs.send('gmail', 'template_taps7jq', tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
}