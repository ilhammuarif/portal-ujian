import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

process.loadEnvFile();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const htmlSummary = `<div style="font-family: 'Comic Sans MS', 'Chalkboard SE', sans-serif; line-height: 1.8; color: #334155;">
  <p style="font-size: 1.2rem; color: #059669; font-weight: bold; text-align: center; margin-bottom: 2rem;">
    Selamat datang di petualangan Matematika! 📐✖️<br/>Mari kita asah logika dan berhitung dengan teliti!
  </p>
  <div style="background: #f0fdf4; border-left: 6px solid #10b981; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #047857; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #a7f3d0; padding-bottom: 1rem;">🧮 Operasi Bilangan & Pecahan</h3>
    <ul>
      <li>Dahulukan operasi perkalian dan pembagian sebelum penjumlahan dan pengurangan (KABATAKU).</li>
      <li>Untuk penjumlahan pecahan berbeda penyebut, samakan penyebutnya menggunakan KPK terlebih dahulu.</li>
      <li>Perkalian pecahan dilakukan dengan mengalikan pembilang dengan pembilang, dan penyebut dengan penyebut.</li>
    </ul>
  </div>
  <div style="background: #fffbeb; border-left: 6px solid #f59e0b; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #b45309; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #fde68a; padding-bottom: 1rem;">📏 Bangun Ruang & Geometri</h3>
    <ul>
      <li>Volume Kubus = Sisi × Sisi × Sisi (s³).</li>
      <li>Volume Balok = Panjang × Lebar × Tinggi (p × l × t).</li>
      <li>Perhatikan jaring-jaring bangun ruang untuk mengetahui bentuk asli setelah dilipat.</li>
    </ul>
  </div>
  <div style="background: #eff6ff; border-left: 6px solid #3b82f6; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #1d4ed8; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #bfdbfe; padding-bottom: 1rem;">📊 Pengolahan Data</h3>
    <ul>
      <li><b>Modus:</b> Nilai atau data yang paling sering muncul.</li>
      <li><b>Median:</b> Nilai tengah setelah data diurutkan dari yang terkecil.</li>
      <li><b>Rata-rata (Mean):</b> Jumlah seluruh data dibagi banyaknya data.</li>
    </ul>
  </div>
</div>`;

