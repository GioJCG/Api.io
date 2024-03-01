function getMyIpHttp(){
	var request = new XMLHttpRequest()

	// Open a new connection, using the GET request on the URL endoint
	
	request.open('GET', 'https://api.thecatapi.com/v1/images/search', true)
	request.onload = function (resp) {
	console.log(resp);
	console.log(resp.target.response);
	}
	// Send request
request.send()
}


function getMyIpFetch(){
	// Create request object
	var request = new Request('https://randomuser.me/api/?results=3',
	{
		method: 'GET',
		headers: new Headers({ 'Content-Type': 'application/json'})
	});
	//Now use it!
	
	fetch(request)
	.then(function(response){
		response.json().then(function(respjson){
			console.log (respjson.results);
		});
	})
	.catch(err => {
		console.log(err);
	}); 
}

//'GET', 'https://api.ipify.org/?format=json', true)


function getMyIp(){
	$.getJSON("https://api.ipify.org?format=json",
	function(json){
	console.log(json);
	$('#resultado').text(JSON.stringify(json));
}
);
}
