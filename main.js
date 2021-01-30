//  // var angka;
//  // function randomAngka(){
//  //  angka = Math.floor(Math.random() * 11);
//  //  console.log(angka);
//  //  return angka;     
//  // }
//  // randomAngka();
//  // function cekAngka() {
//  //  var inputan = document.getElementById('inputan').value;
//  //  if (inputan == angka) {
//  //   alert('Benar angkanya adalah '+ angka);
//  //  }else if(inputan<angka){
//  //   alert('Angka yang kamu masukkan terlalu kecil')
//  //  }else{
//  //   alert('Angka yang kamu masukkan terlalu besar')
//  //  }
//  // }
// // var kesempatan;
// // var player = prompt('Masukan angka 1 - 10');

// // var computer = Math.floor(Math.random() * 11);
// // console.log(computer);

// // for( kesempatan = 3; kesempatan >= 1; kesempatan--) {
// //     if ( player == computer ) {
// //         alert('Benar angkanya adalah ' + computer);
// //     } else if (player < computer || kesempatan == 2) {
// //         alert('TERLALU RENDAH');
// //         kesempatan = prompt('Masukan lagi ?');
// //     } else if ( player > computer || kesempatan == 1 ) {
// //         alert('TERLALU TINGGI');
// //         kesempatan = prompt('masukan lagi ?');
// //     } else if (kesempatan ==0) {
// //         console.log('GAME OVER');
// //     }
// // }
// // 
// // 
// // 

var nama = prompt('Inputkan Nama : ');
var tanya = true;
while ( tanya ) {
    alert('Halo ' + nama + ' Tebak angka 1 – 10 '+('\n')+'Kamu punya 3 Kesempatan');

var computer = Math.floor(Math.random() * 11);
console.log(computer);

for( var kesempatan = 2; kesempatan >= 0; kesempatan--){
var player = parseInt(prompt('Masukkan Angka Tebakan'));

    if( player == computer ){
        alert('Selamat ' + nama + ('\n') + 'Anda berhasil menebak angka ' + computer);
        break;
    } else if ( player < computer ) {
        if( kesempatan == 0 ){
        alert('Terlalu RENDAH!'+'\n' +'kesempatan anda habis');
        break;
    }
        alert('Terlalu RENDAH!'+'\n'+'ayo masih ada '+kesempatan+ ' kesempatan ');
    } else if (player > computer){
        if( kesempatan == 0 ){
        alert('Terlalu TINGGI!'+'\n' +'kesempatan anda habis');
        break;
    }
        alert('Terlalu TINGGI!'+'\n'+'ayo masih ada '+kesempatan+ ' kesempatan ');
    }
    }
    tanya = confirm('Ulangi ?');
    }
alert('Terima kasih ' + nama);

