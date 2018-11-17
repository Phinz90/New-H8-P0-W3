// Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.
function balikString(kata) {
    var hasil = ''
    for (i = kata.length - 1; i >= 0; i--) {
        hasil += kata[i]
    }
    return hasil
}

console.log(balikString('hello world!!!'))



//OUTPUT
//input "hello world!"
//output
//"!dlrow olleh"