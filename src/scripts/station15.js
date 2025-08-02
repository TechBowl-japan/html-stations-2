// t2 の内容を変更する関数
function displayList() {
    const fruitsContainer = document.getElementById("fruits");
    const fruitParagraphs = fruitsContainer.getElementsByTagName('p');
    console.log(fruitParagraphs);
    const ul = document.createElement('ul');

    Array.from(fruitParagraphs).forEach(p => {
        const li = document.createElement('li');
        li.textContent = p.textContent;
        ul.appendChild(li);
    });

    fruitsContainer.innerHTML = '';
    fruitsContainer.appendChild(ul);
}
