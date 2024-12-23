//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback) => {//callback is replacing return. Could be called anything
    console.log("wait two seconds")
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}
add(1, 4, (sum) => { //defining sum here. but why sum? why not add?
    console.log(sum) // Should print: 5
})

/*
setTimeout(()=> {
    console.log("two seconds are up")
}, 2000)

const names = ["Person", "Man", "Woman"]
const shortNames = names.filter((name) => {
    return name.length <= 4 //less than equal to
})

const geocode = (address, callback) => {
    setTimeout(()=> {
        const data = {
            longitude: 0,
            latitude: 0
        }
        callback(data)
        //return data//won't work with async, need callback
        //console.log("two seconds are up")
    }, 2000)
    
}
geocode('Philadelphia',(data) => {
    console.log(data)
})
//const data = geocode('Philadelphia')
//console.log(data)
*/