const reversePhrase = event => {
	event.preventDefault();
	let phrase =  document.querySelector('#phrase').value;
	phrase = phrase.split("").reverse().join("");
	console.log(phrase);
	return document.querySelector('.result').innerHTML = `<p> ${phrase} </p>`;
}