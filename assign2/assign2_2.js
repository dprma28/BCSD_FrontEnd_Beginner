const ul = document.getElementById("ul");
const btn = document.getElementById("btn");

const addition = () => {
    const li = document.createElement("li");
    const input = document.getElementById("input").value;
    li.innerText = input;
    
    const btn2 = document.createElement("button");
    const del = document.createElement("button");

    btn2.textContent = "complete";
    del.textContent = "delete";

    li.appendChild(btn2);
    li.appendChild(del);
    ul.appendChild(li);

    btn2.style.margin = "10px";

    btn2.setAttribute("id","button2");
    del.setAttribute("id","deleteButton");
    
    btn2.addEventListener("click", () => {
        li.style.textDecorationLine = "line-through"
        li.style.color = "lightgray"
    });

    del.addEventListener("click", () => ul.removeChild(li));
}

btn.addEventListener("click", addition);