window.addEventListener('load', () => {
	const phrasesToBeDisplayed = ["retreat", "temple", "mushroom", "lounge", "guitar", "microphone", "lesson", "inn", "area", "frighten"];
	const phrase = phrasesToBeDisplayed[Math.floor(Math.random()* phrasesToBeDisplayed.length)];
	document.querySelector('.phrase-container').innerHTML = phrase;
});

const typeReverse = event => {
	event.preventDefault();
	const displayedPhrase = document.querySelector('.phrase-container').innerHTML;
	let typedPhrase = document.querySelector('#phrase').value;
	if(typedPhrase.split("").reverse().join("") !== displayedPhrase){
		document.querySelector('.success').classList.add('d-none');
		return document.querySelector('.failure').classList.remove('d-none');
	}
	document.querySelector('.failure').classList.add('d-none');
	return document.querySelector('.success').classList.remove('d-none');
};

