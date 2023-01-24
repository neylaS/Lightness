import { generateHslPalette , generateHexColor , changeShadowHexToCSS } from "./utils";
import Color from './modules/colors.js'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte

// Create an instance of Notyf
const notyf = new Notyf();




const form = document.querySelector("form")
const input = document.querySelector("input")
const main = document.querySelector("main")

const color = new Color([5, 32, 50])

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    const entry = input.value
   if (/^#[0-9A-F]{6}$/i.test(entry)) {
    const palette = generateHslPalette(entry)
    displayColors(palette)
   } else {
    notyf.error(`${entry} is not a valid hexadecimal color`)
   }
})

main.addEventListener("click", async (event) =>{
    const target = event.target
    if (target.classList.contains("color")) {
        const colorCode = target.dataset.color
        const addedToClipBoard = navigator.clipboard.writeText(colorCode)
        console.log(addedToClipBoard)
        notyf.success(`copied ${colorCode} to clipboard`)
        
    }
})

function displayColors(palette) {
    const colorArray = []
    palette.forEach(couleur => {   
        colorArray.push(new Color(couleur))   
    });
    
    main.replaceChildren()
    console.log(main)
    colorArray.forEach(couleur => {
        couleur.display(main)
    })
    document.querySelector("header").classList.add("minimized")
    document.documentElement.style.setProperty("--shadow-color",changeShadowHexToCSS(input.value))
    document.body.style.background = `linear-gradient(45deg, #${colorArray[0].hex}, #${colorArray[Math.ceil((colorArray.length - 1)/2)].hex}, #${colorArray[colorArray.length - 1].hex})`
    document.body.style.backgroundSize = `400% 400%`
    
}
