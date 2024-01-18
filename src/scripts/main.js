document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;
    
    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;
 
        if (posicaoAtual < alturaHero) {
         ocultaElementoDoHeader(); 
        } else {
         exibeElementosDoHeader();
        }
     })
 
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('container--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('conteudo__tabs__button--is-active');

        })
    }
})

function ocultaElementoDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}


function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i <tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('container--is-active');
    }
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll(`[data-tab-button]`);

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('conteudo__tabs__button--is-active');
    }
}
