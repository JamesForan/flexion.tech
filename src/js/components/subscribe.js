const subscribe = document.getElementById('subscribe-form')

if (subscribe) {
  subscribe.addEventListener('submit', e => {
    e.preventDefault();
    processForm(subscribe);
  })
}

const processForm = form => {
    const data = new FormData(form);
    // data.append('form-name', 'subscribe');
    const searchParams = new URLSearchParams();
    for(var pair of data.entries()) {

      searchParams.append(pair[0], pair[1]);
   }
   console.log(searchParams.toString());
   fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: searchParams,
    })
    .then(() => {
        document.querySelector('.subscribe__form').classList.add('.visually-hidden');
        document.querySelector('.thank-you').classList.add('.visually-hidden');
    //   form.innerHTML = `<div class="form--success">Almost there! Check your inbox for a confirmation e-mail.</div>`;
    })
    .catch(error => {
        form.outerHTML = `<div class="form--error">Error: ${error}</div>`;
    })
  }