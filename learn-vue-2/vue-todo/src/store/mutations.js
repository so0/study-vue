const addOneItem = (state, todoItem) => {
  const obj = { completed: false, item: todoItem };
  // 저장하는 로직
  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
};

const removeOneItem = (state, { todoItem, index }) => {
  localStorage.removeItem(todoItem.item);
  state.todoItems.splice(index, 1);
};

const toggleOneItem = (state, { todoItem, index }) => {
  // todoItem.completed = !todoItem.completed;
  state.todoItems[index].completed = !this.state.todoItems[index].completed;

  // 로컬스토리지 데이터 갱신
  localStorage.removeItem(todoItem.item);
  localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
};

const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems = [];
};

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems };
