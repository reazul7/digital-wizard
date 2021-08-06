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
function sendMail(params){
    var temParams = {
        to_name: document.getElementById('toName').value,
        to_phone: document.getElementById('phone').value,
        to_email: document.getElementById('email').value,
        to_url: document.getElementById('url').value
   };
   emailjs.send('service_7zdiv3p','template_rxjapqf',temParams, 'user_PsmRntaXM3mRIYeOJL9bk')
   .then(function(res){
       console.log('success',res.status);
       alert('Email Send Successfully')

       let elementsAllInputs = document.getElementsByClassName("form-control")
       for (let index = 0; index < elementsAllInputs.length; index++) {
           const element = elementsAllInputs[index];
           element.value="";
       }
    })
}