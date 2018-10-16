
/* ENEMY CLASS - with render and update methods. All moves multiplied by dt */

class Enemy {
    constructor(x,y, speed) {
        this.x = x,
        this.y = y+55,
        this.sprite = 'images/enemy-bug.png',
        this.step = 101,
        this.boundary = this.step * 5,
        this.resetPos = -this.step,
        this.speed = speed
    }
    update(dt) {
        if (this.x < this.boundary) {
            this.x += this.speed * dt;
        } else {
            this.x = this.resetPos;
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
        this.step = 101;
        this.jump = 83;
        this.startX = this.step * 2;
        this.startY = (this.jump * 4) + 55;
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
                && (enemy.x + enemy.step/2 > this.x
                && enemy.x < this.x + this.step/2)){
                this.reset();
            }
        }
        if (this.y == 55){
            this.victory = true;
        }
    }
    handleInput(input) {
        switch (input) {
            case 'left':
                if (this.x > 0) {
                    this.x -= this.step;
                }
                break;
            case 'right':
                if (this.x < this.step * 4){
                    this.x += this.step;
                }
                break;
            case 'down':
                if (this.y < this.jump * 4){
                    this.y += this.jump;
                }
                break;
            case 'up':
                if (this.y > this.jump){
                    this.y -= this.jump;
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
const bug1 = new Enemy(-101,0,200);
const bug2 = new Enemy(-101,83,300);
const bug3 = new Enemy((-101*2.5),83,300);
allEnemies.push(bug1, bug2, bug3);


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
