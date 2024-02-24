document.addEventListener('DOMContentLoaded', function() {
    var blockElements = document.querySelectorAll('.wp-block');

    var usedBlocks = [];
    blockElements.forEach(function(blockElement) {
        var blockName = blockElement.dataset.block;

        if (usedBlocks.indexOf(blockName) === -1) {
            usedBlocks.push(blockName);
        }
    });

    // Enqueue styles for used blocks
    usedBlocks.forEach(function(usedBlock) {
        wp_enqueue_style(usedBlock + '-style');
    });
});
