

$(window).on('load',function(){
  var $img = $('img');
  $img.on('click',function(){
                  var $this=$(this);
                  $this.toggleClass('expanded');
                  console.log(this)
                })

})
