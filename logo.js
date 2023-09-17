
        // Fungsi untuk memeriksa URL saat halaman dimuat
        function periksaDomain() {
            var url = window.location.href; // Mendapatkan URL halaman
            var domainList = ["rakettv.blogspot.com", "raket2.blogspot.com", "rakettv.tiiny.site", "sokutv.tiiny.site"]; // Daftar domain yang diizinkan

            var domainValid = false;

            // Memeriksa apakah URL mengandung salah satu domain yang diizinkan
            for (var i = 0; i < domainList.length; i++) {
                if (url.indexOf(domainList[i]) !== -1) {
                    domainValid = true;
                    break;
                }
            }

            // Mengarahkan pengguna jika domain tidak valid
            if (!domainValid) {
                window.location.href = "https://linki.ee/starships"; // Mengarahkan pengguna ke URL yang berbeda jika domain tidak valid
            }
        }
       
  // Fungsi untuk memeriksa URL saat halaman dimuat
if (window == window.top) document.location = "https://rakettv.blogspot.com"  
