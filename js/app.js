/*
Enemy notes:
1. All variables applied to each instance go here.
    a. The enemy image/sprite as well as a helper to easily load images have been provided.

2. Required enemy methods, properties, and functionality:
    a. Method - Render the enemy on the screen
    b. Method - update the enemy's position
        b1. Parameter - dt, a time delta between ticks
        b2. Functionality - multiply moves by dt so game runs at same speed for all PCs.
*/

//Enemy class with update and render methods
class Enemy {
    constructor() {
        this.x = 0,
        this.y = 55,
        this.sprite = ['images/enemy-bug.png'],
        this.step = 101,
        this.boundary = this.step * 5,
        this.resetPos = -this.step
    }
    update(dt) {
        if (this.x < this.boundary) {
            this.x += 200 * dt;
        } else {
            this.x = this.resetPos;
        }
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

/*
Player class notes:
1. Write a player class with the following methods:
    a. update()
    b. render()
    c. handleInput()
*/

//Hero class with render, update, and handleInput methods
class Player {
    constructor() {
        this.x = 0,
        this.y = 0,
        this.sprite = ['images/char-boy.png']
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    update(dt) {

    }
    handleInput() {

    }
};

/*
Object instantiation:
1. Place all enemy objects in an array called allEnemies
2. Place the player object in a variable called player
*/

const allEnemies = [];
const player = new Player();
const bug1 = new Enemy();
const bug2 = new Enemy();
const bug3 = new Enemy();
allEnemies.push(bug1, bug2, bug3);
console.log(allEnemies);


/*
Key Press event listener notes:
1. listen for key presses and send keys to Player.handleInput() method.
*/
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    }
    player.handleInput(allowedKeys[e.keyCode]);
});
