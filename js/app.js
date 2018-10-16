
/* ENEMY CLASS - with render and update methods. All moves multiplied by dt */

class Enemy {
    constructor(x,y, speed) {
        this.x = x,
        this.y = y+55,
        this.sprite = 'images/enemy-bug.png',
        this.moveX = 101,
        this.edge = this.moveX * 5,
        this.posReset = -this.moveX,
        this.speed = speed
    }
    update(dt) {
        if (this.x < this.edge) {
            this.x += this.speed * dt;
        } else {
            this.x = this.posReset;
        }
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

/* PLAYER CLASS - with update, render, and handleInput methods */

class Player {
    constructor() {
        this.sprite = 'images/char-boy.png';
        this.moveX = 101;
        this.moveY = 83;
        this.startX = this.moveX * 2;
        this.startY = (this.moveY * 4) + 55;
        this.x = this.startX;
        this.y = this.startY;
        this.victory = false;
    }
    reset() {
        this.x = this.startX;
        this.y = this.startY;
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    update() {
        for (let enemy of allEnemies){
            if (this.y === enemy.y
                && (enemy.x + enemy.moveX/2 > this.x
                && enemy.x < this.x + this.moveX/2)){
                this.reset();
            }
        }
        if (this.y == 55) {
            this.victory = true;
        }
    }
    handleInput(input) {
        switch (input) {
            case 'left':
                if (this.x > 0) {
                    this.x -= this.moveX;
                }
                break;
            case 'right':
                if (this.x < this.moveX * 4){
                    this.x += this.moveX;
                }
                break;
            case 'down':
                if (this.y < this.moveY * 4){
                    this.y += this.moveY;
                }
                break;
            case 'up':
                if (this.y > this.moveY){
                    this.y -= this.moveY;
                }
                break;
        }
    }
};

/*
Object instantiation:
1. Place all enemy objects in an array called allEnemies
2. Place the player object in a variable called player
*/

const allEnemies = [];
const player = new Player();
const bug1 = new Enemy(-101, 0, 210);
const bug2 = new Enemy(-101, 83, 300);
const bug3 = new Enemy((-101 * 2.5), (83 * 2), 250);
    allEnemies.push(bug1, bug2, bug3);


/*
const bug2 = new Enemy(-101,83,300);
const bug3 = new Enemy((-101*2.5),83,300);
allEnemies.push(bug1, bug2, bug3);

*/
/*
Key Press event listener notes:
1. listen for key presses and send keys to Player.handleInput() method.
*/
document.addEventListener('keydown', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    }
    player.handleInput(allowedKeys[e.keyCode]);
});
