let character = "#"
let rows = []

let count = 8

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i));
}

let result = ""

for (const row of rows) {
    result = result + "\n" + row;
}
  
console.log(result);