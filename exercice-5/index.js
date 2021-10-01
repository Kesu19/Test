let form = document.querySelector('#loginForm');

form.nom.addEventListener('change', function(){
	validNomP(this);
});

form.prenom.addEventListener('change', function(){
	validNomP(this);
});

form.email.addEventListener('change', function(){
	validEmail(this);
});

form.password.addEventListener('change', function(){
	validPassword(this);
});


form.addEventListener('submit', function(e){
	e.preventDefault();
	if(validEmail(form.email)&&validPassword(form.password)&&validNomP(form.nom)&&validNomP(form.prenom)){
	document.getElementById('formValid').firstChild.data ="Le formulaire a été valider";
	}
});

const validNomP=function(inputNomP){
	let msg;
	let valid = false;
	
	if (inputNomP.value.length < 3){
		msg = 'le champ doit contenir au moins 3 character'
	}
	else if (/[0-9]/.test(inputNomP.value)){
		msg = 'le champ ne doit contenir aucun chiffre';
	}
	else{
		msg = 'le champs et valide';
		valid = true;
	}

	let small = inputNomP.nextElementSibling

	if(valid){
		small.innerHTML = "Le champ est correcte";
		small.classList.remove('text-danger');
		small.classList.add('text-sucess');
		return true;
	}
	else{
		small.innerHTML = msg;
		small.classList.remove('text-sucess');
		small.classList.add('text-danger');
		return false;
	}
};

const validEmail=function(inputEmail){
	let emailRegExp = new RegExp(
		'^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$'
	);

	let small = inputEmail.nextElementSibling

	if(emailRegExp.test(inputEmail.value)){
		small.innerHTML = "Adresse Valide";
		small.classList.remove('text-danger');
		small.classList.add('text-sucess');
		return true;
	}
	else{
		small.innerHTML = "Adresse non Valide";
		small.classList.remove('text-sucess');
		small.classList.add('text-danger');
		return false;
	}

};

const validPassword=function(inputPassword){
	let msg;
	let valid = false;
	
	if (inputPassword.value.length < 3){
		msg = 'le mot de passe doit contenir au moins 3 caracteres'
	}
	else if (!/[A-Z]/.test(inputPassword.value)){
		msg = 'le mot de passe doit contenir au moins 1 majuscule';
	}
	else if (!/[0-9]/.test(inputPassword.value)){
		msg = 'le mot de passe doit contenir au moins 1 chiffre';
	}
	else{
		msg = 'le mot de passe est valide';
		valid = true;
	}

	let small = inputPassword.nextElementSibling

	if(valid){
		small.innerHTML = "Mot de passe Valide";
		small.classList.remove('text-danger');
		small.classList.add('text-sucess');
		return true;
	}
	else{
		small.innerHTML = msg;
		small.classList.remove('text-sucess');
		small.classList.add('text-danger');
		return false;
	}
};