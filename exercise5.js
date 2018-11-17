// Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.function palindrome(kata) {
// you can only write your code here!

//membuat function palindrome
function palindrome(kata) {
	//membuat variabel untung menampung hasil
	// console.log(kata)
	var hasil = '';
	//looping untuk mengecek kata
	for (var i = 0; i < kata.length; i++) {
		// console.log(kata[i])
		hasil = kata[i] + hasil
		// console.log (hasil)
	}
	//pengkondisian untuk menampilkan hasil true atau false
	if (kata == '') {
		return undefined
	} else if (hasil === kata) {
		return true
	} else if (hasil !== kata) {
		return false
	}

}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false