// Variabel global untuk menyimpan referensi interval hitungan mundur
var countdownInterval;

// Fungsi untuk membuka tautan pada tab baru
function openLinkInNewTab(url) {
  window.open(url, '_blank');
}

// Fungsi untuk mengaktifkan tombol "Download Now"
function enableDownloadButton() {
  var downloadButton = document.getElementById('downloadButton');
  downloadButton.disabled = false;
}

// Fungsi untuk memulai hitungan mundur dan mengaktifkan tombol "Download Now"
function startCountdownAndEnableDownloadButton() {
  var downloadButton = document.getElementById('downloadButton');
  downloadButton.disabled = true; // Menonaktifkan tombol untuk sementara waktu
  
  var countdown = 30; // Hitungan mundur dalam detik

  // Memperbarui teks tombol dengan hitungan mundur awal
  downloadButton.textContent = 'Download Now (' + countdown + 's)';

  countdownInterval = setInterval(function() {
    countdown--; // Mengurangi hitungan mundur

    // Memeriksa apakah hitungan mundur telah mencapai 0
    if (countdown <= 0) {
      clearInterval(countdownInterval); // Menghentikan hitungan mundur
      downloadButton.textContent = 'Download Now'; // Mengembalikan teks tombol ke semula
      enableDownloadButton(); // Mengaktifkan kembali tombol "Download Now"
      downloadButton.addEventListener('click', function() {
        // Membuka tautan URL pada tab baru
        openLinkInNewTab('https://careerjet.kenapalagi.com/');
      });
    } else {
      // Memperbarui teks tombol dengan hitungan mundur yang baru
      downloadButton.textContent = 'Download Now (' + countdown + 's)';
    }
  }, 1000); // Mengatur interval hitungan mundur menjadi 1 detik
}

// Mengambil referensi tombol "Unlock File"
var unlockButton = document.getElementById('unlockButton');

// Menambahkan event listener untuk tombol "Unlock File"
unlockButton.addEventListener('click', function() {
  // Menghentikan interval hitungan mundur sebelumnya (jika ada)
  clearInterval(countdownInterval);
  
  // Membuka tautan URL pada tab baru
  openLinkInNewTab('https://theologicalsnowshorter.com/h415auvs?key=8fdb4304284c8b6fb115c0a7ec1d7b87');
  
  // Memulai hitungan mundur dan mengaktifkan tombol "Download Now"
  startCountdownAndEnableDownloadButton();
});
