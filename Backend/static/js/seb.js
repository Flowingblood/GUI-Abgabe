// Button elemente
let element = document.getElementById("create");
let createUserWithListInput_button = document.getElementById("listinput");
let deleteUser_button = document.getElementById("delete");
let getUserByName_button = document.getElementById("byname");
let updateUser_button = document.getElementById("update");
let getUserAll_button = document.getElementById("alluser");



var handler_createUser = function() {
	var doc = document.querySelector("#basic");
    const data = { id:123,  username: 'example' ,firstName: "ex" , lastName: 'ample'};

	fetch('http://0.0.0.0:5000/user/create', {
  		method: 'POST', // or 'PUT'
  		headers: {
    		'Content-Type': 'application/json',
  		},
  		body: JSON.stringify(data),
	})
	.then(response => response.json())
	.then(data => {
    doc.innerHTML = data.toString();
  		console.log('Success:', data);
	})
	.catch((error) => {
  	console.error('Error:', error);
	});
}

var handler_getUserAll = function() {
	var doc = document.querySelector("#basic");
	fetch('http://0.0.0.0:5000/user/all', {
  		method: 'GET'
	})
	.then(response => response.json())
	.then(data => {
		doc.innerHTML = data.toString();
  		console.log('Success:', data);
	})
	.catch((error) => {
  	console.error('Error:', error);
	});
}


var handler_createUsersWithListInput = function() {
	var doc = document.querySelector("#basic");
	const data = [{ id:123,  username: 'example' ,firstName: "ex" , lastName: 'ample'}];
	fetch('http://0.0.0.0:5000/user/createWithList', {
  		method: 'POST', // or 'PUT'
  		headers: {
    		'Content-Type': 'application/json',
  		},
  		body: JSON.stringify(data),
	})
	.then(response => response.json())
	.then(data => {
    doc.innerHTML = data.toString();
  		console.log('Success:', data);
	})
	.catch((error) => {
  	console.error('Error:', error);
	});
}

var handler_deleteUser = function() {
	let username = '123';

	fetch('http://0.0.0.0:5000/user/'+username, {
  		method: 'DELETE'
	})
	.then(response => response.json())
	.then(data => {
		var doc = document.querySelector("#basic");
    doc.innerHTML = data.toString();
  		console.log('Success:', data);
	})
	.catch((error) => {
  	console.error('Error:', error);
	});
}

var handler_getUserByName = function() {
	const username = '123';

	fetch('http://0.0.0.0:5000/user/'+username, {
  		method: 'GET'
	})
	.then(response => response.json())
	.then(data => {
		var doc = document.querySelector("#basic");
    doc.innerHTML = data.toString();
  		console.log('Success:', data);
	})
	.catch((error) => {
  	console.error('Error:', error);
	});
}

var handler_updateUser = function() {
	const data = { id:123,  username: 'example2' ,firstName: "ex" , lastName: 'ample'};
	const user = '123';
	var doc = document.querySelector("#basic");

	fetch('http://0.0.0.0:5000/user/'+user, {
  		method: 'PUT',
  		headers: {
    		'Content-Type': 'application/json',
  		},
  		body: JSON.stringify(data),
	})
	.then(response => response.json())
	.then(data => {
    doc.innerHTML = data.toString();
  		console.log('Success:', data);
	})
	.catch((error) => {
  	console.error('Error:', error);
	});
}

//	Event Listener
element.addEventListener("click",  handler_createUser);
createUserWithListInput_button.addEventListener("click",  handler_createUsersWithListInput);
deleteUser_button.addEventListener("click",  handler_deleteUser);
getUserByName_button.addEventListener("click",  handler_getUserByName);
updateUser_button.addEventListener("click",  handler_updateUser);
getUserAll_button.addEventListener("click",  handler_getUserAll);