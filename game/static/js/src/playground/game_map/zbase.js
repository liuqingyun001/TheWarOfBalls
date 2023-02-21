class GameMap extends BallsWarObject {
    constructor(playground) {
        super();
        this.playground = playground;
        this.$canvas = $('<canvas></canvas>');
        this.ctx = this.$canvas[0].getContext('2d');
        this.ctx.canvas.width = this.playground.width;
        this.ctx.canvas.height = this.playground.height;
        //console.log(this.ctx);
        this.playground.$playground.append(this.$canvas);

    }

    start() {
        //this.render();
    }

    update() {
        this.render();
        //console.log("123")
    }

    render() {
        this.ctx.fillStyle = "rgba(0 , 0, 0)";
        this.ctx.fillRect(0 , 0, this.ctx.canvas.width, this.ctx.canvas.height);
        //console.log("render");
    }

}