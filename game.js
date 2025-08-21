const car1Element = document.getElementById('car1');
const car2Element = document.getElementById('car2');
const messageElement = document.getElementById('message');

function Racer(name, carElement){
    this.position = 0;
    this.name = name;
    this.carElement = carElement;
    this.updateCarPosition = function(position){
        this.position += Math.floor(Math.random() * 10)+1;
        this.carElement.style.left = this.position + 'px';
    }
}

const racer1 = new Racer('Red', car1Element);
const racer2 = new Racer('Blue', car2Element);
const trackLength = 300-20;

function declareWinner(winner){
    if(racer1.position >= trackLength && racer2.position >= trackLength){
        messageElement.textContent = `draw!`;
    } else if(racer1.position >= trackLength){
        messageElement.textContent = `${racer1.name} wins!`;
    } else if(racer2.position >= trackLength){
        messageElement.textContent = `${racer2.name} wins!`;
    }
}

function startRace(){
    messageElement.textContent = '';
    racer1.position = 0;
    racer2.position = 0;
    const raceInterval = setInterval(function(){
        racer1.updateCarPosition();
        racer2.updateCarPosition();
        declareWinner();
    if(racer1.position >= trackLength || racer2.position >= trackLength){
        clearInterval(raceInterval);
    }
    }, 100);
}

document.getElementById('start').addEventListener('click', startRace);