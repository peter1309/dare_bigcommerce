/**
 * Created by BV DEV on 8/26/2015.
 *
 */
$(document).ready(function(){
    //<![CDATA[

    //Scroll to top button
    $(window).scroll(function(){
        if ($(this).scrollTop() > $('#Header').height()) {
            $('.backToTop').fadeIn();
        } else {
            $('.backToTop').fadeOut();
        }
    });
    $('.backToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    // Update text login page
    $('.AccountLogin .actions').find('#LoginButton').attr('value','Login');

    function check_signup_form() {
        var signup = g("signup");

        if(signup.value.indexOf("@") == -1 || signup.value.indexOf(".") == -1) {
            alert("%%LNG_LoginEnterValidEmail%%");
            signup.focus();
            signup.select();
            return false;
        }
        return true;
    }

    //Video on product page
    if($('.videoRow').size() > 0) {
        $('.videoRow').bind('click', function () {
            var videoId = $(this).attr('id').replace('video_', '');
            $('#FeaturedVideo').html('<object>'
                + '<param name="movie" value="//www.youtube.com/v/' + videoId + '?fs=1"></param>'
                + '<param name="allowFullScreen" value="true"></param>'
                + '<param name="allowscriptaccess" value="always"></param>'
                + '<embed src="//www.youtube.com/v/'  + videoId + '?&fs=1&autoplay=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true"></embed>'
                + '</object>'
            );
            selectCurrentVideo(videoId);
        });
    }

    //]]>
});