class Battler {
    constructor(health,atk,def) {
        this.health = health;
        this.atk = atk;
        this.def = def;
        this.block = false
    }
}
//This is the Base class for all the fighters


class Enemy extends Battler{
    constructor(name,lvl,health,atk,def){
        super(health * lvl,atk * lvl,def * lvl);
        this.name = name;
        this.lvl = lvl;
    }
}
//This is the class for the Enemies

class Player extends Battler{
    constructor(items,health,atk,def){
        super(health,atk,def);
        this.items = items
        this.name = 'Player'
    }
}
//This is the class for the Player


class Menu {
    constructor(player,enemys){
        this.player = player;
        this.enemys = enemys;
    }
    Start() {
        let statusMessage = `Player: ${this.player.health}\n`
        for (let i = 0; i < this.enemys.length; i++){
            statusMessage += `lvl.${this.enemys[i].lvl} ${this.enemys[i].name}: ${this.enemys[i].health}\n`
        }
         //This creates the status message that tells the player thier health and the health of all enemies.
        
        let fullStatusMessage = statusMessage;
        let selecion = this.ShowMenuOptions(fullStatusMessage);
        let returnedMessage = ""
        while (selecion != 4){
            fullStatusMessage = "";
            let rep = 0;
            for (let i = 0; i < this.enemys.length; i++){
                this.enemys[i].block = false;
                if ((Math.floor(Math.random() * 3)) == 2){
                    fullStatusMessage += this.Defend(this.enemys[i]); 
                }
                // This randomly choses if each of the enemies desides to defend.
                // It had to go up here so that it can raise the defence before the player attacks.
            }
            this.player.block = false;
            switch(selecion){
                case '1':
                    returnedMessage = this.FightMenu(this.player,this.enemys);
                    if (returnedMessage == "Back"){
                        fullStatusMessage = "";
                        rep = 1;
                    }else {
                        fullStatusMessage += returnedMessage
                    }
                    
                    break;
                case '2':
                    fullStatusMessage += this.Defend(this.player);
                    break;
                case '3':
                    returnedMessage =  this.Items(this.player);
                    if (returnedMessage == "Back"){
                        fullStatusMessage = "";
                        rep = 1;
                    }else {
                        fullStatusMessage += returnedMessage
                    }
                    break;
                default:
                    fullStatusMessage = "Enter a number from 1-4\n";
                    rep = 1;
                    //This makes it so it re-displays the options if it's not between 1-4
            }
            // This Block is the players choice of action.
            
            for (let i = 0; i < this.enemys.length; i++){
                if (this.enemys[i].health < 1) {
                    this.enemys.splice(i,1);
                }
            }
            //this tests if an Enemy's health is zero
            for (let i =0; i < this.enemys.length; i++){
                if (this.enemys[i].block == false && rep == 0){
                    fullStatusMessage += this.Fight(this.enemys[i],this.player);
                }
            }
            // this makes the enemy attack if it's not already defending.
            statusMessage = `Player: ${this.player.health}\n`
            for (let i = 0; i < this.enemys.length; i++){
                statusMessage += `lvl.${this.enemys[i].lvl} ${this.enemys[i].name}: ${this.enemys[i].health}\n`
            }
            //this updates the status message with the new healths.
            fullStatusMessage += statusMessage;
            if (this.player.health <= 0){
                selecion = 4;
                alert("Game Over");
            }else if (this.enemys.length == 0){
                selecion = 4;
                alert("You Win");
            } else {
            selecion = this.ShowMenuOptions(fullStatusMessage);
            }
            //These test to see if the player has no health or there are no enemies left.
        }
    }
    ShowMenuOptions(status) {
        return prompt(`
        ${status}
        --------
        1) Fight
        2) Defend
        3) Items
        4) Run
        `);
    }
    FightMenu(allyf,foes){
        let rep = 0;
        let message = `Target?
        ------- \n`
        while (rep == 0){
            for (let i = 1; i <= foes.length; i++){
                message += (`${i}) ${foes[(i - 1)].name} \n`);
            }
            message += `${foes.length + 1}) Back`
            let selectedFoe = prompt(message);
            if (selectedFoe > 0 && selectedFoe <= foes.length){
                let returnMessage = this.Fight(allyf,(foes[(selectedFoe - 1)]));
                return returnMessage;
            } else if(selectedFoe == (foes.length + 1)) {
                return "Back"
            } else{
                message = `Enter a number from 1-${foes.length + 1}
                Target?
                ------- \n`
            }
        }
        //This allows the player to pick a target to attack
    }
    Fight(ally,foe){
        
        let tempdef = foe.def
        if (foe.block == true) {
            tempdef = tempdef * 2;
        }
        let tempAtk = (ally.atk + (Math.floor(Math.random() * ally.atk) )) * 100;
        tempAtk = tempAtk - tempdef * (10 + (Math.floor(Math.random() * tempdef)));
        foe.health -= Math.floor((tempAtk/100))
        return `${ally.name} attacked, dealing ${Math.floor((tempAtk/100))} damage...\n`;
    }
    //This does damage calculation

    Defend(ally){
        ally.block = true;
        return `${ally.name} takes reduced Damage...\n`
    }
    // this activate blocking

    Items(play){
        let items = play.items
        let message = `Items
        -------- \n`
        let potions = items.filter( p => p === "Potion").length;
        let atkUP = items.filter( p => p === "ATK-Up").length;
        let defUP = items.filter( p => p === "DEF-Up").length;
        let rep = 0;
        let i = 1;
        let itemtypes = []
        while (rep == 0) {
            i = 1;
            itemtypes = [];
            if (potions != 0) {
                message += `${i}) Potion x${potions} \n`;
                itemtypes.push("P");
                i++;
            }
            if (atkUP != 0) {
                message += `${i}) ATK-Up x${atkUP} \n`
                itemtypes.push("AU");
                i++
            }
            if (defUP != 0) {
                message += `${i}) DEF-Up x${defUP} \n`
                itemtypes.push("DU");
                i++
            }
            message += `${itemtypes.length + 1}) Back`
            let selectedItem = prompt(message);
            if (selectedItem > 0 && selectedItem <= itemtypes.length){
                let returnMessage = this.ItemUse(itemtypes,selectedItem - 1,play,items);
                return returnMessage;
            } else if (selectedItem == (itemtypes.length + 1) ) {
                return "Back";
            } else {
                message = `Enter a number from 1-${itemtypes.length + 1}
                Items
                -------- \n`
            }
        }
        //This allows the player to pick an item from inside their bag
    }

    ItemUse(items,itemchoice,play,bag){
        switch(items[itemchoice]){
            case 'P':
                play.health += 30
                let indexP = bag.indexOf("Potion");
                bag.splice(indexP,1);
                return `${play.name} healed 30 damage...\n`
            case 'AU':
                play.atk = play.atk * 1.5
                let indexAU = bag.indexOf("ATK-Up");
                bag.splice(indexAU,1);
                return `${play.name} raised their Attack...\n`
            case `DU`:
                play.def = play.def * 1.5
                let indexDU = bag.indexOf("DEF-Up");
                bag.splice(indexDU,1);
                return `${play.name} raised their Defence...\n`
        }
    }
    // This uses the picked item.
}



//This creates the player and the Enemy Objects to fight
let player = new Player(["Potion","Potion","Potion","ATK-Up","ATK-Up","DEF-Up","Potion"],100,7,5);
let enemys = [new Enemy("SlimeA",7,2,1,1),new Enemy("SlimeB",5,2,1,1)];
let menu = new Menu(player,enemys);
menu.Start();