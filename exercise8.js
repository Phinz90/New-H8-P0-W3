// Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.

// function pasanganTerbesar(num) {
// you can only write your code here!
//   var tampung = 0
//   for(var i= 0; i< num.length; i++) {
//   	tampung += num[i]
//   }
// }


function pasanganTerbesar(num) {
    //membuat variabel tampung yg merubah numb menjadi string
    var input = num + '' // cara cepat buat mengganti angka to string
    // membuat variabel untuk menampung angka terbesar
    var terbesar = 0;
    //membuat variabel untung menampung angka pasangan
    var pasangan = 0;
    //memulai looping untuk memeriksa masing2 angka
    for (var i = 0; i < input.length; i++) {
        pasangan = input[i] + input[i + 1];
        //membuat pengkondisian untuk membuat pasangan angka terbesar   
        if (terbesar < pasangan) {
            terbesar = pasangan;
        }

    }
    return terbesar
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99