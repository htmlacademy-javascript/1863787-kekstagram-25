import './util.js';

const pictures = document.querySelector('.pictures');
const template  = document.querySelector('#picture').content;
const pictur = template.querySelector('.picture');
const images  = pictur.querySelectorAll('.picture__img');

pictures.classList.add('hidden');






const photoObj = ['img/avatar-6.svg','img/avatar-5.svg'];


for (let i = 0; i < photoObj.length; i++){


const cloneTemplate = template.cloneNode(true);
template.appendChild(cloneTemplate);


images.forEach((src) => {
    const imag = src.getAttribute("src");
    if (imag === "") {
      src.src = `${photoObj[i]}`;
    }

  })






}

// var fragment = document.createDocumentFragment();
// fragment.appendChild(cloneTemplate);
// console.log(fragment.children);







//    let newPhotos = photoObj.map(photo => {
//    return photo
//     }).join('');

//     fragment.innerHTML  = newPhotos;









    // photoObj.forEach((language) => {
    //     let a = document.createElement('a');
    //     a.innerHTML = language;
    //     fragment.appendChild(a);
    // })
    // content.appendChild(fragment);


