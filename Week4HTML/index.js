let inventory = [];

let buildings = [];

let inventoryTable = document.getElementById('Inventory');
let buildingTable = document.getElementById('buildings');



class Item {
    constructor(name) {
        this.name = name;
    }
}

class Building{
    constructor(name, type, production, production_rate, recipe, progress) {
        this.name = name;
        this.type = type;
        this.production_rate = production_rate;
        this.recipe = recipe;
        this.production = production;
        this.progress = progress;
    }

    produce(){
        if (this.progress >= 100){
            add_Item(this.production);
            this.progress = 0;
        }
        this.progress = this.progress + (0.1 * this.production_rate);
        scribe(buildingTable,'N/A',buildings);
        
    }
}

class Logmill extends Building{
    constructor(name) {
        super(name);
        this.type = "Logmill";
        this.production_rate = 1;
        this.recipe = {type: "Wood",amount: 10};
        this.production = "Wood";
        this.progress = 0;
    }


}

class Stone_Mine extends Building{
    constructor(name) {
        super(name);
        this.type = "Stone_Mine";
        this.production_rate = 5;
        this.recipe = {type: "Stone",amount: 10};
        this.production = "Stone";
        this.progress = 0;
    }


}

onClick('Gather_Wood', () => {
    add_Item("Wood");
});

onClick('Gather_Stone', () => {
    add_Item("Stone");
});

onClick('Craft_Mill', () => {
    let temp = removeItem("Wood",10);
    if (temp == true) {
        let name = document.getElementById("Log_Name").value;
            if (name == "") {
                name = "Logmill"
            }
        document.getElementById("Log_Name").value = "";
        let tempmill = new Logmill(name);
        buildings.push(tempmill);
        redrawDOM();
        tempmill.produce();
    }
});

onClick('Craft_Mine', () => {
    let temp = removeItem("Wood",15);
    if (temp == true) {
        temp = removeItem("Stone",23);
        if (temp == true) {
            let name = document.getElementById("Stone_Name").value;
            if (name == "") {
                name = "Stone Mine"
            }
            document.getElementById("Stone_Name").value = "";
            let tempmine = new Stone_Mine(name);
            buildings.push(tempmine);
            redrawDOM();
            tempmine.produce();
        } else {
            for (let index = 0; index < 15; index++) {
                console.log(index);
                add_Item("Wood");
                
            }
            
        }
    }
});


document.addEventListener('tick', function(){
    progressTick()}, true);




function progressTick() {
    for (const builds of buildings) {
        builds.produce();
    }
}

function onClick(id, action) {
    let elemant = document.getElementById(id);
    elemant.addEventListener('click',action);
    return elemant;
}


function add_Item(item_name) {

    
    let temp;
    inventory.every(i => {
        if (i.type == item_name) {
            i.amount = i.amount + 1;
            temp = false;
            return false;
        }
        return true;
    });
    if (temp != false) {
        inventory.push({type: item_name,amount: 1});
    }
    redrawDOM();

}


function redrawDOM() {
    scribe(inventoryTable,'Inventory_Title',inventory);
    scribe(buildingTable,'N/A',buildings);
}

function scribe(table,title,arr) {
    clearTable(table,title);
    for (items of arr) {
        item = itemTranscribe(items);
        table.appendChild(item);
    }
}

function clearTable(table,keeptitle) {
    let title;
    if (keeptitle != 'N/A') {
        title = document.getElementById(keeptitle);
    }
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
    if (keeptitle != 'N/A') {
        table.appendChild(title);
    }
}

function itemTranscribe(item) {
    
    let item_name = item.type;
    let amount = item.amount;
    let table;
    let data1;
    let data2;
    let span1;
    let span2;
    let button;
    let div1;
    let div2;
    let div3;
    let div4;
    let div5;
    let h5;
    let img;
    if (item_name == 'Wood' || item_name == 'Stone') {
    table = document.createElement('tr');
    data1 = document.createElement('td');
    data2 = document.createElement('td');
    span1 = document.createElement('span');
    span2 = document.createElement('span');
    button = document.createElement('button');
    button.setAttribute('class','btn btn-danger');
    button.setAttribute('id',`item_toss_${item.type}`)
    button.onclick = () => {
        removeItem(item_name,1);
    };
    button.innerHTML = 'Toss';
    data2.appendChild(button);
    span2.setAttribute('class','h6 text-muted');
    span2.innerHTML = `x${amount}`;
    span1.setAttribute('class','h3');
    span1.innerHTML = item_name;
    data1.appendChild(span1);
    data1.appendChild(span2);
    table.appendChild(data1);
    table.appendChild(data2);
    } else {
        let progress = item.progress;
        table = document.createElement('tr');
        data1 = document.createElement('td');
        div1 = document.createElement('div');
        div2 = document.createElement('div');
        div3 = document.createElement('div');
        div4 = document.createElement('div');
        div5 = document.createElement('div');
        h5 = document.createElement('h5');
        img = document.createElement('img');
        div5.setAttribute('class','progress-bar')
        div5.setAttribute('role','progressbar')
        div5.setAttribute('style',`width: ${progress}%`)
        div5.setAttribute('aria-valuenow',`${progress}`)
        div5.setAttribute('aria-valuemin','0')
        div5.setAttribute('aria-valuemax','100')
        div4.appendChild(div5);
        div4.setAttribute('class','progress mr-3');
        h5.innerHTML = `${item.name} Progress:`;
        div3.appendChild(h5);
        div3.appendChild(div4);
        div3.setAttribute('class','col col-lg-9 justify-content-center align-self-center');
        img.setAttribute('src',`BuildingSprites/${item_name}.png`)
        img.setAttribute('alt',item_name)
        img.setAttribute('height','50px')
        div2.appendChild(img);
        div1.appendChild(div2);
        div1.appendChild(div3);
        div1.setAttribute('class','row');
        data1.appendChild(div1);
        table.appendChild(data1);
    }
    return table;
}

/* <tr>
                            <td>
                                <div class="row">
                                    <div class="col col-sm-3">
                                            <img src="2.jpg" alt="placeholder" height="50px">
                                    </div>
                                    <div class="col col-lg-9 justify-content-center align-self-center">
                                        <h5>Progress</h5>
                                        <div class="progress mr-3">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr> */




function removeItem(item_name,amo) {
    
    let temp;
    if (inventory.length != 0) {
        
        inventory.every((i,num) => {
            let found = false;
            let amountEno = false;
            if (i.type == item_name) {
                found = true;
                if (i.amount >= amo) {
                    i.amount = i.amount - amo;
                    amountEno = true
                }
                
            }
            if (i.amount <= 0) {
                inventory.splice(num,1);
            }

            if (found == true) {
                if (amountEno == true) {
                    temp = 'done';
                    return false;
                } else {
                    temp = 'fail';
                    return false;
                }
            } else{
                if (num == inventory.length -1) {
                    temp = 'fail';
                    return false;
                }
                return true;
            }
        });
    }
    
    

    redrawDOM();
    if (temp == 'done') {
        return true;
    }
    return false;
}