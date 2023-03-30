 let elForm=document.querySelector("#form");
 let elList=document.querySelector(".list");
 

 let todosArr = getLocalStorage() || [];

 elForm.addEventListener("submit" , evt =>{
     evt.preventDefault()
     let {todo} = evt.target.elements
     
     let Arr = {
         id: todosArr.length + 1,
         todo: todo.value.trim(),
         isComplate: false
     };
     todosArr.unshift(Arr);
     saveLocalStorage(todosArr);
     renderFunc(todosArr , elList);
     todo.value = null;
 })
 
 function renderFunc(array , element) {
     element.innerHTML = null;
     for (let i = 0; i < array.length; i++) {
         let Li = document.createElement("li");
         let Check = document.createElement("input");
         let P = document.createElement("p");
         let Btn = document.createElement("button");
         
         if(array[i].isComplate){
             Check.setAttribute("checked" , "true");
         }
         
         Li.setAttribute("class", "item");
         Check.setAttribute("type", "checkbox");
         Btn.setAttribute("class", "delbtn");
         
         Btn.dataset.todoID = array[i].id;
         Check.dataset.todoID = array[i].id;
         
         Btn.addEventListener("click" , evt => {
             let btnID = evt.target.dataset.todoID;
             let found = todosArr.findIndex((item) => item.id == btnID);
             todosArr.splice(found , 1);
             saveLocalStorage(todosArr);
             renderFunc(todosArr , elList);
         })
 
         Check.addEventListener("click" , evt => {
             let btnID = evt.target.dataset.todoID;
             let foundtodo = todosArr.find((item) => item.id == btnID);
             foundtodo.isComplate = !foundtodo.isComplate;
             saveLocalStorage(todosArr);
             renderFunc(todosArr , elList);
         })
         
         P.textContent = array[i].todo;
         Btn.textContent = "🗑️";
         
         Li.append(Check);
         Li.append(P);
         Li.append(Btn);
         
         element.append(Li);
     }
 }
 renderFunc(todosArr , elList);
 
 function saveLocalStorage(value) {
     window.localStorage.setItem("todos", JSON.stringify(value));
 }
 
 function getLocalStorage(value) {
    return JSON.parse(window.localStorage.getItem("todos"));
 }
