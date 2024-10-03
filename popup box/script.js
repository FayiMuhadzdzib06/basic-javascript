// popup prompt
// var nama = prompt('Masukkan Nama: ');
// alert('Halo ' + nama);

// popup confirm
// var tes = confirm('Kamu Yakin??'); // (confirm berisi boolean)
// if( tes === true ) {
//     alert('User Menekan OK!');
// } else {
//     alert('User Menekan Cancel!');
// }


alert('Selamat Datang!');
const lagi = true;

while( lagi ) {
    var nama = prompt('Masukkan Nama: ');
    alert('Halo ' + nama);

    lagi = confirm('Ingin Masukkan Nama Lagi??');
}
alert('Terima Kasih....');
