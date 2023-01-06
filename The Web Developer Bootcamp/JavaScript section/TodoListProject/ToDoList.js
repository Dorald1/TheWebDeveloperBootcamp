let input = prompt("What would you like to do?");

const todos = ['Collect Chicken Eggs', 'Clean Cat Litter Box'];

while (input !== 'quit' && input !== 'q') {

    if (input === 'list') {
        console.log('************************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('************************');
    }
    else if (input === 'new') {
        const newTodo = prompt('What is the new Todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    }
    else if (input === 'delete') {
        const index = parseInt(prompt('What is the index you want to delete from?'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Deleted ${deleted[0]}`);
        }
        else {
            console.log('Unknown index');
        }
    }
    input = prompt('What would you like to do?');
}
console.log("Quitting the app!");






























