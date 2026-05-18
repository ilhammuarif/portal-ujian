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
  <p style="font-size: 1.2rem; color: #b91c1c; font-weight: bold; text-align: center; margin-bottom: 2rem;">
    Selamat datang di Ujian Bahasa Indonesia! 📚✍️<br/>Mari kita tunjukkan kemampuan membaca dan menulis kita!
  </p>

  <div style="background: #fef2f2; border-left: 6px solid #ef4444; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #991b1b; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #fecaca; padding-bottom: 1rem;">📖 BAB 1: Membaca & Memahami Teks</h3>
    <ul>
      <li><b>Teks Non Sastra:</b> Menentukan kalimat utama dan menemukan informasi penting.</li>
      <li><b>Teks Fiksi:</b> Menemukan konflik, amanat cerita, dan sifat tokoh.</li>
      <li><b>Majas & Pantun:</b> Mengerti makna kiasan, melengkapi pantun rumpang, dan menentukan jenis majas (seperti personifikasi, metafora).</li>
    </ul>
  </div>

  <div style="background: #eff6ff; border-left: 6px solid #3b82f6; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #1e3a8a; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #bfdbfe; padding-bottom: 1rem;">✍️ BAB 2: Menulis & Tata Bahasa</h3>
    <ul>
      <li><b>Kalimat Efektif & Ejaan:</b> Menggunakan huruf kapital dan tanda baca dengan tepat (huruf besar di awal kalimat, nama orang, hari, bulan).</li>
      <li><b>Fakta vs Opini:</b> Fakta adalah sesuatu yang sudah terbukti kebenarannya. Opini adalah pendapat atau pikiran seseorang.</li>
      <li><b>Teks Pidato:</b> Melengkapi teks pidato, menentukan isi dan bagian-bagiannya (pembuka, isi, penutup).</li>
    </ul>
  </div>
