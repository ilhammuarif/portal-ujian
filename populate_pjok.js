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
  <p style="font-size: 1.2rem; color: #0284c7; font-weight: bold; text-align: center; margin-bottom: 2rem;">
    Salam Olahraga! 🏃‍♂️💪<br/>Di materi ini, kita akan belajar cara menjaga tubuh agar sehat, bugar, dan lincah setiap hari!
  </p>

  <!-- BAB 1: Permainan & Olahraga -->
  <div style="background: #eff6ff; border-left: 6px solid #2563eb; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #1d4ed8; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #bfdbfe; padding-bottom: 1rem;">⚽ BAB 1: Permainan Bola Besar & Kecil</h3>
    <ul>
      <li><b>Sepak Bola:</b> Gerak dasarnya meliputi menendang (kicking), menggiring (dribbling), dan menghentikan bola (stopping).</li>
      <li><b>Bola Voli:</b> Ada passing atas dan passing bawah. Induk organisasi bola voli tingkat dunia adalah <b>FIVB</b>, dan tingkat nasional di Indonesia adalah <b>PBVSI</b>.</li>
      <li><b>Bola Kasti / Bola Bakar:</b> Keduanya adalah permainan bola kecil yang menggunakan tongkat pemukul. Kombinasi berlari (lokomotor) dan memukul/melempar (manipulatif) sangat diutamakan di sini.</li>
      <li><b>Tarik Tambang:</b> Olahraga tradisional yang menguji <i>Kekuatan otot tangan</i>, kekompakan, kesabaran, dan disiplin tinggi antar anggota tim.</li>
    </ul>
  </div>

  <!-- BAB 2: Senam & Kebugaran -->
  <div style="background: #fdf2f8; border-left: 6px solid #db2777; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #be185d; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #fbcfe8; padding-bottom: 1rem;">🤸 BAB 2: Senam Lantai & Irama</h3>
    <ul>
      <li><b>Senam Lantai:</b> Membutuhkan matras agar aman. Gerakannya meliputi berguling ke depan (roll depan) atau belakang, dan sikap lilin.</li>
      <li><b>Senam Irama (Ritmik):</b> Senam yang diiringi oleh musik. Kunci utamanya adalah keselarasan/keterpaduan antara gerakan tubuh dan ketukan musik (ritme).</li>
      <li><b>Lompat Tali:</b> Latihan sederhana yang sangat ampuh untuk melatih <i>Kekuatan otot kaki</i> dan daya tahan jantung (stamina).</li>
      <li><b>Lari Zig-zag:</b> Latihan lari berbelok-belok melewati rintangan / cone. Tujuannya murni untuk melatih <b>Kelincahan (Agility)</b> tubuh agar cepat bermanuver mengubah arah.</li>
    </ul>
  </div>

  <!-- BAB 3: Kebugaran Jasmani -->
  <div style="background: #fff7ed; border-left: 6px solid #ea580c; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #c2410c; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #fed7aa; padding-bottom: 1rem;">💦 BAB 3: Kebugaran Jasmani</h3>
    <ul>
      <li><b>Pemanasan (Warming Up):</b> Wajib dilakukan SEBELUM berolahraga berat. Tujuannya menaikkan suhu tubuh dan otot agar <b>tidak cedera atau kram</b>.</li>
      <li><b>Gaya Renang:</b> Ada gaya dada (gaya katak), gaya bebas (seperti merangkak di air), gaya punggung, dan gaya kupu-kupu.</li>
      <li>Energi otot saat bergerak didapatkan dari pembakaran sari makanan oleh <b>Oksigen</b> yang kita hirup saat bernapas. Jadi cara mengatur napas sangat penting agar tidak mudah lelah (ngos-ngosan).</li>
    </ul>
  </div>

  <!-- BAB 4: Cedera & Pertolongan Pertama -->
  <div style="background: #fef2f2; border-left: 6px solid #dc2626; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #b91c1c; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #fecaca; padding-bottom: 1rem;">🚑 BAB 4: Pertolongan Pertama (R.I.C.E)</h3>
    <p>Jika kakimu keseleo saat bermain bola, LAKUKAN metode <b>R.I.C.E</b>:</p>
    <ul style="list-style-type: none; padding-left: 0;">
      <li>🛑 <b>R = Rest (Istirahatkan)</b>: Berhenti bergerak dan istirahatkan bagian yang sakit.</li>
      <li>🧊 <b>I = Ice (Kompres Es)</b>: Kompres dengan es (bukan air hangat) untuk meredakan bengkak.</li>
      <li>🩹 <b>C = Compression (Balut)</b>: Bebat dengan perban agak ketat agar tidak gerak.</li>
      <li>⬆️ <b>E = Elevation (Tinggikan)</b>: Angkat kaki yang cedera lebih tinggi dari posisi jantung saat berbaring.</li>
    </ul>
  </div>

  <!-- BAB 5: Gaya Hidup Sehat -->
  <div style="background: #ecfdf5; border-left: 6px solid #059669; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #047857; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #a7f3d0; padding-bottom: 1rem;">🍎 BAB 5: Gaya Hidup & Gizi Seimbang</h3>
    <ul>
      <li><b>Perilaku Sedenter (Mager):</b> Kebiasaan terlalu lama duduk main HP atau nonton TV (rebahan). Dampaknya membuat tulang lemah, tubuh mudah gemuk (obesitas), dan mudah sakit. Cegah dengan melakukan peregangan tiap 1 jam!</li>
      <li><b>Postur Tubuh:</b> Biasakan duduk dan berdiri dengan tegap lurus (jangan membungkuk) agar tulang belakang (Lordosis/Kifosis/Skoliosis) tidak cacat saat kamu tua nanti.</li>
      <li><b>Makanan Sehat:</b> Kurangi minuman manis berwarna (soda/boba/sirup). Gantilah dengan minuman terbaik untuk sel tubuh: Air Putih Mineral atau Jus Buah Asli tanpa tambahan gula.</li>
      <li>Jaga kebersihan dengan membuang sampah pada tempatnya, karena lingkungan yang bersih (tidak kumuh) akan mencegah sarang nyamuk DBD.</li>
    </ul>
  </div>
