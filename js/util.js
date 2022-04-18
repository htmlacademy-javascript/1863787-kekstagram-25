import { photoObj, socialCount, socialLoader, nameFolov, maximum, text, arrText, pictures, template, bigPicture, bigPictureS, cancelButton, commentsCount, body, socialCaption, description, socialComment, avatar } from './data.js';

//4.9. Больше деталей


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

  const renderSimilarList = (photos) => {
      // console.log(photos.url);
  };
  //   photoObj.forEach((i) => {
  //   const clonePopup = template.querySelector('.picture').cloneNode(true);
  //   const pictureImg = clonePopup.querySelector('.picture__img');
  //   pictureImg.src = `photos/${i.url}.jpg`;
  //   pictureImg.setAttribute('data-id', `${i.id}`);

  //   clonePopup.querySelector('.picture__likes').textContent = randomLikes(15, 200);
  //   clonePopup.querySelector('.picture__comments').textContent = text.length;
  //   pictures.append(clonePopup);
  // });

export {renderSimilarList};

  // const bigPict = bigPictureS.querySelector('img');
  // const likesCount = document.querySelector('.likes-count');

  //ДЗ 7.2

  // const pictureLikes = document.querySelectorAll('.picture__likes');
  // const picture = document.querySelectorAll('.picture');
  // picture.forEach((el) => {
  //   el.addEventListener('click', (evt) => {
  //     bigPicture.classList.remove('hidden');
  //     body.classList.add('modal-open');
  //     bigPict.src = evt.target.src;
  //     const id = Number(evt.target.dataset.id);
  //     likesCount.innerHTML = pictureLikes[id].innerHTML;
  //     description.forEach((i) => {
  //       socialCaption.innerHTML = i.opis;
  //     });
  //   });
  // });

  cancelButton.onclick = function () {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  };

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
      body.classList.remove('modal-open');
    }
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
//дз 8
const imgOverlay = document.querySelector('.img-upload__overlay');
const imgCancel = document.querySelector('.img-upload__cancel');
const scaleControl = document.querySelector('.scale__control.scale__control--value');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
imgOverlay.classList.remove('hidden');
const form = document.querySelector('.img-upload__form');
const pristine = new Pristine(form, {
  classTo: 'img-upload__form',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__form-text',
});

//вылидация числа
const imgUploadPreview = document.querySelector('.img-upload__preview');
scaleControl.value = `${Number('100')}%`;
scaleSmaller.addEventListener('click', () => {

  if (scaleControl.value === `${Number('50')}%`) {
    scaleControl.value = Number('50') - 25;
    scaleControl.value += '%';
    imgUploadPreview.style.transform = ('scale(0.25)');
  }
  else if (scaleControl.value === `${Number('75')}%`) {
    scaleControl.value = Number('75') - 25;
    scaleControl.value += '%';
    imgUploadPreview.style.transform = ('scale(0.50)');
  }
  else if (scaleControl.value === `${Number('100')}%`) {
    scaleControl.value = Number('100') - 25;
    scaleControl.value += '%';
    imgUploadPreview.style.transform = ('scale(0.75)');
  }
});

scaleBigger.addEventListener('click', () => {

  if (scaleControl.value === `${Number('25')}%`) {
    scaleControl.value = +Number('25') + +25;
    scaleControl.value += '%';
    imgUploadPreview.style.transform = ('scale(0.50)');
  }
  else if (scaleControl.value === `${Number('50')}%`) {
    scaleControl.value = +Number('50') + +25;
    scaleControl.value += '%';
    imgUploadPreview.style.transform = ('scale(0.75)');
  }
  else if (scaleControl.value === `${Number('75')}%`) {
    scaleControl.value = +Number('75') + +25;
    scaleControl.value += '%';
    imgUploadPreview.style.transform = ('scale(1)');
  }
});

imgCancel.addEventListener('click', () => {
  imgOverlay.classList.add('hidden');
});

//Формы

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    // console.log('Можно отправлять');
  } else {
    // console.log('Форма невалидна');
  }
});
const textHashtags = form.querySelector('.text__hashtags');

textHashtags.addEventListener('keydown', (evenEntr) => {
  if (evenEntr.key === 'Enter') {
    const hashtagsMassiv = textHashtags.value;
    const znak = '@№$%^& ';
    const znakSplit = znak.split('');
    const spliT = hashtagsMassiv.split('');
    const spliT2 = hashtagsMassiv.split('#');

    spliT.forEach((eventSplit) => {
      znakSplit.forEach((znSplit) => {
        if (eventSplit === znSplit) {
          textHashtags.setCustomValidity('недопускются знаки @ № $ % ^ & space');
          textHashtags.reportValidity();
        }
        else if (spliT2.length === 7) {
          textHashtags.setCustomValidity('нельзя больше 5 #');
          textHashtags.reportValidity();
        }
      });
    });

    const count = spliT2.reduce((acc, n) => (acc[n] === (acc[n] || 0) + 1, acc), {});
    const duplicateCount = Object.values(count).filter((n) => n > 1).length;
    if (duplicateCount === 1) {
      textHashtags.setCustomValidity('одинаковые слова');
      textHashtags.reportValidity();
    }
  }
});
//зд 8.2
const commentS = socialComment.querySelectorAll('.social__comment');
commentsCount.textContent = commentS.length;

if (commentS.length < 5) {
  socialCount.innerHTML = `${commentS.length} комментариев`;
}

socialLoader.addEventListener('click', () => {
  commentS.forEach((ivent) => {
    const socialC = ivent.cloneNode(true);
    socialComment.append(socialC);
  });

  const commeS = socialComment.querySelectorAll('.social__comment');
  commentsCount.textContent = commeS.length;
});

//картинки

const effectsList = document.querySelectorAll('.effects__item');
const imgPreview = document.querySelector('.img-upload__preview');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
});

effectsList.forEach((eventEff) => {
  eventEff.addEventListener('change', () => {
    if (eventEff.querySelector('#effect-chrome')) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 0.1,
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', () => {
        valueElement.value = sliderElement.noUiSlider.get();
        imgPreview.style = ' ';
        imgPreview.style.filter = `grayscale(${valueElement.value})`;
      });
    }
    else if (eventEff.querySelector('#effect-sepia')) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 0.1,
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', () => {
        valueElement.value = sliderElement.noUiSlider.get();
        imgPreview.style = ' ';
        imgPreview.style.filter = `sepia(${valueElement.value})`;
      });

    }
    else if (eventEff.querySelector('#effect-marvin')) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 1,
        step: 1,
      });

      sliderElement.noUiSlider.on('update', () => {
        valueElement.value = sliderElement.noUiSlider.get();
        imgPreview.style = ' ';
        imgPreview.style.filter = `invert(${valueElement.value}%)`;
      });

    }
    else if (eventEff.querySelector('#effect-phobos')) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 0.1,
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', () => {
        valueElement.value = sliderElement.noUiSlider.get();
        imgPreview.style = ' ';
        imgPreview.style.filter = `blur(${valueElement.value}px)`;
      });

    }
    else if (eventEff.querySelector('#effect-heat')) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 0.1,
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', () => {
        valueElement.value = sliderElement.noUiSlider.get();
        imgPreview.style = ' ';
        imgPreview.style.filter = `brightness(${valueElement.value})`;
      });

    }
    else if (eventEff.querySelector('#effect-none')) {
      imgPreview.style.filter = ' ';
    }
  });
});


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
