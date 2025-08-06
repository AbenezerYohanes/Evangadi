console.log("wellcome to Asynchronous JavaScript Example");

function orderpizza(x) {
    console.log("Order pizza");
    setTimeout(() => {
        const pizza = "🍕";
        console.log("Your ${pizza} is ready ");
        x(pizza);
    }, 2000); // Simulating a 2-second delay
}

function pizzaready(pizza){
    console.log("Eat your ${pizza}");
}

orderpizza(pizzaready);

callfriend();

function callfriend() {
    console.log("call your friend until pizza is ready");
   
}

function enjoypizza() {
    console.log("Enjoy pizza");
}

function callback(callbackFunction) {
    console.log("Callback function is called");
    callbackFunction();
}