const readFile = () => {
  const file = document.querySelector('#file').files[0];
  const reader = new FileReader();
  reader.onload = function(progressEvent){
		let lines = this.result.split('\n');
		lines.forEach(line => {
			document.querySelector('.result').innerHTML += `${line}<br>`;
		})
  };
	reader.readAsText(file);
};
const readFile2 = () => {
  const file = document.querySelector('#file2').files[0];
  const reader = new FileReader();
  reader.onload = function(progressEvent){
		let lines = this.result.split('\n');
		lines.forEach(line => {
			document.querySelector('.result').innerHTML += `${line}<br>`;
		})
  };
	reader.readAsText(file);
};