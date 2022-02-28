let lsTotal = 0,
    xLen, x;

for (x in localStorage) {
    if (!localStorage.hasOwnProperty(x)) {
        continue;
    }
    xLen = ((localStorage[x].length + x.length) * 2);
    lsTotal += xLen;
    console.log(x.substr(0, 50) + " = " + (xLen / 1024).toFixed(2) + " KB")
};

console.log("Total = " + (lsTotal / 1024).toFixed(2) + " KB");