

$(document).ready(function(){
	$("#btnEnviar").on("click", function(event){
		event.preventDefault();

		var nombre = $("#name").val();
		var apellido = $("#lastname").val();
		var mail = $("#email").val();
		var motivo = $("#reason").val();
		var turno = $("#interest").val();
		var consulta = $("#myConsult").val();

		console.log(nombre, apellido, mail, motivo, turno, consulta);

        console.log("consulta es: "+consulta);
		var myValidar = validar(nombre, apellido, mail, motivo, turno, consulta);

		console.log("myValidar es: "+myValidar);

		if (myValidar) {
        	var objData = {"nombre": nombre,"apellido": apellido, "mail": mail, "motivo": motivo, "turno": turno, "consulta": consulta}
        	var jsonData = JSON.stringify(objData);
        	console.log(jsonData)

        }

	})

})


function validarRequeridos(campo){
	console.log("Entra en la funcion validarRequeridos");
	campo.trim(); // Saca los espacios en blanco del string.
	console.log(campo);
	console.log(campo);
	if (campo.length == 0) {
		return false;
	}
	return true;
}    

function validarMail(mail){

	mail.trim(); // Saca los espacios en blanco del string.
    console.log("Entra en la funcion validarMail");
	emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	if(emailRegex.test(mail)){
		return true;
	}
	return false;
}

function validar(nombre, apellido, mail, motivo, turno, consulta){
var valido = true;
var ul = $("#error");

console.log(" validarRequeridos(nombre) devuelve: "+validarRequeridos(nombre))
console.log(" validarRequeridos(mail) devuelve: "+validarRequeridos(mail))
console.log(" validarMail(mail) devuelve: "+validarMail(mail))
		if (validarRequeridos(nombre) == false){
    		msg = "<li>El nombre es un campo requerido</li>";
    		ul.append(msg);
    		valido = false;
    		
		}
		if (validarRequeridos(apellido) == false){
    		msg = "<li>El apellido es un campo requerido</li>";
    		ul.append(msg);
    		valido = false;
    		
		}
		if (validarRequeridos(motivo) == false){
    		msg = "<li>El motivo es un campo requerido</li>";
    		ul.append(msg);
    		valido = false;
    		
		}
		if (validarRequeridos(turno) == false){
    		msg = "<li>El turno es un campo requerido</li>";
    		ul.append(msg);
    		valido = false;
    		
		}
		if (validarRequeridos(consulta) == false){
    		msg = "<li>El consulta es un campo requerido</li>";
    		ul.append(msg);
    		valido = false;
    		
		}
		
		if (validarRequeridos(mail) == false){
    		msg = "<li>El mail es un campo requerido</li>";
    		ul.append(msg);
    		valido = false;

		}else{

			if(validarMail(mail) == false){
    		msg = "<li>Debe ingresar mail valido</li>";
    		ul.append(msg);
    		valido = false;
    		console.log("validarMail(mail)")
		    }
		}
    return valido;
}