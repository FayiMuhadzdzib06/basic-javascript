function tambah(a, b){
    return a + b;
}

// ParseInt adalah untuk mengubah nilai string menjadi integer yang telah di masukkan oleh user
var a = parseInt(prompt('Masukkan nilai 1 :'));
var b = parseInt(prompt('Masukkan nilai 2 :'));
var hasil = tambah(a, b)
alert(hasil);