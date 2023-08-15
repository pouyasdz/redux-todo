import { submitButton } from "./elements.js";
import { randomLabel, submitHandler } from "./functions.js";

submitButton.addEventListener('click', submitHandler)

let interval;

interval = setInterval(()=>{randomLabel(interval)},3000)