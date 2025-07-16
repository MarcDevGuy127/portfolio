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

//botao de trocar tema
document.addEventListener('DOMContentLoaded', function () {
    const themeSwitcher = document.getElementById('themeSwitcher');
    const lightIcon = themeSwitcher.querySelector('.theme-icon-light');
    const darkIcon = themeSwitcher.querySelector('.theme-icon-dark');

    //verifica o tema selecionado ou usa o tema selecionado
    const savedTheme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-bs-theme', savedTheme);

    //configura o icone inicial
    if (savedTheme === 'dark') {
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'inline';
    }

    themeSwitcher.addEventListener('click', function () {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        //aplicar novo tema
        document.documentElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        //icones do botao
        if (newTheme === 'dark') {
            lightIcon.style.display = 'none';
            darkIcon.style.display = 'inline';
        } else {
            lightIcon.style.display = 'inline';
            darkIcon.style.display = 'none';
        }
    });
});
