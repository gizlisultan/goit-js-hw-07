const ulEl = document.querySelector("#categories");
console.log(`Number of categories: ${ulEl.children.length}`)



const itemUl = ulEl.querySelectorAll(".item");

itemUl.forEach(item => {
    const anEl = item.querySelector("h2").textContent;
    const elNum = item.querySelector("ul");
    

console.log(`Category:${anEl}`);  
console.log(`Elements:${elNum.children.length}`)
}
    )