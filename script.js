 let elForm=document.querySelector("#form");
 let elInput=document.querySelector("#input");
 let elBtn=document.querySelector("#btn");
 let elList=document.querySelector(".item");
 let deleteBtn=document.querySelector("#delbtn");

 elBtn.addEventListener("click", function(evt){
   evt.preventDefault();

   if (elInput.value==''){
       alert("Please, add task!");
       elInput.value=null;

   }else{
      elList.innerHTML +=`
      <li class="item" style="padding:8px; margin-bottom:30px; background-color: #fff; border-radius: 5px 0px 0px 5px; border: none;  height: 30px; margin-left: 70px; width: 500px; list-style-type: none;"> ${elInput.value} <button style=" background-color: rgb(238, 152, 130); margin-top:-30px; border-radius: 0px 5px 5px 0px; border: none; margin-left: 500px; cursor: pointer;" onclick="deleteElements" id="delbtn" ><img  src="./img/delete-svgrepo-com.svg" alt="delete" width="40" height="40"></button></li>`;
      elInput.value=null;

    };

   deleteBtn.addEventListener("click", function(evt){
      evt.preventDefault();

     prompt("Delete Task");
    
   });
   



 });
