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