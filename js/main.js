function randomNumber(min, max){
  const r = Math.random()*(max-min);
  if(Math.floor(r) == 0){
  console.log('это 0');
  }else{
    console.log("это не 0");
  }
  if(max > min){
    console.log('min меньшу max');
  }else{
    console.log('max меньшу min');
  }
  console.log(Math.floor(r));
  return Math.floor(r);
}

randomNumber(0, 10);


function longLine(string_check, maximum_length){
for(let i = 0; i < string_check.length; i++){
  if(string_check[i].length == maximum_length){
    console.log("true")
  }else{
    console.log("false")
  }
}
}
longLine(["Hi"], [2]);
