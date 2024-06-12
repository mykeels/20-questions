const classifySalary = event => {
	event.preventDefault();
	const salary = parseInt(document.querySelector('#salary').value, 10);
	if(salary < 50000 ) {
		return document.querySelector('.result').innerHTML = 'Basic Earner (sorry but you cannot be a BallerGee)'; 
	} 
	if(salary >= 50000 && salary < 200000) {
		return document.querySelector('.result').innerHTML = 'Mid Earner (You try sha, you can club but do not buy wine, buy beer )';
	}
	if(salary >= 200000) {
		return document.querySelector('.result').innerHTML = 'High Earner (Ah! BallerGee, I greet oo, show love na?)';
	}
	return document.querySelector('.result').innerHTML = 'Uh!! This is your fault, we warned you but you wouldnt listen, snow you are broke and you are trying to lie to us in the process';
}