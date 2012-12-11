(function(){
	$('.menu-horizontal').on('click', '.btn', function(evt){
		
		var target = $(evt.target),
			url    = target.data('url');

			//alert("hola"+target);

			$(".active.btn").removeClass("active");
			target.addClass("active");

			
		$.get(url, function(data){
			
			$(".slide-container").html(data);

		});

		evt.preventDefault();

	});
})();