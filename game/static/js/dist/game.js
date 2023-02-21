class BallsWarMenu {
    constructor(root) {
        this.root = root;
        this.$menu = $(`
<div class="balls_war_menu">
    <div class="balls_war_menu_field">
        <div class="balls_war_menu_field_item balls_war_menu_field_item_single_mode">
            SOLOPLAY
        </div>
        </br>
        <div class="balls_war_menu_field_item balls_war_menu_field_item_multi_mode">
            TEAMPLAY
        </div>
        </br>
        <div class="balls_war_menu_field_item balls_war_menu_field_item_settings_mode">
            SETTINGS
        </div>
    </div>
</div>
`);
        this.root.$balls_war.append(this.$menu);
        this.$single_mode = this.$menu.find('.balls_war_menu_field_item_single_mode');
        this.$multi_mode =this.$menu.find('.balls_war_menu_field_item_multi_mode');
        this.$settings_mode = this.$menu.find('.balls_war_menu_field_item_settings_mode');

        this.start();
    }

    start(){
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$single_mode.click(function(){
            outer.hide();
            outer.root.playground.show();
        });
        this.$multi_mode.click(function(){
            console.log("enter multi mode");
        });
        this.$settings_mode.click(function(){
            console.log("click settings mode");
        });
    }

    show(){
        this.$menu.show();
    }

    hide(){
        this.$menu.hide();
    }
}
let BALLS_WAR_OBJECTS = [];

class BallsWarObject {
    constructor(){
        BALLS_WAR_OBJECTS.push(this);
        this.has_called_start = false;
        this.timedelate = 0;
    }

    start() {

    }

    uodate() {

    }

    on_destory() {

    }

    destory() {
        this.on_destory();
        for(let i = 0;i < BALLS_WAR_OBJECTS.length;i ++){
            if(BALLS_WAR_OBJECTS[i] === this) {
                BALLS_WAR_OBJECTS.splice(i,1);
                break;
            }
        }
    }
}

let last_timestap;
let BALLS_WAR_ANUMATION = function(timstrap){
    for(let i = 0;i < BALLS_WAR_OBJECTS.length;i ++) {
        let obj = BALLS_WAR_OBJECTS[i];
        if(!obj.has_called_start){
            obj.start();
            obj.has_called_start = true;
        }else {
            obj.timedelate = timstrap - last_timestap;
        }
    }
    last_timestap = timstrap;
    requestAnimationFrame(BALLS_WAR_ANUMATION);
};

requestAnimationFrame(BALLS_WAR_ANUMATION);class GameMap extends BallsWarObject {
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
        this.update();
    }

    render() {
        this.ctx.fillStyle = "rgba(0 , 0, 0)";
        this.ctx.fillRect(0 , 0, this.ctx.canvas.width, this.ctx.canvas.height);
        console.log("render");
    }
    update() {
        this.render();
        console.log("123")
    }

}class BallsWarPlayground {
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
}export class BallsWar {
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