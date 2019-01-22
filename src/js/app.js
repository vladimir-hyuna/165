//= ../../node_modules/jquery/dist/jquery.min.js
//= ajaxEmailSender.js
//= fetchAddress.js
//= jquery.validate.min.js
//= ../../node_modules/foundation-sites/dist/js/foundation.min.js
//= ../../node_modules/foundation-sites/dist/js/plugins/foundation.core.min.js
//= ../../node_modules/foundation-sites/dist/js/plugins/foundation.smoothScroll.min.js

$(document).ready(function() {
    $(document).foundation();


    $('.hamburger').on('click', function() {
      $('.hamburger__element').toggleClass('hamburger__element--active');
      $('.main-navigation').toggleClass('show-for-medium');
    });

    $('.main-navigation__link').on('click', function() {
      $('.hamburger__element').toggleClass('hamburger__element--active');
      $('.main-navigation').toggleClass('show-for-medium');
    });

    


    // form validation and submit
    var contactForm = $("#contactForm");

    contactForm.validate({
        rules: {
            name: {
                required: true
            },
            email: {
                email: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: "Please specify your name",
            textarea: "Enter you message",
            email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com"
            }
        },
        submitHandler: function(form) {
            $(form).trigger("formvalid");
        }
    });

    contactForm.on("submit", function(e) {
        e.preventDefault;
    });

    contactForm.ajaxEmailSender({
        domain: "sentivenlimited.com",
        autorizationToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ5ZWx0b25ncmFuZ2VsaW1pdGVkLmNvbSIsImlhdCI6MTU0ODE3MTkyMDY1NCwiZXhwIjoxNTc5NzA3OTIwNjU0LCJhdWQiOiJ5ZWx0b25ncmFuZ2VsaW1pdGVkLmNvbSIsInN1YiI6InllbHRvbmdyYW5nZWxpbWl0ZWQuY29tIn0.ZvfIRSPXgN6yP2XGFIU1Bm6caxxJQORj410ca86IyYA",
        event: "formvalid",
        supportEmail: "support@yeltongrangelimited.com"
    });
});

var getAddress = ({
    site: "muse-park.net",
    corp_id: "632",
    country_code: "UK",
    addressContainer: $('.addressContainer')
});
