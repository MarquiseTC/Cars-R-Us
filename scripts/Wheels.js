import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            setWheel(parseInt(changeEvent.target.value))
             
        }
    }
)






export const Wheels = () => {
    return `<h2>Wheels</h2>
    <select id="wheels">
    <option value="0">Choose your wheel size</option>
    ${
        wheels.map (
        (wheel) => {
            return `<option name="wheels" value="${wheel.id}">${wheel.size}</option>`
        }
            ).join("")
        }
        </select>`
}