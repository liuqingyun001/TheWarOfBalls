class BallsWarPlayground {
    constructor(root) {
        this.root =root;
        this.$playground = $(`
<div class="balls_war_playground">
</div>
`);
        //this.hide();
        this.root.$balls_war.append(this.$playground);
        this.width = this.$playground.width();
        this.height = this.$playground.height();
        //console.log(this.$playground.height());
        this.game_map = new GameMap(this);
        this.players = [];
        this.players.push(new Player(this, this.width / 2, this.height / 2, this.height / 20, "white", this.height * 0.15 ,true));        

        this.start();
}

    start(){

    }

    show(){
        this.$playground.show();
    }

    hide(){
        this.$playground.hide();
    }
}