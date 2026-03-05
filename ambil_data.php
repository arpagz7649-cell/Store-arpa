<?php
// Agar file JSON Master bisa diakses oleh JavaScript di depan
header('Content-Type: application/json');

// 1. Tentukan lokasi Gudang JSON Master
$fileGudang = 'gudang_harga.json';

// 2. Cek apakah Gudangnya ada atau tidak
if (file_exists($fileGudang)) {
    // Ambil isi gudang
    $isiGudang = file_get_contents($fileGudang);
    
    // Kirim datanya ke website Master
    echo $isiGudang;
} else {
    // Jika gudang hilang, kasih pesan error biar Master tahu
    echo json_encode(["error" => "Waduh Master, file gudang_harga.json tidak ketemu di server!"]);
}
?>
