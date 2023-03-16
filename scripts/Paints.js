import { getPaint, setPaint } from "./database.js"

const paints = getPaint()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paint") {
            setPaint(parseInt(changeEvent.target.value))
            
        }
    }
)


export const Paint = () => {
    return `<h2>Paint</h2>
    <select id="paint">
    <option value="0">Select your paint color</option>
    ${
        paints.map (
        (paint) => {
            return `<option name="paint" value="${paint.id}">${paint.color}</option>`
        }
            ).join("")
        }
        </select>`
}