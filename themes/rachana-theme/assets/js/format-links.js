(function($) {
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validateURL(url) {
        var re = /^(http|https):\/\/[^ "]+$/;
        return re.test(url);
    }

    function validatePhoneNumber(phone) {
        var re = /^\+?\d{10,15}$/; // Adjust the regex as needed for your phone number format
        return re.test(phone);
    }

    function validateBeforePublish() {
        var isValid = true;

        // Validate email
        var email = $('#_customize-input-email_link').val();
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            $('#_customize-input-email_link').addClass('invalid');
            isValid = false;
        } else {
            $('#_customize-input-email_link').removeClass('invalid');
        }

        // Validate URLs
        var urls = ['#_customize-input-facebook_link', '#_customize-input-linkedIn_link', '#_customize-input-telegram_link', '#_customize-input-tiktok_link', '#_customize-input-youtube_link', '#_customize-input-location_link'];
        urls.forEach(function(selector) {
            var url = $(selector).val();
            if (!validateURL(url)) {
                alert('Please enter a valid URL.');
                $(selector).addClass('invalid');
                isValid = false;
            } else {
                $(selector).removeClass('invalid');
            }
        });

        var phone = $('#_customize-input-phone_label').val();
        if (!validatePhoneNumber(phone)) {
            alert('Please enter a valid phone number.');
            $('#_customize-input-phone_label').addClass('invalid');
            isValid = false;
        } else {
            $('#_customize-input-phone_label').removeClass('invalid');
        }

        return isValid;
    }

    $('form').on('submit', function(e) {
        if (!validateBeforePublish()) {
            e.preventDefault(); // Prevent form submission
            alert('Please correct the highlighted fields before publishing.');
        }
    });

    function formatLinks(jsonString) {
        const links = JSON.parse(jsonString);
        let formattedLinks = '';
        links.forEach(link => {
            formattedLinks += `${link.label}|${link.url}\n`;
        });
        return formattedLinks;
    }

    function updateLinksTextarea(newVal) {
        const textarea = document.getElementById('_customize-input-links');
        if (textarea) {
            textarea.value = formatLinks(newVal);
        }
    }

    wp.customize('links', function(value) {
        value.bind(updateLinksTextarea);
    });

    $(document).ready(function() {
        const linksSetting = wp.customize('links')();
        updateLinksTextarea(linksSetting);
    });
})(jQuery);
