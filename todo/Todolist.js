// var input = prompt("what would you like to do ?");
// var todo = [];
// while (input !== "quit")
// {
//     // handling input
//     if (input==="new")
//     {
//         // ask for new todo
//         var newtodo = prompt("Enter a new todo");
//         // add newtodo to list
//        todo.push(newtodo);
//     }
//     else if (input==="list") 
//     {
//         console.log(todo);
//     }
//     // ask again for new todo
//     var input = prompt("what would you like to do ?");

// }  
// console.log("OK , YOU QUIT THE APP!!");

// improved app
var input = prompt("what would you like to do ?");
var todo = ["buy a new turtle"];
while (input !== "quit")
{
    // handling input
    if (input==="new")
    {
        addtodo();
    }
    else if (input==="list") 
    {
      todolist();  
    }
    else if (input === "delete")
    {
      deletetodo();
    }
    // ask again for new todo
    var input = prompt("what would you like to do ?");

}  
console.log("OK , YOU QUIT THE APP!!");


function addtodo(){
        // ask for new todo
        var newtodo = prompt("Enter a new todo");
        // add newtodo to list
       todo.push(newtodo);
       console.log("added to todo");
}
function todolist(){
    console.log("**********");
    todo.forEach(function(todos , i){
        console.log( i + ": " + todos);
    })
    console.log("**********");
}
function deletetodo(){
      // ask for index of todo to be deleted
      var index = prompt("Enter index of todo to delete");
      // delete that todo
      todo.splice(index , 1);
      console.log("deleted todo");
}