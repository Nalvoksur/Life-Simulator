function reg(){
	var	login = document.getElementById('username').value;
		email = document.getElementById('email').value;
		pswd  = document.getElementById('password').value;
		pswd2 = document.getElementById('confirm-password').value;

		if (pswd !== pswd2) {
		alert("Пароли не совпадают!");
		return;
	}

	var users = JSON.parse(localStorage.getItem('users')) || [];

	var usersext = users.some(function(user){
		return user.login === login;
	});

	if (usersext){
		alert("Пользователь с таким именем существует");
		return;
	}

	var newuser = {
		login: login,
		email: email,
		pswd: pswd
	};

	users.push(newuser);

	localStorage.setItem('users', JSON.stringify(users));

	document.getElementById('username').value = '';
	document.getElementById('email').value = '';
	document.getElementById('password').value = '';
	document.getElementById('confirm-password').value = '';

	alert("Регистрация прошла успешно!");
}

function enter(){
	var	inplogin = document.getElementById('inputlogin').value;
		inpswd = document.getElementById('inputpassword').value;

	var users = JSON.parse(localStorage.getItem('users')) || [];

	var user = users.find(function(user){
		return user.login === inplogin && user.pswd === inpswd;
	});

	if (user){
		console.log("Успешно");
		alert("Добро пожаловать, " + user.login + "!");
		window.location.href = 'index.html';
	} else {
        alert("Неверное имя пользователя или пароль.");
    }
}