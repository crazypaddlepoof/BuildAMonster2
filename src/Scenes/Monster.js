class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.ArmX = 375;
        this.ArmY = 350;
        this.armX = 225;
        this.armY = 350;
        this.LegX = 350;
        this.LegY = 500;
        this.legX = 250;
        this.legY = 500;
        this.HeadX = 300;
        this.HeadY = 175;
        this.EyeX = 300;
        this.EyeY = 125;
        this.NoseX = 300;
        this.NoseY = 175;
        this.MouthX = 300;
        this.MouthY = 225;
        this.FangX = 300;
        this.FangY = 225;
        this.HornX = 310;
        this.HornY = 70;
    

        this.akey = null;
        this.dkey = null;
        
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.Body = this.add.sprite(this.HeadX, this.HeadY, "monsterParts", "body_yellowD.png");
        my.sprite.Larm = this.add.sprite(this.armX, this.armY, "monsterParts", "arm_redA.png");
        my.sprite.Larm.flipX = true;
        my.sprite.Rarm = this.add.sprite(this.ArmX, this.ArmY, "monsterParts", "arm_redA.png");
        my.sprite.Lleg = this.add.sprite(this.legX, this.legY, "monsterParts", "leg_whiteA.png");
        my.sprite.Lleg.flipX = true;
        my.sprite.Rleg = this.add.sprite(this.LegX, this.LegY, "monsterParts", "leg_whiteA.png");
        my.sprite.eye = this.add.sprite(this.EyeX, this.EyeY, "monsterParts", "eye_human_blue.png");
        my.sprite.nose = this.add.sprite(this.NoseX, this.NoseY, "monsterParts", "nose_red.png");
        my.sprite.fang = this.add.sprite(this.FangX, this.FangY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.mouth = this.add.sprite(this.MouthX, this.MouthY, "monsterParts", "mouthC.png"); 
        my.sprite.horn = this.add.sprite(this.HornX, this.HornY, "monsterParts", "detail_dark_antenna_small.png");


        my.sprite.fang.visible = false;

        this.akey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
        
        this.input.keyboard.on('keydown-S', (event) => {
            my.sprite.fang.visible = false;
            my.sprite.mouth.visible = true;
        }); 

        this.input.keyboard.on('keydown-F', (event) => {
            my.sprite.fang.visible = true;
            my.sprite.mouth.visible = false;
        }); 
        
        

        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (this.akey.isDown)
        {
        my.sprite.Body.x -= 5;
        my.sprite.body.x -= 5; 
        my.sprite.Larm.x -= 5;
        my.sprite.Rarm.x -= 5;
        my.sprite.Lleg.x -= 5;
        my.sprite.Rleg.x -= 5;
        my.sprite.eye.x -= 5;
        my.sprite.nose.x -= 5;
        my.sprite.fang.x -= 5;
        my.sprite.mouth.x -= 5;
        my.sprite.horn.x -= 5;
        }

        if (this.dkey.isDown)
        {
        my.sprite.Body.x += 5;
        my.sprite.body.x += 5; 
        my.sprite.Larm.x += 5;
        my.sprite.Rarm.x += 5;
        my.sprite.Lleg.x += 5;
        my.sprite.Rleg.x += 5;
        my.sprite.eye.x += 5;
        my.sprite.nose.x += 5;
        my.sprite.fang.x += 5;
        my.sprite.mouth.x += 5;
        my.sprite.horn.x += 5;

        }



    }



}