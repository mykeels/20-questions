const classifyTax = event => {
	event.preventDefault();
	const salary = parseInt(document.querySelector('#salary').value, 10);
	if(salary < 50000 ) {
		return document.querySelector('.result').innerHTML = `Tax: ${0.05*salary}`; 
	} 
	if(salary >= 50000 && salary < 200000) {
		return document.querySelector('.result').innerHTML = `Tax: ${0.1*salary}`;
	}
	if(salary >= 200000) {
		return document.querySelector('.result').innerHTML = `Tax: ${0.15*salary}`;
	}
	return document.querySelector('.result').innerHTML = 'Uh!! This is your fault, we warned you but you wouldnt listen, snow you are broke and you are trying to lie to us in the process';
}