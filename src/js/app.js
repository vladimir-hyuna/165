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
        domain: "strovildlimited.com",
        autorizationToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdHJvdmlsZGxpbWl0ZWQuY29tIiwiaWF0IjoxNTQzNDE5NjI0MjY0LCJleHAiOjE1NzQ5NTU2MjQyNjQsImF1ZCI6InN0cm92aWxkbGltaXRlZC5jb20iLCJzdWIiOiJzdHJvdmlsZGxpbWl0ZWQuY29tIn0.tIZxMRbfE5M8HFUYTX-rEPyuYuSEpDEKl5818nWmoGo",
        event: "formvalid",
        supportEmail: "support@strovildlimited.com"
    });
});

var getAddress = ({
    site: "tempanow.com",
    corp_id: "328",
    country_code: "CY",
    addressContainer: $('.addressContainer')
});