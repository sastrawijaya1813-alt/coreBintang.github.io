function cekLogin(){
    const nama = document.getElementById('nama').value.trim();
    const sandi = document.getElementById('sandi').value.trim();
    const error = document.getElementById('pesan-error');

    if(nama === 'Rifandy' && sandi === '180313SKRBP'){
        localStorage.setItem('userCore','Rifandy');
        window.location.href = 'beranda.html';
    } else if(nama === 'Raja' && sandi === 'oktavianA2'){
        localStorage.setItem('userCore','Raja');
        window.location.href = 'beranda.html';
    } else {
        error.innerText = 'salah!.';
    }
}
