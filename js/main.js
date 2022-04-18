import './util.js';
import { renderSimilarList } from './util.js';
import { template, pictures, bigPicture, body, description, socialCaption, bigPictureS } from './data.js'
// дз 10

const formId = document.querySelector('#upload-select-image');

fetch('https://25.javascript.pages.academy/kekstagram/data')

  .then((response) => {
    console.log(response.status);
    console.log(response.ok);
    return response.json();
  })
  .then((data) => {
    console.log('Результат', data);
    data.forEach((i) => {
      const clonePopup = template.querySelector('.picture').cloneNode(true);
      const pictureImg = clonePopup.querySelector('.picture__img');
      pictureImg.src = `${i.url}`;
      pictureImg.setAttribute('data-id', `${i.id}`);

      clonePopup.querySelector('.picture__likes').textContent = i.likes;
      clonePopup.querySelector('.picture__comments').textContent = i.comments.length;
      pictures.append(clonePopup);
    });
    const bigPict = bigPictureS.querySelector('img');
    const likesCount = document.querySelector('.likes-count');
    const pictureLikes = document.querySelectorAll('.picture__likes');
    const picture = document.querySelectorAll('.picture');
    picture.forEach((el) => {
      el.addEventListener('click', (evt) => {
        bigPicture.classList.remove('hidden');
        body.classList.add('modal-open');
        bigPict.src = evt.target.src;
        const id = Number(evt.target.dataset.id);
        likesCount.innerHTML = pictureLikes[id].innerHTML;
        data.forEach((descr) => {
          socialCaption.innerHTML = descr.description;
        });
      });
    });
  })
  .then((wizards) => {
    renderSimilarList(wizards);
  })

