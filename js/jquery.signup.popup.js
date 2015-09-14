
(function( $ ){
    $.fn.BC_findOutFirst = function(options) {
        var settings = $.extend( {
            'modal' : '#find-out-first',
            'cookieViewStatus' : 'findOutFirst'
            
        }, options);
            
        var $this = this;
            
        var init = function () {
            checkViewStatus();
        }
            
        var containerCss = {
                'width' : '980px',
                'height' : '390px',
        };
        
        
        var checkViewStatus = function () {
            var v = $.cookie(settings.cookieViewStatus);
            
       
            
            if (v == null) {
                $.cookie(settings.cookieViewStatus , '1' , { expires: 365, path: '/' });
                show();
            }                
        }
        
        var show = function () {
            
            $(settings.modal).modal({
                     'overlayClose' : true ,
                     'containerCss' : containerCss,
                     'onShow ' : onShow()
                });
        }
      
       var onShow = function () {
           $('body').addClass('find-out-first');
           $('#subscribe_form_overlay input[type=text]').attr('placeholder' , 'Email address');
           $('#subscribe_form_overlay input[type=text]:first').focus();
           addSubmit();
  
           
       }    
       
       var addSubmit = function () {
       
        
        $('#subscribe_form_overlay').unbind();
            $('#subscribe_form_overlay').submit(function(e) {
                e.preventDefault();
                
                if($('#subscribe_form_overlay #nl_email').val() == '') {
                    alert('You forgot to type in your email address.');
                    $('#subscribe_form_overlay #nl_email').focus();
                    return false;
                }

                if($('#subscribe_form_overlay #nl_email').val().indexOf('@') == -1 || $('#subscribe_form_overlay #nl_email').val().indexOf('.') == -1) {
                    alert('Please enter a valid email address, such as peter@example.com.');
                    $('#subscribe_form_overlay #nl_email').focus();
                    $('#subscribe_form_overlay #nl_email').select();
                    return false;
                }

                // Set the action of the form to stop spammers
                $('#subscribe_form_overlay').append("<input type='hidden' name='check' value='1' />");
                $('#find-out-first p:first').html("Thanks! We'll be in touch with exclusive offers soon");
                $('#find-out-first form').addClass("screen-offset");
                
                
                
                var footerform = $('.second-level form');
                footerform.attr('target' , 'find-out-first')
                
                 footerform.find('#nl_email').val($('#subscribe_form_overlay #nl_email').val())
                footerform.submit();
                return false;

            });
       }
       
        // Kick it off.
        init();
        
    };
})( jQuery );
    
    
$(window).load(function() {
    
    setTimeout(function() {
        $("body").BC_findOutFirst();
}, 3000);   
    
})