function dragon() {
    const food = 'bread';
    const breath = 'fire';
    let damage = 10;

    function levelUp(params) {
        damage += 20;
    }

    function preference() {
        return "I like " + food;
    }

    function attack() {
        return `I attack you with ${breath} for ${damage} damage`;
    }

    return {preference, attack, levelUp}
}

const myDragon = dragon();

myDragon.preference();

console.log(myDragon.attack());

myDragon.levelUp();

console.log(myDragon.attack());
