const displayConverter = event => {
	event.preventDefault();
	const option = parseInt(document.querySelector('#choice').value, 10);
	document.querySelector('.evaluation-container').classList.remove('d-none');
	if(option === 1) {
		document.querySelector('.error').classList.add('d-none');
		return document.querySelector('.unit').innerHTML = 'Celsuis';
	} else if (option === 2 ) {
		document.querySelector('.error').classList.add('d-none');
		return document.querySelector('.unit').innerHTML = 'Fahrenheit';
	} else {
		document.querySelector('.error').classList.remove('d-none');
		document.querySelector('.evaluation-container').classList.add('d-none');
		return document.querySelector('.error').innerHTML = 'Invalid option';
	}
}

const convertTemperature = event => {
	let temperature = parseInt(document.querySelector('#temperature').value, 10);
	const option = parseInt(document.querySelector('#choice').value, 10);
	if(option === 1) {
		temperature = (temperature* 1.8) + 32;
		return document.querySelector('.result').innerHTML = `${temperature}°F`;
	}
	temperature = (temperature - 32 ) *(5/9);
	return document.querySelector('.result').innerHTML = `${temperature}°C`;
}
