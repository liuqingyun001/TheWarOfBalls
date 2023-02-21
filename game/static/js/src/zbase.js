export class BallsWar {
    constructor(id) {
        this.id = id;
        this.$balls_war = $('#' + id);
        //this.menu = new BallsWarMenu(this);
        this.playground = new BallsWarPlayground(this);
        
        this.start();
    }

    start(){

    }
}