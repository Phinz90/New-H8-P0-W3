// Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

function targetTerdekat(arr) {
// you can only write your code here!	
var jarak = 0
var jarakTerdekat = arr.length
var o = 'o';
var x = 'x';

//1. Buat pengkondisian yg menyatakan hasil ) terlebih dahulu
	if (arr.indexOf('x') === -1) {
		return 0
	}
//2. Setelah itu looping untuk mencari letak 'o' itu dimana (index ke brp)
	for (var i = 0; i < arr.length; i++) {
		//3. buat kondisi untuk menyatakan kalo posisi[i] sudah di 'o' maka buat var tampung baru bernama 'jarak'
		if (arr[i] === o) {
			jarak = 0
			//4. looping lg untuk mencari 'x' tp dimulai dari index stlh posisi trakhir [i], dan mulai penghitungan jarak (jarak +=1)
			for (var j = i + 1; j < arr.length; j++) {
				jarak += 1
				// console.log(jarak)
				//5. ketika sdh menemukan dimana posisi 'x' maka otomatis penghitungan sdh dikerjakan
				if (arr[j] === x) {
					// console.log(jarak)
					//6. buat pengkondisian untuk mendeklarasi jarak terdekat 'o' ke 'x'
					if (jarak < jarakTerdekat) {
						jarakTerdekat = jarak
						// console.log(jarakTerdekat)
					}
					break;
				}
			}
		//7. pengkondisian dimana jika looping pertama td menemukan 'x' terlebih dahulu maka buat var jarak = 0 lg
		} else if (arr[i] === x) {
			jarak = 0
			//8. looping lg untuk mencari letak keberadaan 'o' dari posisi trakhir 'x' dan mulai penghitungan jarak (jarak +=1)
			for (var k = i + 1; k < arr.length; k++) {
				jarak += 1
				// 9. buat pengkondisian jika posisi [k] udah di 'o' maka otomatis jarak sudah terhitung
				if (arr[k] === o) {
					//10. mendeklarasikan jika jarak < jarak terdekat maka jarak terdekat = jarak yg tlh dihitung td
					if (jarak < jarakTerdekat) {
						jarakTerdekat = jarak
					}
				}
			}
		}
	}
	//11. langkah terakhir adalah mereturn jarak terdekat untuk mereturn nilai 
	return jarakTerdekat
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2




// var indexO = arr.indexOf("o")
// var jarak = 0
// var jarakTerdekat = arr.length

// if (arr.indexOf("x") === -1) {
// 	return 0
// }

// for (var i = 0; i < arr.length; i++) {
// 	if (arr[i] === "x") {
// 		jarak = Math.abs(i - indexO)
// 		if (jarak < jarakTerdekat) {
// 			jarakTerdekat = jarak
// 		}
// 	}
// }

// return jarakTerdekat
// }