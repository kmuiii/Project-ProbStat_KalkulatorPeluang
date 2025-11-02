// fungsi buatInput yang akan digunakan untuk menghitung jumlah macam barang & membuat input jumlah tiap barang
function buatInput() {
    // mengambil elemen div #itemContainer yang ada di script HTML
    // const di sini digunakan untuk variabel yang konstan (nilainya tidak boleh diubah setelah didefinisikan)
    const itemContainer  = document.getElementById('itemContainer');
    itemContainer.innerHTML = '';
    // const jumlahItem mengambil nilai input dari user menggunakan id #jumlahItem
    const jumlahItem = parseInt(document.getElementById('jumlahItem').value);

    //looping sesuai dengan jumkah macam barang (#jumlahItem)
    for (let i = 0; i < jumlahItem; i++) {
        //menambahkan elemen item ke itemContainer
        itemContainer.innerHTML += `
            <div class="item-entry">
                <input type="text" placeholder="Nama Barang #${i + 1}" id="namaBarang${i}" />
                <input type="number" placeholder="Jumlah" id="jumlahBarang${i}" min="0" />
            </div>
        `;
    }
}   

// fungsi hitung peluang
function hitungPeluang() {
    const jumlahItem = parseInt(document.getElementById('jumlahItem').value);
    let totalSemuaItem = 0;
    let jumlahItemDipilih = 0;
    const barangYangDipilih = document.getElementById('itemDipilih').value.trim().toLowerCase();

    for (let i = 0; i < jumlahItem; i++) {
        const nama = document.getElementById(`namaBarang${i}`).value.trim().toLowerCase();
        const jumlah = parseInt(document.getElementById(`jumlahBarang${i}`).value);

        if (!isNaN(jumlah)) {
            totalSemuaItem += jumlah;
            if (nama === barangYangDipilih) {
                jumlahItemDipilih = jumlah;
            }
        }
    }

    // menampilkan hasil berdasarkan id #result
    const hasil = document.getElementById('result');
    if (jumlahItemDipilih > 0 && totalSemuaItem > 0) {
        const peluang = (jumlahItemDipilih / totalSemuaItem) * 100;
        hasil.innerText = `Peluang mendapatkan "${barangYangDipilih}" adalah: ${peluang.toFixed(2)}%`;
    } else {
        hasil.innerText = 'Barang tidak ditemukan atau jumlah total adalah 0.';
    }
}
