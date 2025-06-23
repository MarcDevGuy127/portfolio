//selecionando elementos pelo id
const tituloBanner = document.getElementById('tituloBanner');
const headerH1 = tituloBanner.querySelector('h1');

//definindo animacao por elementos e posicoes
tituloBanner.addEventListener('mousemove', (evento) => {
    const header = tituloBanner.getBoundingClientRect();
    const mousePosX = evento.clientX - header.left;
    const mousePosY = evento.clientY - header.top;

    const headerPosX = header.width / 2;
    const headerPosY = header.height / 2;

    const moverX = (mousePosX - headerPosX) * 0.05;
    const moverY = (mousePosY - headerPosY) * 0.05;

    headerH1.style.transform = `translate(${moverX}px, ${moverY}px)`;
});

//animacao de retorno do titulo apos apontar mouse para fora da area do titulo
tituloBanner.addEventListener('mouseleave', () => {
    headerH1.style.transform = `translate(0px, 0px)`;
});