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
    Selamat datang di petualangan Bahasa Indonesia! 📚✍️<br/>Mari kita jelajahi dunia teks, cerita, dan makna kata!
  </p>
  <div style="background: #fdf2f8; border-left: 6px solid #ec4899; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #be185d; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #fbcfe8; padding-bottom: 1rem;">📖 Membaca Pemahaman & Teks</h3>
    <ul>
      <li><b>Gagasan Pokok:</b> Ide utama yang menjadi inti dari suatu paragraf. Biasanya terletak di awal (deduktif) atau di akhir (induktif).</li>
      <li><b>Teks Eksplanasi:</b> Teks yang menjelaskan proses terjadinya sesuatu (sebab-akibat).</li>
      <li><b>Teks Persuasi:</b> Teks yang berisi ajakan, bujukan, atau imbauan untuk melakukan sesuatu.</li>
    </ul>
  </div>
  <div style="background: #fef2f2; border-left: 6px solid #ef4444; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #b91c1c; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #fecaca; padding-bottom: 1rem;">📝 Kaidah Kebahasaan</h3>
    <ul>
      <li><b>Sinonim:</b> Persamaan makna kata (contoh: pintar = pandai).</li>
      <li><b>Antonim:</b> Lawan makna kata (contoh: panjang >< pendek).</li>
      <li>Gunakan huruf kapital pada awal kalimat, nama orang, hari, bulan, dan nama tempat.</li>
    </ul>
  </div>
  <div style="background: #eff6ff; border-left: 6px solid #3b82f6; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #1d4ed8; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #bfdbfe; padding-bottom: 1rem;">🎭 Sastra (Puisi & Cerita)</h3>
    <ul>
      <li><b>Puisi:</b> Karya sastra yang terikat bait, baris, dan rima. Gunakan intonasi dan ekspresi saat membacanya.</li>
      <li><b>Tokoh Utama:</b> Karakter yang paling banyak diceritakan dalam cerita.</li>
      <li><b>Amanat:</b> Pesan moral yang ingin disampaikan pengarang kepada pembaca.</li>
    </ul>
  </div>
