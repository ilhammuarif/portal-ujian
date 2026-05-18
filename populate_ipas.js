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
  <p style="font-size: 1.2rem; color: #059669; font-weight: bold; text-align: center; margin-bottom: 2rem;">
    Selamat datang di petualangan IPAS! 🌍🔬<br/>Mari kita jelajahi alam semesta, tubuh kita, dan kekayaan budaya Indonesia!
  </p>

  <!-- BAB 1: Tubuh Manusia -->
  <div style="background: #f0fdf4; border-left: 6px solid #10b981; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #047857; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #a7f3d0; padding-bottom: 1rem;">🩺 BAB 1: Sistem Organ Tubuh Manusia</h3>
    <p>Tubuh kita seperti mesin yang sangat hebat! Mari kita kenali beberapa bagiannya:</p>
    <ul>
      <li><b>Pencernaan:</b> Lambung berfungsi mengaduk makanan dan mencernanya dengan bantuan asam lambung. Usus halus menyerap sari-sari makanan.</li>
      <li><b>Pernapasan:</b> Alveolus di dalam paru-paru adalah tempat pertukaran oksigen dan karbon dioksida. Hidung menyaring udara kotor memakai bulu hidung.</li>
      <li><b>Penyakit:</b> Diare menyerang sistem pencernaan, Asma menyerang sistem pernapasan, dan Osteoporosis membuat tulang menjadi rapuh.</li>
      <li><b>Sendi Gerak:</b> Sendi engsel ada di siku dan lutut (gerak satu arah). Sendi peluru ada di gelang bahu (gerak ke segala arah).</li>
    </ul>
  </div>

  <!-- BAB 2: Ekosistem -->
  <div style="background: #fffbeb; border-left: 6px solid #f59e0b; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #b45309; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #fde68a; padding-bottom: 1rem;">🌿 BAB 2: Ekosistem (Biotik & Abiotik)</h3>
    <p>Biotik adalah makhluk hidup (hewan, tumbuhan). Abiotik adalah benda tak hidup (air, cahaya matahari, batu).</p>
    <ul>
      <li><b>Simbiosis Mutualisme:</b> Saling menguntungkan (contoh: Kupu-kupu dengan bunga).</li>
      <li><b>Simbiosis Parasitisme:</b> Satu untung, satu rugi (contoh: Nyamuk menggigit manusia).</li>
      <li>Cahaya matahari (abiotik) sangat mempengaruhi tumbuhan (biotik) untuk melakukan fotosintesis.</li>
      <li><b>Rantai Makanan:</b> Jika populasi katak menurun, maka populasi belalang (yang dimakan katak) akan meningkat pesat dan merusak padi.</li>
    </ul>
  </div>

  <!-- BAB 3: Bunyi, Cahaya, dan Energi -->
  <div style="background: #eff6ff; border-left: 6px solid #3b82f6; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #1d4ed8; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #bfdbfe; padding-bottom: 1rem;">⚡ BAB 3: Bunyi, Cahaya & Energi Listrik</h3>
    <ul>
      <li>Benda yang empuk seperti busa, karpet, dan spons dapat meredam bunyi agar tidak memantul.</li>
      <li>Telinga manusia normal hanya bisa mendengar bunyi dengan frekuensi <b>20 - 20.000 Hertz (Audiosonik)</b>.</li>
      <li>Bayangan benda selalu terbentuk di arah yang berlawanan dengan sumber cahaya, karena sifat cahaya <b>merambat lurus</b>.</li>
      <li><b>Hemat Energi:</b> Matikan lampu di siang hari. Alat elektronik seperti jam dinding memiliki energi listrik paling kecil dibanding AC atau kulkas.</li>
      <li>Energi alternatif adalah pengganti minyak bumi. Contohnya Panel Surya (matahari), Kincir Angin, dan Pembangkit Listrik Tenaga Air (PLTA).</li>
    </ul>
  </div>

  <!-- BAB 4: Tata Surya -->
  <div style="background: #fdf2f8; border-left: 6px solid #ec4899; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #be185d; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #fbcfe8; padding-bottom: 1rem;">🚀 BAB 4: Tata Surya & Pergerakan Bumi</h3>
    <ul>
      <li>Mars dijuluki "Planet Merah". Jupiter adalah planet terbesar. Saturnus memiliki cincin. Venus adalah planet terpanas (Bintang Kejora).</li>
      <li>Rotasi Bumi (Bumi berputar pada porosnya) mengakibatkan <b>Terjadinya Siang dan Malam</b>.</li>
      <li>Planet tidak saling bertabrakan karena mereka mengelilingi matahari di jalurnya masing-masing yang disebut <b>Orbit</b>.</li>
      <li>Gerhana Matahari terjadi jika susunannya tegak lurus: Matahari - Bulan - Bumi.</li>
    </ul>
  </div>

  <!-- BAB 5: Geografi, Sejarah & Budaya Indonesia -->
  <div style="background: #fef2f2; border-left: 6px solid #ef4444; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #b91c1c; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #fecaca; padding-bottom: 1rem;">🗺️ BAB 5: Indonesia Tercinta</h3>
    <ul>
      <li>Secara geografis, Indonesia terletak di antara <b>Dua Benua</b> (Asia & Australia) dan <b>Dua Samudra</b> (Hindia & Pasifik).</li>
      <li>Negara yang berbatasan langsung di darat dengan Indonesia adalah Malaysia, Papua Nugini, dan Timor Leste.</li>
      <li>Letak astronomis membuat Indonesia beriklim tropis (hanya punya musim kemarau dan hujan).</li>
      <li>Kedatangan bangsa Eropa (Belanda, Portugis) ke Indonesia awalnya karena mencari rempah-rempah yang mahal di Eropa.</li>
      <li><b>Tokoh Proklamator:</b> Ir. Soekarno (Bapak Proklamator) dan Moh. Hatta. Soepomo adalah perumus Pancasila.</li>
      <li><b>Budaya:</b> Rumah Gadang (Sumatera Barat), Rumah Joglo (Jawa Tengah), Tari Kecak (Bali), Tari Saman (Aceh).</li>
      <li>Kegiatan ekonomi di daerah pegunungan sebagian besar adalah perkebunan (teh, kopi, sayuran) dan pariwisata. Bidang jasa contohnya: Guru, Dokter, Sopir, Tukang Cukur.</li>
    </ul>
  </div>
