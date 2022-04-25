import './util.js';
import { socialLoader, commentsCount, socialCount, template, pictures, bigPicture, body, socialComment, socialCaption, bigPictureS } from './data.js'
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
    data.slice().forEach((i) => {
      const clonePopup = template.querySelector('.picture').cloneNode(true);
      const pictureImg = clonePopup.querySelector('.picture__img');
      pictureImg.src = `${i.url}`;
      pictureImg.setAttribute('data-id', `${i.id}`);

      clonePopup.querySelector('.picture__likes').textContent = i.likes;
      clonePopup.querySelector('.picture__comments').textContent = i.comments.length;
      pictures.append(clonePopup);


      const filterRandom = document.querySelector('#filter-random');

      filterRandom.addEventListener('click', () => {

            const item = data[Math.floor(Math.random() * data.length)];
            console.log('dsadsa', item);

            pictures.append(item.innerHTML);



      });

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
        socialCaption.innerHTML = data[id].description;
        const dataId = data[id].comments;
        console.log(dataId, 'dsads');

        dataId.forEach((ava) => {
          const social = socialComment.querySelector('.social__comment').cloneNode(true);
          const socialText = social.querySelector('.social__text');
          const socialPicture = social.querySelector('.social__picture');
          socialPicture.src = `${ava.avatar}`;
          const name = ava.name
          socialPicture.alt = name;
          const message = ava.message
          socialText.innerHTML = message;

          socialComment.append(social);
        });
        socialComment.removeChild(socialComment.children[0]);
        socialComment.removeChild(socialComment.children[0]);



        const commentS = socialComment.querySelectorAll('.social__comment');
        commentsCount.textContent = commentS.length;

        if (dataId.length < 5) {
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



      });
    });
  });
