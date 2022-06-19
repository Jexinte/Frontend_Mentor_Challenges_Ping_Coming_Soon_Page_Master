const mailInput = document.getElementById('mail')
const errorMail = document.querySelector('.errormail')
const form = document.querySelector('form')

const regexMail = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/)
form.addEventListener('submit',(e) => {
    e.preventDefault()

    switch(regexMail.test(mailInput.value)) {

        case false:
            errorMail.style.display = "block"
            errorMail.textContent = "Please provide a valid email adress"
            mailInput.placeholder = "example@email/com"
            mailInput.style.border = "1px solid red"
            break;

            default:
                errorMail.style.display = "none"
                errorMail.textContent = ""
                mailInput.placeholder = "example@email/com"
                mailInput.style.border = "1px solid var(--paleBlue)"
    }
    
})