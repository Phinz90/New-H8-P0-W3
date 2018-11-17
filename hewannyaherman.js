function grouphewan(hewan) {
    //1. Pertama-tama lakukan looping awal untuk
    for (var i = hewan.length - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (hewan[j - 1][0] > hewan[j][0]) {
                temp = hewan[j - 1];
                hewan[j - 1] = hewan[j];
                hewan[j] = temp;
            }
        }
    }
    var awal = hewan[0][0];
    var bungkusKecil = [];
    var bungkusBesar = [];
    for (var k = 0; k < hewan.length; k++) {
        if (awal === hewan[k][0]) {
            bungkusKecil.push(hewan[k]);
        } else {
            bungkusBesar.push(bungkusKecil);
            bungkusKecil = [];
            awal = hewan[k][0];
            bungkusKecil.push(hewan[k]);
        }
    }
    // bungkusBesar.push(bungkusKecil);
    bungkusBesar[bungkusBesar.length] = bungkusKecil
    return bungkusBesar;
}



// TEST CASES
console.log(grouphewan(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(grouphewan(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]