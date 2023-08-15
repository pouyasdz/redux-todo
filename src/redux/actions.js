export const types = {
  GET_ALL_TODO: "GET_ALL_TODO",
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
  EDIT_TODO:"EDIT_TODO"
};

class Actions {
  addTodoAction(title) {
    return { type: types.ADD_TODO, title };
  }

  removeTodoAction(id) {
    return { type: types.REMOVE_TODO, id };
  }

  completeTodoAction(id) {
    return { type: types.COMPLETE_TODO, id };
  }

  getAllTodoAction() {
    return { type: types.GET_ALL_TODO };
  }

  editTodoAction(id, title){
    return {type:types.EDIT_TODO, id, title}
  }
}

export {Actions}