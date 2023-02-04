//Get element of DOM
function getElement(selection){
    const element = document.querySelector(selection);
    if(element){
        return element;
    }
    throw new Error(`Please check ${selection} selector, it seems that it does not exist`);
}

class Counter{
    constructor(element, value){
        this.counter = element;
        this.value = value;
        this.resetBtn = element.querySelector('.reset');
        this.increaseBtn = element.querySelector('.increase');
        this.decreaseBtn = element.querySelector('.decrease');
        this.valueDOM = element.querySelector('.value');
        this.valueDOM.textContent = this.value;

        //Bind this all functions
        // console.log(this) // To point to Counter "this"
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);

        this.increaseBtn.addEventListener('click', this.increase); //To point to button "this" if not setup to bind(this) to counter
        this.decreaseBtn.addEventListener('click', this.decrease);
        this.resetBtn.addEventListener('click', this.reset);
    }
    //Functions
    increase(){
        // console.log(this)
        this.value++;
        this.valueDOM.textContent = this.value;
    }
    decrease(){
        this.value--;
        this.valueDOM.textContent = this.value;
    }
    reset(){
        this.value = 0;
        this.valueDOM.textContent = this.value;
    }
}

//Creating instances
const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);