const questions = [
  {
    "id": "q_1",
    "type": "pg",
    "question": "Hasil dari 4.567 + 3.214 - 1.234 adalah ...",
    "options": [
      "6.547",
      "6.557",
      "6.567",
      "6.577"
    ],
    "correctAnswer": 0,
    "explanation_correct": "4.567 + 3.214 = 7.781. Kemudian 7.781 - 1.234 = 6.547.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! 4.567 + 3.214 = 7.781. Kemudian 7.781 - 1.234 = 6.547."
  },
  {
    "id": "q_2",
    "type": "pg",
    "question": "Pak Budi memanen 2.345 buah apel pada hari pertama dan 1.456 buah pada hari kedua. Jika 500 buah apel busuk, berapa banyak apel yang masih bagus?",
    "options": [
      "3.201",
      "3.301",
      "3.801",
      "4.301"
    ],
    "correctAnswer": 1,
    "explanation_correct": "Total panen = 2.345 + 1.456 = 3.801. Apel bagus = 3.801 - 500 = 3.301.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Total panen = 2.345 + 1.456 = 3.801. Apel bagus = 3.801 - 500 = 3.301."
  },
  {
    "id": "q_3",
    "type": "pg",
    "question": "Hasil dari 125 × 4 : 5 adalah ...",
    "options": [
      "80",
      "100",
      "120",
      "150"
    ],
    "correctAnswer": 1,
    "explanation_correct": "125 × 4 = 500. Kemudian 500 : 5 = 100.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! 125 × 4 = 500. Kemudian 500 : 5 = 100."
  },
  {
    "id": "q_4",
    "type": "pg",
    "question": "Sebuah toko buku memiliki 12 rak. Setiap rak berisi 45 buku. Jika semua buku akan dimasukkan ke dalam 10 kardus dengan jumlah sama banyak, berapa buku tiap kardus?",
    "options": [
      "50",
      "54",
      "60",
      "64"
    ],
    "correctAnswer": 1,
    "explanation_correct": "Total buku = 12 × 45 = 540. Buku tiap kardus = 540 : 10 = 54.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Total buku = 12 × 45 = 540. Buku tiap kardus = 540 : 10 = 54."
  },
  {
    "id": "q_5",
    "type": "pg",
    "question": "KPK dari 12 dan 18 dalam bentuk faktorisasi adalah ...",
    "options": [
      "2 × 3",
      "2² × 3²",
      "2 × 3²",
      "2² × 3"
    ],
    "correctAnswer": 1,
    "explanation_correct": "Faktorisasi 12 = 2² × 3. Faktorisasi 18 = 2 × 3². KPK = 2² × 3² = 36.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Faktorisasi 12 = 2² × 3. Faktorisasi 18 = 2 × 3². KPK = 2² × 3² = 36."
  },
  {
    "id": "q_6",
    "type": "pg",
    "question": "Ibu memiliki 24 kue cokelat dan 36 kue donat. Kue tersebut akan dibagikan kepada anak-anak dengan jumlah yang sama banyak. Jumlah anak paling banyak yang menerima kue adalah ...",
    "options": [
      "6",
      "8",
      "12",
      "18"
    ],
    "correctAnswer": 2,
    "explanation_correct": "FPB dari 24 dan 36 adalah 12. Jadi paling banyak 12 anak.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! FPB dari 24 dan 36 adalah 12. Jadi paling banyak 12 anak."
  },
  {
    "id": "q_7",
    "type": "pg",
    "question": "Lampu A menyala setiap 15 detik, lampu B menyala setiap 20 detik. Kedua lampu akan menyala bersamaan pada detik ke ...",
    "options": [
      "30",
      "45",
      "60",
      "80"
    ],
    "correctAnswer": 2,
    "explanation_correct": "KPK dari 15 dan 20 adalah 60. Mereka menyala bersama tiap 60 detik.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! KPK dari 15 dan 20 adalah 60. Mereka menyala bersama tiap 60 detik."
  },
  {
    "id": "q_8",
    "type": "pg",
    "question": "Jika sebuah pizza dibagi menjadi 8 bagian sama besar dan Andi memakan 3 bagian, nilai pecahan yang dimakan Andi adalah ...",
    "options": [
      "1/8",
      "3/8",
      "5/8",
      "8/3"
    ],
    "correctAnswer": 1,
    "explanation_correct": "3 bagian dari 8 bagian adalah 3/8.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! 3 bagian dari 8 bagian adalah 3/8."
  },
  {
    "id": "q_9",
    "type": "pg",
    "question": "Pita Rani panjangnya 1/2 meter. Ia membeli lagi 1/4 meter. Panjang pita Rani sekarang adalah ... meter.",
    "options": [
      "1/6",
      "2/6",
      "3/4",
      "1"
    ],
    "correctAnswer": 2,
    "explanation_correct": "1/2 + 1/4 = 2/4 + 1/4 = 3/4.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! 1/2 + 1/4 = 2/4 + 1/4 = 3/4."
  },
  {
    "id": "q_10",
    "type": "pg",
    "question": "Hasil dari 2 1/3 + 1 1/2 adalah ...",
    "options": [
      "3 1/5",
      "3 2/5",
      "3 5/6",
      "3 5/6"
    ],
    "correctAnswer": 2,
    "explanation_correct": "2 1/3 + 1 1/2 = 7/3 + 3/2 = 14/6 + 9/6 = 23/6 = 3 5/6.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! 2 1/3 + 1 1/2 = 7/3 + 3/2 = 14/6 + 9/6 = 23/6 = 3 5/6."
  },
  {
    "id": "q_11",
    "type": "pg",
    "question": "Hasil dari 3/4 × 12 adalah ...",
    "options": [
      "6",
      "8",
      "9",
      "12"
    ],
    "correctAnswer": 2,
    "explanation_correct": "3/4 × 12 = 36 / 4 = 9.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! 3/4 × 12 = 36 / 4 = 9."
  },
  {
    "id": "q_12",
    "type": "pg",
    "question": "Ibu memiliki 5 kg beras yang akan dimasukkan ke dalam kantong plastik yang masing-masing berisi 1/2 kg. Banyak kantong yang dibutuhkan adalah ...",
    "options": [
      "2",
      "5",
      "8",
      "10"
    ],
    "correctAnswer": 3,
    "explanation_correct": "5 : (1/2) = 5 × 2 = 10 kantong.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! 5 : (1/2) = 5 × 2 = 10 kantong."
  },
  {
    "id": "q_13",
    "type": "pg",
    "question": "Aturan dari pola bilangan 2, 6, 18, 54, ... adalah ...",
    "options": [
      "Ditambah 4",
      "Dikali 2",
      "Dikali 3",
      "Dikali 4"
    ],
    "correctAnswer": 2,
    "explanation_correct": "2 × 3 = 6, 6 × 3 = 18, 18 × 3 = 54.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! 2 × 3 = 6, 6 × 3 = 18, 18 × 3 = 54."
  },
  {
    "id": "q_14",
    "type": "pg",
    "question": "Sebuah tanaman tumbuh 2 cm pada minggu pertama, 4 cm pada minggu kedua, dan 8 cm pada minggu ketiga. Jika pola berlanjut, pertumbuhan minggu kelima adalah ...",
    "options": [
      "16 cm",
      "24 cm",
      "32 cm",
      "64 cm"
    ],
    "correctAnswer": 2,
    "explanation_correct": "Pola dikali 2: 2, 4, 8, 16, 32. Minggu kelima adalah 32.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Pola dikali 2: 2, 4, 8, 16, 32. Minggu kelima adalah 32."
  },
  {
    "id": "q_15",
    "type": "pg",
    "question": "Jika harga 3 buah pulpen adalah Rp 15.000, maka rasio harga per pulpen adalah ...",
    "options": [
      "Rp 3.000",
      "Rp 4.000",
      "Rp 5.000",
      "Rp 6.000"
    ],
    "correctAnswer": 2,
    "explanation_correct": "15.000 : 3 = Rp 5.000 per pulpen.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! 15.000 : 3 = Rp 5.000 per pulpen."
  },
  {
    "id": "q_16",
    "type": "pg",
    "question": "Keliling persegi panjang dengan panjang 8 cm dan lebar 5 cm adalah ...",
    "options": [
      "13 cm",
      "26 cm",
      "40 cm",
      "80 cm"
    ],
    "correctAnswer": 1,
    "explanation_correct": "Keliling = 2 × (p + l) = 2 × (8 + 5) = 2 × 13 = 26 cm.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Keliling = 2 × (p + l) = 2 × (8 + 5) = 2 × 13 = 26 cm."
  },
  {
    "id": "q_17",
    "type": "pg",
    "question": "Paman membuat taman berbentuk persegi dengan sisi 12 meter. Keliling taman tersebut adalah ...",
    "options": [
      "24 m",
      "36 m",
      "48 m",
      "144 m"
    ],
    "correctAnswer": 2,
    "explanation_correct": "Keliling persegi = 4 × sisi = 4 × 12 = 48 meter.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Keliling persegi = 4 × sisi = 4 × 12 = 48 meter."
  },
  {
    "id": "q_18",
    "type": "pg",
    "question": "Lantai kamar berbentuk persegi panjang dengan ukuran panjang 4 m dan lebar 3 m. Luas lantai kamar tersebut adalah ...",
    "options": [
      "7 m²",
      "12 m²",
      "14 m²",
      "24 m²"
    ],
    "correctAnswer": 1,
    "explanation_correct": "Luas = panjang × lebar = 4 × 3 = 12 m².",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Luas = panjang × lebar = 4 × 3 = 12 m²."
  },
  {
    "id": "q_19",
    "type": "pg",
    "question": "Luas sebuah segitiga dengan alas 10 cm dan tinggi 8 cm adalah ...",
    "options": [
      "18 cm²",
      "36 cm²",
      "40 cm²",
      "80 cm²"
    ],
    "correctAnswer": 2,
    "explanation_correct": "Luas segitiga = 1/2 × alas × tinggi = 1/2 × 10 × 8 = 40 cm².",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Luas segitiga = 1/2 × alas × tinggi = 1/2 × 10 × 8 = 40 cm²."
  },
  {
    "id": "q_20",
    "type": "pg",
    "question": "Sudut yang besarnya lebih dari 90 derajat tetapi kurang dari 180 derajat disebut sudut ...",
    "options": [
      "Lancip",
      "Siku-siku",
      "Tumpul",
      "Pelurus"
    ],
    "correctAnswer": 2,
    "explanation_correct": "Sudut antara 90 dan 180 derajat adalah sudut tumpul.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Sudut antara 90 dan 180 derajat adalah sudut tumpul."
  },
  {
    "id": "q_21",
    "type": "pg",
    "question": "Pukul 03.00, jarum panjang dan pendek jam membentuk sudut sebesar ...",
    "options": [
      "60 derajat",
      "90 derajat",
      "120 derajat",
      "150 derajat"
    ],
    "correctAnswer": 1,
    "explanation_correct": "Tiap 1 angka jaraknya 30 derajat. Pukul 03.00 berarti 3 × 30 = 90 derajat.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Tiap 1 angka jaraknya 30 derajat. Pukul 03.00 berarti 3 × 30 = 90 derajat."
  },
  {
    "id": "q_22",
    "type": "pg",
    "question": "Luas permukaan kubus dengan panjang rusuk 5 cm adalah ...",
    "options": [
      "25 cm²",
      "100 cm²",
      "125 cm²",
      "150 cm²"
    ],
    "correctAnswer": 3,
    "explanation_correct": "Luas permukaan kubus = 6 × s² = 6 × 25 = 150 cm².",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Luas permukaan kubus = 6 × s² = 6 × 25 = 150 cm²."
  },
  {
    "id": "q_23",
    "type": "pg",
    "question": "Volume balok dengan panjang 10 cm, lebar 5 cm, dan tinggi 4 cm adalah ...",
    "options": [
      "50 cm³",
      "100 cm³",
      "150 cm³",
      "200 cm³"
    ],
    "correctAnswer": 3,
    "explanation_correct": "Volume = p × l × t = 10 × 5 × 4 = 200 cm³.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Volume = p × l × t = 10 × 5 × 4 = 200 cm³."
  },
  {
    "id": "q_24",
    "type": "pg",
    "question": "Bangun datar yang memiliki 3 sisi dan 3 titik sudut adalah ...",
    "options": [
      "Lingkaran",
      "Persegi",
      "Segitiga",
      "Trapesium"
    ],
    "correctAnswer": 2,
    "explanation_correct": "Segitiga adalah poligon dengan 3 sisi dan 3 sudut.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Segitiga adalah poligon dengan 3 sisi dan 3 sudut."
  },
  {
    "id": "q_25",
    "type": "pg",
    "question": "Bangun ruang yang tidak memiliki titik sudut adalah ...",
    "options": [
      "Kerucut",
      "Bola",
      "Kubus",
      "Balok"
    ],
    "correctAnswer": 1,
    "explanation_correct": "Bola adalah bangun ruang yang tidak bersudut dan terbentuk dari satu sisi lengkung tertutup.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Bola adalah bangun ruang yang tidak bersudut dan terbentuk dari satu sisi lengkung tertutup."
  },
  {
    "id": "q_26",
    "type": "essay",
    "question": "Sebuah pabrik roti memproduksi 1.200 roti per hari. Jika roti-roti tersebut akan didistribusikan sama rata ke 8 toko kecil, berapa jumlah roti yang diterima masing-masing toko?",
    "correctAnswer": "150 roti",
    "explanation_correct": "1.200 : 8 = 150 roti per toko.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! 1.200 : 8 = 150 roti per toko."
  },
  {
    "id": "q_27",
    "type": "essay",
    "question": "Bu Rina ingin membungkus 30 pensil dan 45 buku dalam beberapa paket. Berapa banyak paket terbanyak yang bisa dibuat agar setiap paket berisi jumlah pensil dan buku yang sama?",
    "correctAnswer": "15 paket",
    "explanation_correct": "FPB dari 30 dan 45 adalah 15.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! FPB dari 30 dan 45 adalah 15."
  },
  {
    "id": "q_28",
    "type": "essay",
    "question": "Dua orang pelari berlari mengitari lapangan. Pelari pertama menyelesaikan satu putaran dalam 6 menit, sedangkan pelari kedua dalam 8 menit. Jika mereka mulai berlari bersama-sama, setelah berapa menit mereka akan bertemu di garis awal untuk pertama kalinya?",
    "correctAnswer": "24 menit",
    "explanation_correct": "KPK dari 6 dan 8 adalah 24.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! KPK dari 6 dan 8 adalah 24."
  },
  {
    "id": "q_29",
    "type": "essay",
    "question": "Nita mencampur 1/2 liter sirup jeruk dengan 1/4 liter air matang. Jika Nita meminum 1/8 liter dari campuran tersebut, berapa liter sisa minuman Nita?",
    "correctAnswer": "5/8 liter",
    "explanation_correct": "1/2 + 1/4 = 3/4 = 6/8. Kemudian 6/8 - 1/8 = 5/8 liter.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! 1/2 + 1/4 = 3/4 = 6/8. Kemudian 6/8 - 1/8 = 5/8 liter."
  },
  {
    "id": "q_30",
    "type": "essay",
    "question": "Sebuah taman berbentuk persegi panjang berukuran panjang 10 m dan lebar 6 m memiliki sebuah kolam berbentuk lingkaran dengan jari-jari 2 m. Berapa luas taman yang tidak tertutup kolam? (Gunakan pi = 3,14)",
    "correctAnswer": "47,44 m²",
    "explanation_correct": "Luas taman = 10 x 6 = 60 m². Luas kolam = 3,14 x 2² = 12,56 m². Sisa = 60 - 12,56 = 47,44 m².",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Luas taman = 10 x 6 = 60 m². Luas kolam = 3,14 x 2² = 12,56 m². Sisa = 60 - 12,56 = 47,44 m²."
  },
  {
    "id": "q_31",
    "type": "essay",
    "question": "Sebuah bak mandi berbentuk kubus memiliki panjang rusuk 1 meter. Jika bak tersebut sudah terisi air setengahnya, berapa liter air yang dibutuhkan untuk memenuhi bak mandi tersebut?",
    "correctAnswer": "500 liter",
    "explanation_correct": "Volume penuh = 1 m x 1 m x 1 m = 1 m³ = 1000 dm³ = 1000 liter. Setengah = 500 liter.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Volume penuh = 1 m x 1 m x 1 m = 1 m³ = 1000 dm³ = 1000 liter. Setengah = 500 liter."
  },
  {
    "id": "q_32",
    "type": "essay",
    "question": "Sebutkan 3 karakteristik utama dari sebuah jajar genjang!",
    "correctAnswer": "1. Memiliki 4 sisi, 2. Sisi yang berhadapan sejajar dan sama panjang, 3. Sudut yang berhadapan sama besar.",
    "explanation_correct": "Karakteristik dasar jajar genjang.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Karakteristik dasar jajar genjang."
  },
  {
    "id": "q_33",
    "type": "essay",
    "question": "Jelaskan perbedaan mendasar antara persegi dan persegi panjang berdasarkan sifat sisi dan diagonalnya!",
    "correctAnswer": "Persegi memiliki keempat sisi yang sama panjang dan diagonal yang saling tegak lurus, sedangkan persegi panjang hanya sisi berhadapan yang sama panjang dan diagonalnya tidak berpotongan tegak lurus.",
    "explanation_correct": "Perbandingan sifat persegi dan persegi panjang.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Perbandingan sifat persegi dan persegi panjang."
  },
  {
    "id": "q_34",
    "type": "essay",
    "question": "Diberikan rasio jumlah siswa laki-laki dan perempuan di kelas adalah 2:3. Jika jumlah total siswa adalah 30, hitunglah jumlah masing-masing siswa laki-laki dan perempuan!",
    "correctAnswer": "Laki-laki 12, Perempuan 18",
    "explanation_correct": "1 bagian rasio = 30 / (2+3) = 6. Laki-laki = 2 x 6 = 12. Perempuan = 3 x 6 = 18.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! 1 bagian rasio = 30 / (2+3) = 6. Laki-laki = 2 x 6 = 12. Perempuan = 3 x 6 = 18."
  },
  {
    "id": "q_35",
    "type": "essay",
    "question": "Bila panjang diameter sebuah tabung adalah 14 cm dan tingginya 20 cm, berapakah volume tabung tersebut? (Gunakan pi = 22/7)",
    "correctAnswer": "3.080 cm³",
    "explanation_correct": "Jari-jari = 7 cm. Volume = pi x r² x t = 22/7 x 7 x 7 x 20 = 154 x 20 = 3.080 cm³.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Jari-jari = 7 cm. Volume = pi x r² x t = 22/7 x 7 x 7 x 20 = 154 x 20 = 3.080 cm³."
  }
];

async function insertSubject() {
  try {
    const subjRef = doc(db, 'artifacts/portal-ujian-sekolah-dbe8e/public/data/subjects/subject_mtk_2026');
    await setDoc(subjRef, {
      title: "Matematika",
      description: "Penilaian Sumatif Kelas Akhir (PSKA) Tahun Ajaran 2025/2026",
      summary: htmlSummary,
      questions: questions,
      isLocked: false
    });
    console.log("SUCCESS: Matematika Subject injected successfully!");
    process.exit(0);
  } catch (error) {
    console.error("ERROR injecting Matematika:", error);
    process.exit(1);
  }
}

insertSubject();
