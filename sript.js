function hitungISPU() {
    const ia = parseFloat(document.getElementById('ia').value);
    const ib = parseFloat(document.getElementById('ib').value);
    const xa = parseFloat(document.getElementById('xa').value);
    const xb = parseFloat(document.getElementById('xb').value);
    const xx = parseFloat(document.getElementById('xx').value);

    // Hitung ISPU menggunakan rumus yang Anda berikan
    const ispu = (ia - ib) / (xa - xb) * (xx - xb) + ib;

    // Tentukan kategori ISPU berdasarkan hasil perhitungan
    let kategori = '';
    if (ispu >= 1 && ispu <= 50) {
        kategori = 'Baik';
    } else if (ispu <= 100) {
        kategori = 'Sedang';
    } else if (ispu <= 200) {
        kategori = 'Tidak Sehat';
    } else if (ispu <= 300) {
        kategori = 'Sangat Tidak Sehat';
    } else {
        kategori = 'Berbahaya';
    }

    document.getElementById('result').innerHTML = `ISPU: ${ispu.toFixed(2)}`;
    document.getElementById('kategori').innerHTML = `Kategori: ${kategori}`;
}
