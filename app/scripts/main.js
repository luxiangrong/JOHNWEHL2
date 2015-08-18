(function($) {
    $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            items: 1
        });

        $('.back-to-top').on('click', function(e){
        	e.preventDefault();
        	$('html').velocity('scroll');
        });

        // 数量增减功能
        (function() {
            $('.input-group-amount').find('.btn-plus').on('click', function(e) {
                var val = Number($(this).closest('.input-group-amount').find('.input-amount').val());
                $(this).closest('.input-group-amount').find('.input-amount').val(++val)
            });

            $('.input-group-amount').find('.btn-reduce').on('click', function(e) {
                var val = Number($(this).closest('.input-group-amount').find('.input-amount').val());
                if (val == 0) {
                    $(this).closest('.input-group-amount').find('.input-amount').val(0)
                } else {
                    $(this).closest('.input-group-amount').find('.input-amount').val(--val)
                }
            });
        })();
    });
})(jQuery);
