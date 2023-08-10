$(document).ready(function() {
    $('.expand').on('click', function() {
        var $this = $(this);
        $this.toggleClass('active');
        var $hiddenColumns = $this.parent().nextAll('.hidden-column').slice(0, 6);
        $hiddenColumns.toggleClass('show');
    });
});