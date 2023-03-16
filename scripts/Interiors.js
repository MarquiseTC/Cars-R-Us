import { getInterior, setInterior } from "./database.js"

const interiors = getInterior()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            setInterior(parseInt(changeEvent.target.value))
            
        }
    }
)


export const Interior= () => {
    return `<h2>Interiors</h2>
    <select id="interior">
    <option value="0">Select your interior style</option>
    ${
        interiors.map (
        (interior) => {
            return `<option name="interior" value="${interior.id}">${interior.style}</option>`
        }
            ).join("")
        }
        </select>`
}