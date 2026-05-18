import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCDnuVE4O1xTh3xs6KVl7CLKarEQxz6ZPM",
  authDomain: "portal-ujian-sekolah-dbe8e.firebaseapp.com",
  projectId: "portal-ujian-sekolah-dbe8e",
  storageBucket: "portal-ujian-sekolah-dbe8e.firebasestorage.app",
  messagingSenderId: "411411725905",
  appId: "1:411411725905:web:438cd3ba814d83d43e4270"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const htmlSummary = `
<div style="font-family: 'Comic Sans MS', 'Chalkboard SE', sans-serif; line-height: 1.8; color: #334155;">
  <p style="font-size: 1.2rem; color: #4338ca; font-weight: bold; text-align: center; margin-bottom: 2rem;">
    Selamat datang di Ujian Matematika! 🔢📐<br/>Ayo asah logika berhitung dan kemampuan analitis kita!
  </p>

  <div style="background: #eef2ff; border-left: 6px solid #4f46e5; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #3730a3; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #c7d2fe; padding-bottom: 1rem;">🧮 BAB 1: Bilangan & Operasi Hitung</h3>
    <ul>
      <li><b>Operasi Campuran:</b> Ingat aturan KaBaTaKu (Kali, Bagi, Tambah, Kurang). Perkalian dan pembagian dikerjakan terlebih dahulu!</li>
      <li><b>Pecahan:</b> Menjumlahkan, mengurangkan, dan mengubah pecahan biasa menjadi desimal atau persen.</li>
      <li><b>Skala & Perbandingan:</b> Jarak pada peta dibagi jarak sebenarnya.</li>
    </ul>
  </div>

  <div style="background: #fff7ed; border-left: 6px solid #ea580c; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #9a3412; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #ffedd5; padding-bottom: 1rem;">📏 BAB 2: Geometri & Pengukuran</h3>
    <ul>
      <li><b>Bangun Datar:</b> Menghitung luas persegi, persegi panjang, segitiga, dan lingkaran (Luas = π × r × r).</li>
      <li><b>Bangun Ruang:</b> Volume kubus (s × s × s) dan balok (p × l × t).</li>
      <li><b>Kecepatan & Debit:</b> Kecepatan = Jarak ÷ Waktu. Debit = Volume ÷ Waktu.</li>
    </ul>
  </div>
</div>
`;

