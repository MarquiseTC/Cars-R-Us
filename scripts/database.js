const database = {
    paint: [
        {id: 1, color: "Silver", price:100 },
        {id: 2, color: "Midnight Blue", price: 200},
        {id:3, color: "Firebrick Red", price: 300},
        {id: 4, color: "Spring Green", price: 400}
    ],
    interior: [
        {id: 1, style: "Biege Fabric", price:500 },
    {id: 2, style: "Charcoal Fabric", price: 600},
    {id:3, style: "White Leather", price: 700},
    {id: 4, style: "Black Leather", price: 800}
],
tech:[
    {id: 1, package: "Basic Package (basic sound system)", price:900 },
{id: 2, package: "Navigation Package (includes integrated navigation controls)", price: 1000},
{id:3, package: "Visibility Package (includes side and reat cameras)", price: 1100},
{id: 4, package: "Ultra Package (includes navigation and visibility package)", price: 1200}
],

wheels: [
    {id: 1, size: "17-inch Pair Radial", price:1300 },
{id: 2, size: "17-inch Pair Radial Black", price: 1400},
{id:3, size: "18-inch Pair Spoke Silver", price: 1500},
{id: 4, size: "18-inch Pair Spoke Black", price: 1600}],

vehicle: [
    
        {id: 1, type: "Car", price:1},
{ id: 2, type: "Suv", price:1.5},
{ id: 3, type: "Truck", price: 2.5}
    
],


customOrders: [
    {
        id: 1,
        paintId: 1,
        interiorId: 3,
        techId: 2,
        wheelsId: 3,
        vehicleId:3
        
    }
],

orderBuilder: {}

}



export const getPaint = () => {
    return database.paint.map(paint => ({...paint}))
}

export const getInterior = () => {
    return database.interior.map(interior => ({...interior}))
}

export const getTechnology = () => {
    return database.tech.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel=> ({...wheel}))
}
export const getcustomOrders = () => {
    return database.customOrders.map(customOrder=> ({...customOrder}))
}

export const getVehicle = () => {
    return database.vehicle.map(vehicle=> ({...vehicle}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
    console.log(database.orderBuilder)
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.techId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelsId = id
}

export const setVehicle = (id) => {
    database.orderBuilder.vehicleId = id
    console.log(database.orderBuilder)
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

     console.log(database.orderBuilder)
    database.customOrders.push(newOrder)
console.log(database.customOrders)

    database.orderBuilder = {}
    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
