/*
Array pada JavaScript memiliki sekumpulan built-in function yang digunakan untuk mempermudah developer untuk mengolah data di dalamnya. Beberapa fungsi yang sering digunakan antara lain join, split, slice, splice, dan sort. Kerjakanlah tantangan ini untuk memperkuat pengertian kamu tentang built-in function tersebut.

//contoh output
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  

"0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]  
*/

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {

input.splice (1, 2)
input.splice (1, 0, 'Roman Alamsyah Elsharawy');
input.splice (2, 0)
input.splice (2, 0, 'Provinsi Bandar Lampung'); 
input.splice (4, 0, 'Pria');
input.splice (5, 1)
input.splice (5, 0, 'SMA Internasional Metro')

console.log (input);
console.log ('---------------------------------------------')

var tanggal = input[3]
console.log(tanggal)
  
splitTanggal = tanggal.split('/')
console.log(splitTanggal)

  
}

dataHandling(input)


/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 
 */

   
 // var dataHandling2 = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

// dataHandling2.splice(1,1, "Roman Alamsyah Elsharawy");
// dataHandling2.splice(2,1, "Provinsi Bandar Lampung");
// dataHandling2.splice(4,0, "Pria");
// dataHandling2.splice(5,1, "SMA Internasional Metro");
// console.log(dataHandling2);

// console.log('\n');

// var tanggal = dataHandling2.slice(3,4);
// console.log(tanggal);

// var splittanggal = tanggal[0].split("/");
// console.log(splittanggal);

// var bulan = splittanggal[1];
// objtoint = parseInt(bulan);

// switch(objtoint) {
//   case 1:   { console.log(' Januari '); break; }
//   case 2:   { console.log(' Februari '); break; }
//   case 3:   { console.log(' Maret '); break; }
//   case 4:   { console.log(' April '); break; }
//   case 5:   { console.log( ' Mei '); break; }
//   case 6:   { console.log(' Juni '); break; }
//   case 7:   { console.log(' Juli '); break; }
//   case 8:   { console.log(' Agustus '); break; }
//   case 9:   { console.log(' September '); break }
//   case 10:  { console.log(' Oktober '); break; }
//   case 11:  { console.log(' November '); break; }
//   case 12:  { console.log(' Desember '); break; }
//   }

// var x = splittanggal.sort(function(a,b){
//   return b-a;
  
// });

//   console.log(x);

// var a = tanggal[0].split("/").join("-");
// console.log(a);

// var e = dataHandling2[1].slice(0,15);
// console.log(e);
  
// console.log('==========================================')
// console.log('\n')

// function dataHandling2(input){
  
//     input.splice(1,2);
//     input.splice(1,0, 'Roman Alamsyah Elsharawy');
//     input.splice(2,0);
//     input.splice(2,0, 'Provinsi Bandar Lampung');
//     input.splice(4,0, 'Pria');
//     input.splice(5,1);
//     input.splice(5,0, 'SMA Internasional Metro');
//     console.log(input);
//     console.log('\n');
    
//     var tanggal = input[3];
    
//     console.log(tanggal)
  
//     splitTanggal = tanggal.split('/');
//     console.log(splitTanggal)
  
//     sliceTanggal = splitTanggal[1];
//     intTanggal = parseInt(sliceTanggal);
    
//     var switchBulan;
    
//     switch(intTanggal){
//       case 1: {switchBulan=('Januari');break;}
//       case 2: {switchBulan=('Februari');break;}
//       case 3: {switchBulan=('Maret');break;}
//       case 4: {switchBulan=('April');break;}
//       case 5: {switchBulan=('Mei');break;}
//       case 6: {switchBulan=('Juni');break;}
//       case 7: {switchBulan=('Juli');break;}
//       case 8: {switchBulan=('Agustus');break;}
//       case 9: {switchBulan=('September');break;}
//       case 10: {switchBulan=('Oktober');break;}
//       case 11: {switchBulan=('November');break;}
//       case 12: {switchBulan=('Desember');break;}
//     }
//     console.log(switchBulan);
//     console.log('\n');
    
//     sortTanggal = splitTanggal.sort(function(a, b) { 
//       return b - a; 
      
//     });
//     console.log(sortTanggal);
//     console.log('\n');
    
//     ubahTanggal = tanggal.split('/').join('-');
//     console.log(ubahTanggal);  
//     console.log('\n');
  
    
//     input.splice(1,2);
//     input.splice(1,0, 'Roman Alamsyah');
//     console.log(input[1]);
//       console.log('\n');
  
//   return '/';
//   }
  
//   console.log(dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]));
   
