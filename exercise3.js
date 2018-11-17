// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca

// Nomor ID:  0002
// Nama Lengkap:  Dika Sembiring
// TTL:  Medan 10/10/1992
// Hobi:  Bermain Gitar

// Nomor ID:  0003
// Nama Lengkap:  Winona
// TTL:  Ambon 25/12/1965
// Hobi:  Memasak

// Nomor ID:  0004
// Nama Lengkap:  Bintang Senjaya
// TTL:  Martapura 6/4/1970
// Hobi:  Berkebun

var input = [
	["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
	["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
	["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
	["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

// function dataHandling(input) {

// 	for (var i = 0; i < input.length; i++) {

// 	console.log('Nomor Id: ' + input [0][0])
// 	console.log('Nama Lengkap: ' + input[0][1])
// 	console.log('TTL :' + input[0][2] +' ' + input[0][3])
// 	console.log('Hobi: '+ input [0][4])
// 	console.log('---------------------------------')
// 	console.log('Nomor Id: ' + input [1][0])
// 	console.log('Nama Lengkap: ' + input[1][1])
// 	console.log('TTL :' + input[1][2] +' ' + input[1][3])
// 	console.log('Hobi: '+ input [1][4])
// 	console.log('---------------------------------')
// 	console.log('Nomor Id: ' + input [2][0])
// 	console.log('Nama Lengkap: ' + input[2][1])
// 	console.log('TTL :' + input[2][2] +' ' + input[2][3])
// 	console.log('Hobi: '+ input [2][4])
// 	console.log('---------------------------------')
// 	console.log('Nomor Id: ' + input [3][0])
// 	console.log('Nama Lengkap: ' + input[3][1])
// 	console.log('TTL :' + input[3][2] +' ' + input[3][3])
// 	console.log('Hobi: '+ input [3][4])
// 	}
// 	return input
// }

// console.log(dataHandling(input))

function dataHandling(input) {
	for (var i = 0; i < input.length; i++) {
		console.log('Nomor ID: ' + input[i][0]);
		console.log('Nama: ' + input[i][1]);
		console.log('TTL: ' + input[i][2] + ' ' + input[i][3]);
		console.log('Hobi: ' + input[i][4]);
		console.log("-------------------------")
	}
}
dataHandling(input)


/*

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/