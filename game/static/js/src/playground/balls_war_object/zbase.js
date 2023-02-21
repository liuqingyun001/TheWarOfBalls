
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

requestAnimationFrame(BALLS_WAR_ANUMATION);