function obtenerImagenDeGato(){
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://api.thecatapi.com/v1/images/search', true);

	xhr.onload = function (){
	if(xhr.status >= 200 && xhr.status < 300){
	var data = JSON.parse(xhr.responseText);
	console.log('Respuesta de la API:', data);
	var imageUrl = data[0].url;
	console.log('URL de la imagen del gato:');
	mostrarImagen(imageUrl);
	}else{
		console.error('Error al obtener datos. Codigo de estado;', xhr.status);
	}
	};

	xhr.onerror = function (){
	console.error('Error de red al intentar la solicitud.');
	};
	xhr.send();
}

	function mostrarImagen(url){
	var imagen = document.createElement('img');
	imagen.src = url;
	document.body.appendChild(imagen);
	}


function obtenerImagen(){
	const apiUrl = 'https://api.thecatapi.com/v1/images/search';
	fetch(apiUrl)
	.then(response => response.json())
	.then(data => {

		console.log('Respuesta de la API:', data);
		const imageUrl = data[0].url;
		console.log('URL de la iamgen del gato:');
		mostrarImagen(imageUrl);

})
	.catch(error => {
	console.error('Error al obtener datos:', error);
});
	}

	
	function mostrarImagen(url){
	const imagen = document.createElement('img');
	imagen.src = url;
	document.body.appendChild(imagen);
}

function obtenerIma(){
	var apiUrl = 'https://api.thecatapi.com/v1/images/search';

	$.ajax({
		url: apiUrl,
		method: 'GET',
		dataType: 'json',
		success: function (data){
		console.log('Respuesta de la API:', data);
		var imageUrl = data[0].url;
		console.log('URL de la imagen del gato:');
		mostrarImagen(imageUrl);
		},
		error: function (error) {
		console.error('Error al obtener datos:', error);
		}
	});
}

function mostrarImagen(url){
	var imagen = $('<img>').attr('src', url);
	$('body').append(imagen);
}
