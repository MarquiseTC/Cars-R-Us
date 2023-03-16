import { getTechnology, setTechnology } from "./database.js"

const techs = getTechnology()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {

            setTechnology(parseInt(changeEvent.target.value))
            
        }
    }
)




export const Technology = () => {
    return `<h2>Technologies</h2>
    <select id="tech">
    <option value="0">Select a technology package</option>
    ${
        techs.map (
        (tech) => {
            return `<option name="tech" value="${tech.id}">${tech.package}</option>`
        }
            ).join("")
        }
        </select>`
    }
