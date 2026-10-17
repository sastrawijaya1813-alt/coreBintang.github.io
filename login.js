// login.js - v1.2 Supabase - FINAL
import { supabase } from './supabase.js'

async function cekLogin(){
  const nama = document.getElementById('nama').value.trim();
  const sandi = document.getElementById('sandi').value.trim();
  const error = document.getElementById('pesan-error');

  if(!nama || !sandi){
    error.innerText = 'Isi nama dan sandi dulu!';
    return;
  }

  error.innerText = 'lagi cek...';

  const { data, error: dbError } = await supabase
    .from('core_users')
    .select('*')
    .eq('nama', nama)
    .eq('sandi', sandi)
    .single()

  if(data){
    localStorage.setItem('userCore', data.nama);
    window.location.href = 'beranda.html';
  } else {
    error.innerText = 'Nama atau sandi salah!';
    console.log(dbError);
  }
}

// INI KUNCINYA BIAR index.html LU YANG LAMA JALAN!
window.cekLogin = cekLogin;
