import { initializeApp } from 'firebase/app';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';

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

const fullMaterial = `📚 BUKU MATERI LENGKAP: BAHASA INGGRIS ASKA (KELAS 5 & 6)
Silakan pelajari materi di bawah ini dengan saksama sebelum memulai ujian. Waktu ujian akan dimulai setelah timer membaca selesai.

-----------------------------------------------------------
BAGIAN 1: FOOD, DRINK, AND HEALTH (Makanan, Minuman, & Kesehatan)
-----------------------------------------------------------

1. TASTE OF FOOD AND DRINK (Rasa Makanan & Minuman)
Setiap makanan memiliki rasa (taste) yang berbeda-beda. Kosa kata yang wajib dihafal:
• Sweet (Manis): Sugar (Gula), Candy (Permen), Cake (Kue).
• Sour (Asam): Lemon, Tamarind (Asam Jawa), Vinegar (Cuka).
• Salty (Asin): Salt (Garam), Salted fish (Ikan asin), Cheese (Keju).
• Bitter (Pahit): Coffee (Kopi tanpa gula), Medicine (Obat), Pare (Bitter gourd).
• Spicy (Pedas): Chili (Cabai), Sambal.

2. QUANTITY OF FOOD AND DRINK (Kuantitas / Porsi)
Dalam bahasa Inggris, kita menggunakan kata penunjuk jumlah yang disesuaikan dengan tempatnya:
• A plate of ... (Sepiring ...) ➔ A plate of fried rice (Sepiring nasi goreng)
• A glass of ... (Segelas ...) ➔ A glass of water (Segelas air)
• A cup of ... (Secangkir ...) ➔ A cup of tea/coffee (Secangkir teh/kopi)
• A bowl of ... (Semangkuk ...) ➔ A bowl of meatball (Semangkuk bakso)
• A slice of ... (Sepotong ...) ➔ A slice of pizza / cake

3. THE PRICE (Harga)
Untuk menanyakan harga, kita menggunakan: "How much is it?" atau "How much does it cost?"
Cara membaca ribuan dalam bahasa Inggris menggunakan kata "Thousand":
• Rp 1.000 = One thousand rupiahs
• Rp 5.000 = Five thousand rupiahs
• Rp 15.000 = Fifteen thousand rupiahs
• Rp 25.000 = Twenty five thousand rupiahs
*Catatan: Pastikan kalian bisa melakukan penjumlahan dasar (misal: 15.000 + 5.000 = 20.000 / Twenty thousand)*

4. TYPE OF COMMON HEALTH PROBLEMS (Penyakit Umum)
Kosa kata penyakit biasanya berakhiran "-ache" (yang artinya sakit/nyeri):
• Stomachache (Sakit perut) ➔ Disebabkan terlalu banyak makan pedas (spicy food).
• Toothache (Sakit gigi) ➔ Terlalu banyak makan manis. Obatnya: Go to the dentist (Pergi ke dokter gigi).
• Headache (Sakit kepala) ➔ Pusing.
• Earache (Sakit telinga).
• Cough (Batuk) & Cold/Fever (Flu/Demam) ➔ Obatnya: Take medicine (minum obat) and get some rest (istirahat).

-----------------------------------------------------------
BAGIAN 2: CLOTHES & BODY PARTS (Pakaian & Anggota Tubuh)
-----------------------------------------------------------

5. TYPE OF CLOTHES (Jenis Pakaian)
• Uniform (Seragam) ➔ Dipakai ke sekolah (Go to school). Seragam SD di Indonesia: Red and white uniform.
• Pajamas (Baju Tidur) ➔ Dipakai saat tidur di rumah (Sleep at home).
• T-Shirt (Kaos) ➔ Dipakai untuk bersantai atau bermain.
• Jacket (Jaket) ➔ Dipakai saat cuaca dingin.

6. BODY PARTS AND THEIR FUNCTIONS (Fungsi Anggota Tubuh)
• Eyes (Mata) ➔ To see / To look (Untuk melihat).
• Ears (Telinga) ➔ To hear / To listen (Untuk mendengar).
• Nose (Hidung) ➔ To smell (Untuk mencium bau).
• Mouth (Mulut) ➔ To speak / To eat (Untuk berbicara / makan).
• Hands (Tangan) ➔ To hold / To write (Untuk memegang / menulis).
• Legs / Feet (Kaki) ➔ To walk / To run / To stand (Untuk berjalan, berlari, berdiri).

-----------------------------------------------------------
BAGIAN 3: ADJECTIVES & COMPARISON (Kata Sifat & Perbandingan)
-----------------------------------------------------------

7. ADJECTIVES (Kata Sifat)
Adjectives adalah kata yang menggambarkan benda atau perasaan.
Contoh: Happy (Senang), Sad (Sedih), Beautiful (Cantik), Big (Besar), Small (Kecil), Smart (Pintar).
Contoh kalimat: "I am very happy today."

8. COMPARATIVE AND SUPERLATIVE (Tingkatan Sifat)
• Comparative (Lebih ...): Ditambah akhiran "-er" + than.
  Contoh: Bigger than (Lebih besar dari), Smarter than (Lebih pintar dari).
  Kalimat: An elephant is bigger than a mouse.
• Superlative (Paling ...): Ditambah akhiran "The ... -est".
  Contoh: The biggest (Paling besar), The smartest (Paling pintar).
  Kalimat: Ali is the smartest student in the class.

-----------------------------------------------------------
BAGIAN 4: TIME, PAST, AND FUTURE (Waktu, Masa Lalu & Masa Depan)
-----------------------------------------------------------

9. DATE AND MONTH (Tanggal & Bulan)
• Hari nasional: Pancasila Day (Hari Kesaktian Pancasila) ➔ June 1st (1 Juni).
• Independence Day (Hari Kemerdekaan) ➔ August 17th (17 Agustus).
Cara baca tanggal: Gunakan ordinal number (1st/First, 2nd/Second, 3rd/Third, 4th/Fourth, dst).

10. PAST ACTIVITIES (Kegiatan Masa Lampau)
Ciri utama masa lampau adalah menggunakan Verb 2 (Kata Kerja Bentuk Ke-2) dan Keterangan waktu lampau (Adverb of Time):
• Adverb of Time: Yesterday (Kemarin), Last night (Tadi malam), Last week (Minggu lalu), Two days ago (Dua hari yang lalu).
• Verb 2: Go ➔ Went, Eat ➔ Ate, Buy ➔ Bought, Play ➔ Played.
  Contoh: I ate a delicious cake yesterday.

11. WAS / WERE (To Be Masa Lampau)
• Was ➔ Digunakan untuk I, He, She, It. (Contoh: I was at the library yesterday).
• Were ➔ Digunakan untuk You, We, They. (Contoh: They were very happy yesterday).

12. WH-QUESTIONS FOR PAST (Kata Tanya Masa Lampau)
• What (Apa) ➔ What did you do yesterday? (Apa yang kamu lakukan kemarin?)
• Where (Dimana) ➔ Where did you go last night? (Ke mana kamu pergi tadi malam?)
• Who (Siapa) ➔ Who played football? (Siapa yang bermain bola?)
• When (Kapan) ➔ When did you play? (Kapan kamu bermain?)
*Catatan: Jika ada kata "did" dalam pertanyaan, maka jawabannya menggunakan "Verb 2" (Yes, I did / I went...)*

13. FUTURE ACTIVITIES USING "WILL" (Kegiatan Masa Depan)
Menyatakan hal yang akan terjadi. Ciri utamanya menggunakan kata "Will" (Akan) + Verb 1.
• Adverb of Time: Tomorrow (Besok), Next week (Minggu depan), Next month (Bulan depan).
• Contoh kalimat: "I will go to Jakarta tomorrow" (Saya akan pergi ke Jakarta besok).
• Respon singkat: "Will you help me?" ➔ "Yes, I will."

14. DREAM IN THE FUTURE (Cita-cita)
Profesi dan tugasnya:
• Doctor (Dokter) ➔ To cure sick people (Menyembuhkan orang sakit).
• Pilot (Pilot) ➔ To fly airplanes (Mengemudikan pesawat terbang).
• Teacher (Guru) ➔ To teach students (Mengajar murid).
• Chef (Koki) ➔ To cook food (Memasak makanan).

-----------------------------------------------------------
Gunakan sisa waktu membaca Anda untuk menghafalkan kosa kata di atas. Good Luck!`;

async function updateSummary() {
  try {
    const subjRef = doc(db, 'artifacts/portal-ujian-sekolah-dbe8e/public/data/subjects/subject_english_aska');
    await updateDoc(subjRef, { summary: fullMaterial });
    console.log("SUCCESS: Summary updated fully!");
    process.exit(0);
  } catch (error) {
    console.error("ERROR updating summary:", error);
    process.exit(1);
  }
}

updateSummary();
