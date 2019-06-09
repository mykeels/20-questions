 const displayresult = (event) => {
  event.preventDefault();
	const formData = new FormData(document.querySelector('#concatenationForm'));
  const user = {};
  for (const [key, value] of formData.entries()) {
    user[key] = value;
  }
  if (user.firstname === "" && user.lastname === ""){
    return document.querySelector('.result').innerHTML = `<p> Welcome Mr/Mrs No name, Please how may we call you, atleast we know you are ${user.age} years old </p>`;
  }
  return document.querySelector('.result').innerHTML = `<p> Welcome ${user.firstname} ${user.lastname}, you are ${user.age} years old </p>`;
}