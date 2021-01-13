//ES5
// function personmaker(name,age){

//     this.name = name
//     this.age = age
    
// }

// bob = new personmaker('bob',12)

// console.log(bob)

//ES6

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    speak = function(){
        console.log('Hi my name is', this.name)
    }

    static boring(){
        console.log('hi i am not', this.name)
    }

}

class Mailman extends Person{
    constructor(name,age){
        super(name,age)
        this._salary = 15
    }

    job(){
        console.log('I am a mailman')
    }

    speak = function(){
        console.log('Neither snow nor rain nor heat nor gloom of night stays these couriers from the swift completion of their appointed rounds ')
    }

    get salary (){
        return this._salary
    }

    set salary (raise){
        if(raise < 25){
            this._salary = raise
        }
    }
}

bob = new Mailman('bob',12)
console.log(bob.salary)
bob.salary = 24.75
console.log(bob.salary)