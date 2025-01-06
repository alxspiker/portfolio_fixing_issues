/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message');

(function () {
    emailjs.init({
        publicKey: "l0XsmT6JxbHLOdLaA",
    });
})();
const sendEmail = (e) => {
    e.preventDefault()
    const templateParams = {
        user_name: document.querySelector('input[name="user_name"]').value,
        user_email: document.querySelector('input[name="user_email"]').value,
        message: document.querySelector('textarea[name="message"]').value,
        to_name: 'Sagar Adhikari'
    };
    // serviceID - templateID - templateParams - #form
    emailjs.send('service_ets7ayd', 'template_gh5cnm2', templateParams, e.target)
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent successfully 😉'

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // Clear input fields
            contactForm.reset()


        }, (error) => {
            // Show error message
            contactMessage.textContent = `Message not sent: (${error.text})😭`

        })

}
contactForm.addEventListener('submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '50px',
    origin: 'top',
    duration: 2500,
    delay: 100,
})

sr.reveal(`.home__data, .home__social , .contact__container, .footer__container`)
sr.reveal(`.home__image`, { origin: 'bottom' })
sr.reveal(`.about__data , .skills__data`, { origin: 'left' })
sr.reveal(`.about__image , .skills__content`, { origin: 'right' })
sr.reveal(`.services__card , .projects__card`, { interval: 100 })