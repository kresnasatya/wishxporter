[English](/README.en-US.md) | Indonesia


# Wishxporter

> [DIARSIP] karena adanya metode baru untuk mendapatkan auth key di setiap platform dan kesulitan untuk menemukan caranya...

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

Silakan jalankan perintah `wishxporter --help` untuk info lebih lanjut.

## Penggunaan

### Mendapatkan authkey

Ada 5 cara untuk mendapatkan authkey dari Genshin Impact:

#### **PC (Wi
ndows)**

1. Buka menu Paimon [ESC].
2. Klik Masukan.
3. Tunggu sampai semua halaman sudah dimuat dan browser Anda akan terbuka.
4. Salin dan buat file bernama **auth.txt** dan tempel hasilnya di sana.
5. Jalankan perintah `wishxporter --file=auth.txt`.

#### **Android**

1. Buka menu Paimon.
2. Tekan Masukan.
3. Tunggu sampai halaman masukan tampil seutuhnya.
4. Matikan wifi dan data selular.
5. Tekan refresh di ujung kanan atas.
6. Halaman masukan seharusnya error dan akan menampilkan teks dengan warna hitam.
7. Tekan dan tahan teks lalu pilih semua, kemudian salin teks nya (semuanya dan tidak boleh dipotong-potong).
8. Buat file bernama **auth.txt** di komputer Anda dan tempel hasilnya tempel hasilnya di dalam file tersebut.
9. Jalankan perintah `wishxporter --file=auth.txt`.

#### **iOS**

1. Buka menu Paimon.
2. Tekan Masukan.
3. Tunggu sampai halaman masukan tampil seutuhnya.
4. Tekan Masalah Game.
5. Tekan Mode Co-Op.
6. Ada tautan warna biru di bawah reply, klik tautan tersebut.
7. Browser Anda akan terbuka, salin tautan di browser dan buat file bernama **auth.txt** di komputer Anda dan tempel hasilnya di dalam file tersebut.
8. Jalankan perintah `wishxporter --file=auth.txt`

Jika tidak berhasil maka akan Anda akan mendapatkan pesan di bawah ini:

`Cannot get your gacha data because: authkey timeout! Please try again later.`

## Tanya Jawab

### Apakah Perkakas Terminal ini ada mengoleksi data riwayat gacha saya dibalik layar?

Perkakas terminal hanya bertujuan untuk mengekspor data riwayat gacha Anda ke Excel file dengan menggunakan `authkey`. `authkey` tidak disimpan di balik layar dan tidak ada data riwayat gacha yang dikoleksi dibalik layar.

### Apakah Perkakas Terminal ini melanggar aturan dari MiHoYo?

Dari perspektif saya tidak karena perkakas ini hanya menarik data dan tidak melakukan modifikasi atau mengedit data di game Genshin Impact. Sebagai bukti saya telah menggunakan perkakas ini dan ini adalah [file Genshin Wish History milik saya](https://drive.google.com/file/d/1Ny5LRSx4KjuarU6Dvn2S4mv2G9xYsn9O/view?usp=sharing).

### Takagg sudah pernah membagikan mekanisme yang sama menggunakan aplikasi dekstop. Kenapa kamu tidak menggunakan itu daripada membuat perkakas CLI?

[Takagg sudah pernah membagikan mekanisme yang sama menggunakan aplikasi dekstop](https://www.youtube.com/watch?v=EiW5-TwOOtI) tapi saya ingin tahu apa yang sebenarnya terjadi di balik layar di aplikasi desktop itu. Untungnya, [sumber kode terbuka](https://github.com/takagg/genshin-gacha-export) dan saya bisa mengeceknya juga.

Kemudian, saya ingin membuat hal sederhana untuk diri saya sebisa mungkin dan mungkin kamu bisa dapatkan keuntungan dari perkakas terminal saya. :)

## Inspirasi

Terima kasih kepada:

1. [takagg/genshin-gacha-export](https://github.com/takagg/genshin-gacha-export) yang sebenarnya berasal dari [biuuu/genshin-wish-export](https://github.com/biuuu/genshin-wish-export) 
2. [thesadru/genshinstats](https://github.com/thesadru/genshinstats)
3. [Situs paimon.moe](https://paimon.moe/wish) telah menyediakan cara untuk mendapatkan `authkey` dari menu Masukan Genshin Impact.