</div>`;

const questions = [
  {
    "id": "q_1",
    "type": "pg",
    "question": "Bacalah paragraf berikut!\nPemanasan global menjadi isu yang sangat serius di dunia saat ini. Suhu bumi terus meningkat dari tahun ke tahun. Akibatnya, es di kutub mulai mencair dan permukaan air laut naik. Banyak pulau kecil yang terancam tenggelam.\nKalimat utama pada paragraf di atas terletak pada ...",
    "options": [
      "Kalimat pertama",
      "Kalimat kedua",
      "Kalimat ketiga",
      "Kalimat terakhir"
    ],
    "correctAnswer": 0,
    "explanation_correct": "Kalimat pertama ('Pemanasan global menjadi isu yang sangat serius...') adalah gagasan utama.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Kalimat pertama ('Pemanasan global menjadi isu yang sangat serius...') adalah gagasan utama."
  },
  {
    "id": "q_2",
    "type": "pg",
    "question": "Pemanasan global menjadi isu yang sangat serius di dunia saat ini. Suhu bumi terus meningkat dari tahun ke tahun.\nSinonim dari kata 'meningkat' adalah ...",
    "options": [
      "Menurun",
      "Menyusut",
      "Bertambah",
      "Berubah"
    ],
    "correctAnswer": 2,
    "explanation_correct": "Meningkat sama artinya dengan bertambah naik/besar.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Meningkat sama artinya dengan bertambah naik/besar."
  },
  {
    "id": "q_3",
    "type": "pg",
    "question": "Perhatikan paragraf berikut!\nBerbagai upaya terus dilakukan untuk menanggulangi sampah plastik. Salah satunya adalah dengan membawa kantong belanja sendiri dari rumah. Selain itu, mendaur ulang botol plastik menjadi barang berguna juga sangat dianjurkan.\nPertanyaan yang tepat dan sesuai dengan isi paragraf tersebut adalah ...",
    "options": [
      "Mengapa sampah plastik sangat berbahaya?",
      "Apa saja upaya untuk menanggulangi sampah plastik?",
      "Siapa yang menemukan kantong plastik?",
      "Di mana kita bisa membuang sampah plastik?"
    ],
    "correctAnswer": 1,
    "explanation_correct": "Paragraf membahas upaya-upaya menanggulangi sampah plastik.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Paragraf membahas upaya-upaya menanggulangi sampah plastik."
  },
  {
    "id": "q_4",
    "type": "pg",
    "question": "Kelinci yang sombong akhirnya kalah lomba lari dari Kura-kura karena ia tertidur di bawah pohon. Amanat dari cerita tersebut adalah ...",
    "options": [
      "Kita harus rajin tidur di bawah pohon",
      "Kura-kura adalah hewan paling cepat",
      "Jangan pernah meremehkan orang lain",
      "Lari adalah olahraga yang melelahkan"
    ],
    "correctAnswer": 2,
    "explanation_correct": "Cerita Kelinci dan Kura-kura mengajarkan untuk tidak sombong.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Cerita Kelinci dan Kura-kura mengajarkan untuk tidak sombong."
  },
  {
    "id": "q_5",
    "type": "pg",
    "question": "Bawang Putih menangis sedih karena selendang kesayangan ibunya hanyut terbawa arus sungai saat ia sedang mencuci. Konflik dalam cerita tersebut adalah ...",
    "options": [
      "Bawang putih suka mencuci",
      "Selendang kesayangan ibu hanyut di sungai",
      "Sungai mengalir sangat deras",
      "Bawang putih sedang bersedih"
    ],
    "correctAnswer": 1,
    "explanation_correct": "Konflik adalah masalah utama yang dialami tokoh, yaitu hilangnya selendang.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Konflik adalah masalah utama yang dialami tokoh, yaitu hilangnya selendang."
  },
  {
    "id": "q_6",
    "type": "pg",
    "question": "Pahlawanku...\nEngkau rela gugur di *medan laga*.\nMakna simbol kias kata bercetak miring adalah ...",
    "options": [
      "Lapangan olahraga",
      "Medan perang",
      "Tempat bermain",
      "Alun-alun kota"
    ],
    "correctAnswer": 1,
    "explanation_correct": "Medan laga adalah kiasan untuk tempat berperang/pertempuran.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Medan laga adalah kiasan untuk tempat berperang/pertempuran."
  },
  {
    "id": "q_7",
    "type": "pg",
    "question": "Andi rajin belajar setiap hari. [...] ia selalu mendapat juara pertama di kelasnya.\nKalimat yang tepat untuk melengkapi bagian rumpang adalah ...",
    "options": [
      "Namun",
      "Oleh karena itu",
      "Meskipun begitu",
      "Sedangkan"
    ],
    "correctAnswer": 1,
    "explanation_correct": "'Oleh karena itu' menunjukkan akibat dari rajin belajar.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! 'Oleh karena itu' menunjukkan akibat dari rajin belajar."
  },
  {
    "id": "q_8",
    "type": "pg",
    "question": "'Ayo, buanglah sampah pada tempatnya agar lingkungan tetap bersih dan bebas dari penyakit!'\nInformasi dari iklan layanan masyarakat tersebut adalah ...",
    "options": [
      "Ajakan membeli tempat sampah",
      "Ajakan untuk membuang sampah pada tempatnya",
      "Promosi obat penyakit",
      "Larangan membuang sampah sama sekali"
    ],
    "correctAnswer": 1,
    "explanation_correct": "Kalimat persuasif mengajak masyarakat membuang sampah di tempatnya.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Kalimat persuasif mengajak masyarakat membuang sampah di tempatnya."
  },
  {
    "id": "q_9",
    "type": "pg",
    "question": "Kalimat majemuk setara berlawanan di bawah ini adalah ...",
    "options": [
      "Adik menangis karena mainannya rusak.",
      "Ayah membaca koran dan ibu memasak di dapur.",
      "Siska ingin pergi ke taman, tetapi hari hujan turun sangat deras.",
      "Budi belajar dengan rajin agar lulus ujian."
    ],
    "correctAnswer": 2,
    "explanation_correct": "Kata 'tetapi' adalah konjungsi majemuk setara berlawanan.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Kata 'tetapi' adalah konjungsi majemuk setara berlawanan."
  },
  {
    "id": "q_10",
    "type": "pg",
    "question": "Kalimat yang merupakan sebuah fakta adalah ...",
    "options": [
      "Bunga mawar merah sangat indah.",
      "Matahari terbit dari sebelah timur.",
      "Makan bakso lebih enak daripada makan mie.",
      "Besok kemungkinan akan turun hujan lebat."
    ],
    "correctAnswer": 1,
    "explanation_correct": "Fakta adalah hal yang pasti dan dapat dibuktikan kebenarannya.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Fakta adalah hal yang pasti dan dapat dibuktikan kebenarannya."
  },
  {
    "id": "q_11",
    "type": "pg",
    "question": "Struktur teks eksposisi pada paragraf pertama yang berisi gagasan atau pandangan penulis disebut ...",
    "options": [
      "Tesis",
      "Argumentasi",
      "Penegasan ulang",
      "Koda"
    ],
    "correctAnswer": 0,
    "explanation_correct": "Tesis adalah pembuka teks eksposisi yang berisi opini penulis.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Tesis adalah pembuka teks eksposisi yang berisi opini penulis."
  },
  {
    "id": "q_12",
    "type": "pg",
    "question": "Hutan hujan tropis merupakan paru-paru dunia karena menghasilkan oksigen dalam jumlah sangat besar. Informasi penting pada kalimat tersebut adalah ...",
    "options": [
      "Hutan tropis banyak turun hujan.",
      "Hutan menghasilkan oksigen dan menjadi paru-paru dunia.",
      "Paru-paru dunia sangat penting.",
      "Di hutan terdapat banyak oksigen."
    ],
    "correctAnswer": 1,
    "explanation_correct": "Inti informasi adalah peran hutan sebagai penghasil oksigen.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Inti informasi adalah peran hutan sebagai penghasil oksigen."
  },
  {
    "id": "q_13",
    "type": "pg",
    "question": "Penebangan liar di hulu sungai terjadi terus-menerus. Akibatnya, pada musim hujan desa di hilir mengalami banjir bandang.\nHubungan sebab akibat yang sesuai adalah ...",
    "options": [
      "Banjir bandang menyebabkan penebangan liar.",
      "Penebangan liar menyebabkan banjir bandang.",
      "Musim hujan menyebabkan penebangan liar.",
      "Desa di hilir menyebabkan banjir."
    ],
    "correctAnswer": 1,
    "explanation_correct": "Sebab: penebangan liar. Akibat: banjir bandang.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Sebab: penebangan liar. Akibat: banjir bandang."
  },
  {
    "id": "q_14",
    "type": "pg",
    "question": "Para *kreator* konten saat ini semakin kreatif dalam membuat karya. Makna kata yang bercetak tebal adalah ...",
    "options": [
      "Penikmat",
      "Pencipta / Pembuat",
      "Penyebar",
      "Penjual"
    ],
    "correctAnswer": 1,
    "explanation_correct": "Kreator berarti orang yang membuat atau menciptakan sesuatu.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Kreator berarti orang yang membuat atau menciptakan sesuatu."
  },
  {
    "id": "q_15",
    "type": "pg",
    "question": "Angin bertiup kencang disertai awan hitam pekat yang menggulung-gulung di langit.\nKejadian yang dapat diperkirakan berdasarkan teks tersebut adalah ...",
    "options": [
      "Akan terjadi gerhana matahari.",
      "Akan turun hujan badai yang lebat.",
      "Musim kemarau telah tiba.",
      "Pesawat terbang tidak bisa mendarat."
    ],
    "correctAnswer": 1,
    "explanation_correct": "Awan hitam pekat dan angin kencang adalah tanda-tanda hujan badai.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Awan hitam pekat dan angin kencang adalah tanda-tanda hujan badai."
  },
  {
    "id": "q_16",
    "type": "pg",
    "question": "Berdasarkan penelitian, membuang sampah sembarangan menjadi penyebab utama tersumbatnya saluran air di perkotaan.\nInformasi penting dari kalimat di atas adalah ...",
    "options": [
      "Saluran air sangat penting di kota.",
      "Sampah sembarangan menyumbat saluran air.",
      "Penelitian membuang sampah.",
      "Penyebab utama hidup di kota."
    ],
    "correctAnswer": 1,
    "explanation_correct": "Inti teks adalah dampak membuang sampah sembarangan.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Inti teks adalah dampak membuang sampah sembarangan."
  },
  {
    "id": "q_17",
    "type": "pg",
    "question": "Teks 1: Kucing adalah hewan peliharaan yang lucu dan menggemaskan. Teks 2: Banyak orang memelihara kelinci karena bentuknya yang lucu.\nPersamaan dari kedua teks tersebut adalah ...",
    "options": [
      "Membahas cara merawat hewan peliharaan",
      "Membahas hewan peliharaan yang lucu",
      "Membahas tentang makanan hewan",
      "Membahas tentang kucing dan anjing"
    ],
    "correctAnswer": 1,
    "explanation_correct": "Kedua teks membahas hewan (kucing, kelinci) yang lucu untuk dipelihara.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Kedua teks membahas hewan (kucing, kelinci) yang lucu untuk dipelihara."
  },
  {
    "id": "q_18",
    "type": "pg",
    "question": "Penggunaan kata yang salah terdapat pada kalimat ...",
    "options": [
      "Ibu membeli obat di apotek.",
      "Adik sedang praktek olahraga.",
      "Ayah seorang atlet lari.",
      "Surat itu telah memiliki izin resmi."
    ],
    "correctAnswer": 1,
    "explanation_correct": "Kata baku yang benar adalah 'praktik', bukan 'praktek'.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Kata baku yang benar adalah 'praktik', bukan 'praktek'."
  },
  {
    "id": "q_19",
    "type": "pg",
    "question": "Wah, baju yang kau kenakan sangat bagus?\nKoreksi tanda baca yang tepat pada kalimat tersebut adalah ...",
    "options": [
      "Wah baju yang kau kenakan sangat bagus.",
      "Wah, baju yang kau kenakan sangat bagus!",
      "Wah! baju yang kau kenakan sangat bagus.",
      "Wah, baju yang kau kenakan sangat bagus,"
    ],
    "correctAnswer": 1,
    "explanation_correct": "Kalimat seru/ungkapan kekaguman diakhiri dengan tanda seru (!).",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Kalimat seru/ungkapan kekaguman diakhiri dengan tanda seru (!)."
  },
  {
    "id": "q_20",
    "type": "pg",
    "question": "Hadirin yang saya hormati, marilah kita senantiasa menjaga kebersihan lingkungan sekolah agar tercipta suasana belajar yang nyaman. Isi pidato tersebut adalah ...",
    "options": [
      "Ajakan belajar keras",
      "Ajakan menjaga kebersihan lingkungan sekolah",
      "Ajakan membuang sampah",
      "Ajakan menghormati guru"
    ],
    "correctAnswer": 1,
    "explanation_correct": "Teks secara jelas mengajak menjaga kebersihan sekolah.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Teks secara jelas mengajak menjaga kebersihan sekolah."
  },
  {
    "id": "q_21",
    "type": "pg",
    "question": "Sebagai ketua kelas, saya mengucapkan terima kasih kepada teman-teman. [...]. Semoga kekompakan kelas kita terus terjaga.\nKalimat yang tepat untuk melengkapi pidato tersebut adalah ...",
    "options": [
      "Mohon maaf jika ada salah kata dari saya.",
      "Kalian semua sangat malas.",
      "Atas kerja samanya dalam kegiatan lomba kebersihan kelas.",
      "Saya akan pulang sekarang."
    ],
    "correctAnswer": 2,
    "explanation_correct": "Kalimat tersebut nyambung dengan ungkapan terima kasih dan kekompakan.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Kalimat tersebut nyambung dengan ungkapan terima kasih dan kekompakan."
  },
  {
    "id": "q_22",
    "type": "pg",
    "question": "'Demikian pidato yang dapat saya sampaikan. Mohon maaf apabila ada kata yang kurang berkenan.'\nKutipan tersebut merupakan bagian ... dari pidato.",
    "options": [
      "Pembuka",
      "Isi",
      "Penutup",
      "Salam pembuka"
    ],
    "correctAnswer": 2,
    "explanation_correct": "Ucapan permintaan maaf dan 'demikian' menandakan akhir/penutup pidato.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Ucapan permintaan maaf dan 'demikian' menandakan akhir/penutup pidato."
  },
  {
    "id": "q_23",
    "type": "pg",
    "question": "'Angin malam berbisik pelan di telingaku.'\nJenis majas pada kalimat tersebut adalah ...",
    "options": [
      "Hiperbola",
      "Personifikasi",
      "Metafora",
      "Litotes"
    ],
    "correctAnswer": 1,
    "explanation_correct": "Angin seolah-olah bisa berbisik (seperti manusia) adalah majas personifikasi.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Angin seolah-olah bisa berbisik (seperti manusia) adalah majas personifikasi."
  },
  {
    "id": "q_24",
    "type": "pg",
    "question": "Kalimat yang menggunakan majas hiperbola adalah ...",
    "options": [
      "Suaranya menggelegar membelah angkasa.",
      "Raja siang telah menampakkan dirinya.",
      "Daun kelapa melambai-lambai di tepi pantai.",
      "Ia adalah tangan kanan bosnya."
    ],
    "correctAnswer": 0,
    "explanation_correct": "Hiperbola melebih-lebihkan sesuatu, seperti suara membelah angkasa.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Hiperbola melebih-lebihkan sesuatu, seperti suara membelah angkasa."
  },
  {
    "id": "q_25",
    "type": "pg",
    "question": "Walaupun Budi sudah kaya raya, ia tetap ramah dan tidak sombong kepada siapa pun.\nPeribahasa yang tepat untuk Budi adalah ...",
    "options": [
      "Seperti ilmu padi, kian berisi kian merunduk.",
      "Besar pasak daripada tiang.",
      "Air beriak tanda tak dalam.",
      "Bagai air di daun talas."
    ],
    "correctAnswer": 0,
    "explanation_correct": "Makin berilmu/kaya makin rendah hati.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Makin berilmu/kaya makin rendah hati."
  },
  {
    "id": "q_26",
    "type": "pg",
    "question": "Setelah bekerja banting tulang, ayah pulang membawa ... untuk anak-anaknya.",
    "options": [
      "Buah bibir",
      "Buah hati",
      "Buah tangan",
      "Kutu buku"
    ],
    "correctAnswer": 2,
    "explanation_correct": "Buah tangan berarti oleh-oleh.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Buah tangan berarti oleh-oleh."
  },
  {
    "id": "q_27",
    "type": "pg",
    "question": "Saat mendaftar ekstrakurikuler, Dina harus mengisi selembar kertas yang berisi nama, alamat, dan kelas. Kertas yang diisi Dina disebut ...",
    "options": [
      "Kwitansi",
      "Faktur",
      "Formulir",
      "Wesel pos"
    ],
    "correctAnswer": 2,
    "explanation_correct": "Formulir adalah lembar isian data diri.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Formulir adalah lembar isian data diri."
  },
  {
    "id": "q_28",
    "type": "pg",
    "question": "Pewawancara: [...]\nNarasumber: Saya mulai merintis usaha kerajinan ini sejak tahun 2010.\nKalimat pewawancara yang tepat adalah ...",
    "options": [
      "Di mana Bapak berjualan kerajinan?",
      "Sejak kapan Bapak mulai merintis usaha kerajinan ini?",
      "Berapa modal Bapak saat itu?",
      "Siapa yang membantu Bapak?"
    ],
    "correctAnswer": 1,
    "explanation_correct": "Pertanyaan 'sejak kapan' dijawab dengan 'sejak tahun 2010'.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Pertanyaan 'sejak kapan' dijawab dengan 'sejak tahun 2010'."
  },
  {
    "id": "q_29",
    "type": "pg",
    "question": "Amanat utama dari cerita Malin Kundang adalah ...",
    "options": [
      "Jangan merantau terlalu jauh",
      "Harus rajin mencari uang",
      "Jangan durhaka kepada orang tua",
      "Kita harus pandai berenang"
    ],
    "correctAnswer": 2,
    "explanation_correct": "Malin Kundang dikutuk karena durhaka kepada ibunya.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Malin Kundang dikutuk karena durhaka kepada ibunya."
  },
  {
    "id": "q_30",
    "type": "pg",
    "question": "Dalam cerita Bawang Merah dan Bawang Putih, sifat tokoh Bawang Putih adalah ...",
    "options": [
      "Sombong dan pemalas",
      "Jahat dan serakah",
      "Baik hati dan rajin",
      "Pemarah dan iri hati"
    ],
    "correctAnswer": 2,
    "explanation_correct": "Bawang Putih digambarkan sebagai protagonis yang baik dan rajin.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Bawang Putih digambarkan sebagai protagonis yang baik dan rajin."
  },
  {
    "id": "q_31",
    "type": "essay",
    "question": "Sebutkan sebuah kalimat yang merupakan 'fakta' dan sebuah kalimat yang merupakan 'opini' terkait iklan komersial susu bernutrisi!",
    "correctAnswer": "Fakta: Susu X mengandung kalsium 500mg. Opini: Susu X adalah susu paling enak di dunia.",
    "explanation_correct": "Fakta bisa diukur secara objektif, opini bersifat subjektif.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Fakta bisa diukur secara objektif, opini bersifat subjektif."
  },
  {
    "id": "q_32",
    "type": "essay",
    "question": "Lengkapi baris isi pantun rumpang berikut ini!\nJalan-jalan ke pasar baru,\nJangan lupa membeli paku.\n...\n...",
    "correctAnswer": "Jika kamu rajin belajar selalau,\nPasti akan menjadi juara kelas satu.",
    "explanation_correct": "Sajak harus a-b-a-b (ru - ku - ru/lu - ku/tu).",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Sajak harus a-b-a-b (ru - ku - ru/lu - ku/tu)."
  },
  {
    "id": "q_33",
    "type": "essay",
    "question": "Apa informasi pokok yang biasanya terdapat pada infografik tentang 'Cara Mencuci Tangan yang Benar'?",
    "correctAnswer": "Langkah-langkah mencuci tangan dengan sabun dan air mengalir selama minimal 20 detik.",
    "explanation_correct": "Informasi visual dan teks singkat yang informatif.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Informasi visual dan teks singkat yang informatif."
  },
  {
    "id": "q_34",
    "type": "essay",
    "question": "Buatlah satu bait puisi (4 baris) dengan tema 'Pemandangan Alam' yang memiliki rima a-b-a-b dan menggunakan majas personifikasi!",
    "correctAnswer": "Pagi cerah matahari menyapa riang (a)\nGunung berdiri gagah menantang awan (b)\nAngin membelai dedaunan bergoyang (a)\nMenyambut burung yang terbang menawan (b)",
    "explanation_correct": "Menyapa riang (personifikasi), rima a-b-a-b.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Menyapa riang (personifikasi), rima a-b-a-b."
  },
  {
    "id": "q_35",
    "type": "essay",
    "question": "Sebutkan 3 ciri utama dari kalimat yang digunakan dalam Teks Prosedur!",
    "correctAnswer": "1. Menggunakan kalimat perintah (imperatif). 2. Menggunakan kata kerja aktif. 3. Menggunakan kata penghubung (konjungsi) urutan.",
    "explanation_correct": "Karakteristik kebahasaan teks prosedur.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Karakteristik kebahasaan teks prosedur."
  },
  {
    "id": "q_36",
    "type": "essay",
    "question": "Tuliskan tanggapan pribadimu terhadap isi teks eksplanasi yang menjelaskan tentang bahaya dari kebiasaan begadang bagi remaja!",
    "correctAnswer": "Menurut saya, kebiasaan begadang memang sangat merugikan bagi kesehatan fisik dan konsentrasi belajar remaja, sehingga sebaiknya dihindari.",
    "explanation_correct": "Tanggapan logis dan berkaitan dengan isi teks.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Tanggapan logis dan berkaitan dengan isi teks."
  },
  {
    "id": "q_37",
    "type": "essay",
    "question": "Buatlah 3 pertanyaan menggunakan kata tanya (Adiksimba) berdasarkan pernyataan ini: 'Pemerintah daerah mengadakan lomba kebersihan antar RT pada hari Minggu pagi di Alun-alun Kota.'",
    "correctAnswer": "1. Siapa yang mengadakan lomba? 2. Kapan lomba tersebut diadakan? 3. Di mana lomba tersebut dilaksanakan?",
    "explanation_correct": "Menggunakan kata tanya Siapa, Kapan, dan Di mana dengan tepat.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Menggunakan kata tanya Siapa, Kapan, dan Di mana dengan tepat."
  },
  {
    "id": "q_38",
    "type": "essay",
    "question": "Koreksilah kalimat berikut agar menjadi kalimat efektif: 'Para siswa-siswi sedang belajar di dalam ruang kelas.'",
    "correctAnswer": "'Siswa-siswi sedang belajar di ruang kelas.' ATAU 'Para siswa sedang belajar di ruang kelas.'",
    "explanation_correct": "'Para' dan 'siswa-siswi' adalah bentuk jamak yang jika digabung menjadi pemborosan kata (pleonasme).",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! 'Para' dan 'siswa-siswi' adalah bentuk jamak yang jika digabung menjadi pemborosan kata (pleonasme)."
  },
  {
    "id": "q_39",
    "type": "essay",
    "question": "Tentukan dan perbaiki kata-kata yang harus diawali huruf kapital pada kalimat undangan berikut: 'kami mengharapkan kehadiran bapak/ibu pada hari jumat di balai desa.'",
    "correctAnswer": "Kami mengharapkan kehadiran Bapak/Ibu pada hari Jumat di Balai Desa.",
    "explanation_correct": "Huruf pertama awal kalimat (Kami), sapaan (Bapak/Ibu), hari (Jumat), nama tempat lembaga (Balai Desa).",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Huruf pertama awal kalimat (Kami), sapaan (Bapak/Ibu), hari (Jumat), nama tempat lembaga (Balai Desa)."
  },
  {
    "id": "q_40",
    "type": "essay",
    "question": "Dalam cerita Sangkuriang, Sangkuriang gagal menyelesaikan syarat pembuatan perahu dan telaga sebelum fajar menyingsing. Prediksikan kejadian selanjutnya yang terjadi menurut cerita rakyat tersebut!",
    "correctAnswer": "Sangkuriang akan marah besar, lalu menendang perahu buatannya hingga terbalik dan berubah menjadi Gunung Tangkuban Perahu.",
    "explanation_correct": "Ini adalah akhir legenda Sangkuriang.",
    "explanation_wrong": "📌 Tips Belajar: Ayo teliti lagi pertanyaannya! Ini adalah akhir legenda Sangkuriang."
  }
];

async function insertSubject() {
  try {
    const subjRef = doc(db, 'artifacts/portal-ujian-sekolah-dbe8e/public/data/subjects/subject_bindo_2026');
    await setDoc(subjRef, {
      title: "Bahasa Indonesia",
      description: "Penilaian Sumatif Kelas Akhir (PSKA) Tahun Ajaran 2025/2026",
      summary: htmlSummary,
      questions: questions,
      isLocked: false
    });
    console.log("SUCCESS: Bahasa Indonesia Subject injected successfully!");
    process.exit(0);
  } catch (error) {
    console.error("ERROR injecting Bahasa Indonesia:", error);
    process.exit(1);
  }
}

insertSubject();
