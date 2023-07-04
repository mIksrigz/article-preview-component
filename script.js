window.addEventListener('load', () => {
  const article = document.querySelector('.article');

  const articleFooter1 = document.querySelector('#article-footer1');
  const articleFooter2 = document.querySelector('#article-footer2');
  const cloud = document.querySelector('.cloud');
  article.addEventListener('click', e => {

    if (e.target.matches('.arrow-container') || e.target.matches('.arrow')) {

      if (window.innerWidth < 601) {
        articleFooter1.classList.toggle('hide');
        articleFooter2.classList.toggle('hide');
      } else {
        cloud.classList.toggle('hide');
      }
    }
  });
});