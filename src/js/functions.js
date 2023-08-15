import { Actions } from "../redux/actions.js";
import { store } from "../redux/store.js";
import { textField, todolistElement, textLabel, submitButton} from "./elements.js";
import { todoElement } from "./todo.js";

const actions = new Actions();

function submitHandler(e){
    e.preventDefault();

    const textFieldValue = textField.value;
    if(!textFieldValue) return;

    store.dispatch(actions.addTodoAction(textFieldValue));
    const todos = store.getState();

    textField.value = '';
    renderStore(todos);
};

function renderStore(todos = []){
    todolistElement.innerHTML = '';

    todos.map((todo) => {
        const element = todoElement(todo.title, todo.isCompleted, todo.id);
        todolistElement.insertAdjacentHTML("beforeend", element);
    })
}

function completBtnHandler(id){
    store.dispatch(actions.completeTodoAction(id))
    const todos = store.getState();
    renderStore(todos);
}

function removeTodoBtnHandler(id){
    store.dispatch(actions.removeTodoAction(id))
    const todos = store.getState();
    renderStore(todos);
}

function randomLabel(interval){
    const textFieldValue = textField.value;
    if(textFieldValue) {
        textLabel.innerHTML = "Title";
        return clearInterval(interval)
    }

    const words = ["make a coffie ☕", "fiding my fish 🐠", "complete my project ✔️", "read a book 📚"]

    textLabel.innerHTML = words[Math.floor(Math.random() * words.length)];
}

function editTodoBtnHandler(id){
    const todo = store.getState().find(todo => todo.id === id);
    textField.value = todo.title;
    submitButton.innerHTML = "Save";
    submitButton.removeEventListener('click', submitHandler);
    
    const eventListener = (e) => {
        e.preventDefault();
        saveEdit(id, textField.value);
        submitButton.removeEventListener('click', eventListener);
    };
    

    submitButton.addEventListener("click", eventListener)
}

function saveEdit(id, title){
    console.log(id);
    store.dispatch(actions.editTodoAction(id, title))
    const todos = store.getState();
    renderStore(todos);
    submitButton.addEventListener('click', submitHandler)
    textField.value = "";
    submitButton.innerHTML = "Add";
}

export {
    submitHandler,
    renderStore,
    completBtnHandler,
    removeTodoBtnHandler,
    randomLabel,
    editTodoBtnHandler
}