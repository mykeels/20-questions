window.addEventListener('load', () => {
	const hex = Math.floor(Math.random()*16777215).toString(16);
	document.querySelector('.color-code').innerHTML = `#${hex}`;
	document.querySelector('.color-sample').style.background = `#${hex}`;

	console.log(rgbValues);
})