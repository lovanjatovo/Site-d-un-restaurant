// manger.js : le bouton MANGER fait défiler la page vers les plats.
// Fichier indépendant : il ne modifie pas script.js.

// Section vers laquelle on défile (change ce sélecteur si besoin) :
//   '.templates' -> les cartes de recettes (Milkshakes, Matcha...)
//   '#main2'     -> toute la section, en commençant par le formulaire
const CIBLE = '.templates';

const boutonManger = document.querySelector('#manger');
const cible = document.querySelector(CIBLE);

if (boutonManger && cible) {
    boutonManger.addEventListener('click', () => {
        // Respecte le réglage "réduire les animations" de l'appareil
        const reduireAnimation = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        cible.scrollIntoView({
            behavior: reduireAnimation ? 'auto' : 'smooth',
            block: 'start'
        });
    });
}