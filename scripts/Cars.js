import { getVehicle, setVehicle } from "./database.js"

const vehicle = getVehicle()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "vehicle") {
            setVehicle(parseInt(changeEvent.target.value))
             
        }
    }
)






export const Vehicle = () => {
    return `<h2>Vehicle</h2>
    <select id="vehicle">
    <option value="0">Choose your vehicle style</option>
    ${
        vehicle.map (
        (vehicle) => {
            return `<option name="vehicle" value="${vehicle.id}">${vehicle.type}</option>`
        }
            ).join("")
        }
        </select>`
}