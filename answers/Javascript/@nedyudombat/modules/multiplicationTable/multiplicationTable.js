window.addEventListener('load', () => {
	for (let i = 1; i < 13; i += 1) {
		for (let j = 2; j < 13; j += 1) {
			let node = document.createElement("div");
			node.classList.add('col', 'span_1_of_11')
			node.innerHTML= `${j*i}`;
			document.querySelector(".table").appendChild(node);
		}
	}

	for (let i = 2; i < 13; i += 1) {
		let node = document.createElement("div");
			node.classList.add('col', 'span_1_of_11')
			node.innerHTML= `${i}`;
			document.querySelector(".parent-2").appendChild(node);
	}
});
