import { getcustomOrders, getPaint, getTechnology, getInterior, getWheels, getVehicle} from "./database.js"


const buildOrderListItem = (order) => { 
    const paint = getPaint()
    const foundPaints = paint.find((paint) =>
    {
    return (paint.id === order.paintId)})
console.log(foundPaints)


const interior = getInterior()
const foundInteriors = interior.find(
    (interior) => {
        return interior.id === order.interiorId
    }
)

const tech = getTechnology()
const foundTechnologys = tech.find(
    (tech) => {
        return tech.id === order.techId
    }
)

const wheels = getWheels()
const foundWheels = wheels.find(
    (wheel) => {
        return wheel.id === order.wheelsId
    }
)

const vehicle = getVehicle()
const foundVehicles = vehicle.find(
    (vehicle) => {
        return (vehicle.id === order.vehicleId)})
        console.log(foundVehicles)



const totalCost = (foundTechnologys.price + foundPaints.price + foundInteriors.price + foundWheels.price) * foundVehicles.price
const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})
 


    return `<li>
        Order #${order.id} costs ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getcustomOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
