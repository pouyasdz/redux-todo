import { types } from "./actions.js";


export function todoReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_TODO: {
      let newState = [...state];

      const { title } = action;

      const newTodoProperty = {
        id: Math.floor(Math.random() * 1000000),
        isCompleted:false,
        title,
      };

      newState.push(newTodoProperty);
      return newState;
    }

    case types.GET_ALL_TODO: {
      return state;
    }

    case types.COMPLETE_TODO: {
      let newState = [...state];

      newState.forEach(todo => {
        if(todo.id != action.id) return;
        todo.isCompleted = !todo.isCompleted;
      })

      return newState;
    }

    case types.REMOVE_TODO: {
      let newState = [...state];
      newState = newState.filter(todo => todo.id != action.id);
      return newState;
    }

    case types.EDIT_TODO:{
      let newState = [...state];

      newState.forEach(todo => {
        if(todo.id != action.id) return;
        todo.title = action.title;
      });

      return newState;
    }
    
    default: {
      break;
    }
  }
}
