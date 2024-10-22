
let linkedList = document.getElementById("linkedList");
let nodes = [];

function pushNode() {
  const nodeValue = document.getElementById("nodeValue").value;

  if (nodeValue === "") {
    alert("Please enter a value.");
    return;
  }

  
  const newNode = document.createElement("div");
  newNode.classList.add("node", "entering");
  newNode.innerHTML = `<span>${nodeValue}</span><div class="arrow"></div>`;

  
  linkedList.appendChild(newNode);
  nodes.push(newNode);

  
  document.getElementById("nodeValue").value = "";

  
  newNode.addEventListener("animationend", () => {
    newNode.classList.remove("entering");
  });
}

function popNode() {
    if (nodes.length === 0) {
      alert("No nodes to pop.");
      return;
    }
  
    
    const lastNode = nodes[nodes.length - 1];
    lastNode.classList.add("exiting");
  
    
    lastNode.addEventListener("animationend", () => {
      linkedList.removeChild(lastNode);
      nodes.pop();
    });
  }