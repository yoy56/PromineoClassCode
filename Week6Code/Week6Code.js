class Card{
    constructor(num,sut){
        this.num = num;
        this.sut = sut;
    }
    display(){
        console.log(`Card: ${this.num == 11 ? "J" : (this.num == 12 ? "Q" : (this.num == 13 ? "K" : (this.num == 14 ? "A" : this.num)))}-${this.sut}`)
    }
    // logs in the the console the card.
    // Translates the numbers 11-14 into the letter.
}

class Deck{
    static suts = ["H","S","C","D"];
    static nums = [2,3,4,5,6,7,8,9,10,11,12,13,14];
    // 2-14, as Ace is high in war.
    constructor(){
        this.Deck = [];
    }
    buildDeck(){
        Deck.suts.forEach(s => {
            Deck.nums.forEach(n =>{
                this.Deck.push(new Card(n,s));
            })
        });
    }
    // This loops through evey suit and adds evey number from 2-14
    shuffle(){
        let tempDeck = []
        this.Deck.forEach(c => {
            tempDeck.splice( Math.floor(Math.random()*tempDeck.length),0,c);
        })
        this.Deck = tempDeck;
    }
    // Shuffles the deck by puting evey card into the deck in a random space between
    //    0 to the current lenght of the deck.
    display(){
        this.Deck.forEach(c => {
            c.display();
        })
    }
    splitDeck(p1,p2){
        this.Deck.forEach((c,i,d) => {
            if (i <= ( (d.length) / 2 ) -1){
                p1.Hand.push(c);
            } else {
                p2.Hand.push(c);
            }
        })
    }
    // splits the deck with the first half going to player 1
}

class Player{
    constructor(){
        this.Hand = [];
        this.points = 0;
    }
    compair(card1,card2,op){
        if (card1.num > card2.num){
            this.points++
        } else if (card2.num > card1.num){
            op.points++
        } 
    }

    display(){
        this.Hand.forEach(c => {
            c.display();
        })
    }
}

let deck = new Deck();
let p1 = new Player();
let p2 = new Player();

function PlayWar(){
    deck.buildDeck();
    deck.shuffle();
    deck.splitDeck(p1,p2);
    p1.Hand.forEach((c,i) => {
        p1.Hand[i].display();
        p2.Hand[i].display();
        p1.compair((p1.Hand[i]),(p2.Hand[i]),p2);
        console.log(p1.points);
        console.log(p2.points);
    })
    //Goes through every card and compairs them, and logs to the console evey turn.
    if (p1.points > p2.points) {
        return "Player 1 Wins";
    } else if (p2.points > p1.points) {
        return "Player 2 Wins";
    } else {
        return "Tie";
    }

};

console.log(PlayWar());


