
// Challenge - 2.




function generateCat(){
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);

    
}

function removeCat(){
 
    let element = document.getElementById("flex-cat-gen");
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }
}


