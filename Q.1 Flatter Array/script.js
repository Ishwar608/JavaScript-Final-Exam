let myArray = [[1, 2, 3], [4, 4, 5]];

const opretion = () => {
    let text = [];
    for (const i of myArray) {
        for (const j of i) {
            text.push(j);
        }
    }
    document.querySelector("#new-data").innerHTML = myArray.map((value) => {
        return value;
    }).join(",");
    console.log(text);
}
opretion();