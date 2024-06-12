 const convertToDecimal = event => {
  event.preventDefault();
  const digit = document.querySelector('#digit').value;
  const base = document.querySelector('#base').value;
  if (base < 2 || base > 36)
   return document.querySelector('.result').innerHTML = `<p> base should be between 2 and 36 </p>`;
  
  const number = parseInt(digit + '', 10).toString(base);
  return document.querySelector('.result').innerHTML = `<p> ${digit} in base 10 is equal to ${number} in base ${base} </p>`;
}