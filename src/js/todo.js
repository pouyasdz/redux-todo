import { completBtnHandler, removeTodoBtnHandler, editTodoBtnHandler} from "./functions.js";

// define functions
window.completBtnHandler = completBtnHandler;
window.removeTodoBtnHandler = removeTodoBtnHandler;
window.editTodoBtnHandler = editTodoBtnHandler;

export function todoElement(title, compeleted, id){
    return `
    <li class="list-group-item todo p-2">
        <h5 class="text-dark fw-bold ${compeleted && "text-decoration-line-through opacity-25"}">${title}</h5>
        <div class="btn-group">
            <button id="btn-complet" class="btn ${compeleted ? "btn-primary" : "btn-outline-primary" }" onclick="completBtnHandler(${id})"><i class="bi bi-check"></i></button>
            <button class="btn btn-warning" onclick="editTodoBtnHandler(${id})"><i class="bi bi-pencil-square"></i></button>
            <button id="btn-remove" class="btn btn-outline-danger" onclick="removeTodoBtnHandler(${id})"><i class="bi bi-trash"></i></button>
        </div>
    </li>
    `
}