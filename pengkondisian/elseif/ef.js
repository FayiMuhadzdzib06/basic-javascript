var angka = prompt('Masukan angka: ');
if(angka % 2 == 0){ // kondisi dalam if harus bernilai TRUE jika false akan dilarikan ke else/ kluar dari {}
    alert('Angka yang anda masukkan adalah angka GENAP')
} else if(angka % 2 == 1){
    alert('Angka yang anda masukkan adalah angka GANJIL')
} else if(angka === null){
    alert('Anda tidak memasukkan apa apa');
}else { 
    alert('Yang anda masukkan bukan angka');
}

