function multiplicationTable() {
  let emptyArr = [];
  for (let i = 1; i <= 12; i++) {
    for (let j = 2; j <= 12; j++) {
      emptyArr.push(i * j);
    }
  }
  return emptyArr;
}
