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

function getRandomPositiveInteger (a, b) {


  const array = a.concat(b);
  let minArray = Math.min.apply(null, array);
  let maxArray = Math.max.apply(null, array);
  console.log(minArray, 'min');
  console.log(maxArray, 'max');

  const lower = Math.ceil(Math.min(Math.abs(minArray), Math.abs(maxArray)));
  const upper = Math.floor(Math.max(Math.abs(minArray), Math.abs(maxArray)));
console.log(lower);
console.log(upper);


  const result = Math.random() * (upper - lower + 1) + lower;



  return Math.floor(result);
}

 console.log(getRandomPositiveInteger([1.2, -0.5, 4.6,], [6.6, 2.1, -3.3]));

 function checkStringLength (string, length) {
  return string.length <= length;
}
console.log(checkStringLength('var', 'bard'));





//4.9. Больше деталей

const id = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
  11: '11',
  12: '12',
  13: '13',
  14: '14',
  15: '15',
  16: '16',
  17: '17',
  18: '18',
  19: '19',
  20: '20',
  21: '21',
  21: '21',
  22: '22',
  23: '23',
  24: '24',
  25: '25',
};
const massiv = Object.keys(id);

function test(){
for (let i = 0; i < massiv.length; i++){
  const url = `photos/${massiv[i]}.jpg`;
  console.log(url);
  }

  const description = {
    op1: 'первое',
    op2: 'второе',
    op3: 'третье',
    op4: 'четв',
    op5: 'пятое',
  }
  console.log(description);

  function randomLikes(max, min){
    return Math.floor(Math.random() * (max - min) + min);
  }
  console.log(randomLikes(200, 15));


function comment(){
   const name = ["Vasi", "Peti", "Andre"];
   const max = 6;
   const text = ["Всё отлично!", "В целом всё неплохо. Но не всё."];
   const arrText = Math.floor(Math.random() * text.length);
  let arr = name.map((nam, index) => ({
    comments : {
      id: index,
      avatar: `img/avatar-${Math.floor(Math.random() * max)}.svg`,
      message: `${text[arrText]}`,
      name: nam,
    }

    }
    ));
    console.log(arr)
  }
  console.log(comment())


}
console.log(test());