const questions = [
  {
    id: "mtk_q1", type: "pg", level: "L2",
    question: "Hasil dari 25 + 15 × 4 - 10 adalah...",
    options: ["150", "75", "15", "85"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips: Aturan perkalian dikerjakan terlebih dahulu. 15 dikali 4 dulu, baru ditambah 25, lalu dikurang 10.",
    explanation_correct: "Jawaban Benar: B. 75\nPenjelasan: Dikerjakan perkalian dahulu:\n15 × 4 = 60\nLalu penjumlahan: 25 + 60 = 85\nTerakhir pengurangan: 85 - 10 = 75."
  },
  {
    id: "mtk_q2", type: "pg", level: "L2",
    question: "Ibu membeli 2,5 kg telur. Karena akan mengadakan hajatan, Ibu membeli lagi 1 1/4 kg telur. Berapa kg total telur ibu sekarang? (Jawab dalam bentuk pecahan desimal)",
    options: ["3,5 kg", "3,75 kg", "4,25 kg", "3,25 kg"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips: Ubah pecahan campuran 1 1/4 menjadi desimal (1,25), kemudian jumlahkan dengan 2,5.",
    explanation_correct: "Jawaban Benar: B. 3,75 kg\nPenjelasan: \n1 1/4 = 1,25.\nTotal telur = 2,5 + 1,25 = 3,75 kg."
  },
  {
    id: "mtk_q3", type: "pg", level: "L3",
    question: "Sebuah peta memiliki skala 1 : 1.500.000. Jika jarak Kota A ke Kota B pada peta adalah 4 cm, berapakah jarak sebenarnya kedua kota tersebut?",
    options: ["60 km", "6 km", "600 km", "150 km"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips: Rumus Skala = Jarak pada peta / Jarak sebenarnya. Kalikan jarak peta (4 cm) dengan penyebut skala (1.500.000), lalu ubah cm ke km (bagi 100.000).",
    explanation_correct: "Jawaban Benar: A. 60 km\nPenjelasan: \nJarak sebenarnya = 4 cm × 1.500.000 = 6.000.000 cm.\nUbah ke km: 6.000.000 / 100.000 = 60 km."
  },
  {
    id: "mtk_q4", type: "pg", level: "L2",
    question: "Sebuah bak mandi berbentuk balok memiliki panjang 100 cm, lebar 50 cm, dan tinggi 60 cm. Berapa liter volume bak mandi tersebut jika diisi air penuh? (1 liter = 1000 cm3)",
    options: ["300 liter", "3.000 liter", "30 liter", "300.000 liter"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips: Volume Balok = p × l × t (cm3). Ingat, bagi hasilnya dengan 1.000 untuk mengubahnya menjadi liter.",
    explanation_correct: "Jawaban Benar: A. 300 liter\nPenjelasan: \nVolume = 100 × 50 × 60 = 300.000 cm3.\nUbah ke liter = 300.000 / 1000 = 300 liter."
  },
  {
    id: "mtk_q5", type: "pg", level: "L3",
    question: "Andi mengendarai sepeda motor dari kota P ke kota Q dengan kecepatan 40 km/jam. Jika jarak kedua kota tersebut 100 km, dan Andi berangkat pukul 08.00, pukul berapakah Andi tiba di kota Q?",
    options: ["10.00", "10.30", "11.00", "09.30"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips: Waktu = Jarak ÷ Kecepatan. 100 dibagi 40 = 2,5 jam (2 jam 30 menit). Tambahkan waktu ini ke pukul 08.00.",
    explanation_correct: "Jawaban Benar: B. 10.30\nPenjelasan: \nWaktu tempuh = 100 / 40 = 2,5 jam = 2 jam 30 menit.\nWaktu tiba = 08.00 + 2 jam 30 menit = 10.30."
  },
  {
    id: "mtk_q6", type: "essay", level: "L3",
    question: "Harga sepasang sepatu di toko adalah Rp250.000,00. Toko tersebut memberikan diskon sebesar 20%. Berapakah uang yang harus dibayarkan jika kamu membeli sepatu tersebut?",
    explanation_wrong: "📌 Tips: Hitung besar diskon terlebih dahulu (20% dari 250.000). Kemudian, kurangi harga asli sepatu dengan besar diskon.",
    explanation_correct: "Jawaban Benar: Rp200.000,00\nPenjelasan: \nBesar diskon = 20/100 × 250.000 = 50.000.\nHarga bayar = 250.000 - 50.000 = 200.000."
  },
  {
    id: "mtk_q7", type: "essay", level: "L3",
    question: "Sebuah taman berbentuk lingkaran dengan diameter 28 meter. Jika di sekeliling taman akan ditanami pohon dengan jarak antar pohon 4 meter, berapakah jumlah pohon yang dibutuhkan? (Gunakan π = 22/7)",
    explanation_wrong: "📌 Tips: Hitung keliling lingkaran (K = π × d). Setelah mendapat kelilingnya (dalam meter), bagi dengan jarak antar pohon (4 meter).",
    explanation_correct: "Jawaban Benar: 22 pohon\nPenjelasan: \nKeliling = 22/7 × 28 = 88 meter.\nBanyak pohon = 88 meter / 4 meter = 22 pohon."
  }
];

async function insertMtk() {
  try {
    const subjRef = doc(db, 'artifacts/portal-ujian-sekolah-dbe8e/public/data/subjects/subject_mtk_2026');
    await setDoc(subjRef, {
      title: "Matematika",
      description: "Kisi-kisi PSKA Matematika (Kelas 5 & 6). Mencakup Operasi Hitung Campuran, Pecahan, Skala, Geometri (Luas/Volume), dan Kecepatan.",
      summary: htmlSummary,
      questions: questions,
      isLocked: false 
    });
    console.log("SUCCESS: Matematika injected successfully!");
    process.exit(0);
  } catch (error) {
    console.error("ERROR injecting Matematika:", error);
    process.exit(1);
  }
}

insertMtk();
