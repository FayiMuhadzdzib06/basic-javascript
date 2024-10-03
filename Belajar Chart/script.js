let chartAkuh = document.getElementById('chartAku');
let labels = ['Mixue', 'Rendang', 'Ayam Bakar', 'Babi Guling', 'Kikil Badag', 'Brokoli Hijau Badag'];
let data = [12, 19, 13, 15, 22, 30];

let tambahInput = document.getElementById('tambah');
tambahInput.addEventListener('keyup', function(value){
    // console.log(value.key) buat mgeliat isi yang dimasukkan oleh user di form input
    if(value.key == 'Enter'){
        labels.push(tambahInput.value);
        chart.update();
        tambahInput.value = '';
    }
})

let chart = new Chart(chartAkuh, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: data,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


let btn = document.getElementById('mode');
btn.onclick = function(){
    const body = document.body;
    body.classList.toggle('hitam');
}