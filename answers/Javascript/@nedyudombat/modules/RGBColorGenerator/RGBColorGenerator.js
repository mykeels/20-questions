window.addEventListener('load', () => {
	const rgbValues =  [];
	let numbers = '';
	for(let i = 0; i < 3; i +=1 ) {
		rgbValues.push(Math.floor(Math.random()* 256) + 0);
	}
	document.querySelector('.color-code').innerHTML = `rgb(${rgbValues})`;
	document.querySelector('.color-sample').style.background = `rgb(${rgbValues})`;

	console.log(rgbValues);
})