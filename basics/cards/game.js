//cards
    //have 4 suits
    //each suit has 13 a1234....jqk


    class Card{
        constructor(suit,value){
            this.suit = suit
            this._value = value
        }

        get value(){
            if(this._value ==='ace'){
                return 11
            }else if(this._value === 'jack' || this._value === 'queen' || this._value === 'king'){
                return(10)
            }else{
                return this._value
            }
        }
    }
    //deck
        //has 1 of each card

    class Deck{
        static suits = ['spades','hearts','diamonds', 'clubs']
        static values = ['ace',2,3,4,5,6,7,8,9,10,'jack','queen','king']
        constructor(){
            this.cards = []
            for(let y = 0; y < Deck.suits.length; y++){
                for(let i = 0; i < Deck.values.length; i++){
                    this.cards.push(new Card(Deck.suits[y], Deck.values[i]))
                }
            }
        }

        shuffle(){

            console.log('shuffling')
            for(let i = 0; i< this.cards.length; i++){
                let rcard = (Math.floor(Math.random()*51) + 1)
                let temp= this.cards[i]
                this.cards[i] = this.cards[rcard]
                this.cards[rcard] = temp 
            }
        }

        deal(){
            return(this.cards.pop())
        }
    }
    
   
    //player
        //has a choice to hit or stand

    class Player{
        constructor(name){
            this.name = name
            this.hand = []
        }
        hit(){
            this.hand.push(d1.deal())
        }

    }

    function newgame(){
        d1 = new Deck()
        d1.shuffle()

        p1 = new Player('bob')
        p2 = new Player('Dealer')
        p2.hit()
        p1.hit()
        p2.hit()
        p1.hit()

        console.log(p1.name, p1.hand,p2.name,p2.hand)
    }
//dealer
    //has no choices
newgame()
