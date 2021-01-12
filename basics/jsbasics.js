var name; 
var word = 'dog';

function nameoffunction(param,param2){
    console.log(param,param2)
}

nameoffunction(word)

if(word == 'dog'){
    console.log('word is dog')
}else{
    console.log('word is not dog')
}

arr = [1,2,3,'words', [1,2,3], {name:'bob'}]

console.log(arr[3])
obj = {
    'key':'value',
    'key2':'value2'
}
console.log(obj['key']) //array notation
console.log(obj.key2) //dot notation

'> , < , >= , <= , == , ==='

if('0' === 0){
    console.log('0 equals 0')
}

for(var i = 0, y=10; i < 10 || y<299; i++, y+= 100){
    //code to run each iteration
}



let z = 8
while(z < 10){
    z++
    console.log(z)
}



//pointers

a = {'name': 'bob'}
e = a
b = {'name': 'carl'}
c = {'name': 'nick'}
d = {'name': 'jamie'}

console.log(a)
a.name = 'cat'
console.log(e)
a = b
console.log(a)
console.log(e)

a.name +='dog'

a.name = a.name + 'dog'

console.log(a)

//modulus %

//10%3 => 1 remainder

//15%3 => 0

