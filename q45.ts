function create_car(manufacturer: string, model: string,
     ...properties: [string, any][]): any {
    const car: any = {
        manufacturer,
        model
    };

    for (const [key, value] of properties) {
        car[key] = value;
    }

    return car;
}

const myCar = create_car("Toyota", "Corolla", ["color", "red"],
 ["speed", "230 Km/hour"]);

console.log(myCar);
