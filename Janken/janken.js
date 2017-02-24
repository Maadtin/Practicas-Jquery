$(document).ready(function(){


var jugador1On,
	jugador1Off,
	jugador2On,
	jugador2Off;

// Captura opción
var clickedLink1;

var fight = $('#fight').on('click', function(){

	$('#jugador1>h3').css({"background":"#0B8CB8"});
	$('#resultats>div:not(:first-child), #jugador2').css({"visibility":"hidden"});
	// $('#rock1, #paper1, #scissor1, #rock2, #paper2, #scissor2').css({"height":"120px", "position":"relative", "left":"0", "top":"0"});
	jugador1On = $('#jugador1 img').on('mouseenter', function(){

	$(this).stop().animate({"width":"140px", "height":"140px"},{"duration":200});

	});

	jugador1Off = $('#jugador1 img').on('mouseleave', function(){

	$(this).stop().animate({"width":"100px", "height":"100px"},{"duration":200});

	});

});



$('#jugador1 img').on('click', function(){

	clickedLink1 = this.id;
	jugador1On.off();
	jugador1Off.off();
	$('#resultats>div:not(:first-child), #jugador1').css({"visibility":"hidden"});
	$('#resultats>div:not(:first-child), #jugador2').css({"visibility":"visible"});
	$('#resultats>div:not(:first-child)').css({"visibility":"hidden"});
	$('#jugador2>h3').css({"background":"#0B8CB8"})

	jugador2On	= $('#jugador2 img').on('mouseenter', function(){

		$(this).stop().animate({"width":"140px", "height":"140px"},{"duration":200});

	});

	jugador2Off = $('#jugador2 img').on('mouseleave', function(){

		$(this).stop().animate({"width":"100px", "height":"100px"},{"duration":200});

	});

})


var clickedLink2;

$('#jugador2 img').on('click', function(){

	clickedLink2 = this.id;
	jugador2On.off();
	jugador2Off.off();
	$('#resultats>div:not(:first-child), #jugador2').css({"visibility":"hidden"});
	$('#resultats>div:not(:first-child)').css({"visibility":"hidden"});


	if(clickedLink1 == "rock1" && clickedLink2 == "paper2"){
		$('#resultado1').append("El jugador 1 ha sacado piedra").css({"visibility":"visible", "width":"200px","height":"50px"});
		$('#resultado2').append("El jugador 2 ha sacado papel").css({"visibility":"visible", "width":"200px","height":"50px"});
		$('#player2Win').css('visibility', 'visible');
		$('#rock1, #paper2').css({"visibility":"visible", "position":"absolute", "top":"150px"});
		$('#rock1').animate({"left":"150px"},{"duration":500});
		$('#paper2').animate({"left":"-150px"},{"duration":500});
	}else if(clickedLink1 == "paper1" && clickedLink2 == "scissor2"){
		$('#resultado1').append("El jugador 1 ha sacado papel").css({"visibility":"visible", "width":"200px","height":"50px"});
		$('#resultado2').append("El jugador 2 ha sacado tijeras").css({"visibility":"visible", "width":"200px","height":"50px"});
		$('#player2Win').css('visibility', 'visible');
		$('#paper1, #scissor2').css({"visibility":"visible"});
		$('#scissor2').css({"position":"absolute", "top":"150px"});
		$('#paper1').css({"position":"absolute", "left":"0", "top":"150px"});
		$('#paper1').animate({"left":"150px"},{"duration":500});
		$('#scissor2').animate({"left":"-150px"},{"duration":500});
	}else if(clickedLink1 == "scissor1" && clickedLink2 == "rock2"){
		$('#resultado1').append("El jugador 1 ha sacado tijeras").css({"visibility":"visible", "width":"200px","height":"50px"});
		$('#resultado2').append("El jugador 2 ha sacado piedra").css({"visibility":"visible", "width":"200px","height":"50px"});
		$('#player2Win').css('visibility', 'visible');
		$('#scissor1, #rock2').css({"visibility":"visible"});
		$('#scissor1').css({"position":"absolute", "left":"0", "top":"150px"});
		$('#rock2').css({"position":"absolute", "top":"150px"});
		$('#scissor1').animate({"left":"150px"},{"duration":500});
		$('#rock2').animate({"left":"-150px"},{"duration":500});
	}else if(clickedLink1 == "rock1" && clickedLink2 == "rock2"){
		$('#resultado1').append("El jugador 1 ha sacado piedra").css({"visibility":"visible", "width":"200px","height":"50px"});
		$('#resultado2').append("El jugador 2 ha sacado piedra").css({"visibility":"visible", "width":"200px","height":"50px"});
		$('#draw').css('visibility', 'visible');
		$('#rock1, #rock2').css({"visibility":"visible", "position":"absolute", "top":"150px"});
		$('#rock1').animate({"left":"150px"},{"duration":500});
		$('#rock2').animate({"left":"-150px"},{"duration":500});
	}else if(clickedLink1 == "rock1" && clickedLink2 == "scissor2"){
		$('#resultado1').append("El jugador 1 ha sacado piedra").css({"visibility":"visible", "width":"200px","height":"50px"});
		$('#resultado2').append("El jugador 2 ha sacado tijeras").css({"visibility":"visible", "width":"200px","height":"50px"});
		$('#player1Win').css('visibility', 'visible');
		$('#rock1, #scissor2').css({"visibility":"visible", "position":"absolute", "top":"150px"});
		$('#rock1').animate({"left":"150px"},{"duration":500});
		$('#scissor2').animate({"left":"-150px"},{"duration":500});
	}else if(clickedLink1 == "paper1" && clickedLink2 == "rock2"){
		$('#resultado1').append("El jugador 1 ha sacado papel").css({"visibility":"visible", "width":"200px","height":"50px"});
		$('#resultado2').append("El jugador 2 ha sacado piedra").css({"visibility":"visible", "width":"200px","height":"50px"});
		$('#player1Win').css('visibility', 'visible');
		$('#rock2').css({"visibility":"visible", "position":"absolute", "top":"150px"});
		$('#paper1').css({"visibility":"visible", "position":"absolute", "left":"0", "top":"150px"});
		$('#paper1').animate({"left":"150px"},{"duration":500});
		$('#rock2').animate({"left":"-150px"},{"duration":500});
	}else if(clickedLink1 == "paper1" && clickedLink2 == "paper2"){
		$('#resultado1').append("El jugador 1 ha sacado papel").css({"visibility":"visible", "width":"200px","height":"50px"});
		$('#resultado2').append("El jugador 2 ha sacado papel").css({"visibility":"visible", "width":"200px","height":"50px"});
		$('#draw').css('visibility', 'visible');
		$('#paper2').css({"visibility":"visible", "position":"absolute", "top":"150px"});
		$('#paper1').css({"visibility":"visible", "position":"absolute", "left":"0", "top":"150px"});
		$('#paper1').animate({"left":"150px"},{"duration":500});
		$('#paper2').animate({"left":"-150px"},{"duration":500});
	}else if(clickedLink1 == "scissor1" && clickedLink2 == "paper2"){
		$('#resultado1').append("El jugador 1 ha sacado tijeras").css({"visibility":"visible", "width":"200px","height":"50px"});
		$('#resultado2').append("El jugador 2 ha sacado papel").css({"visibility":"visible", "width":"200px","height":"50px"});
		$('#player1Win').css('visibility', 'visible');
		$('#scissor1, #paper2').css({"visibility":"visible", "position":"absolute", "top":"150px"});
		$('#scissor1').css({"visibility":"visible", "position":"absolute", "left":"0", "top":"150px"});
		$('#scissor1').animate({"left":"150px"},{"duration":500});
		$('#paper2').animate({"left":"-150px"},{"duration":500});
	}else if(clickedLink1 == "scissor1" && clickedLink2 == "scissor2"){
		$('#resultado1').append("El jugador 1 ha sacado tijeras").css({"visibility":"visible", "width":"200px","height":"50px"});
		$('#resultado2').append("El jugador 2 ha sacado tijeras").css({"visibility":"visible", "width":"200px","height":"50px"});
		$('#draw').css('visibility', 'visible');
		$('#scissor1, #scissor2').css({"visibility":"visible", "position":"absolute", "top":"150px"});
		$('#scissor1').css({"visibility":"visible", "position":"absolute", "left":"0", "top":"150px"});
		$('#scissor1').animate({"left":"150px"},{"duration":500});
		$('#scissor2').animate({"left":"-150px"},{"duration":500});
	}
	


})

setTimeout(function(){
	console.log(clickedLink1);
},3000);


setTimeout(function(){
	console.log(clickedLink2);
},6000);
















});





