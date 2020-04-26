export default function Snake(canvas, ctx, scale) {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    this.dir;

    this.draw = function () {
        ctx.fillStyle = '#24de2f';
        ctx.strokeStyle = '#000000';

        for (let i = 0; i < this.tail.length; i++) {
            ctx.strokeRect(this.tail[i].x, this.tail[i].y, scale, scale);
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);

        }

        ctx.fillStyle = '#08900d';

        ctx.strokeRect(this.x, this.y, scale, scale);
        ctx.fillRect(this.x, this.y, scale, scale);

    };

    ctx.stroke();

    this.update = function () {
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }

        this.tail[this.total - 1] = { x: this.x, y: this.y };

        this.x += this.xSpeed;
        this.y += this.ySpeed;


        if (this.x > canvas.width) {
            this.x = 0;
        }
        if (this.y > canvas.height) {
            this.y = 0;
        }
        if (this.x < 0) {
            this.x = canvas.width;
        }
        if (this.y < 0) {
            this.y = canvas.height;
        }


    };

    this.changeDirection = function (direction) {
        if (direction === 'Up' && this.dir !== 'Down') {
            this.dir = 'Up';
            this.xSpeed = 0;
            this.ySpeed = -scale * 1;
        } else if (direction === 'Down' && this.dir !== 'Up') {
            this.dir = 'Down';
            this.xSpeed = 0;
            this.ySpeed = scale * 1;
        } else if (direction === 'Left' && this.dir !== 'Right') {
            this.dir = 'Left'
            this.xSpeed = -scale * 1;
            this.ySpeed = 0;
        } else if (direction === 'Right' && this.dir !== 'Left') {
            this.dir = 'Right'
            this.xSpeed = scale * 1;
            this.ySpeed = 0;
        }
    };

    this.eat = function (fruit) {

        if (this.x === fruit.x && this.y === fruit.y) {
            this.total++;
            return true;
        }

        return false;
    };

    this.checkCollision = function () {
        for (let i = 0; i < this.tail.length; i++) {

            if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
                return true;
            }
        }
    };

    this.reset = function () {
        this.total = 0;
        this.tail = [];
    };

}