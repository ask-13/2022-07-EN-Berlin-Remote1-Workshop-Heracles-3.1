/** Part for the starting instanciation */
/** creating the hero Heracles */
const heracles = new Hero('👨 Heracles', 20, 6, './images/heracles.svg',1,1);

/** Creating his weapon and associating it */
const weapon = new Weapon('sword', 10, './images/sword.svg');
heracles.weapon = weapon;

/** Creating his shield and associating it */
const shield = new Shield('shield', 10, './images/shield.svg');
heracles.shield = shield;

/** Creating all of his adversaries */
const bird1 = new Monster('Bird', 25, 12, './images/bird.svg',2,2);
const bird2 = new Monster('Bird', 25, 12, './images/bird.svg',3,3);
const bird3 = new Monster('Bird', 25, 12, './images/bird.svg',5,5);

/** Creating the hero section in the html */
const fighterHtml = new FightersTemplate('fighters');
fighterHtml.createTemplate(heracles, bird1);

/** Your code goes here */

class Hero extends Fighter {
  constructor (name, strength, dexterity, image, x,y, weapon, shield){
    super(name, strength, dexterity, image,x,y);
    this.weapon = weapon;
    this.shield = shield;
    
  } 
  getDamage() {
    return this.weapon ?
      this.strength + this.weapon.damage :
      this.strength;
  }
  getDefense() {
    return this.shield ?
      this.dexterity + this.shield.protection :
      this.dexterity;
  }
};
class Monster extends Fighter{
  constructor(name, strength, dexterity, image,x,y){
    super(name, strength, dexterity, image,x,y);
  }
};
let Arena = [heracles, bird1, bird2, bird3];
const ArenaHTML = new ArenaTemplate('arena');
ArenaHTML.createArena(Arena);

/** Do not touch => allow the opening / closing of the hero information section */
let openingModal = true;
const openModal = () => {
  if (openingModal) {
    const heroInfo = new HeroInfoTemplate('heroInfo');
    heroInfo.createHeroInfoTemplate(heracles);
    document.getElementById("heroInfo").style.display = "flex";
    openingModal = false;
  }
}

const closeModal = () => {
  const heroInfo = document.getElementById("heroInfo");
  heroInfo.style.display = "none";
  heroInfo.innerHTML = "";
  openingModal = true;
}