// creating an upside down right triangle with a char
function createOppTriangle(height) {
    for (let i = 0; i < height; i++) {
        let row = '';
        for (j = 0; j < (height - i); j++) {
            row += '*';
        }
        console.log(row);
    }
}

createOppTriangle(10);
