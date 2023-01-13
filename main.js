let theInput = document.querySelector(".add-name input");
let addName = document.querySelector(".add-name .generat");
let nameSpace = document.querySelector(".name-space");
let deleteAllButton = document.querySelector(".delete-all");

window.onload = function() {
    theInput.focus()
}

addName.onclick = function(){

    if(theInput.value === ''){

        console.log("input empty");
        
    }else{

        let mainSpan = document.createElement('span');

        let deleteButton = document.createElement('span');

        let mainSpanText = document.createTextNode(theInput.value);

        let deleteButtonText = document.createTextNode("Delete");

        mainSpan.append(mainSpanText);

        mainSpan.className = "name-box";

        deleteButton.append(deleteButtonText);
        
        deleteButton.className = "delete";

        mainSpan.append(deleteButton);

        nameSpace.append(mainSpan)

        theInput.value = '';

        theInput.focus();

    }

};

document.addEventListener("click", function(e){
    if(e.target.className === 'delete'){
        e.target.parentNode.remove();
    }
    deleteAllButtonShow()
});

deleteAllButton.onclick = function() {
    nameSpace.innerHTML = ''
}

function deleteAllButtonShow(){
    if(nameSpace.childElementCount >= 1){
        deleteAllButton.classList.remove("hide");
    }
    if(nameSpace.childElementCount === 0){
        deleteAllButton.classList.add("hide");
    }
}