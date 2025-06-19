const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let todos = [];

function menu() {
  console.log('\n--- TODO MENU ---');
  console.log('1. Add Task');
  console.log('2. View Tasks');
  console.log('3. Exit');

  rl.question('Choose: ', (choice) => {
    switch (choice.trim()) {
      case '1':
        rl.question('Enter task: ', (task) => {
          todos.push(task);
          console.log('✅ Task added!');
          menu();
        });
        break;
      case '2':
        console.log('\n📋 Your Tasks:');
        todos.forEach((task, i) => console.log(`${i + 1}. ${task}`));
        menu();
        break;
      case '3':
        console.log('👋 Goodbye!');
        rl.close();
        break;
      default:
        console.log('❌ Invalid option');
        menu();
    }
  });
}

menu();
