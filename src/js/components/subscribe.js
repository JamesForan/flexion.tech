const subscribe = document.getElementById('subscribe')
if (subscribe) {
  subscribe.addEventListener('submit', e => {
    e.preventDefault();
    processForm(subscribe);
  })
}

const processForm = form => {
    const data = new FormData(form);
    data.append('form-name', 'subscribe');
    console.log(data);
    fetch('/', {
      method: 'POST',
      body: data,
    })
    .then(() => {
        document.querySelector('.subscribe__form').classList.add('.visually-hidden');
        document.querySelector('.thank-you').classList.add('.visually-hidden');
    //   form.innerHTML = `<div class="form--success">Almost there! Check your inbox for a confirmation e-mail.</div>`;
    })
    .catch(error => {
        form.innerHTML = `<div class="form--error">Error: ${error}</div>`;
    })
  }