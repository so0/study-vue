const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          const item = JSON.parse(localStorage.getItem(localStorage.key(i)));
          arr.push(item);
        }
      }
    }
    return arr;
  },
};
const state = {
  todoItems: storage.fetch(),
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  },
};

const mutations = {
  addOneItem(state, todoItem) {
    const obj = { completed: false, item: todoItem };
    // 저장하는 로직
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  removeOneItem(state, { todoItem, index }) {
    localStorage.removeItem(todoItem.item);
    state.todoItems.splice(index, 1);
  },
  toggleOneItem(state, { todoItem, index }) {
    // todoItem.completed = !todoItem.completed;
    state.todoItems[index].completed = !state.todoItems[index].completed;

    // 로컬스토리지 데이터 갱신
    localStorage.removeItem(todoItem.item);
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  },
  clearAllItems(state) {
    localStorage.clear();
    state.todoItems = [];
  },
};

export default { state, getters, mutations };
