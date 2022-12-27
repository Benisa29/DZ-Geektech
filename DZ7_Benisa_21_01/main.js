class Car{
    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
    }
    start(){
        console.log('Машина заведена')
    }
}
const car = new Car({
    model : 'Car',
    color : 'red',
    wheels : 4
})
console.log(car)
car.start()


class  BMW extends  Car {
    static type = 'BMW'

    constructor(options) {
        super(options);
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
        this.volume = options.volume
    }
}

const bmw = new BMW({
    model : 'BMW',
    color : 'black',
    wheels : 4,
    volume : 3
})
console.log(bmw)

class Tesla extends Car{
    static type = 'Tesla'

    constructor(options) {
        super(options);

        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
        this.electricCar = options.electricCar
    }
}

const tesla = new Tesla({
    model : 'Tesla',
    color : 'white',
    wheels : 4,
    electricCar : true
})
console.log(tesla)

class Ferrari extends Car{
    static type = 'Ferrari'

    constructor(options) {
        super(options);

        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
        this.enginePower = options.enginePower
    }
}


const ferrari = new Ferrari({
    model : 'Ferrari',
    color : 'red',
    wheels : 4,
    enginePower : 963
})
console.log(ferrari)