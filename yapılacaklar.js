let todo = [];
if(localStorage.todo){
    todo = JSON.parse(localStorage.todo);
}

const work = prompt("Yapacağınız iş nedir?");
const date = prompt("Yapacağınız işin tarihi nedir?");

todo.push({
    work:work,
    date:date
})

localStorage.todo=JSON.stringify(todo);

console.log(todo);