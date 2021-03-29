[English](/README.en-US.md) | Indonesia


# Wishxporter

Perkakas terminal untuk mengekspor riwayat gachamu dari akun Genshin Impact ke file Excel.

Jika kamu mendapat keuntungan dari perkakas terminal ini [silakan traktir saya 3 - 5 es krim di Trakteer.id](https://trakteer.id/satyakresna)

## Motivasi

Seperti yang kita tahu bahwa Genshin Impact menyimpan riwayat gacha selama 6 bulan dan setelah itu akan di reset ulang. Daripada menggunakan notepad dan salin tempel secara manual, kenapa tidak membuat sebuah perkakas terminal sebagai jalan yang lebih mudah? Dengan melakukan backup riwayat gacha kamu dapat melacak dan menganalisa riwayat gachamu.

## Daftar Data yang di Back Up

- Event Permohonan Karakter
- Event Permohonan Senjata
- Event Permohonan Permanen

## Syarat and Instalasi

Membutuhkan node js dengan versi minimum versi 10. Setelah itu install perkakas terminal ini dengan perintah

```bash
npm install -g wishxporter
```

## Penggunaan

1. Salin file `output_log.txt` dari ~/AppData/LocalLow/miHoYo/Genshin Impact (untuk OS Windows) and tempel di direktori baru (contoh: export-player-gacha).
2. Menuju ke direktori export-player-gacha dan jalankan `wishxporter output_log.txt`. Perkakas terminal akan menarik data dari API MiHoYo dengan `authkey` dari `output_log.txt` kemudian menyimpan data ke dalam bentuk file Excel.

Jika tidak berhasil maka akan kamu akan mendapatkan pesan di bawah ini:

`Cannot get your gacha data because: authkey timeout! Please try again later.`

## Tanya Jawab

### Apakah Perkakas Terminal ini melanggar aturan dari MiHoYo?

Dari perspektif saya tidak karena perkakas ini hanya menarik data dan tidak melakukan modifikasi atau mengedit data di game Genshin Impact. Sebagai bukti saya telah menggunakan perkakas ini dan ini adalah [file Genshin Wish History milik saya](https://drive.google.com/file/d/1Ny5LRSx4KjuarU6Dvn2S4mv2G9xYsn9O/view?usp=sharing).

### Takagg sudah pernah membagikan mekanisme yang sama menggunakan aplikasi dekstop. Kenapa kamu tidak menggunakan itu daripada membuat perkakas CLI?

[Takagg sudah pernah membagikan mekanisme yang sama menggunakan aplikasi dekstop](https://www.youtube.com/watch?v=EiW5-TwOOtI) tapi saya ingin tahu apa yang sebenarnya terjadi di balik layar di aplikasi desktop itu. Untungnya, [sumber kode terbuka](https://github.com/takagg/genshin-gacha-export) dan saya bisa mengeceknya juga.

Kemudian, saya ingin membuat hal sederhana untuk diri saya sebisa mungkin dan mungkin kamu bisa dapatkan keuntungan dari perkakas terminal saya. :)

## Inspirasi

Terima kasih kepada [takagg/genshin-gacha-export](https://github.com/takagg/genshin-gacha-export) yang sebenarnya berasal dari [biuuu/genshin-wish-export](https://github.com/biuuu/genshin-wish-export) dan [thesadru/genshinstats](https://github.com/thesadru/genshinstats) sebagai inspirasi dari proyek ini. 🙏
