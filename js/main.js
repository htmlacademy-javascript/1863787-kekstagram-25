function randomNumber(min, max){
  const r = Math.random()*(max-min);
  (Math.floor(r) === 0) ?  console.log('это 0') :
  (max > min) ? console.log('min меньшу max') :
  (max < min) ? console.log('max меньшу min') : console.log('что то другое');
}

randomNumber(0, 10);




function longLine(string_check, maximum_length){
 return (string_check.length === maximum_length);
}
console.log(longLine("Hi", 2));

