let  hotel = {
    name: "Hotel Heaven",
    address: "harar",
    Workers: ["John", "Jane", "Doe"],
  
    


    service:function() {
        console.log("Welcome to " + this.name + " located at " + this.address);
    } 
};

console.log(hotel);
for (let i = 0; i < hotel.Workers.length; i++) {
    console.log("Worker " + (i + 1) + ": " + hotel.Workers[i]);
}

console.log(hotel.Workers[0]);
hotel.Workers.push("Abel");
console.log("Updated Workers List: " + hotel.Workers);
hotel.service();

let hotel2 = {
    name: "ras hotel",
    address: "harar",
    room:{
        type: "single",
        price: 100,
        available: true
    },
    service:function() {
        console.log("this the hotel room object which is nested object in the "+this.name + " located at " + this.address);
    }
};
hotel2.service();
console.log("");
console.log("");

console.log("****************************************************************************");



console.log("constructor function example");


function Hotel(name, address, workers) {
    this.name = name;
    this.address = address;
    this.workers = workers;

    this.service = function() {
        console.log("Welcome to " + this.name + " located at " + this.address);
    };
}
let hotel3 = new Hotel("Hotel Paradise", "Addis Ababa", ["Alice", "Bob", "Charlie"]);
console.log(hotel3);
hotel3.service();

let hotel4 = new Hotel("Blue Sky Hotel", "Dire Dawa", ["Eve", "Mallory", "Trent"]);
console.log(hotel4);

console.log("");
hotel4.name.toUpperCase()
console.log("Hotel Name in Uppercase: " + hotel4.name);