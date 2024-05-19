
document.addEventListener('DOMContentLoaded',()=>{
    const list = document.querySelector('#Car-Models ul');
    const forms = document.forms;
    const addform =forms['Order-Car'];

    // delete order
    list.addEventListener("click",(e)=>{
        if(e.target.className =="delete"){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    })
    // add order
    addform.addEventListener("submit",(e)=>{
        e.preventDefault();
        // create elements 
        const value = addform.querySelector('Input[type="text"]').value;
        const li = document.createElement('li');
        const OrderName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        // add content 
        OrderName.textContent = value;
        deleteBtn.textContent = "Delete";

        // add class
        OrderName.classList.add('name');
        deleteBtn.classList.add('delete');
        
        // append to DOM
        if(value===""){
            alert("Make and Order");
        return  
        }

        li.appendChild(OrderName);
        li.appendChild(deleteBtn);
        list.appendChild(li);
        // Clear inputs
        addform.querySelector('input[type="text"]').value="";
    })


})

