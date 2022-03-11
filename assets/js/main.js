const mostVisitedLink = document.getElementById('most-visited-link');
const mostVisitedLinkMobile = document.getElementById('most-visited-link-mobile');
const mostVisitedContainer = document.getElementById('most-visited-container');

const socialLink = document.getElementById('social-link');
const socialLinkMobile = document.getElementById('social-link-mobile');
const socialContainer = document.getElementById('social-container');

const devLink = document.getElementById('dev-link');
const devLinkMobile = document.getElementById('dev-link-mobile');
const devContainer = document.getElementById('dev-container');

const gamesLink = document.getElementById('games-link');
const gamesLinkMobile = document.getElementById('games-link-mobile');
const gamesContainer = document.getElementById('games-container');

const entertainmentLink = document.getElementById('entertainment-link');
const entertainmentLinkMobile = document.getElementById('entertainment-link-mobile');
const entertainmentContainer = document.getElementById('entertainment-container');


const blockQuote = document.getElementById('blockquote');

// Tableau contenant tous les proverbes
let proverbes = [
    `
    <blockquote >
        « Il n’y a qu’une chose qui puisse rendre un rêve impossible, c’est la peur d’échouer. »
    </blockquote>
    <figcaption>— Paulo Coelho</figcaption>
    `,
    `
    <blockquote >
        « Ceux qui abandonnent ne gagnent jamais, ceux qui gagnent n’abandonnent jamais. »
    </blockquote>
    <figcaption>— Napoleon Hill</figcaption>
    `,
    `
    <blockquote >
    « Ceux qui ne croient pas en l’impossible sont priés de ne pas décourager ceux qui sont en train de le faire. »
    </blockquote>
    <figcaption>— Auteur anonyme</figcaption>
    `,
    `
    <blockquote >
    « Rien n’est impossible, seules les limites de nos esprits définissent certaines choses comme inconcevables. »
    </blockquote>
    <figcaption>— Marc Levy</figcaption>
    `,
    `
    <blockquote >
    « L’échec est seulement l’opportunité de recommencer d’une façon plus intelligente. »
    </blockquote>
    <figcaption>— Henry Ford</figcaption>
    `,
    `
    <blockquote >
    « Il n’y a qu’une façon d’échouer, c’est d’abandonner avant d’avoir réussi. »
    </blockquote>
    <figcaption>— Georges Clemenceau</figcaption>
    `,
    `
    <blockquote >
    « Vous n’avez rien à craindre car l’échec est impossible. Vous ne pouvez qu’apprendre, évoluer et devenir meilleur que vous ne l’avez jamais été. »
    </blockquote>
    <figcaption>— Hal Elrod</figcaption>
    `,
    `
    <blockquote >
    « Si vous vivez un moment difficile, ne blâmez pas la vie. Vous êtes juste en train de devenir plus fort. »
    </blockquote>
    <figcaption>— Gandhi</figcaption>
    `,
    `
    <blockquote >
    « Au milieu de toute difficulté se trouve cachée une opportunité. 
    </blockquote>
    <figcaption>— Albert Einstein</figcaption>
    `
]

function randomQuote() {
    return proverbes[Math.floor(Math.random() * proverbes.length)]
}

blockQuote.innerHTML = randomQuote();


function clearAll() {
    if (mostVisitedLink.classList.contains('hide') == false) {
        mostVisitedContainer.classList.add('hide');
    };
    if (socialLink.classList.contains('hide') == false) {
        socialContainer.classList.add('hide');
    };
    if (devLink.classList.contains('hide') == false) {
        devContainer.classList.add('hide');
    };
    if (gamesLink.classList.contains('hide') == false) {
        gamesContainer.classList.add('hide');
    };
    if (entertainmentLink.classList.contains('hide') == false) {
        entertainmentContainer.classList.add('hide');
    };



    if (mostVisitedLinkMobile.classList.contains('hide') == false) {
        mostVisitedContainer.classList.add('hide');
    };
    if (socialLinkMobile.classList.contains('hide') == false) {
        socialContainer.classList.add('hide');
    };
    if (devLinkMobile.classList.contains('hide') == false) {
        devContainer.classList.add('hide');
    };
    if (gamesLinkMobile.classList.contains('hide') == false) {
        gamesContainer.classList.add('hide');
    };
    if (entertainmentLinkMobile.classList.contains('hide') == false) {
        entertainmentContainer.classList.add('hide');
    };




    
}

function show(page) {
    page.classList.remove('hide');
}




mostVisitedLink.addEventListener('click', () => {
    clearAll();
    show(mostVisitedContainer);

})

socialLink.addEventListener('click', () => {
    clearAll();
    show(socialContainer);
})

devLink.addEventListener('click', () => {
    clearAll();
    show(devContainer);
})

gamesLink.addEventListener('click', () => {
    clearAll();
    show(gamesContainer);
})

entertainmentLink.addEventListener('click', () => {
    clearAll();
    show(entertainmentContainer);
})









mostVisitedLinkMobile.addEventListener('click', () => {
    clearAll();    
    show(mostVisitedContainer);
})

socialLinkMobile.addEventListener('click', () => {
    clearAll();
    show(socialContainer);
})

devLinkMobile.addEventListener('click', () => {
    clearAll();
    show(devContainer);
})

gamesLinkMobile.addEventListener('click', () => {
    clearAll();
    show(gamesContainer);
})

entertainmentLinkMobile.addEventListener('click', () => {
    clearAll();
    show(entertainmentContainer);
})

