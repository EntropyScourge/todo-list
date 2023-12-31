import toDoItem from './toDoItem';

const toDoList = (title='My List', author='You') => {
    const list = {
        index,
        title,
        items: [],
        author,
        creationDate: Date.now()
    }

    list.addItem = (item) => {
        list.push(item);
    }

    list.removeItem = (item) => {
        for (i = 1; i < list.length; i++) {
            if (i === item.index) {
                list.splice(i, i - 1);
            }
        }
    }

    return list;
}

export default toDoList;