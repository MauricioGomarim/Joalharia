const btnMobile = document.querySelector(".btn-hamburguer")


function toggleMenu(){
    const icons = document.querySelector('.icons')

    icons.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)