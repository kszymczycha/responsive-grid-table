$(document).ready(function() {
    $('.btn__expand').on('click', function() {
        var $this = $(this);
        $this.toggleClass('btn__expand--active');
        var $parentCell = $this.closest(".grid__cell");
        var $hiddenCells = $parentCell.siblings(".grid__cell--hidden");
        $hiddenCells.toggleClass('grid__cell--show');
    });
});