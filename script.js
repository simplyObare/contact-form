// Form

const form = document.querySelector('form')

// inputs

const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const message = document.querySelector('#message')
const consent = document.querySelector('#consent')

// error message

let firstNameError = document.querySelector('.firstname__error')
let lastNameError = document.querySelector('.lastname__error')
let emailError = document.querySelector('.email__error')
let queryError = document.querySelector('.query__error')
let messageError = document.querySelector('.message__error')
let consentError = document.querySelector('.consent__error')

//success message

let overlay = document.querySelector('.overlay')
let modal = document.querySelector('.modal')
let closeBtn = document.querySelector('.close-btn')

function validateForm(e) {
  e.preventDefault()

  let formValid = true

  firstNameError.textContent = ''
  lastNameError.textContent = ''
  emailError.textContent = ''
  queryError.textContent = ''
  messageError.textContent = ''
  consentError.textContent = ''

  if (firstName.value === '') {
    firstNameError.textContent = 'Please enter your first name'
    firstName.style.border = '1px solid var(--Red)'
    formValid = false
  }

  if (lastName.value === '') {
    lastNameError.textContent = 'Please enter your last name'
    lastName.style.border = '1px solid var(--Red)'
    formValid = false
  }

  if (email.value === '') {
    emailError.textContent = 'Please enter your email address'
    email.style.border = '1px solid var(--Red)'
    formValid = false
  } else if (!email.value.includes('@')) {
    emailError.textContent = 'Please enter a valid email address'
    formValid = false
  }

  if (!general.checked && !support.checked) {
    queryError.textContent = 'Please select a query type'
    formValid = false
  }

  if (message.value === '') {
    messageError.textContent = 'Please enter a message'
    message.style.border = '1px solid var(--Red)'
    formValid = false
  }

  if (!consent.checked) {
    consentError.textContent =
      'To submit this form, Please consent to being contacted'
    formValid = false
  }

  if (formValid) {
    overlay.style.display = 'block'
    modal.style.display = 'block'
    firstName.value = ''
    lastName.value = ''
    email.value = ''
    message.value = ''
    general.checked = false
    support.checked = false
    consent.checked = false
    firstName.style.border = '1px solid var(--Grey-medium)'
    lastName.style.border = '1px solid var(--Grey-medium)'
    email.style.border = '1px solid var(--Grey-medium)'
    message.style.border = '1px solid var(--Grey-medium)'
  }
}

form.addEventListener('submit', validateForm)

overlay.addEventListener('click', () => {
  overlay.style.display = 'none'
  modal.style.display = 'none'
})

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none'
  modal.style.display = 'none'
})
