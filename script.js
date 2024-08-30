let textos = document.querySelectorAll('.animate');

window.onscroll = () => {
    textos.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 750;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height){
            sec.classList.add('show-animate');
        }
    })
} 