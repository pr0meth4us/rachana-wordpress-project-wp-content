jQuery(document).ready(function($) {
    // Function to toggle visibility of related input fields
    function toggleInputVisibility(checkbox, relatedInputs) {
        if (checkbox.is(':checked')) {
            relatedInputs.show();
        } else {
            relatedInputs.hide();
        }
    }

    // Initial visibility setup
    $('.customize-control-checkbox input[type="checkbox"]').each(function() {
        var checkbox = $(this);
        var relatedInputs = checkbox.closest('.customize-control').nextUntil('.customize-control-checkbox');
        toggleInputVisibility(checkbox, relatedInputs);
    });

    // Listen for changes to checkboxes
    $('.customize-control-checkbox input[type="checkbox"]').on('change', function() {
        var checkbox = $(this);
        var relatedInputs = checkbox.closest('.customize-control').nextUntil('.customize-control-checkbox');
        toggleInputVisibility(checkbox, relatedInputs);
    });
});
