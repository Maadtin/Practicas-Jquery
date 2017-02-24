$(document).ready(function(){

	jQuery.extend(jQuery.validator.messages, {
    required: "Este campo es obligatorio.",
    remote: "Please fix this field.",
    email: "Introduce un email válido.",
    url: "Introduce una url válida.",
    date: "Ingresa una fecha válida.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Introduce un número válido.",
    digits: "Introduce solo dígitos.",
    creditcard: "Introduce un número de targeta de credito válido.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Introduce como máximo {0} carácteres."),
    minlength: jQuery.validator.format("Introduce como mínimo {0} carácteres."),
    rangelength: jQuery.validator.format("Introduce un valor entre {0} y {1} de carácteres."),
    range: jQuery.validator.format("Introduce un valor entre {0} y {1}."),
    max: jQuery.validator.format("Introduce un valor menor o igual a  {0}."),
    min: jQuery.validator.format("Introduce un valor mayor o igual a {0}.")

	});


	$("#form").validate({

		rules: {

				nombre: {
					required: true,
					minlength: 3
				},

				barras: {
					required: false,
					maxlength: 13
				},

				caducidad: {
					required: false,
					date: true
				},

				estado: {
					required: true
				}			


		}

	});

	$("#informacion").on('change', function(){
		$("#displayForm").css({"display":"block"});
	})

});