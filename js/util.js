import { photoObj, nameFolov, maximum, text, arrText, pictures, template, bigPicture, bigPictureS, cancelButton, commentsCount, body, socialCaption, description, socialComment, avatar } from './data.js';

//4.9. Больше деталей
export default function test() {

  function randomLikes(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  randomLikes(200, 15);

  function comment() {
    nameFolov.map((nam, index) => ({
      comments: {
        id: index,
        avatar: `img/avatar-${Math.floor(Math.random() * maximum)}.svg`,
        message: `${text[arrText]}`,
        name: nam,
      }
    }
    ));
  }
  comment();


  //ДЗ 7.1
  //   const massiv = Object.keys(photoObj);
  //  console.log(massiv);


  photoObj.forEach((i) => {
    const clonePopup = template.querySelector('.picture').cloneNode(true);
    const pictureImg = clonePopup.querySelector('.picture__img');
    pictureImg.src = `photos/${i.url}.jpg`;
    pictureImg.setAttribute('data-id', `${i.id}`);

    clonePopup.querySelector('.picture__likes').textContent = randomLikes(15, 200);
    clonePopup.querySelector('.picture__comments').textContent = text.length;
    pictures.append(clonePopup);
  });

  const bigPict = bigPictureS.querySelector('img');
  const likesCount = document.querySelector('.likes-count');

  //ДЗ 7.2


  const pictureLikes = document.querySelectorAll('.picture__likes');
  pictures.addEventListener('click', (evt) => {
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open');

    document.querySelector('.social__comment-count').classList.add('hidden'); // временная hidden
    document.querySelector('.comments-loader').classList.add('hidden');// временная hidden

    bigPict.src = evt.target.src;

    const id = Number(evt.target.dataset.id);
    likesCount.innerHTML = pictureLikes[id].innerHTML;

    commentsCount.innerHTML = text.length;

    description.forEach((i) => {
      socialCaption.innerHTML = i.opis;
    });

    avatar.forEach((ava) => {
      const social = socialComment.querySelector('.social__comment').cloneNode(true);
      const socialText = social.querySelector('.social__text');
      const socialPicture = social.querySelector('.social__picture');
      socialPicture.src = `img/${ava.url}.svg`;

      nameFolov.forEach((nam) => {
        socialPicture.alt = nam.name;
      });
      text.forEach((tex) => {
        socialText.innerHTML = tex;
      });

      socialComment.append(social);

    });
    socialComment.removeChild(socialComment.children[0]);
    socialComment.removeChild(socialComment.children[0]);
  });


  cancelButton.onclick = function (e) {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  };

  cancelButton.keydown =function(e) {
    console.log(e.keyCode);
    if (e.keyCode === 27) {
      bigPicture.classList.add('hidden');
      body.classList.remove('modal-open');
    }
};
}
test();

// ДЗ 2
// function randomNumber(min, max) {
//   const r = Math.random() * (max - min);
//   (Math.floor(r) === 0) ? console.log('это 0') :
//     (max > min) ? console.log('min меньшу max') :
//       (max < min) ? console.log('max меньшу min') : console.log('что то другое');
// }

// randomNumber(0, 10);

// function longLine(string_check, maximum_length) {
//   return (string_check.length === maximum_length);
// }
// longLine("Hi", 2);

// function getRandomPositiveInteger(a, b) {

//   const array = a.concat(b);
//   let minArray = Math.min.apply(null, array);
//   let maxArray = Math.max.apply(null, array);

//   const lower = Math.ceil(Math.min(Math.abs(minArray), Math.abs(maxArray)));
//   const upper = Math.floor(Math.max(Math.abs(minArray), Math.abs(maxArray)));

//   const result = Math.random() * (upper - lower + 1) + lower;

//   return Math.floor(result);
// }

// getRandomPositiveInteger([1.2, -0.5, 4.6,], [6.6, 2.1, -3.3]);

// function checkStringLength(string, length) {
//   return string.length <= length;
// }
// checkStringLength('var', 'bard');
