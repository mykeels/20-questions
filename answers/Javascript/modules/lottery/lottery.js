
const lottery = (event) => {
	event.preventDefault();
	const lotteryNumbers =  [];
	let numbers = '';
	for(let i = 0; i < 3; i +=1 ) {
		lotteryNumbers.push(Math.floor(Math.random()* 10) + 1);
	}
	lotteryNumbers.forEach(number => {
		numbers += `<p class="lottery-number">${number} </p>`;
	})
	document.querySelector('.lottery-numbers-container').innerHTML = numbers;
	if (lotteryNumbers.includes(7)){
	 return	document.querySelector('.result').innerHTML = `<p> Congratulations you won the lottery... psst (anything for the boys?) </p>`;
	}
	return document.querySelector('.result').innerHTML = `<p>Try again! Better luck next time.</p>`;
}