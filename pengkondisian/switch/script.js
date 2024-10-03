var item = prompt('Masukkan nama makanan / minuman : \n(cth: nasi, daging, susu, hamburger, softdrink)');

switch ( item ) {
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('makanan / minuman SEHAT!');
        break;
    case 'hamburger' :
    case 'softdrink' :
        alert('makanan / minuman TIDAK SEHAT!');
        break;
    default:
        alert('Anda memasukkan makanan / minuman yang salah!!!');
        break;
}