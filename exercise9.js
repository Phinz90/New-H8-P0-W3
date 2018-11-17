// Diberikan sebuah function cariMean(arr) yang menerima sebuah array angka. Function akan me-return mean dari array atau deret angka tersebut.
// Mean adalah angka rata-rata dari deret bilangan tersebut. Contoh, mean atau rata-rata dari [1, 2, 3, 4, 5] adalah 3. Kita perlu kemudian melakukan pembulatan angka dari hasil mean yang didapatkan.

function cariMean(arr) {
	//membuat variabel untuk menampung hasil
	var hasil = 0;
	//membuat variabel lagi untung menampung hasil mean
	var cariMean = 0;
	//melakukan loop untuk menjumlahkan setiap angka yg berada di dalam array
	for (var i = 0; i < arr.length; i++) {
		hasil += arr[i]
		//melakukan pembagian untuk mendapatkan rata2 (mean)
		cariMean = (hasil / arr.length)
	}
	//mereturn hasil dan membulatkan hasil mean dgn math.round
	return Math.round(cariMean)
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7