</div>
`;

const questions = [
  // ORGAN TUBUH
  {
    id: "q_1", type: "pg", level: "L2",
    question: "Organ pencernaan manusia yang berfungsi menyerap sari-sari makanan adalah...",
    options: ["Kerongkongan", "Lambung", "Usus Halus", "Usus Besar"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Pelajari BAB 1 (Pencernaan). \nKerongkongan adalah saluran masuk, lambung untuk mengaduk dan menghancurkan makanan. Benda apa yang menyerap sari atau gizi agar masuk ke darah?",
    explanation_correct: "Pilihan: A. Kerongkongan, B. Lambung, C. Usus Halus, D. Usus Besar.\n\nJawaban Benar: C. Usus Halus.\nPenjelasan: Usus halus adalah tempat utama di mana seluruh sari-sari makanan (gizi) diserap oleh tubuh untuk diedarkan ke dalam darah. Usus besar menyerap air dari sisa makanan."
  },
  {
    id: "q_2", type: "pg", level: "L1",
    question: "Tempat terjadinya pertukaran oksigen dan karbon dioksida di dalam paru-paru dinamakan...",
    options: ["Alveolus", "Bronkus", "Trakea", "Hidung"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Pelajari BAB 1 (Pernapasan). \nHidung untuk menyaring udara, Trakea adalah tenggorokan, Bronkus adalah cabang. Ujung berbentuk gelembung kecil tempat oksigen ditukar bernama apa?",
    explanation_correct: "Pilihan: A. Alveolus, B. Bronkus, C. Trakea, D. Hidung.\n\nJawaban Benar: A. Alveolus.\nPenjelasan: Alveolus adalah gelembung-gelembung udara kecil di dalam paru-paru tempat menukarkan oksigen (O2) yang kita hirup dengan karbon dioksida (CO2) yang kita hembuskan."
  },
  {
    id: "q_3", type: "pg", level: "L3",
    question: "Budi sering jajan sembarangan di pinggir jalan dan tidak mencuci tangan sebelum makan. Akibatnya, ia sering bolak-balik ke kamar mandi karena perutnya sakit. Penyakit yang diderita Budi menyerang sistem organ...",
    options: ["Pernapasan", "Pencernaan", "Peredaran Darah", "Gerak"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Pahami logika aktivitas Budi. \nBudi makan sembarangan (jajan kotor) dan perutnya sakit. Kegiatan makan berhubungan langsung dengan perut dan usus. Sistem apakah itu?",
    explanation_correct: "Pilihan: A. Pernapasan, B. Pencernaan, C. Peredaran Darah, D. Gerak.\n\nJawaban Benar: B. Pencernaan.\nPenjelasan: Gejala sakit perut dan buang air besar terus-menerus (diare) diakibatkan kuman yang masuk lewat makanan kotor. Ini menyerang organ pencernaan (lambung dan usus)."
  },
  {
    id: "q_4", type: "pg", level: "L1",
    question: "Sendi engsel adalah sendi yang hanya memungkinkan gerakan satu arah saja. Sendi ini terdapat pada...",
    options: ["Siku dan lutut", "Pangkal paha", "Leher", "Pergelangan tangan"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Ingat letak sendi engsel. \nEngsel pintu hanya bisa membuka dan menutup satu arah. Coba tekuk leher, paha, atau lenganmu. Bagian tubuh mana yang hanya bisa ditekuk ke satu arah saja?",
    explanation_correct: "Pilihan: A. Siku dan lutut, B. Pangkal paha, C. Leher, D. Pergelangan tangan.\n\nJawaban Benar: A. Siku dan lutut.\nPenjelasan: Siku pada tangan dan lutut pada kaki memiliki sendi engsel, yaitu hanya bisa ditekuk dan diluruskan ke satu arah saja. Leher menggunakan sendi putar."
  },
  {
    id: "q_31", type: "essay", level: "L1",
    question: "Tuliskan dua cara yang benar untuk menjaga kesehatan sistem pernapasan kita!",
    explanation_wrong: "📌 Tips Belajar: Pelajari cara memelihara kesehatan (BAB 1). \nPernapasan butuh udara yang bersih. Hindari menghisap hal-hal yang berasap atau kotor. Tuliskan dua aktivitas positif untuk paru-paru.",
    explanation_correct: "Jawaban Benar: 1. Tidak merokok / menghindari asap rokok. 2. Berolahraga secara teratur. 3. Menggunakan masker saat udara kotor. 4. Menanam pohon di sekitar rumah.\nPenjelasan: Segala bentuk jawaban yang berfokus pada kebersihan sirkulasi udara (masker, oksigen dari pohon) dan kesehatan paru-paru (olahraga) akan dibenarkan."
  },
  // EKOSISTEM
  {
    id: "q_5", type: "pg", level: "L2",
    question: "Hubungan antara lebah yang menghisap nektar pada bunga merupakan contoh simbiosis...",
    options: ["Parasitisme", "Komensalisme", "Mutualisme", "Amensalisme"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Pelajari BAB 2 (Simbiosis). \nLebah mendapat makanan (madu), sedangkan bunga terbantu proses penyerbukannya oleh lebah. Keduanya sama-sama untung. Disebut apakah hubungan yang saling menguntungkan ini?",
    explanation_correct: "Pilihan: A. Parasitisme, B. Komensalisme, C. Mutualisme, D. Amensalisme.\n\nJawaban Benar: C. Mutualisme.\nPenjelasan: Mutualisme adalah hubungan antar makhluk hidup yang saling menguntungkan. Lebah mendapatkan sari makanan (nektar), dan bunga dibantu menyebarkan serbuk sarinya untuk berkembang biak."
  },
  {
    id: "q_6", type: "pg", level: "L3",
    question: "Manakah pernyataan di bawah ini yang menunjukkan bahwa komponen abiotik mempengaruhi komponen biotik?",
    options: ["Kambing memakan rumput di lapangan", "Cacing membuat tanah menjadi gembur", "Cahaya matahari membantu tumbuhan berfotosintesis", "Ular memakan tikus di sawah"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Pahami perbedaan Biotik (Hidup) dan Abiotik (Tak Hidup). \nCari jawaban di mana benda tak hidup memberikan pengaruh besar bagi kelangsungan hidup suatu makhluk hidup (biotik).",
    explanation_correct: "Pilihan: A. Kambing makan rumput, B. Cacing menggemburkan tanah, C. Cahaya matahari untuk fotosintesis, D. Ular makan tikus.\n\nJawaban Benar: C. Cahaya matahari membantu tumbuhan berfotosintesis.\nPenjelasan: Cahaya matahari adalah benda abiotik (benda tak hidup). Cahaya ini digunakan oleh tumbuhan (benda biotik / hidup) untuk memasak makanan (fotosintesis). Kambing, rumput, ular, cacing semuanya adalah makhluk hidup (biotik memengaruhi biotik)."
  },
  {
    id: "q_32", type: "essay", level: "L3",
    question: "Dalam rantai makanan: Padi -> Belalang -> Katak -> Ular. \nApa yang akan terjadi pada populasi padi dan populasi katak jika populasi belalang dimusnahkan secara massal oleh petani?",
    explanation_wrong: "📌 Tips Belajar: Analisis Rantai Makanan di BAB 2. \nJika Belalang habis, apa yang terjadi pada padi yang biasa dimakan belalang? Bertambah atau berkurang? Lalu apa yang terjadi pada Katak yang makanannya adalah belalang? Apakah katak akan kelaparan?",
    explanation_correct: "Jawaban Benar: Populasi padi akan meningkat lebat (subur), sedangkan populasi katak akan menurun kelaparan.\nPenjelasan: Padi adalah produsen. Jika hama pemakannya (belalang) habis, padi tidak akan rusak dan jumlahnya meningkat drastis. Sebaliknya, katak sangat bergantung pada belalang sebagai mangsanya, sehingga katak akan mati kelaparan dan menurun jumlahnya."
  },
  // BUNYI & CAHAYA
  {
    id: "q_7", type: "pg", level: "L3",
    question: "Benda manakah yang paling cocok ditempelkan pada dinding studio musik agar suara tidak bergema ke luar ruangan?",
    options: ["Keramik dan kaca", "Kaca dan besi", "Busa dan karpet tebal", "Kayu keras dan seng"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Buka BAB 3 tentang Sifat Bunyi. \nBenda yang keras, rapat, dan mengkilap (kaca, besi, keramik) akan memantulkan bunyi (gema). Benda apa yang sifatnya lunak dan banyak rongga udaranya untuk menyerap bunyi?",
    explanation_correct: "Pilihan: A. Keramik dan kaca, B. Kaca dan besi, C. Busa dan karpet tebal, D. Kayu keras dan seng.\n\nJawaban Benar: C. Busa dan karpet tebal.\nPenjelasan: Benda yang memiliki permukaan empuk, berpori, dan berongga (seperti karpet, busa, spons) dapat menyerap gelombang bunyi dan mencegah pantulan/gema. Benda padat seperti kaca akan memantulkan suara."
  },
  {
    id: "q_8", type: "pg", level: "L2",
    question: "Telinga manusia secara normal hanya dapat mendengar rentang bunyi Audiosonik. Berapakah frekuensi bunyi Audiosonik?",
    options: ["Kurang dari 20 Hz", "Antara 20 hingga 20.000 Hz", "Lebih dari 20.000 Hz", "Di atas 50.000 Hz"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Ingat rentang frekuensi audiosonik (BAB 3). \nBunyi di bawah 20 disebut Infrasonik (hanya untuk anjing/gajah). Bunyi di atas 20.000 disebut Ultrasonik (untuk kelelawar/lumba-lumba). Dimanakah rentang telinga manusia?",
    explanation_correct: "Pilihan: A. Kurang dari 20 Hz, B. Antara 20 - 20.000 Hz, C. Lebih dari 20.000 Hz.\n\nJawaban Benar: B. Antara 20 hingga 20.000 Hz.\nPenjelasan: \n- Infrasonik (< 20 Hz): Jangkrik, gajah.\n- Audiosonik (20 - 20.000 Hz): Telinga Manusia.\n- Ultrasonik (> 20.000 Hz): Kelelawar, Lumba-lumba."
  },
  {
    id: "q_9", type: "pg", level: "L2",
    question: "Senter dinyalakan di depan sebuah kardus, dan cahaya senter tidak bisa menembus kardus tersebut. Sifat cahaya apakah ini?",
    options: ["Cahaya dapat dipantulkan", "Cahaya merambat lurus", "Cahaya menembus benda bening", "Cahaya tidak menembus benda gelap/pekat"],
    correctAnswer: 3,
    explanation_wrong: "📌 Tips Belajar: Analisis sifat cahaya. \nKardus adalah benda yang tebal dan gelap (bukan kaca yang bening). Mengapa cahaya berhenti dan tidak sampai ke tembok di belakang kardus?",
    explanation_correct: "Pilihan: A. Dipantulkan, B. Merambat lurus, C. Menembus benda bening, D. Tidak menembus benda gelap.\n\nJawaban Benar: D. Cahaya tidak menembus benda gelap/pekat (opaque).\nPenjelasan: Kardus adalah benda tidak tembus cahaya (opaque). Cahaya hanya bisa diteruskan jika ia menabrak benda bening (seperti kaca atau plastik transparan)."
  },
  {
    id: "q_33", type: "essay", level: "L2",
    question: "Jelaskan dengan singkat, mengapa pada siang hari yang terik, bayangan tubuhmu terbentuk di tanah?",
    explanation_wrong: "📌 Tips Belajar: Pikirkan hubungan antara Sifat Cahaya dan Bayangan. \nBayangan terjadi jika ada sebuah 'Benda' yang menghalangi jalan cahaya (karena cahaya jalannya merambat lurus). Coba rangkai dalam sebuah kalimat.",
    explanation_correct: "Jawaban Benar: Bayangan terbentuk karena cahaya matahari merambat lurus dan terhalang oleh tubuh kita yang merupakan benda tidak tembus cahaya.\nPenjelasan: Cahaya matahari merambat lurus. Saat cahaya tersebut mengenai tubuh manusia (yang padat dan tidak bening), cahaya terhalang dan bagian tanah di belakang tubuh kita tidak terkena sinar, membentuk area gelap (bayangan)."
  },
  // ENERGI
  {
    id: "q_10", type: "pg", level: "L2",
    question: "Perilaku mana yang mencerminkan upaya penghematan energi listrik yang tepat?",
    options: ["Menyalakan AC walau ruangan kosong", "Membiarkan TV menyala saat tidur", "Mematikan lampu kamar saat siang hari", "Mengecas HP semalaman padahal sudah penuh"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Cari kebiasaan baik di rumah. \nPenghematan energi berarti memakai listrik seperlunya saja. Manakah dari 4 pilihan tersebut yang merupakan perbuatan mengurangi pemakaian listrik yang mubazir?",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: C. Mematikan lampu kamar saat siang hari.\nPenjelasan: Di siang hari, kita mendapat cahaya gratis dari matahari. Mematikan lampu di siang hari akan menghemat tagihan listrik dan melestarikan energi. Pilihan A, B, dan D adalah bentuk pemborosan energi listrik."
  },
  {
    id: "q_11", type: "pg", level: "L3",
    question: "Ketika kamu menggunakan kipas angin, energi yang diubah adalah...",
    options: ["Energi listrik menjadi panas", "Energi gerak menjadi listrik", "Energi listrik menjadi bunyi", "Energi listrik menjadi gerak"],
    correctAnswer: 3,
    explanation_wrong: "📌 Tips Belajar: Analisis benda kipas angin. \nKipas angin baru bisa menyala jika dicolokkan ke stopkontak (Listrik). Setelah dicolok, baling-balingnya akan berputar (Gerak). Rangkailah urutan perubahannya.",
    explanation_correct: "Pilihan: A. Listrik -> Panas, B. Gerak -> Listrik, C. Listrik -> Bunyi, D. Listrik -> Gerak.\n\nJawaban Benar: D. Energi listrik menjadi energi gerak.\nPenjelasan: Kipas angin mengambil energi listrik dari colokan rumah, kemudian mesin motor di dalam kipas memutar baling-baling (menghasilkan energi gerak angin). Jika setrika, baru listrik menjadi panas."
  },
  {
    id: "q_12", type: "pg", level: "L3",
    question: "Pembangkit listrik tenaga surya (PLTS) sangat ramah lingkungan. PLTS ini mengubah energi ... menjadi energi listrik.",
    options: ["Angin", "Air Terjun", "Matahari", "Batu Bara"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Apa arti kata 'Surya'? \n'Surya' dalam bahasa Indonesia bersinonim dengan bintang besar yang menyinari bumi setiap pagi. Sumber energi terbesar apa yang ditangkap oleh PLTS (Panel Surya)?",
    explanation_correct: "Pilihan: A. Angin, B. Air Terjun, C. Matahari, D. Batu Bara.\n\nJawaban Benar: C. Matahari.\nPenjelasan: PLTS menggunakan panel-panel besar berbahan silikon untuk menangkap foton dari cahaya matahari dan mengubahnya menjadi arus listrik searah. Tata surya (solar system) berpusat pada Matahari."
  },
  {
    id: "q_13", type: "pg", level: "L1",
    question: "Di antara benda elektronik berikut, manakah yang membutuhkan energi listrik paling kecil untuk menyala?",
    options: ["Mesin Cuci", "Kulkas / Lemari Es", "Jam dinding", "Televisi Tabung"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Bandingkan kekuatan sumber listriknya. \nMesin cuci, Kulkas, dan TV harus dicolokkan ke listrik rumah yang dayanya ratusan watt. Sedangkan benda mana yang hanya mengandalkan energi listrik kecil dari 1 buah baterai AA?",
    explanation_correct: "Pilihan: A. Mesin Cuci, B. Kulkas, C. Jam Dinding, D. TV.\n\nJawaban Benar: C. Jam dinding.\nPenjelasan: Jam dinding tidak perlu dicolokkan ke listrik PLN. Ia hanya membutuhkan arus DC yang sangat kecil dari sebutir baterai jam (sekitar 1.5 Volt) untuk bisa berputar seharian."
  },
  // TATA SURYA
  {
    id: "q_14", type: "pg", level: "L2",
    question: "Planet yang dijuluki 'Bintang Kejora' karena tampak sangat terang di pagi hari adalah...",
    options: ["Mars", "Bumi", "Saturnus", "Venus"],
    correctAnswer: 3,
    explanation_wrong: "📌 Tips Belajar: Pelajari julukan planet di BAB 4. \nMars adalah planet merah, Saturnus planet bercincin. Planet Bintang Kejora ini adalah planet ke-2 yang paling dekat dengan matahari dan merupakan planet terpanas.",
    explanation_correct: "Pilihan: A. Mars, B. Bumi, C. Saturnus, D. Venus.\n\nJawaban Benar: D. Venus.\nPenjelasan: Venus memiliki atmosfer yang sangat tebal berisi karbon dioksida, yang memantulkan cahaya matahari dengan sangat cemerlang. Oleh karena itu dari Bumi, Venus terlihat seperti bintang terang di ufuk timur (Bintang Kejora)."
  },
  {
    id: "q_15", type: "pg", level: "L1",
    question: "Ciri-ciri planet ini: Berwarna merah kemerahan, memiliki gunung tertinggi di tata surya (Olympus Mons). Planet apakah ini?",
    options: ["Merkurius", "Mars", "Uranus", "Neptunus"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Planet terdekat ke-4 dari Matahari. \nPlanet ini dijuluki Planet Merah karena tanahnya berkarat besi, dan sering direncanakan untuk ditinggali oleh astronot (NASA) di masa depan.",
    explanation_correct: "Pilihan: A. Merkurius, B. Mars, C. Uranus, D. Neptunus.\n\nJawaban Benar: B. Mars.\nPenjelasan: Mars berwarna merah karena permukaannya mengandung oksida besi (karat). Ia juga menampung gunung api terbesar di Tata Surya yang bernama Olympus Mons."
  },
  {
    id: "q_16", type: "pg", level: "L2",
    question: "Perputaran bumi pada porosnya (Rotasi Bumi) yang berlangsung 24 jam mengakibatkan terjadinya...",
    options: ["Pergantian musim semi dan gugur", "Perubahan rasi bintang", "Terjadinya siang dan malam", "Gerhana matahari cincin"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Bedakan Rotasi (Berputar) dan Revolusi (Mengelilingi). \nSaat bumi berputar seperti gasing (Rotasi), satu sisi bumi menghadap matahari (terang) dan sisi lainnya membelakangi matahari (gelap). Peristiwa harian apakah ini?",
    explanation_correct: "Pilihan: A. Musim, B. Rasi Bintang, C. Siang Malam, D. Gerhana.\n\nJawaban Benar: C. Terjadinya siang dan malam.\nPenjelasan: Rotasi bumi (berputar di tempatnya) menghasilkan siang (bagi area yang sedang menghadap matahari) dan malam (bagi area yang membelakangi matahari). Sedangkan pergantian musim disebabkan oleh Revolusi Bumi."
  },
  {
    id: "q_17", type: "pg", level: "L3",
    question: "Ayah berangkat naik pesawat dari Jakarta (WIB) pukul 07.00 menuju Jayapura (WIT). Jika lama penerbangan adalah 5 jam, pukul berapakah ayah tiba waktu setempat di Jayapura?",
    options: ["Pukul 12.00 WIT", "Pukul 14.00 WIT", "Pukul 10.00 WIT", "Pukul 15.00 WIT"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Logika Zona Waktu Indonesia. \nWaktu Indonesia Timur (WIT) lebih cepat 2 jam dari Waktu Indonesia Barat (WIB). Pertama, tambahkan 07.00 dengan 5 jam penerbangan. Lalu hasil waktu Jakartanya ditambahkan 2 jam lagi agar sesuai jam dinding Papua.",
    explanation_correct: "Pilihan: A. 12.00, B. 14.00, C. 10.00, D. 15.00.\n\nJawaban Benar: B. Pukul 14.00 WIT.\nPenjelasan: \n1) Ayah berangkat 07.00 + Lama terbang 5 jam = Jam 12.00 WIB (Waktu Jakarta).\n2) Karena mendarat di Jayapura (WIT), kita ubah WIB ke WIT (Selisih maju 2 jam).\n3) 12.00 WIB + 2 Jam = 14.00 WIT waktu setempat di Jayapura."
  },
  {
    id: "q_34", type: "essay", level: "L2",
    question: "Mengapa planet-planet di tata surya kita (seperti Bumi, Mars, dan Jupiter) terus bergerak mengelilingi matahari tanpa pernah saling bertabrakan?",
    explanation_wrong: "📌 Tips Belajar: Ingat lintasan planet (BAB 4). \nSeperti mobil balap di sirkuit, masing-masing mobil punya jalurnya sendiri yang tidak memotong mobil lain. Apa sebutan untuk 'jalur lintasan' milik planet?",
    explanation_correct: "Jawaban Benar: Karena setiap planet memiliki lintasan atau orbitnya masing-masing, dan ditahan oleh gaya gravitasi matahari yang sangat kuat.\nPenjelasan: Orbit adalah garis edar tetap setiap planet. Karena setiap planet berada pada lintasan elips yang berbeda jaraknya dan diatur secara seimbang oleh gravitasi matahari, mereka tidak akan saling menyalip atau bertabrakan."
  },
  {
    id: "q_35", type: "essay", level: "L3",
    question: "Deskripsikan urutan posisi Matahari, Bumi, dan Bulan saat terjadi peristiwa Gerhana Bulan Total!",
    explanation_wrong: "📌 Tips Belajar: Logika Gerhana Bulan. \nBulan bersinar karena memantulkan cahaya matahari. Jika Bumi menghalangi cahaya matahari untuk sampai ke bulan, maka bulan akan tampak gelap (Gerhana Bulan). Susun urutan posisinya (Siapa di tengah?).",
    explanation_correct: "Jawaban Benar: Urutan sejajarnya adalah: Matahari - Bumi - Bulan (Bumi berada lurus di tengah-tengah).\nPenjelasan: Saat gerhana bulan total, posisi Bumi menutupi cahaya matahari secara sempurna. Akibatnya, Bulan masuk sepenuhnya ke dalam bayangan inti (Umbra) Bumi dan menjadi terlihat gelap/merah darah dari Bumi."
  },
  // GEOGRAFIS
  {
    id: "q_18", type: "pg", level: "L1",
    question: "Pulau di Indonesia yang berada di wilayah paling ujung utara dan berbatasan dengan Filipina adalah...",
    options: ["Pulau Miangas", "Pulau Rote", "Pulau Weh", "Pulau Jawa"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Ingat batas batas wilayah laut Utara Indonesia. \nPulau Rote ada di ujung selatan (NTT), Pulau Weh ada di ujung Barat (Aceh). Pulau terluar di dekat Sulawesi Utara adalah?",
    explanation_correct: "Pilihan: A. Miangas, B. Rote, C. Weh, D. Jawa.\n\nJawaban Benar: A. Pulau Miangas.\nPenjelasan: Miangas adalah pulau terluar bagian utara Indonesia (Sulawesi Utara). Wilayah maritimnya bersentuhan langsung dengan negara Filipina. Rote di selatan, Weh di barat, Merauke di timur."
  },
  {
    id: "q_19", type: "pg", level: "L1",
    question: "Negara tetangga yang berbatasan wilayah darat secara langsung dengan Indonesia (berada dalam satu pulau) adalah...",
    options: ["Singapura, Malaysia, dan Filipina", "Malaysia, Papua Nugini, dan Timor Leste", "Australia, Singapura, dan Thailand", "Brunei Darussalam, Filipina, dan Jepang"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Buka peta Indonesia di BAB 5. \nCari tiga negara yang tidak dipisahkan oleh lautan dari tanah Indonesia. Satu di atas Kalimantan, satu di sebelah timur pulau Papua, dan satu di timur pulau Timor (NTT).",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: B. Malaysia, Papua Nugini, dan Timor Leste.\nPenjelasan: Indonesia berbagi perbatasan DARAT secara langsung di 3 pulau: \n1. Pulau Kalimantan (berbagi dengan negara Malaysia).\n2. Pulau Papua (berbagi tanah dengan Papua Nugini di sebelah timur).\n3. Pulau Timor (berbagi dengan Timor Leste)."
  },
  {
    id: "q_20", type: "pg", level: "L2",
    question: "Batas alam wilayah Indonesia bagian Selatan (di bawah pulau Jawa & NTT) adalah...",
    options: ["Samudra Pasifik", "Samudra Hindia", "Benua Asia", "Laut China Selatan"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Bayangkan bentuk benua dan samudra. \nDi utara ada Benua Asia, di Timur Laut ada Samudra Pasifik. Di sebelah Selatan Indonesia (arah bawah peta menuju Australia), perairan raksasa apa yang ada di sana?",
    explanation_correct: "Pilihan: A. Pasifik, B. Hindia, C. Benua Asia, D. Laut China Selatan.\n\nJawaban Benar: B. Samudra Hindia.\nPenjelasan: Secara geografis, batas laut di selatan dan barat kepulauan Indonesia adalah hamparan luas Samudra Hindia (menghubungkan ke Benua Australia). Samudra Pasifik ada di bagian timur-utara (dekat Papua/Maluku)."
  },
  {
    id: "q_21", type: "pg", level: "L3",
    question: "Jika kamu melihat peta konvensional Indonesia, pulau besar yang bentuknya seperti huruf 'K' adalah pulau...",
    options: ["Sumatera", "Sulawesi", "Kalimantan", "Papua"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Pelajari visualisasi Peta Indonesia. \nSumatera bentuknya membujur lurus. Kalimantan membulat. Papua seperti burung raksasa. Pulau manakah yang memiliki 4 kaki/semenanjung yang membentuk huruf K?",
    explanation_correct: "Pilihan: A. Sumatera, B. Sulawesi, C. Kalimantan, D. Papua.\n\nJawaban Benar: B. Pulau Sulawesi.\nPenjelasan: Pulau Sulawesi (dahulu dikenal sebagai Celebes) memiliki keunikan geografis dengan bentuk yang memiliki 4 semenanjung panjang, sehingga terlihat mencolok seperti huruf K di peta."
  },
  {
    id: "q_22", type: "pg", level: "L2",
    question: "Indonesia berada di jalur 'Ring of Fire' (Cincin Api Pasifik) sehingga memiliki banyak gunung berapi aktif. Salah satu gunung berapi aktif paling berbahaya di Pulau Jawa adalah...",
    options: ["Gunung Jayawijaya", "Gunung Merapi", "Gunung Kinabalu", "Gunung Everest"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Perhatikan lokasi dan asal usul gunungnya. \nJayawijaya adalah gunung bersalju di Papua. Kinabalu ada di Malaysia, dan Everest ada di Nepal. Gunung berapi aktif yang ada di daerah perbatasan Yogyakarta/Jateng adalah?",
    explanation_correct: "Pilihan: A. Jayawijaya, B. Merapi, C. Kinabalu, D. Everest.\n\nJawaban Benar: B. Gunung Merapi.\nPenjelasan: Gunung Merapi di Jawa Tengah/DI Yogyakarta adalah salah satu gunung berapi paling aktif di dunia (erupsi nyaris setiap 2-5 tahun). Jayawijaya bukanlah gunung berapi."
  },
  {
    id: "q_36", type: "essay", level: "L2",
    question: "Jelaskan letak geografis Indonesia secara lengkap (Diapit oleh Benua apa dan Samudra apa)!",
    explanation_wrong: "📌 Tips Belajar: Hafalkan 4 nama geografi raksasa yang mengapit Indonesia (BAB 5). \nIndonesia menjembatani 2 benua (yang satu di utara, satu di selatan/bawah). Dan berada di antara 2 perairan samudra terbesar di dunia. Apa saja namanya?",
    explanation_correct: "Jawaban Benar: Indonesia terletak di antara Benua Asia dan Benua Australia, serta berada di antara Samudra Hindia dan Samudra Pasifik.\nPenjelasan: Ini adalah definisi baku letak geografis Indonesia. Posisinya yang berbentuk 'Silang' ini menjadikan Indonesia sangat strategis sebagai jalur perdagangan dan pelayaran dunia semenjak zaman dahulu."
  },
  {
    id: "q_37", type: "essay", level: "L3",
    question: "Letak astronomis Indonesia berada di Garis Khatulistiwa. Jelaskan 2 dampak positif iklim khatulistiwa bagi alam Indonesia!",
    explanation_wrong: "📌 Tips Belajar: Ingat ciri-ciri iklim Tropis. \nKarena dilintasi khatulistiwa, Indonesia tidak punya salju. Kita hanya punya musim hujan dan kemarau. Cahaya matahari bersinar sepanjang tahun. Apa untungnya bagi tanah dan tumbuhan kita?",
    explanation_correct: "Jawaban Benar: 1) Mendapatkan sinar matahari sepanjang tahun yang sangat baik untuk pertanian. 2) Memiliki tanah yang sangat subur (hutan hujan tropis) sehingga banyak keragaman satwa dan tumbuhan. 3) Suhu tidak pernah beku/sangat ekstrem.\nPenjelasan: Dampak utama iklim tropis khatulistiwa adalah curah hujan yang cukup dan sinar matahari yang stabil, memfasilitasi keanekaragaman hayati (biodiversitas) flora dan fauna yang melimpah."
  },
  // SEJARAH PAHLAWAN
  {
    id: "q_23", type: "pg", level: "L1",
    question: "Tujuan utama bangsa-bangsa Eropa (seperti Belanda dan Portugis) datang berlayar ke Indonesia pada masa penjajahan adalah untuk...",
    options: ["Mempelajari budaya membatik", "Mencari daerah bersalju", "Mencari dan memonopoli rempah-rempah", "Mencari teknologi canggih"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Pikirkan apa kekayaan alam terbesar Indonesia di masa lalu. \nPada abad ke-16, orang Eropa membutuhkan komoditas langka ini (seperti cengkeh dan lada) untuk mengawetkan makanan dan menghangatkan tubuh di musim dingin Eropa. Barang apakah itu?",
    explanation_correct: "Pilihan: A. Membatik, B. Daerah bersalju, C. Rempah-rempah, D. Teknologi.\n\nJawaban Benar: C. Mencari dan memonopoli rempah-rempah.\nPenjelasan: Rempah-rempah (cengkeh, pala, lada) harganya sama mahalnya dengan emas di benua Eropa kala itu. Belanda datang membentuk VOC untuk memonopoli perdagangan kekayaan alam agraris Indonesia tersebut."
  },
  {
    id: "q_24", type: "pg", level: "L1",
    question: "Bapak Proklamator Indonesia yang membacakan teks proklamasi kemerdekaan pada tanggal 17 Agustus 1945 adalah...",
    options: ["Ir. Soekarno dan Moh. Hatta", "Ki Hajar Dewantara", "Pangeran Diponegoro", "Cut Nyak Dien"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Ingat tokoh presiden pertama RI (BAB 5). \nSiapakah pasangan Dwi-Tunggal yang tanda tangannya ada di bagian bawah naskah proklamasi 'Atas nama bangsa Indonesia...'?",
    explanation_correct: "Pilihan: A. Soekarno-Hatta, B. Ki Hajar Dewantara, C. Diponegoro, D. Cut Nyak Dien.\n\nJawaban Benar: A. Ir. Soekarno dan Drs. Moh. Hatta.\nPenjelasan: Soekarno dan Hatta adalah proklamator yang memproklamirkan kemerdekaan Republik Indonesia. Ki Hajar Dewantara adalah pahlawan pendidikan, Diponegoro melawan VOC di Jawa, dan Cut Nyak Dien di Aceh."
  },
  {
    id: "q_25", type: "pg", level: "L2",
    question: "Cut Nyak Dien adalah seorang pahlawan wanita yang sangat berani melawan penjajah Belanda dengan perang gerilya. Beliau berasal dari daerah...",
    options: ["Maluku", "Jawa Barat", "Aceh", "Bali"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Ingat sejarah perlawanan lokal. \nDaerah ini dijuluki Serambi Mekkah. Belanda butuh puluhan tahun untuk menaklukkan rakyat di wilayah ujung pulau Sumatera ini. Dari manakah asal Cut Nyak Dien dan Teuku Umar?",
    explanation_correct: "Pilihan: A. Maluku, B. Jawa Barat, C. Aceh, D. Bali.\n\nJawaban Benar: C. Aceh.\nPenjelasan: Cut Nyak Dien adalah pahlawan nasional fenomenal dari Aceh. Ia memimpin pasukan bergerilya di dalam hutan lebat Aceh untuk mengusir kolonial Belanda (Perang Aceh)."
  },
  {
    id: "q_26", type: "pg", level: "L2",
    question: "Berikut adalah tiga tokoh penting yang merumuskan dan mengemukakan dasar negara (Pancasila) pada sidang BPUPKI, KECUALI...",
    options: ["Ir. Soekarno", "Mr. Soepomo", "Mohammad Yamin", "Tuanku Imam Bonjol"],
    correctAnswer: 3,
    explanation_wrong: "📌 Tips Belajar: Bedakan tokoh perang vs tokoh politik kemerdekaan. \nTiga dari tokoh tersebut duduk di ruang sidang menyampaikan gagasan Pancasila. Satunya lagi adalah ulama pejuang berkuda dari Padang yang hidup ratusan tahun sebelum masa BPUPKI. Siapakah yang 'Kecuali' (Bukan)?",
    explanation_correct: "Pilihan: A. Soekarno, B. Soepomo, C. Muh. Yamin, D. Imam Bonjol.\n\nJawaban Benar: D. Tuanku Imam Bonjol.\nPenjelasan: Tiga perumus asli dasar ideologi negara di sidang BPUPKI (Mei-Juni 1945) adalah Muh. Yamin, Soepomo, dan Soekarno. Tuanku Imam Bonjol adalah pahlawan Perang Padri tahun 1820-an, tidak berhubungan dengan BPUPKI."
  },
  // BUDAYA LOKAL
  {
    id: "q_27", type: "pg", level: "L1",
    question: "Upacara pembakaran mayat yang merupakan tradisi adat umat Hindu di Provinsi Bali dinamakan upacara...",
    options: ["Ngaben", "Kasada", "Lompat Batu", "Sekaten"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Hafalkan upacara adat populer di Indonesia (BAB 5). \nLompat batu (Fahombo) ada di Nias. Sekaten di Yogyakarta/Surakarta. Upacara pelepasan arwah (kremasi) di Bali bernama apa?",
    explanation_correct: "Pilihan: A. Ngaben, B. Kasada, C. Lompat Batu, D. Sekaten.\n\nJawaban Benar: A. Ngaben.\nPenjelasan: Ngaben adalah upacara pembakaran/kremasi jenazah di Bali. Tujuannya untuk mengembalikan unsur panca maha bhuta tubuh jenazah kembali ke alam secara suci."
  },
  {
    id: "q_38", type: "essay", level: "L1",
    question: "Sebutkan 3 nama Suku Besar yang mendiami Pulau Jawa!",
    explanation_wrong: "📌 Tips Belajar: Ingat keberagaman penduduk asli pulau Jawa. \nPulau Jawa adalah yang terpadat. Di bagian barat ada suku berbahasa halus, di ibu kota ada suku asli pembuat kerak telor, dan di wilayah tengah/timur ada suku Jawa. Sebutkan nama 3 etnis tersebut.",
    explanation_correct: "Jawaban Benar: Suku Jawa, Suku Sunda, Suku Betawi (atau Suku Baduy, Suku Madura, Suku Tengger).\nPenjelasan: Tiga suku bangsa dengan populasi mayoritas di Pulau Jawa adalah: Suku Sunda mendiami wilayah Jawa Barat & Banten, Suku Betawi berpusat di Jakarta, dan Suku Jawa mendominasi wilayah Jawa Tengah hingga Timur."
  },
  {
    id: "q_28", type: "pg", level: "L3",
    question: "Rumah adat yang atapnya melengkung menyerupai tanduk kerbau (Rumah Gadang) berasal dari provinsi...",
    options: ["Jawa Tengah", "Sumatera Barat", "Papua", "Kalimantan Timur"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Bayangkan bentuk Rumah Gadang. \nRumah Joglo milik Jawa Tengah, Honai milik Papua. Rumah Gadang (rumah besar) milik etnis Minangkabau yang letaknya di pulau Sumatera bagian mana?",
    explanation_correct: "Pilihan: A. Jawa Tengah, B. Sumatera Barat, C. Papua, D. Kaltim.\n\nJawaban Benar: B. Sumatera Barat.\nPenjelasan: Rumah Gadang adalah rumah tradisional suku Minangkabau dari Sumatera Barat. Atapnya yang lancip (bergonjong) melambangkan kemenangan tanduk kerbau dalam legenda Minang."
  },
  {
    id: "q_29", type: "pg", level: "L2",
    question: "Tarian daerah yang gerakannya sangat cepat menepuk-nepuk dada dan paha, sering dilakukan berkelompok pria sambil duduk bersimpuh, adalah Tari Saman dari provinsi...",
    options: ["Aceh", "Jawa Timur", "Sulawesi Selatan", "Sumatera Utara"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Ingat tarian Seribu Tangan. \nTarian ini tidak diiringi alat musik luar, murni dari tepukan badan dan nyanyian mulut, berasal dari provinsi paling ujung barat Sumatera (Serambi Mekkah).",
    explanation_correct: "Pilihan: A. Aceh, B. Jawa Timur, C. Sulsel, D. Sumut.\n\nJawaban Benar: A. Aceh (Nanggroe Aceh Darussalam).\nPenjelasan: Tari Saman (Suku Gayo, Aceh) diakui dunia oleh UNESCO karena gerakan ritmis harmonis menepuk paha dan dada dengan tempo yang sangat cepat."
  },
  {
    id: "q_39", type: "essay", level: "L1",
    question: "Tuliskan 1 contoh Lagu Daerah beserta nama Provinsi asalnya! (Contoh: Kicir-kicir dari DKI Jakarta)",
    explanation_wrong: "📌 Tips Belajar: Nyanyikan lagu daerah favoritmu (BAB 5). \nPikirkan lagu seperti Ampar-Ampar Pisang, Yamko Rambe Yamko, Apuse, atau Gundul-Gundul Pacul. Sebutkan satu lagu bebas beserta nama daerahnya.",
    explanation_correct: "Jawaban Benar: Ampar-Ampar Pisang (Kalimantan Selatan), Apuse (Papua), Tokecang (Jawa Barat), Gundul Pacul (Jawa Tengah), dll.\nPenjelasan: Siswa akan dibenarkan selama pasangan lagu dan daerah provinsinya tepat secara budaya lokal geografis."
  },
  // EKONOMI
  {
    id: "q_30", type: "pg", level: "L3",
    question: "Masyarakat yang tinggal di dataran tinggi pegunungan berhawa dingin sebagian besar bermata pencaharian sebagai...",
    options: ["Nelayan mencari ikan", "Petani Tambak Udang", "Pekerja Perkebunan Teh dan Sayur", "Penambang Pasir Pantai"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Hubungkan Geografi (Pegunungan) dengan Ekonomi Alam. \nPegunungan memiliki tanah menanjak dan suhu dingin berkabut. Tidak mungkin ada laut atau pantai di sana. Aktivitas produksi apa yang paling subur ditanam di hawa dingin Puncak?",
    explanation_correct: "Pilihan: A. Nelayan, B. Tambak, C. Kebun Teh/Sayur, D. Pasir Pantai.\n\nJawaban Benar: C. Pekerja Perkebunan Teh dan Sayur (Hortikultura).\nPenjelasan: Dataran tinggi (pegunungan) memiliki tanah subur dan suhu sejuk, sangat optimal untuk teh, kopi, strawberi, tomat, kubis, dan pariwisata. Nelayan dan penambang pasir adalah kegiatan di pesisir dataran rendah."
  },
  {
    id: "q_40", type: "essay", level: "L2",
    question: "Selain memproduksi barang mentah, ada kegiatan ekonomi yang sifatnya 'Jasa' (memberikan layanan kepada orang lain). Sebutkan 2 contoh pekerjaan di bidang jasa!",
    explanation_wrong: "📌 Tips Belajar: Bedakan Jasa dan Barang. \nJasa artinya mereka tidak menghasilkan benda nyata (seperti petani/pengrajin), melainkan memberikan ilmu, tenaga, atau keterampilan untuk membantumu. Pekerjaan apa di sekolah dan di rumah sakit yang melayanimu?",
    explanation_correct: "Jawaban Benar: Guru, Dokter, Sopir, Tukang Cukur Rambut, Perawat, Tukang Pijat, dll.\nPenjelasan: Kegiatan ekonomi Jasa (Services) tidak berfokus menjual barang benda mati, tetapi memperjualbelikan pelayanan, keahlian, atau tenaga. Guru memberikan jasa pendidikan, dokter memberikan jasa penyembuhan."
  }
];

async function insertIpas() {
  try {
    const subjRef = doc(db, 'artifacts/portal-ujian-sekolah-dbe8e/public/data/subjects/subject_ipas_2026');
    await setDoc(subjRef, {
      title: "Ilmu Pengetahuan Alam dan Sosial (IPAS)",
      description: "Kisi-kisi PSKA IPAS (Kelas 5 & 6). Mencakup Organ Tubuh, Ekosistem, Bumi Antariksa, Sejarah, hingga Geografi Indonesia.",
      summary: htmlSummary,
      questions: questions,
      isLocked: false // Initially open
    });
    console.log("SUCCESS: IPAS Subject injected successfully!");
    process.exit(0);
  } catch (error) {
    console.error("ERROR injecting IPAS:", error);
    process.exit(1);
  }
}

insertIpas();
