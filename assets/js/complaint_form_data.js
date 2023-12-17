const scriptURL = 'https://script.google.com/macros/s/AKfycby9qisnORZwWGGEXFynAXlcYs6JPQKsrSvPpojNeDNl5umfQI1wB_CDn0_tGk3qJCwu/exec'

const form = document.forms['complaint-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Your responses has been submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})