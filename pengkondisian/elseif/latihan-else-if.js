var jmlhAngkt = 10;
var angkotBeroperasi = 6;
for(var noAngkot = 1; noAngkot <= jmlhAngkt; noAngkot++) {
    if(noAngkot <= angkotBeroperasi && noAngkot !== 5){
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    } else if(noAngkot === 5 || noAngkot === 8 || noAngkot === 10){
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }
}


// // perulangan if else sederhana
// var na = prompt('Masukkan Nilai anda : ');
// if(na >= 90){
//     alert('Nilai Anda Sangat Bagus');
// }else if(na >= 65 ){
//     alert('Nilai Anda Bagus');
// }else if(na >= 30){
//     alert('Nilai Anda Kurang Bagus')
// }else{
//     alert('Nilai Anda Jelek');
// }