</div>
`;

const questions = [
  {
    id: "bindo_q1", type: "pg", level: "L1",
    question: "Bacalah paragraf berikut!\n\nLidah buaya memiliki banyak manfaat untuk kesehatan dan kecantikan. Tanaman ini sering digunakan untuk menyuburkan rambut. Selain itu, lendir lidah buaya juga dapat menyembuhkan luka bakar ringan. Tak heran jika lidah buaya banyak ditanam di pekarangan rumah.\n\nKalimat utama pada paragraf tersebut adalah...",
    options: [
      "Lidah buaya memiliki banyak manfaat untuk kesehatan dan kecantikan.",
      "Tanaman ini sering digunakan untuk menyuburkan rambut.",
      "Selain itu, lendir lidah buaya juga dapat menyembuhkan luka bakar ringan.",
      "Tak heran jika lidah buaya banyak ditanam di pekarangan rumah."
    ],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips: Kalimat utama biasanya terletak di awal atau akhir paragraf. Coba cari kalimat yang dijelaskan oleh kalimat-kalimat lainnya.",
    explanation_correct: "Jawaban Benar: A. Kalimat pertama adalah kalimat utama karena memuat ide pokok/gagasan utama yang kemudian dijelaskan oleh kalimat penjelas (untuk rambut, untuk luka bakar)."
  },
  {
    id: "bindo_q2", type: "pg", level: "L2",
    question: "Bacalah cuplikan cerita berikut!\n\nSetiap hari Bawang Putih bekerja dari pagi hingga malam tanpa henti. Ibu tiri dan saudara tirinya, Bawang Merah, selalu menyuruhnya melakukan pekerjaan berat. Namun, Bawang Putih tidak pernah mengeluh. Ia selalu tersenyum dan berdoa agar hidupnya kelak bahagia.\n\nAmanat yang terkandung dalam cerita tersebut adalah...",
    options: [
      "Kita harus selalu melawan jika diperlakukan tidak adil.",
      "Bekerja keras dari pagi sampai malam adalah kewajiban anak.",
      "Kita harus bersabar dan ikhlas dalam menghadapi cobaan hidup.",
      "Lebih baik lari dari rumah jika disuruh melakukan pekerjaan berat."
    ],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips: Amanat adalah pesan moral. Tokoh utama (Bawang Putih) bersikap baik meskipun menderita. Pelajaran apa yang bisa diambil dari sikapnya?",
    explanation_correct: "Jawaban Benar: C. Amanat yang dapat dipetik dari sikap tabah Bawang Putih adalah kita harus selalu sabar, tabah, dan ikhlas saat mendapat cobaan, karena kebaikan akan berbuah manis."
  },
  {
    id: "bindo_q3", type: "pg", level: "L2",
    question: "Sore itu angin menari-nari membelai dedaunan di taman. \n\nKalimat di atas menggunakan majas...",
    options: ["Hiperbola", "Personifikasi", "Metafora", "Litotes"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips: 'Angin menari-nari'. Menari adalah sifat manusia, tapi dikenakan pada angin (benda mati). Majas apakah yang mengumpamakan benda mati seolah-olah hidup?",
    explanation_correct: "Jawaban Benar: B. Personifikasi.\nPenjelasan: Personifikasi adalah majas yang melekatkan sifat-sifat manusia (menari, membelai) pada benda mati (angin)."
  },
  {
    id: "bindo_q4", type: "pg", level: "L1",
    question: "Perhatikan kalimat iklan berikut!\n(1) Ingin gigimu putih dan kuat?\n(2) Pakailah pasta gigi 'Blink'!\n(3) Mengandung fluoride alami.\n(4) Harga termurah sejagat raya!\n\nKalimat fakta pada iklan tersebut ditunjukkan oleh nomor...",
    options: ["(1)", "(2)", "(3)", "(4)"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips: Fakta adalah sesuatu yang bisa dibuktikan keberadaannya, bukan opini atau pertanyaan, dan bukan bahasa yang melebih-lebihkan.",
    explanation_correct: "Jawaban Benar: C. (3) Mengandung fluoride alami.\nPenjelasan: Ini adalah informasi kandungan (komposisi) produk yang bisa diuji/dibuktikan. Nomor 1 adalah pertanyaan, nomor 2 kalimat perintah/bujukan, dan nomor 4 opini hiperbola."
  },
  {
    id: "bindo_q5", type: "pg", level: "L3",
    question: "Para hadirin sekalian yang saya hormati, (...) \nOleh karena itu, marilah kita jaga kebersihan lingkungan sekolah ini bersama-sama. \n\nKalimat yang tepat untuk melengkapi bagian rumpang pada penggalan pidato di atas adalah...",
    options: [
      "Saya sangat senang bisa bermain di sekolah ini.",
      "Kebersihan lingkungan sangat penting untuk kesehatan dan kenyamanan belajar kita.",
      "Hari ini saya akan berpidato tentang lingkungan.",
      "Demikianlah pidato singkat dari saya, semoga bermanfaat."
    ],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips: Perhatikan kalimat setelahnya: 'Oleh karena itu, marilah kita jaga kebersihan...'. Pasti kalimat sebelumnya berhubungan dengan alasan mengapa kita harus menjaga kebersihan.",
    explanation_correct: "Jawaban Benar: B. Kalimat 'Kebersihan lingkungan sangat penting...' sangat padu dengan kalimat ajakan di kalimat berikutnya."
  },
  {
    id: "bindo_q6", type: "essay", level: "L2",
    question: "Lengkapilah pantun rumpang berikut!\n\nJalan-jalan ke kota Blitar\nBeli baju berenda-renda\nKalau kamu rajin belajar\n(...)",
    explanation_wrong: "📌 Tips: Pantun bersajak a-b-a-b. Baris ke-2 berakhiran 'da', maka baris ke-4 juga harus berakhiran 'da'.",
    explanation_correct: "Jawaban Benar: 'Pasti kamu akan bahagia', 'Cita-citamu akan terkabul nyata', atau yang relevan bersajak (a-b-a-b/rima akhir 'da'/'a').\nPenjelasan: Guru dapat membenarkan jawaban murid asalkan memuat pesan yang sesuai (tentang hasil rajin belajar) dan memiliki rima akhir yang harmonis."
  },
  {
    id: "bindo_q7", type: "essay", level: "L3",
    question: "Ubahlah kalimat ini menjadi kalimat efektif dengan ejaan yang benar!\n'ayah membeli Obat di Apotek kimia farma jakarta pada Hari senin.'",
    explanation_wrong: "📌 Tips: Perhatikan huruf kapital pada nama hari, nama kota, nama lembaga, dan kata di awal kalimat. Selain itu perhatikan kata baku untuk apotek/apotik.",
    explanation_correct: "Jawaban Benar: Ayah membeli obat di Apotek Kimia Farma, Jakarta pada hari Senin.\nPenjelasan: \n- 'Ayah' besar di awal.\n- 'Obat' kecil karena bukan nama diri.\n- 'Apotek Kimia Farma' besar karena nama tempat/instansi.\n- 'Jakarta' besar karena nama kota.\n- 'hari Senin' -> 'Senin' kapital karena nama hari."
  }
];

async function insertBindo() {
  try {
    const subjRef = doc(db, 'artifacts/portal-ujian-sekolah-dbe8e/public/data/subjects/subject_bindo_2026');
    await setDoc(subjRef, {
      title: "Bahasa Indonesia",
      description: "Kisi-kisi PSKA Bahasa Indonesia (Kelas 5 & 6). Mencakup Pemahaman Bacaan, Majas, Fakta Opini, Teks Eksplanasi, dan Puisi/Pantun.",
      summary: htmlSummary,
      questions: questions,
      isLocked: false 
    });
    console.log("SUCCESS: Bahasa Indonesia injected successfully!");
    process.exit(0);
  } catch (error) {
    console.error("ERROR injecting Bahasa Indonesia:", error);
    process.exit(1);
  }
}

insertBindo();
