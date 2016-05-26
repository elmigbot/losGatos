$(document).ready(function() {
	$('.messageform').on('click', 'span', function() {
		var $refactor = $(this).closest('.messageform');
		$refactor.find('textarea').show();
		$refactor.find('textarea').focus();
		$(this).hide();
		$refactor.find('div').slideDown();
		
	});
	$('.messageform').on('blur', 'textarea', function() {
		var $refactor = $(this).closest('.messageform');
		$(this).hide();
		$refactor.find('span').text($(this).val());
		$refactor.find('span').show();




	});
	$("#messbtn").on('click', function() {
		$(this).text("Thanks, Catboys will definately read that!!!");
		$(this).addClass("btnclick");
	});

	$('.map').on('click', function(e) {
		//console.log(e);
		console.log(e.clientY);
		console.log(e.pageY);
		var $xcord = (e.pageX - 10) + 'px';
		var $ycord = (e.pageY - 10) + 'px';

		console.log($xcord);
	
		$(this).closest('.col-1-2').find('.pin').show()
												.css({'position': 'absolute', 'left': $xcord, 'top': $ycord});

		
		//$(this).closest('.col-1-2').find('.pin').css({'position': 'absolute', 'left': $xcord, 'top': $ycord});
		$(this).closest('.col-1-2').find('.btn').slideDown();

		$('#mapbtn').on('click', function() {
			$(this).text("Thanks, Catboys will come visit you now!!");
			$(this).addClass('btnclick');
			$(this).closest('.col-1-2').find('.pin').hide()
			$(this).closest('.col-1-2').find('.catpin').show()
													   .css({'position': 'absolute', 'left': $xcord, 'top': $ycord});
		});


	});

	$('.pin').on('click', function(pvent) {
		$(this).hide();
		$(this).closest('.col-1-2').find('.btn').slideUp();

		console.log(pvent);
	});

	
});
