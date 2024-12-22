/*
const square = function(x){
    return x * x
}
console.log(square(3))
*/

/*
//ES6 arrow function syntax
const square = (x) => {
    return x*x
}
console.log(square(3))
*/

/*
//ES6 arrow function shorter syntax - used for immediate returning functions
const square = (x) => x*x
console.log(square(3))
*/

/*
const event = {
    name: 'Party',
    printGuestList: function(){
        console.log('Guest list for ' + this.name) //this?
    }
}
event.printGuestList()
*/

/*
const event = {
    name: 'Party',
    printGuestList: () => {
        console.log('Guest list for ' + this.name) //arrow functions don't access "this"?
    }
}
event.printGuestList()
*/

const event = {
    name: 'Party',
    guestList: ['guest1', 'guest2', 'guest3'],
    printGuestList() { //es6 function call
        console.log('Guest list for ' + this.name) //arrow functions don't access "this"?
        this.guestList.forEach((guest) => {
        //this.guestList.forEach(function(guest){ //this doesn't work, why?
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
event.printGuestList()//event is marked because there is a global var. no problems, but should use better variable names 
