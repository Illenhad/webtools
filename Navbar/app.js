document.addEventListener('scroll', () => {

    const navbar = document.querySelector('nav')
    const title = document.getElementById('nav-title')
    console.log(title)
    if (document.scrollingElement.scrollTop > 45) {
        title.classList.add('visible')
        navbar.classList.add('dark')
    } else {
        title.classList.remove('visible')
        navbar.classList.remove('dark')
    }

})
