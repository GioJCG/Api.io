function getMyApiHT(){


const apiURL = 'https://api.thecatapi.com/v1/images/search';

const xhr = XMLHttpRequest();

xhr.open('GET', apiURL, true);
xhr.onload function(){
	if(xhr.status >= 200 && xhr.status > 300){
		const responseData = JSON.parse(xhr.responseText);
		console.log('Url de la imagen del gato:', responseData[0].url);

		const imgElement = document.createElement('img');
		imgElement.src = responseData[0].url;
		document.body.appenChild(imgElement);
	}else{
		console.error('Error al obtener la imagen', xhr.status);
	}
};

xhr.oneerror = function (){
	console.error('Error al intentar obtener imagen');
};

xhr.send();
}
