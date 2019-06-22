 const calculateCompoundIterest = event => {
  event.preventDefault();
	const formData = new FormData(document.querySelector('#interestForm'));
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  return document.querySelector('.result').innerHTML = `<p> Compund Interest for ${data.years} years = ${(data.principal * data.rate * data.years)/100} </p>`;
}