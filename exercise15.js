/*
Diberikan sebuah function grouphewan(arr) yang menerima satu parameter berupa array yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

Contoh jika hewan adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

Urutan hewan dalam array setiap pengelompokan huruf tidak penting.
*/
function grouphewan(hewan) {
    // you can only write your code here!
    var hasil = hewan.sort()
    // return hasil
    var result = [];
    var group = [];
    var abjad = hewan[0][0]
    // console.log(abjad)
    for (var i = 0; i < hasil.length; i++) {

        // console.log(hasil[i][0])
        // console.log(abjad)
        if (hasil[i][0] === abjad) {
            group.push(hasil[i])
            // result.push(group)
            // group=[]
        } else {
            result.push(group)
            group = []
            abjad = hasil[i][0]
            group.push(hasil[i])
            // result.push(hasil[i])
        }

    }
    result.push(group)
    return result
}


// TEST CASES
console.log(grouphewan(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(grouphewan(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]





