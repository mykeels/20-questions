 const convertToDecimal = event => {
  event.preventDefault();
  const digit = document.querySelector('#digit').value;
  const base = document.querySelector('#base').value;
  let decimalArray =[];
  let decimal = 0;
  for(let n = digit.length -1 ; n >= 0; n -= 1) {
    decimal += digit[n] * Math.pow(base, n);
  }
  return document.querySelector('.result').innerHTML = `<p> ${digit} in base ${base} is equal to ${decimal} </p>`;
}