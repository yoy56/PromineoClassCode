var expect = chai.expect;


describe('TestCards',function(){
    describe("BuildDeck", function(){
        it('Makes Array of 52 cards', function(){
            deck.Deck = [];
            deck.buildDeck();
            expect(deck.Deck.length).to.equal(52);
        })
        let suts = ["H","S","C","D"];
        let nums = [2,3,4,5,6,7,8,9,10,11,12,13,14];
        it('Should have every number of every suit',function(){
            deck.Deck.forEach((c,i) => {
                expect(c.sut).to.equal(suts[Math.floor(i / 13)]);
                expect(c.num).to.equal(nums[ i - (13 * Math.floor(i / 13)) ]);
            });
        })
    })
    describe('SplitDeck', function(){
        it('Splits deck evenly',function(){
            deck.splitDeck(p1,p2);
            expect(p1.Hand.length).to.equal(p2.Hand.length);
        })
    }) 
    
})