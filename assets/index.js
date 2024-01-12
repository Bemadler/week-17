class Transport {
    constructor(type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
    }

    getInfo() {
    return `Type: ${this.type}, Brand: ${this.brand}`;
    }

    getPrice() {
    return `Price: ${this.price}`;
    }
}

class Car extends Transport {
    constructor(type, price, brand, doors) {
    super(type, price, brand);
    this.doors = doors;
    }

    getDoorCount() {
    return `Doors: ${this.doors}`;
    }
}

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed) {
    super(type, price, brand);
    this.maxSpeed = maxSpeed;
    }

    getMaxSpeed() {
    return `Max Speed: ${this.maxSpeed} km/h`;
    }
}

const data = [
    {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];


const showCars = document.getElementById('carSelect');
const showBikes = document.getElementById('bikeSelect');

function showOptions() {
    const selected = document.getElementById('transportSelect').value;

    if (selected === 'car') {
        showCars.style.display = 'flex';
        showBikes.style.display = 'none';
    } else if (selected === 'bike') {
        showCars.style.display = 'none';
        showBikes.style.display = 'flex';
    }
}

function showTransportInfo() {
    const infoParagraphs = document.querySelectorAll('#info');
    
    infoParagraphs.forEach(paragraph => {
        paragraph.style.display = 'block';
    });
}
function showTransportDetails() {
    const infoParagraphs = document.querySelectorAll('#doors');
    
    infoParagraphs.forEach(paragraph => {
        paragraph.style.display = 'block';
    }); 
}
function showTransportPrice(){
    const infoParagraphs = document.querySelectorAll('#price');
    
    infoParagraphs.forEach(paragraph => {
        paragraph.style.display = 'block';
    }); 
}
function showTransportMaxSpeed(){
    const infoParagraphs = document.querySelectorAll('#maxSpeed');
    
    infoParagraphs.forEach(paragraph => {
        paragraph.style.display = 'block';
    }); 
}
