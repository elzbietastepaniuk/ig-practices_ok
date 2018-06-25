jQuery.fn.extend({
  scrollTo : function(speed, easing) {
    return this.each(function() {
      var targetOffset = $(this).offset().top;
      $('html,body').animate({scrollTop: targetOffset}, speed, easing);
    });
  }
});

$('.next-section').click(function(e){
    e.preventDefault();
    var $this = $(this),
        $next = $this.parent().next();
    
    $next.scrollTo(400, 'linear');
});

$('.prev-section').click(function(e){
    e.preventDefault();
    var $this = $(this),
        $prev = $this.parent().prev();

    $prev.scrollTo(400, 'linear');
});