</div>
`;

const questions = [
  // A. Terampil Gerak & Permainan
  {
    id: "q_1", type: "pg", level: "L1",
    question: "Permainan lompat tali (skipping) sangat mudah dilakukan di rumah. Tujuan utama dan manfaat fisik melakukan lompat tali secara rutin adalah melatih...",
    options: ["Kekuatan otot lengan", "Daya tahan pernapasan perut", "Kekuatan otot tungkai (kaki) dan jantung", "Kelenturan leher"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Pikirkan bagian tubuh yang paling banyak menopang berat badan saat melompat. \nKetika kamu melompat-lompat, bagian bawah tubuhmulah (kaki) yang harus menekan kuat ke tanah, serta jantung yang memompa darah dengan cepat.",
    explanation_correct: "Pilihan: A. Lengan, B. Perut, C. Otot tungkai/jantung, D. Leher.\n\nJawaban Benar: C. Kekuatan otot tungkai (kaki) dan jantung.\nPenjelasan: Lompat tali (skipping) adalah latihan kardiovaskular tinggi. Melompat bertumpu pada kedua kaki secara berulang terbukti menguatkan betis, otot tungkai (kaki), dan membakar kalori tinggi sehingga jantung sehat."
  },
  {
    id: "q_2", type: "pg", level: "L3",
    question: "Dalam perlombaan tradisional Tarik Tambang antar kelas, nilai sikap dan karakter yang PALING DIBUTUHKAN agar sebuah tim bisa menarik kuat dan menang adalah...",
    options: ["Rasa ingin menonjol sendiri", "Kerja sama, kedisiplinan aba-aba, dan kesabaran", "Bersikap egois menarik sekuat tenaga", "Membawa tali yang lebih licin"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Tarik tambang adalah olahraga kelompok. \nJika hanya satu orang saja yang kuat menarik, tapi sisanya tidak kompak, tim itu pasti kalah. Harus ada satu komando 'Satu.. dua.. tarik!'.",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: B. Kerja sama, kedisiplinan aba-aba, dan kesabaran.\nPenjelasan: Tarik tambang murni mengandalkan kolektivitas (kerja sama) seluruh anggota. Kekuatan otot saja tidak cukup tanpa kedisiplinan menarik tali secara serentak bersama-sama mendengarkan komando."
  },
  {
    id: "q_5", type: "pg", level: "L3",
    question: "Dalam permainan bola kasti, ketika pemain berlari dari base (pos) pertama menuju base kedua sambil sesekali melempar bola, pemain tersebut melakukan kombinasi gerak...",
    options: ["Lokomotor dan Manipulatif", "Non-lokomotor dan Lokomotor", "Manipulatif dan Non-lokomotor", "Statis dan Dinamis"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Ingat tiga jenis dasar gerak. \n1) Lokomotor (Berpindah tempat seperti Lari). 2) Non-lokomotor (Diam di tempat seperti membungkuk). 3) Manipulatif (Memakai objek alat seperti melempar bola). Berlari + melempar bola = ?",
    explanation_correct: "Pilihan: A. Lokomotor & Manipulatif, B, C, D.\n\nJawaban Benar: A. Lokomotor dan Manipulatif.\nPenjelasan: Berlari dari satu pos ke pos lain adalah gerak 'Lokomotor' (berpindah tempat). Melempar dan memegang bola/benda adalah gerak 'Manipulatif'. Jadi, berlari sambil melempar adalah perpaduannya."
  },
  {
    id: "q_32", type: "essay", level: "L2",
    question: "Bola voli adalah salah satu olahraga terpopuler di dunia. Sebutkan singkatan dari Induk Organisasi Bola Voli Tingkat Nasional (Indonesia)!",
    explanation_wrong: "📌 Tips Belajar: Ingat PSSI (Sepak Bola), PERBASI (Basket). \nKalau Bola Voli adalah P-B-V-S-I (Persatuan ... Bola Voli ... ...).",
    explanation_correct: "Jawaban Benar: PBVSI (Persatuan Bola Voli Seluruh Indonesia).\nPenjelasan: Olahraga bola voli di Indonesia dinaungi oleh PBVSI. Sedangkan tingkat dunia/internasional adalah FIVB (Fédération Internationale de Volleyball)."
  },
  // B. Senam Lantai & Senam Irama
  {
    id: "q_11", type: "pg", level: "L2",
    question: "Pada aktivitas senam irama (ritmik), tujuan utama dari menyelaraskan gerakan senam dengan musik pengiring adalah...",
    options: ["Agar pesenam bisa menari gaya bebas", "Menciptakan koordinasi tubuh yang baik dan keindahan ritme gerak (estetika)", "Agar suara musik menutupi suara napas lelah pesenam", "Agar kaki tidak keseleo"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Senam irama mirip dengan tarian koreografi. \nGabungan antara senam yang kaku dicampur musik akan menciptakan sebuah penampilan yang indah dilihat dan enak didengar ketukannya.",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: B. Menciptakan koordinasi dan keindahan ritme gerak.\nPenjelasan: Senam ritmik (irama) berbeda dengan senam biasa. Pesenam harus mendengarkan tempo/ketukan musik untuk mengatur langkah kakinya secara harmonis, luwes, dan indah dilihat (estetis)."
  },
  {
    id: "q_33", type: "essay", level: "L3",
    question: "Dalam senam lantai (tanpa alat), jelaskan secara singkat perbedaan posisi badan antara Roll Depan (guling ke depan) dan Sikap Lilin!",
    explanation_wrong: "📌 Tips Belajar: Ingat praktik senam lantai di sekolah. \nRoll depan tubuhnya bulat berputar. Sikap lilin kakinya lurus diam menunjuk langit-langit.",
    explanation_correct: "Jawaban Benar: Roll Depan adalah gerakan menggulingkan badan ke depan secara membulat, sedangkan Sikap Lilin adalah gerakan diam terlentang dengan kedua kaki diangkat tegak lurus ke atas ditopang pinggang.\nPenjelasan: Keduanya adalah teknik matras dasar. Roll depan (Forward roll) membutuhkan dorongan putaran. Sikap lilin (Shoulder stand) merupakan gerak non-lokomotor/keseimbangan dengan kaki lurus ke langit menirukan lilin berdiri."
  },
  // C. Aktif & Bugar
  {
    id: "q_16", type: "pg", level: "L3",
    question: "Andi sedang melakukan latihan lari lurus pendek lalu tiba-tiba berbelok melewati pembatas cone secara terus-menerus (Lari Zig-zag). Latihan ini sangat efektif untuk melatih...",
    options: ["Kecepatan lari sprint sejauh-jauhnya", "Kelincahan tubuh untuk mengubah arah dengan cepat (Agility)", "Kelenturan (Fleksibilitas) punggung", "Kekuatan angkat beban otot tangan"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Bayangkan tubuh lari zig-zag. \nKamu harus mengerem tiba-tiba, belok kiri, tancap gas, rem lagi, belok kanan. Kemampuan mengubah arah mendadak tanpa terjatuh disebut k...lincahan.",
    explanation_correct: "Pilihan: A. Kecepatan, B. Kelincahan, C. Kelenturan, D. Kekuatan.\n\nJawaban Benar: B. Kelincahan (Agility).\nPenjelasan: Lari zig-zag, shuttle run, dan lari bolak-balik adalah menu latihan khusus untuk mengasah kelincahan (agility), yaitu kemampuan merubah arah posisi tubuh dengan kecepatan tinggi tanpa kehilangan keseimbangan."
  },
  {
    id: "q_18", type: "pg", level: "L1",
    question: "Sebelum bermain sepak bola selama 2x45 menit di lapangan, regu kamu harus melakukan gerakan peregangan dan lari-lari kecil. Tujuan dari pemanasan (Warming Up) tersebut adalah...",
    options: ["Agar keringat langsung bercucuran sehingga berat badan turun", "Menghabiskan waktu santai", "Menaikkan suhu otot agar lemas dan tidak terjadi kram/cedera", "Agar tidak disoraki oleh penonton lawan"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Otot ibarat karet gelang. \nJika karet yang dingin langsung ditarik keras, karetnya akan putus. Jika karet digesek dulu (dihangatkan), karetnya lebih fleksibel ditarik.",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: C. Menaikkan suhu otot agar tidak terjadi cedera.\nPenjelasan: Pemanasan adalah fase kritis. Otot yang kaku/dingin akan mudah robek atau keram (spasme) jika diajak bergerak secara ekstrem secara tiba-tiba."
  },
  {
    id: "q_19", type: "pg", level: "L3",
    question: "Posisi badan saat melakukan renang gaya punggung adalah telentang dengan wajah menghadap ke langit. Keuntungan dari gaya renang ini bagi pernapasan adalah...",
    options: ["Lebih mudah mengambil udara bebas kapan saja", "Sangat sulit karena air akan masuk ke hidung dan telinga", "Membuat tubuh cepat tenggelam", "Tidak perlu bernapas karena jaraknya pendek"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Bayangkan wajah perenang gaya punggung (BAB 3). \nKarena wajahnya tidak menghadap dasar kolam melainkan ke atas langit, hidungnya selalu berada di atas permukaan air. Apakah ini menguntungkan pernapasan?",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: A. Lebih mudah mengambil udara bebas kapan saja.\nPenjelasan: Pada gaya dada atau bebas, mulut harus diangkat/diputar ke atas air untuk bernapas. Pada gaya punggung (backstroke), wajah senantiasa di atas permukaan air sehingga pernapasan jauh lebih leluasa tak terbatas waktu."
  },
  // D. Gaya Hidup Sehat (Cedera & Makanan)
  {
    id: "q_22", type: "pg", level: "L2",
    question: "Temanmu terjatuh saat bermain basket dan pergelangan kakinya keseleo hingga membengkak kemerahan. Berdasarkan metode pertolongan pertama R.I.C.E, kompres (Ice) apa yang paling tepat untuk pertolongan awalnya?",
    options: ["Mengoleskan minyak urut panas", "Mengompres langsung dengan air mendidih", "Mengompres kakinya dengan es dingin/air es", "Membalut kakinya dengan selimut tebal"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Ingat kepanjangan huruf 'I' pada teori R.I.C.E (BAB 4). \nI = Ice. Es bersifat dingin. Suhu dingin akan mengecilkan pembuluh darah yang pecah sehingga kakinya tidak bengkak lebih parah.",
    explanation_correct: "Pilihan: A. Minyak panas, B. Air mendidih, C. Es dingin, D. Selimut tebal.\n\nJawaban Benar: C. Mengompres dengan es dingin.\nPenjelasan: Sesuai metode medis darurat cedera sendi (R.I.C.E: Rest, Ice, Compression, Elevation). 'Ice' adalah terapi dingin (Es) yang diberikan dalam 24 jam pertama untuk mengerutkan pembuluh darah, mematikan saraf sakit sementara, dan mencegah pembengkakan semakin besar. Jangan diberi yang hangat/panas!"
  },
  {
    id: "q_38", type: "essay", level: "L2",
    question: "Jelaskan langkah R, C, dan E pada metode pertolongan pertama cedera sendi (R.I.C.E)!",
    explanation_wrong: "📌 Tips Belajar: Terjemahkan kata bahasa Inggris (BAB 4). \nRest (I_tir__atk__n), Compression (Ba__t ke_at), Elevation (Ang_at ti___i).",
    explanation_correct: "Jawaban Benar: R = Rest (Istirahatkan kakinya jangan bergerak). C = Compression (Bebat/tekan area luka dengan perban). E = Elevation (Angkat/tinggikan kakinya di atas posisi jantung).\nPenjelasan: Protokol Internasional P3K Cedera Olahraga: Istirahatkan (Stop), Dinginkan (Es), Balut (Perban kompresi), dan Tinggikan (Untuk mengurangi tekanan aliran darah di titik pembengkakan)."
  },
  {
    id: "q_24", type: "pg", level: "L3",
    question: "Perilaku sedenter (mager / terlalu banyak duduk) sangat buruk bagi kesehatan tubuh. Anak SD yang setiap hari menatap layar HP dari pagi hingga malam sambil tiduran memiliki resiko utama berupa...",
    options: ["Tulangnya menjadi kebal baja", "Mata minus (rabun), tulang punggung bengkok, dan obesitas karena kurang gerak", "Menjadi pintar teknologi komputer", "Paru-parunya menjadi semakin besar"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: 'Sedentari' artinya gaya hidup jarang beraktivitas fisik (BAB 5). \nLemak akan menumpuk di badan, postur punggung membungkuk, dan otot kaki melemah. Apa dampak kesehatannya?",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: B. Mata minus, tulang punggung bengkok, dan obesitas.\nPenjelasan: Perilaku sedenter (Sedentary lifestyle / kurang gerak) jangka panjang adalah sumber segala penyakit kronis. Lemak menumpuk jadi obesitas, dan sikap tidur/duduk malas bisa memicu kelainan tulang belakang (Kifosis)."
  },
  {
    id: "q_26", type: "pg", level: "L2",
    question: "Minuman berwarna kemasan yang sangat manis berpotensi memicu penyakit gula/diabetes sejak dini. Sebagai alternatif minuman paling sehat dengan gizi seimbang saat olahraga siang hari adalah...",
    options: ["Susu kental manis rasa coklat kental", "Minuman soda gembira dengan sirup", "Kopi hitam", "Air putih mineral atau jus buah murni tanpa gula"],
    correctAnswer: 3,
    explanation_wrong: "📌 Tips Belajar: Cari minuman yang murni dari alam (BAB 5). \nAir yang tidak ditambahkan perasa pabrik apapun atau buah yang diblender asli lebih cepat menggantikan cairan tubuh setelah olahraga lelah.",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: D. Air putih mineral atau jus murni.\nPenjelasan: Air mineral (H2O) adalah fluida terbaik penghidrasi tubuh tanpa kalori. Jus buah murni mengandung cairan isotonik dan vitamin alami. Sedangkan soda atau minuman sirup sarat akan tambahan gula rafinasi."
  },
  {
    id: "q_28", type: "pg", level: "L2",
    question: "Menjaga lingkungan bersih merupakan bagian dari gaya hidup sehat. Sampah kaleng, besi berkarat, dan botol kaca jika dibiarkan tergenang air hujan di halaman sekolah dapat mengundang bahaya berupa...",
    options: ["Sarang berkembangbiaknya nyamuk Aedes aegypti (Demam Berdarah)", "Tempat kucing liar bermain", "Menyuburkan tanah di sekitarnya", "Tidak ada bahayanya jika dikubur"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Ingat poster Puskemas tentang jentik nyamuk. \nGerakan 3M Plus adalah Menguras, Menutup, dan Mengubur barang bekas. Jentik nyamuk mematikan suka air yang tergenang di dalam botol/kaleng. Nyamuk apakah itu?",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: A. Sarang nyamuk Aedes aegypti pembawa DBD.\nPenjelasan: Benda-benda anorganik cekung seperti ban bekas, kaleng, ember, atau batok kelapa akan menjebak genangan air hujan bening. Ini adalah media kembang biak favorit jentik nyamuk penyebab Demam Berdarah Dengue (DBD)."
  },
  {
    id: "q_40", type: "essay", level: "L2",
    question: "Jelaskan alasan mengapa sikap duduk yang terus-menerus salah (membungkuk terlalu condong ke depan ke arah meja belajar) bisa membahayakan kesehatan tulangmu saat dewasa nanti!",
    explanation_wrong: "📌 Tips Belajar: Ingat pelajaran Biologi tulang belakang (BAB 5). \nTulang belakang manusia yang masih muda itu rawan bengkok menyesuaikan kebiasaan. Jika kamu membungkuk bertahun-tahun seperti udang, apa yang terjadi pada tulang belakangnya?",
    explanation_correct: "Jawaban Benar: Dapat menyebabkan kelainan bentuk ruas tulang belakang yang membungkuk melengkung ke belakang yang disebut kelainan Kifosis (Postur bungkuk permanen).\nPenjelasan: Postur (sikap duduk membungkuk ke arah layar HP/Buku) memberikan tekanan statis tak seimbang pada tulang punggung belakang (Vertebrata). Jika dibiarkan saat masa pertumbuhan, memicu kecacatan bentuk 'Kifosis'."
  }
];

async function insertPjok() {
  try {
    const subjRef = doc(db, 'artifacts/portal-ujian-sekolah-dbe8e/public/data/subjects/subject_pjok_2026');
    await setDoc(subjRef, {
      title: "Penjasorkes (PJOK)",
      description: "Kisi-kisi ASKA PJOK Paket 1 Kelas 6. Materi gerak senam, metode RICE (Cedera), olahraga kardio, & bahaya perilaku Mager.",
      summary: htmlSummary,
      questions: questions,
      isLocked: false 
    });
    console.log("SUCCESS: PJOK Subject injected successfully!");
    process.exit(0);
  } catch (error) {
    console.error("ERROR injecting PJOK:", error);
    process.exit(1);
  }
}

insertPjok();
