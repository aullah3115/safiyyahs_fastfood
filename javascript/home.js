document.addEventListener('DOMContentLoaded', () => {
  let ctaButton = document.querySelector('.cta-button');
  console.log(ctaButton)
  ctaButton.addEventListener('click', (event) => {
    console.log(event)
    window.location.href = '/menu';
  })

})