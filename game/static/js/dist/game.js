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
        this.timdelta = 0;
    }

    start() {

    }

    update() {

    }

    on_destroy() {

    }

    destroy() {
        this.on_destroy();
        for(let i = 0;i < BALLS_WAR_OBJECTS.length;i ++){
            if(BALLS_WAR_OBJECTS[i] === this) {
                BALLS_WAR_OBJECTS.splice(i,1);
                break;
            }
        }
    }
}

let last_timestamp;
let BALLS_WAR_ANIMATION = function(timestamp){
    for(let i = 0;i < BALLS_WAR_OBJECTS.length;i ++) {
        let obj = BALLS_WAR_OBJECTS[i];
        if(!obj.has_called_start){
            obj.start();
            obj.has_called_start = true;
        }else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(BALLS_WAR_ANIMATION);
};

requestAnimationFrame(BALLS_WAR_ANIMATION);class GameMap extends BallsWarObject {
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

    render() {
        this.ctx.fillStyle="rgba(0 , 0, 0, 0.3)";
        this.ctx.fillRect(0 , 0, this.ctx.canvas.width, this.ctx.canvas.height);
        //console.log("render");
    }

    start() {
        //this.render();
    }

    update() {
        this.render();
        //console.log("123")
    }
}class Player extends BallsWarObject {
    constructor(playground, x, y ,radius, color, speed , is_me){
        super();
        this.playground =playground;
        this.ctx = this.playground.game_map.ctx;
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.radius = radius;
        this.color =color;
        this.speed = speed;
        this.is_me = is_me;
        this.eps = 0.1;
    }

    add_listening_events() {
        let outer = this;
        this.playground.game_map.$canvas.on("contextmenu", function() {
            return false;
        });
        this.playground.game_map.$canvas.mousedown(function(e){
            if(e.witch === 3) {
                outer.move_to(e.clientx, e.clienty);
            }
        });
    }

    move_to(tx, ty) {
        console.log("move to ",tx," ", ty);
    }

    start(){
        if(this.is_me){
            this.add_listening_events();
        }
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.render();
    }

    render() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
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