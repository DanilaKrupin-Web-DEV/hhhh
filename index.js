let arrayZone = document.querySelector(".arrayZone")

let array = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]
for (let x = 0; x < array.length; x++) {
  for (let y = 0; y < array[x].length; y++) {
    const o = document.createElement("div");
    const c = array[x][y] === 1 ? "brick" : "brick2"
    o.classList.add(c);
   	o.textContent = x * 12 + y + 1 ; 
    
    arrayZone.appendChild(o);
  }
}
