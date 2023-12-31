const toDoItem = (title, type, regular, description, dueDate, priority, location) => {

    const item = {title, 
        type, 
        regular, 
        description, 
        dueDate, 
        priority, 
        location,
        complete: false
    };
    item.toggleCompleted = () => {
        item.complete = !item.complete;
    };
    return item;
}

export default toDoItem;