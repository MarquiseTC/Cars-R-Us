import {Paint} from "./Paints.js"
import {Interior} from "./Interiors.js"
import {Technology} from "./Technology.js"
import {Wheels} from "./Wheels.js"
import { Orders } from "./CarOrders.js"
import { addCustomOrder } from "./database.js"
import { Vehicle} from "./Cars.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id === "orderButton") {
            addCustomOrder()
            console.log("we clicked it")
        }
        
    }
)

export const CARSRUS = () => {
    return `
        <h1>Cars-r-us</h1>
        <article class="choices">
            <section class="choices__metals options">
                <h2>Paint</h2>
                ${Paint()}
            </section>
            <section class="choices__sizes options">
                <h2>Interior</h2>
                ${Interior()}
            </section>
            <section class="choices__styles options">
                <h2>Technology</h2>
                ${Technology()}
            </section>
            <section class="choices__styles options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
            <section class="choices__styles options">
                <h2>Cars</h2>
                ${Vehicle()}
            </section>
        </article>
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>
        <article class="customCarOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}