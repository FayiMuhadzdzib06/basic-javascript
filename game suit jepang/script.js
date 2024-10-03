var ulang = true;
while( ulang ){
    // menangkap pilihan player
    var p = prompt('Pilih : gunting, batu, kertas');

    // menangkap pilihan komputer
    // membangkitkan bilangan random
    var comp = Math.random();
    if( comp < 0.34 ){
        comp = 'gunting';
    }else if( comp >= 0.34 && comp < 0.67 ){
        comp = 'batu';
    }else {
        comp = 'kertas';
    }
    console.log(comp);

    // menentukan rules
    var hasil = '';

    if( p == comp ){
        hasil = 'SERI!';
    }else if( p == 'gunting' ){
        // if( comp == 'batu' ){
        //     hasil = 'MENANG!';
        // }else {
        //     hasil = 'KALAH!';
        // }

        // Menggunakan ternary
        hasil = ( comp == 'batu' ) ? 'KALAH!' : 'MENANG!';
    }else if( p == 'batu' ){
        // if( comp == 'kertas' ){
        //     hasil = 'MENANG!';
        // }else {
        //     hasil = 'KALAH!';
        // }

        // Menggunakan ternary
        hasil = ( comp == 'kertas' ) ? 'KALAH!' : 'MENANG!';
    }else if( p == 'kertas' ){
        // if( comp == 'gunting' ){
        //     hasil = 'MENANG!';
        // }else {
        //     hasil = 'KALAH!';
        // }

        // Menggunakan ternary
        hasil = ( comp == 'gunting' ) ? 'KALAH!' : 'MENANG!';
    }else{
        hasil = 'Memasukkan pilihan yang salah!!';
    }

    // tampilkan hasilnya
    alert('Kamu Memilih : '+ p +' \nComputer Memilih : '+ comp +'\nMaka Hasilnya : Kamu '+ hasil);

    ulang = confirm('Mau Coba Lagi???');
}
alert('TerimaKasih sudah bermain :)')