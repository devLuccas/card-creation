const classNames = ["STR", "DEX", "CON", "WIS", "INT", "CHA"];

function setCharacterOption(name, level, clss){
    var nameLabel = document.getElementById("name");
    var levelLabel = document.getElementById("level");
    var classLabel = document.getElementById("class");

    nameLabel.innerHTML = name;
    levelLabel.innerHTML = level;
    classLabel.innerHTML = clss;
}

function getInputData(){
    var inputName = document.getElementById("name-input").value;
    var inputLevel = document.getElementById("level-input").value;
    var inputClass = document.getElementById("class-input").value;

    return [inputName, inputLevel, inputClass];
}

function setCharacterCard() {
    const inputValues = getInputData();
    const attributePoints = generateAttributePoints();

    setCharacterOption(...inputValues);

    setSkillValues(...attributePoints);
    
    changeProgressionBarCSS();

    setLifePlace(attributePoints[2]);
}

function getSkillPlace() {
    return classNames.map(className => document.getElementsByClassName(className)[0]);
}

function setLifePlace(lifeValue) {
    const lifeBox = document.getElementById("life");

    var lifeBoxSpan = lifeBox.getElementsByTagName("span");

    lifeBoxSpan[0].innerHTML = lifeValue*2;
}

function setSkillValues(str, dex, con, wis, int, cha) {
    const values = [str, dex, con, wis, int, cha];
    const skillPlaces = getSkillPlace();

    values.forEach((value, index) => { skillPlaces[index].innerHTML = value; });
}

function getPercentBarProgression(){
    const skillValues = getSkillPlace().map(skill => skill.innerHTML);
    const percentValues = skillValues.map(value => ((value / 18) * 100).toFixed(0) + '%');

    return percentValues;
}

function changeProgressionBarCSS(){
    const percentValues = getPercentBarProgression();

    classNames.forEach((className, index) => {
        document.querySelector(`.${className}`).style.width = percentValues[index];
    });
}

function generateAttributePoints() {
    const arrayAttributePoints = [];

    for (let attribute = 0; attribute < 6; attribute++) {
        const attributePoints = Math.floor(Math.random() * (18 - 8 + 1)) + 8;

        arrayAttributePoints.push(attributePoints);
    }

    return arrayAttributePoints;
}

// function teste() {
//     var teste = document.getElementsByClassName("life")[0];

//     teste.style.color = "#000";

//     console.log(teste);
// }

// teste();