function body(){
    const secoesPagina = document.querySelectorAll('.secao');

    secoesPagina.forEach(item => {
        item.addEventListener('click', scrollToIdOnClick);
    });
}

function scrollToIdOnClick(event){
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const section = document.querySelector(id).offsetTop;
    
    window.scroll({
        top: section - 150,
        behavior: "smooth",
    });
}
