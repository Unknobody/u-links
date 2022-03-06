const unknowDevCard = document.getElementById('unknow-dev-card');
const unknowDevAdminCard = document.getElementById('unknow-dev-admin-card');
const facebookCard = document.getElementById('facebook-card');
const twitterCard = document.getElementById('twitter-card');
const githubCard = document.getElementById('github-card');
const wordpressCard = document.getElementById('wordpress-card');
const fontAwesomeCard = document.getElementById('font-awesome-card');
const bootstrapCard = document.getElementById('bootstrap-card');
const codepenCard = document.getElementById('codepen-card');

const infoContainer = document.getElementById('info-container');

const blockQuote = document.getElementById('blockquote');

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

unknowDevCard.addEventListener('mouseenter', () => {
    infoContainer.innerHTML = `
    Unknow Dev est mon site personnel sur lequel je partage mes expériences d'autodidacte.
    `
})

unknowDevCard.addEventListener('mouseleave', () => {
    infoContainer.innerHTML = `
    
    `
})

unknowDevAdminCard.addEventListener('mouseenter', () => {
    infoContainer.innerHTML = `
    Administration de mon site web.
    `
})

unknowDevAdminCard.addEventListener('mouseleave', () => {
    infoContainer.innerHTML = `
    
    `
})


facebookCard.addEventListener('mouseenter', () => {
    infoContainer.innerHTML = `
    Accès à mon compte Facebook personnel.
    `
})

facebookCard.addEventListener('mouseleave', () => {
    infoContainer.innerHTML = `
    
    `
})


twitterCard.addEventListener('mouseenter', () => {
    infoContainer.innerHTML = `
    Accès à mon compte Twitter personnel.
    `
})

twitterCard.addEventListener('mouseleave', () => {
    infoContainer.innerHTML = `
    
    `
})

githubCard.addEventListener('mouseenter', () => {
    infoContainer.innerHTML = `
    Mon compte développeur sur Github.
    `
})

githubCard.addEventListener('mouseleave', () => {
    infoContainer.innerHTML = `
    
    `
})

wordpressCard.addEventListener('mouseenter', () => {
    infoContainer.innerHTML = `
    La documentation Wordpress pour les développeurs
    `
})

wordpressCard.addEventListener('mouseleave', () => {
    infoContainer.innerHTML = `
    
    `
})

fontAwesomeCard.addEventListener('mouseenter', () => {
    infoContainer.innerHTML = `
    Lien vers toutes les icones gratuites de Font Awesome
    `
})

fontAwesomeCard.addEventListener('mouseleave', () => {
    infoContainer.innerHTML = `
    
    `
})

bootstrapCard.addEventListener('mouseenter', () => {
    infoContainer.innerHTML = `
    Lien vers la documentation Bootstrap
    `
})

bootstrapCard.addEventListener('mouseleave', () => {
    infoContainer.innerHTML = `
    
    `
})

codepenCard.addEventListener('mouseenter', () => {
    infoContainer.innerHTML = `
    Lien vers la page d'accueil de Codepen
    `
})

codepenCard.addEventListener('mouseleave', () => {
    infoContainer.innerHTML = `
    
    `
})

console.log(proverbes[Math.floor(Math.random() * proverbes.length)])