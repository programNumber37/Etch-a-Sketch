const content = document.querySelector(".container");

function createGrid(size){
    content.innerHTML = '';
    
    
    const elements = document.querySelectorAll('.containerElement');
    const style = document.createElement('style');
    style.textContent = `
        .containerElement {
            background-color: blue;
            flex-basis: calc(100% / ${size}); 
            height: calc(100% / ${size});
            box-sizing: border-box; 
            border: black solid 1px;
        }
    `;

    document.head.appendChild(style);


    for(let i = 0;i<size*size;i++){
        const div = document.createElement("div");
        div.classList.add("containerElement");
        content.appendChild(div);
    }


    const newElements = document.querySelectorAll(".containerElement");

    newElements.forEach(element => {
        element.addEventListener("mouseover", () => {
            element.classList.add("hovered");
        });


    });

}


createGrid(16);




const button = document.querySelector("button");

button.addEventListener("click", () => {
    const answer = prompt("How many tiles would you like your new canvas to be ? (maximum 100 tiles per side)");
    if(answer<=100){
        createGrid(answer);
    }
    
})

const elements = document.querySelectorAll(".containerElement");



