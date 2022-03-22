import {id, description, nameFolov, max, text, arrText,pictures, template, formS, photoObj} from'./data.js';


//4.9. Больше деталей
const massiv = Object.keys(id);
for (let i = 0; i < massiv.length; i++){
  const url = `photos/${massiv[i]}.jpg`;
  console.log(url);
  };
export default  function test(){


  function randomLikes(max, min){
    return Math.floor(Math.random() * (max - min) + min);
  }
  console.log(randomLikes(200, 15));



  console.log(description);

function comment(){
   nameFolov;
   max;
   text;
   arrText;
  let arr = nameFolov.map((nam, index) => ({
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
  comment();





formS.classList.add('hidden');



  photoObj.forEach(photo => {

     const clonePopup = template.querySelector('.picture').cloneNode(true);
    clonePopup.querySelector('.picture__img').src = photo.url;
     clonePopup.querySelector('.picture__likes').textContent = randomLikes(15, 200);
     clonePopup.querySelector('.picture__comments').textContent = text.length;


    pictures.append(clonePopup);
     });



}
test();





// ДЗ 2
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











