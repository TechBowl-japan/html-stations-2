// function displayList(){
//     const fruitsDiv =document.getElementById("fruits");
    
//     const ulElement=document.getElementById("ul");

//     const liElement=document.getElementById("li");

// }

function displayList() {
    const fruitsDiv = document.getElementById('fruits');
  
    const ulElement = document.createElement('ul');
  
    const pElements = fruitsDiv.getElementsByTagName('p');
  
    ulElement.innerHTML = '';
  
    for (let i = 0; i < pElements.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = pElements[i].textContent;
      ulElement.appendChild(listItem);
    }
  
    // fruits要素を置き換えてリストを表示
    fruitsDiv.innerHTML = '';
    fruitsDiv.appendChild(ulElement);
  }