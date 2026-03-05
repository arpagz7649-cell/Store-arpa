// --- KODE SAKTI PENYAMBUNG GUDANG MASTER ---

async function sambungkanGudang() {
    try {
        // 1. Mengambil data dari Gudang (JSON)
        // Pastikan nama file JSON Master sudah benar
        const respon = await fetch('gudang_harga.json');
        const dataGudang = await respon.json();

        // 2. Ambil daftar produk dari dalam gudang
        const daftarProduk = dataGudang.stok_game;
        const UNTUNG_MASTER = 1000; // Margin Master

        console.log("Mencoba menyambungkan ke " + dataGudang.nama_toko);

        // 3. Proses penyambungan otomatis ke HTML
        daftarProduk.forEach(item => {
            // Cari elemen berdasarkan kode (contoh: harga-roblox80)
            const elemenHarga = document.getElementById('harga-' + item.kode);
            
            if (elemenHarga) {
                // Ambil harga modal dari gudang dan tambah untung Master
                const hargaFinal = item.harga_modal + UNTUNG_MASTER;
                
                // Suntikkan harga ke tampilan HTML dengan format Rupiah
                elemenHarga.innerText = "Rp " + hargaFinal.toLocaleString('id-ID');
                
                console.log(`✅ ${item.nama} Berhasil Tersambung!`);
            }
        });

    } catch (error) {
        // Jika gudang tidak ditemukan atau koneksi putus
        console.error("❌ Waduh Master, koneksi ke gudang gagal!", error);
    }
}

// 4. Jalankan fungsi penyambungan otomatis saat halaman Master dibuka
window.onload = sambungkanGudang;
