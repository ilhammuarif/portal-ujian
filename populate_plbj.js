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
  <p style="font-size: 1.2rem; color: #c026d3; font-weight: bold; text-align: center; margin-bottom: 2rem;">
    Halo, Abang dan None! 👋<br/>Mari kita pelajari kebudayaan dan seluk-beluk kota Jakarta yang indah ini!
  </p>

  <!-- BAB 1: Seni Budaya Betawi -->
  <div style="background: #fdf4ff; border-left: 6px solid #d946ef; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #a21caf; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #f5d0fe; padding-bottom: 1rem;">🎭 BAB 1: Seni & Budaya Betawi Asli</h3>
    <p>Budaya Betawi sangat kaya. Ayo kita ingat-ingat kembali:</p>
    <ul>
      <li><b>Tari Sirih Kuning:</b> Berasal dari pengembangan Tari Cokek. Maknanya melambangkan keindahan dan keceriaan muda-mudi.</li>
      <li><b>Ondel-ondel:</b> Boneka raksasa ikon Jakarta. Penari laki-laki memakai topeng merah muda/merah tua melambangkan keberanian, sedangkan penari perempuan memakai topeng putih melambangkan kesucian.</li>
      <li><b>Musik Gambang Kromong:</b> Alat musik perpaduan pribumi dan Tionghoa (Tehyan, Kongahyan). Lagu wajibnya antara lain Sirih Kuning dan Jali-jali.</li>
      <li><b>Palang Pintu:</b> Tradisi bela diri berbalas pantun saat pengantin pria datang. Makna tahap 'Adu Silat' adalah untuk menguji keberanian dan kemampuan melindungi keluarga.</li>
      <li><b>Maen Pukul Betawi:</b> Seni bela diri asli Betawi. Salah satu alirannya adalah <b>Cingkrik Goning</b> yang sangat terkenal kelincahannya.</li>
      <li><b>Batik Betawi:</b> Motif batik Betawi umumnya bercorak cerah. Contoh motif: Pucuk Rebung, Nusa Kalapa, Salakanagara.</li>
    </ul>
  </div>

  <!-- BAB 2: Kesenian Tangan & Kuliner -->
  <div style="background: #fff7ed; border-left: 6px solid #f97316; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #c2410c; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #fed7aa; padding-bottom: 1rem;">🍲 BAB 2: Cinderamata & Kuliner Betawi</h3>
    <ul>
      <li><b>Bir Pletok:</b> Minuman kesehatan Betawi (bukan alkohol sungguhan!). Terbuat dari jahe, lada, kayu secang (membuat warna merah), dan kapulaga.</li>
      <li><b>Es Selendang Mayang:</b> Minuman segar peninggalan zaman Belanda. Isiannya dari tepung sagu aren / hunkwe yang diberi pewarna makanan jambon (merah muda) dan hijau.</li>
      <li><b>Maket Rumah Kebaya:</b> Bahan untuk membuatnya bisa memakai stik es krim, lem, dan kardus. Di rumah Betawi asli, ruang tamu terbuka di depan disebut <b>Amben / Paseban</b> (sekarang disebut teras).</li>
      <li><b>Monas:</b> Monumen Nasional dipelopori Ir. Soekarno. Puncak Monas berbentuk lidah api dari emas asli seberat 50 kg!</li>
    </ul>
  </div>

  <!-- BAB 3: Sejarah Jalan & Permainan Tradisional -->
  <div style="background: #eff6ff; border-left: 6px solid #3b82f6; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #1d4ed8; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #bfdbfe; padding-bottom: 1rem;">🏘️ BAB 3: Jalan Jakarta & Permainan Anak</h3>
    <ul>
      <li>Asal-usul nama daerah di Jakarta sering berasal dari tumbuhan atau keadaan alam. Contoh: Kampung Rambutan, Kelapa Gading, Rawa Buaya.</li>
      <li><b>Tugu Tani (Patung Pahlawan):</b> Berada di Menteng, menggambarkan seorang ibu memberikan bekal kepada anak/suaminya untuk berjuang.</li>
      <li><b>Permainan Bentengan:</b> Melatih kecepatan lari dan kekompakan mempertahankan benteng (tiang).</li>
      <li><b>Permainan Tok Kadal Lobang:</b> Membutuhkan alat utama berupa stik (tongkat pemukul dari bambu) dan lubang di tanah.</li>
      <li><b>Galasin (Gobak Sodor) & Keripik Jengkol:</b> Melatih keseimbangan dan kerjasama tim.</li>
    </ul>
  </div>

  <!-- BAB 4: Fasilitas, Transportasi, & RSUD -->
  <div style="background: #ecfdf5; border-left: 6px solid #10b981; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #047857; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #a7f3d0; padding-bottom: 1rem;">🚆 BAB 4: Transportasi & Layanan Jakarta</h3>
    <ul>
      <li>Fasilitas penunjang darat: Halte (untuk bus), Stasiun (untuk kereta), Terminal (untuk bus antar kota). Fasilitas udara: Bandara. Fasilitas Laut: Pelabuhan (Tanjung Priok).</li>
      <li>Aturan di Jalan Tol: Dilarang berhenti sembarangan, dilarang menaikkan penumpang, kecepatan minimal 60km/jam.</li>
      <li><b>MRT (Moda Raya Terpadu) & LRT:</b> Kereta cepat kekinian yang mengatasi kemacetan Jakarta. MRT berjalan di bawah tanah dan layang.</li>
      <li><b>RSUD (Rumah Sakit Umum Daerah):</b> Tipe RSUD di Jakarta bervariasi. RSUD Tarakan adalah contoh Tipe A. Manfaat RSUD melayani masyarakat dengan biaya terjangkau atau gratis via BPJS.</li>
    </ul>
  </div>

  <!-- BAB 5: Penghijauan, Flora & Wisata -->
  <div style="background: #fef2f2; border-left: 6px solid #ef4444; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #b91c1c; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #fecaca; padding-bottom: 1rem;">🌳 BAB 5: Lingkungan & Wisata Religi</h3>
    <ul>
      <li><b>Hidroponik:</b> Sistem menanam tanpa tanah (menggunakan media air nutrisi). Sangat cocok untuk lahan sempit di Jakarta.</li>
      <li><b>Tanaman Khas Jakarta:</b> Salak Condet dan Duku Condet. Maskot Jakarta yang terkenal adalah Elang Bondol dan Salak Condet.</li>
      <li><b>Nginjek Tanah:</b> Upacara adat Betawi saat bayi mulai belajar berjalan, melambangkan harapan agar si anak kuat menapak kehidupan.</li>
      <li><b>Wisata Religi Jakarta:</b> Masjid Istiqlal (Masjid terbesar di Asia Tenggara berdampingan dengan Gereja Katedral sebagai simbol toleransi), Vihara Dharma Bhakti, Klenteng Jin De Yuan.</li>
    </ul>
  </div>
</div>
`;

const questions = [
  // A. SENI BUDAYA BETAWI
  {
    id: "q_1", type: "pg", level: "L1",
    question: "Tari Sirih Kuning merupakan tarian tradisional Betawi yang berkembang dari tari Cokek. Makna yang paling tepat dari lagu dan tari Sirih Kuning adalah...",
    options: ["Kesedihan karena ditinggal pergi pahlawan", "Keceriaan, keindahan, dan pergaulan muda-mudi Betawi", "Peperangan melawan penjajah", "Menyambut panen raya padi"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Ingat nada lagu Sirih Kuning. \nLagunya bertempo cepat, lincah, dan gembira. Penarinya tersenyum lebar dan memakai baju yang cerah. Tarian ini melambangkan perasaan apa?",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: B. Keceriaan, keindahan, dan pergaulan muda-mudi Betawi.\nPenjelasan: Tari Sirih Kuning melambangkan keceriaan, pergaulan yang akrab, serta penyambutan tamu dengan suka cita. Kata 'kuning' sendiri melambangkan keemasan/keindahan."
  },
  {
    id: "q_2", type: "pg", level: "L2",
    question: "Pada gerakan dasar Tari Sirih Kuning, posisi tubuh penari biasanya agak merendah dengan langkah-langkah kaki yang lincah. Gerakan ini memiliki kemiripan dengan tarian Betawi lainnya, yaitu...",
    options: ["Tari Saman", "Tari Cokek", "Tari Kecak", "Tari Piring"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Ingat asal usul tarian ini di BAB 1. \nTari Sirih Kuning adalah bentuk perkembangan (modifikasi) dari sebuah tarian klasik Betawi yang sering dibawakan bersama orkes gambang kromong.",
    explanation_correct: "Pilihan: A. Saman, B. Cokek, C. Kecak, D. Piring.\n\nJawaban Benar: B. Tari Cokek.\nPenjelasan: Tari Sirih Kuning dikembangkan dari Tari Cokek. Gerakannya berakar pada gaya lenggang dan ayunan tangan tari Cokek yang diiringi musik Gambang Kromong."
  },
  {
    id: "q_13", type: "pg", level: "L2",
    question: "Sepasang boneka Ondel-ondel memiliki perbedaan warna pada topengnya. Topeng Ondel-ondel laki-laki dan perempuan secara berurutan berwarna...",
    options: ["Merah dan Putih", "Putih dan Hitam", "Kuning dan Merah", "Hijau dan Putih"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Bayangkan bentuk patung ondel-ondel. \nOndel-ondel laki-laki berwajah seram dan berwarna terang lambang keberanian (seperti darah), sedangkan yang perempuan berwajah lembut lambang kesucian.",
    explanation_correct: "Pilihan: A. Merah dan Putih, B. Putih dan Hitam, C. Kuning dan Merah, D. Hijau dan Putih.\n\nJawaban Benar: A. Merah dan Putih.\nPenjelasan: Ondel-ondel laki-laki bertopeng warna merah (menyimbolkan keberanian), sedangkan ondel-ondel perempuan bertopeng putih (menyimbolkan kesucian/kebaikan)."
  },
  {
    id: "q_35", type: "essay", level: "L2",
    question: "Lagu Ondel-ondel sangat populer. Coba urutkan dua baris lirik awal dari lagu Ondel-ondel yang benar!",
    explanation_wrong: "📌 Tips Belajar: Nyanyikan lirik ciptaan Bang Benyamin S. \n'Nyok kita nonton ondel-ondel... Nyok kita ngarak ondel-ondel...' Coba tulis lirik singkat tersebut.",
    explanation_correct: "Jawaban Benar: Nyok kita nonton ondel-ondel, Nyok kita ngarak ondel-ondel (atau versi lengkapnya).\nPenjelasan: Bait pembuka lagu Ondel-ondel ciptaan Djoko Subagyo (dipopulerkan Benyamin S) selalu dimulai dengan ajakan 'Nyok kita nonton ondel-ondel, nyok kita ngarak ondel-ondel...'"
  },
  {
    id: "q_3", type: "pg", level: "L3",
    question: "Monumen Nasional (Monas) memiliki tiga bagian utama: pelataran bawah (cawan), batang tugu, dan puncak tugu. Bagian puncak Monas berbentuk...",
    options: ["Bunga teratai emas", "Lidah api dari emas", "Burung garuda", "Bintang bersudut lima"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Buka BAB 2 tentang Cinderamata. \nPuncak monas dirancang oleh arsitek untuk melambangkan semangat perjuangan rakyat Indonesia yang terus menyala-nyala dan tidak pernah padam.",
    explanation_correct: "Pilihan: A. Teratai, B. Lidah api, C. Garuda, D. Bintang.\n\nJawaban Benar: B. Lidah api dari emas.\nPenjelasan: Bagian paling atas dari tugu Monas berbentuk lidah api (kemerdekaan) yang terbuat dari perunggu dan dilapisi emas seberat 50 kilogram, melambangkan semangat juang yang berkobar."
  },
  {
    id: "q_14", type: "pg", level: "L1",
    question: "Bahan utama yang paling mudah dan murah digunakan untuk membuat miniatur/maket dinding Rumah Kebaya (Rumah Betawi) dalam tugas sekolah adalah...",
    options: ["Stik es krim dan lem", "Kaca dan semen", "Tanah liat dan air", "Besi dan kawat"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Ingat tugas prakarya di sekolah (BAB 2). \nBahan prakarya untuk anak SD harus aman, ringan, dan murah. Bahan apakah yang menyerupai bentuk papan kayu dinding rumah?",
    explanation_correct: "Pilihan: A. Stik es krim, B. Kaca, C. Tanah liat, D. Besi.\n\nJawaban Benar: A. Stik es krim dan lem.\nPenjelasan: Dalam praktik sekolah, stik es krim adalah bahan paling ideal, mudah disusun, dan kuat jika dilem untuk membentuk replika dinding dan atap rumah adat."
  },
  {
    id: "q_15", type: "pg", level: "L3",
    question: "Rumah Kebaya Betawi memiliki bagian teras luas di bagian depan yang disebut 'Paseban' atau 'Amben'. Pada rumah modern masa kini, fungsi Paseban tersebut sama dengan...",
    options: ["Kamar tidur", "Ruang dapur", "Ruang tamu atau teras depan", "Garasi mobil"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Pahami fungsi tata ruang rumah adat. \nPaseban adalah area di bagian paling depan rumah tanpa dinding tertutup, tempat tuan rumah mengobrol santai dengan tetangga yang lewat atau bersila. Cocok dengan ruangan apa sekarang?",
    explanation_correct: "Pilihan: A. Kamar, B. Dapur, C. Ruang tamu/teras, D. Garasi.\n\nJawaban Benar: C. Ruang tamu atau teras depan.\nPenjelasan: Orang Betawi sangat terbuka dan ramah. Mereka memiliki teras depan (Paseban / Amben) yang luas tanpa sekat kaku untuk menyambut tamu dan mengobrol dengan tetangga."
  },
  {
    id: "q_4", type: "pg", level: "L2",
    question: "Orkes Gambang Kromong sering mengiringi lagu-lagu tradisional Betawi. Salah satu judul lagu Betawi yang TIDAK dimainkan dengan Gambang Kromong adalah...",
    options: ["Sirih Kuning", "Jali-jali", "Kicir-kicir", "Ampar-ampar Pisang"],
    correctAnswer: 3,
    explanation_wrong: "📌 Tips Belajar: Kenali lagu asli daerah Jakarta. \nCari mana lagu yang BUKAN berasal dari daerah DKI Jakarta/Betawi, melainkan dari pulau Kalimantan.",
    explanation_correct: "Pilihan: A. Sirih Kuning, B. Jali-jali, C. Kicir-kicir, D. Ampar-ampar Pisang.\n\nJawaban Benar: D. Ampar-ampar Pisang.\nPenjelasan: Sirih Kuning, Jali-jali, dan Kicir-kicir adalah lagu daerah Betawi (Jakarta). Sedangkan Ampar-ampar Pisang adalah lagu daerah dari Kalimantan Selatan."
  },
  {
    id: "q_16", type: "pg", level: "L2",
    question: "Dalam tradisi Palang Pintu saat pernikahan adat Betawi, terdapat tahap 'Adu Silat' antara jagoan pihak mempelai pria dan pihak wanita. Makna dari adu silat ini adalah...",
    options: ["Untuk menyakiti keluarga mempelai wanita", "Menguji kemampuan dan keberanian pria dalam melindungi istrinya nanti", "Sekadar hiburan agar acara ramai", "Sebagai syarat untuk meminjam uang"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Analisis filosofi perlindungan keluarga (BAB 1). \nCalon suami harus membuktikan bahwa dirinya pantas dan kuat untuk menjadi kepala keluarga dan menjaga calon istrinya.",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: B. Menguji kemampuan dan keberanian pria dalam melindungi istrinya.\nPenjelasan: Adu silat dalam Palang Pintu memiliki makna filosofis bahwa seorang suami harus kuat, berani, dan tangkas melindungi istri dan keluarganya dari bahaya."
  },
  {
    id: "q_36", type: "essay", level: "L3",
    question: "Buatlah 1 bait pantun jenaka yang cocok dibacakan pada prosesi Palang Pintu Betawi!",
    explanation_wrong: "📌 Tips Belajar: Ingat rumus pantun (a-b-a-b). \nDua baris pertama adalah sampiran (jalan-jalan ke pasar...), dua baris terakhir adalah isi (tujuan mempelai pria datang). Buatlah khas logat Betawi.",
    explanation_correct: "Jawaban Benar: (Bebas, contoh: Jalan-jalan ke Pasar Baru, Jangan lupa beli pepaya / Abang datang ke mari nuju, Niat hati melamar Si Neng jelita).\nPenjelasan: Penilaian didasarkan pada ketepatan rima pantun (a-b-a-b atau a-a-a-a) dan isinya berkaitan dengan prosesi kedatangan rombongan atau lamaran."
  },
  {
    id: "q_5", type: "pg", level: "L3",
    question: "Minuman Bir Pletok khas Betawi sangat menyehatkan dan tidak memabukkan. Bahan dasar yang memberikan warna merah khas pada Bir Pletok adalah...",
    options: ["Kayu Manis", "Kayu Secang", "Pewarna makanan buatan", "Daun Pandan"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Buka resep Bir Pletok (BAB 2). \nBir pletok direbus dengan berbagai rempah-rempah alami. Salah satu kulit batang pohon rempah ini jika direbus airnya akan memerah. Daun pandan membuat hijau, lalu kayu apa yang membuat merah?",
    explanation_correct: "Pilihan: A. Kayu Manis, B. Kayu Secang, C. Pewarna buatan, D. Daun Pandan.\n\nJawaban Benar: B. Kayu Secang.\nPenjelasan: Kayu secang (Caesalpinia sappan) adalah rahasia pewarna alami tradisional Nusantara yang menghasilkan warna merah menyala pada minuman Bir Pletok tanpa bahan kimia buatan."
  },
  {
    id: "q_17", type: "pg", level: "L2",
    question: "Es Selendang Mayang merupakan kuliner khas Betawi. Mengapa minuman ini diberi nama 'Selendang Mayang'?",
    options: ["Karena warnanya cantik merah, putih, dan hijau melambai seperti selendang", "Karena dijual oleh orang bernama Mayang", "Karena harus diminum sambil menari memakai selendang", "Karena harganya semahal selendang kain"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Bayangkan bentuk Es Selendang Mayang (BAB 2). \nIsian kue sagunya berlapis tiga warna (merah muda, putih, hijau) yang panjang dan cantik. Dilihat dari penampilannya, mirip dengan alat menari apa?",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: A. Karena warnanya cantik seperti selendang.\nPenjelasan: Dinamakan Selendang Mayang karena kue di dalamnya berlapis tiga warna (pink, putih, hijau) yang tipis dan kenyal, menyerupai selendang penari yang cantik (Mayang = cantik/indah)."
  },
  {
    id: "q_37", type: "essay", level: "L2",
    question: "Jelaskan secara singkat 2 bahan utama untuk membuat kuah (air) pada minuman Es Selendang Mayang!",
    explanation_wrong: "📌 Tips Belajar: Ingat rasa minuman manis tradisional nusantara (BAB 2). \nKue selendang mayangnya disiram oleh cairan putih gurih dan cairan cokelat manis. Apa nama kedua bahan cairan tradisional tersebut?",
    explanation_correct: "Jawaban Benar: Santan kelapa dan Gula merah (atau Gula aren / Sirup gula).\nPenjelasan: Kuah es selendang mayang yang khas adalah perpaduan rasa gurih dari rebusan santan kelapa (ditambah daun pandan) dan manis pekat dari sirup gula merah/gula aren asli."
  },
  {
    id: "q_6", type: "pg", level: "L1",
    question: "Tugu peringatan pembebasan Irian Barat yang memperlihatkan patung seseorang melepaskan rantai besi pada kaki dan tangannya berada di kawasan...",
    options: ["Tugu Monas", "Tugu Proklamasi", "Tugu Tani", "Tugu Pembebasan Irian Barat (Lapangan Banteng)"],
    correctAnswer: 3,
    explanation_wrong: "📌 Tips Belajar: Perhatikan nama dan letak patung (BAB 3). \nPatung ini berbentuk orang berteriak memutus belenggu rantai. Patung ini berdiri gagah di area Lapangan Banteng, Jakarta Pusat.",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: D. Tugu Pembebasan Irian Barat di Lapangan Banteng.\nPenjelasan: Patung Pembebasan Irian Barat (karya Edhi Sunarso) menggambarkan sosok pemuda yang berhasil memutuskan rantai penjajahan Belanda. Lokasinya di tengah Lapangan Banteng, Jakarta Pusat."
  },
  {
    id: "q_38", type: "essay", level: "L1",
    question: "Sebutkan 3 nama jalan atau daerah di Jakarta yang asal-usul namanya berawalan dari nama tumbuhan/pohon!",
    explanation_wrong: "📌 Tips Belajar: Cari daerah yang sering kamu dengar (BAB 3). \nBanyak kampung di Jakarta dulu adalah rawa atau kebun. Contohnya: tempat buah 'Rambutan', tempat buah jeruk 'Jeruk', dan pohon kelapa 'Kelapa'.",
    explanation_correct: "Jawaban Benar: Kampung Rambutan, Kelapa Gading, Kebon Jeruk, Menteng, Kemang, Gambir, dll.\nPenjelasan: Dahulu kawasan Jakarta didominasi oleh hutan atau perkebunan. Menteng berasal dari nama buah Menteng, Kemang dari buah Kemang, dan Bintaro dari pohon Bintaro."
  },
  {
    id: "q_18", type: "pg", level: "L3",
    question: "Kawasan di Jakarta Utara yang dulunya merupakan daerah rawa-rawa pohon nipah, namun kini dikenal sebagai kawasan bisnis perumahan elit dan pusat perbelanjaan besar adalah...",
    options: ["Kemayoran", "Kelapa Gading", "Ragunan", "Blok M"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Fokus ke wilayah 'Jakarta Utara' dan Perumahan Elit. \nDaerah ini memiliki mall bernama MKG (Mal ...). Namanya berasal dari dua suku kata: Nama buah dan warna gading.",
    explanation_correct: "Pilihan: A. Kemayoran, B. Kelapa Gading, C. Ragunan, D. Blok M.\n\nJawaban Benar: B. Kelapa Gading.\nPenjelasan: Kelapa Gading (Jakarta Utara) dulunya adalah rawa peninggalan kebun kelapa sawit/nipah, yang kini telah disulap menjadi kawasan kota mandiri (perumahan elit dan pusat mal)."
  },
  {
    id: "q_7", type: "pg", level: "L1",
    question: "Permainan anak asli Betawi yang terdiri dari 2 kelompok yang saling menyerang dan berusaha merebut menyentuh tiang (markas) lawan disebut...",
    options: ["Bentengan", "Galasin", "Keripik Jengkol", "Congklak"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Cermati kata kuncinya. \nMereka harus menjaga sebuah tiang/pohon yang diibaratkan sebagai 'Benteng' agar tidak disentuh lawan. Nama permainannya berasal dari kata tersebut.",
    explanation_correct: "Pilihan: A. Bentengan, B. Galasin, C. Keripik Jengkol, D. Congklak.\n\nJawaban Benar: A. Bentengan.\nPenjelasan: Permainan Bentengan dimainkan dua tim. Tujuannya adalah menyentuh tiang/pilar markas musuh (disebut benteng) tanpa tertangkap untuk memenangkan permainan."
  },
  {
    id: "q_8", type: "pg", level: "L1",
    question: "Alat utama yang sangat dibutuhkan dalam permainan tradisional Tok Kadal Lobang adalah...",
    options: ["Batu kerikil dan tali", "Stik pemukul (bambu panjang) dan bambu pendek (anak tok)", "Karet gelang dan bola kasti", "Karung dan kelereng"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Ingat cara main Tok Kadal Lobang (BAB 3). \nPermainan ini mirip kasti atau bisbol tradisional. Kamu butuh lubang di tanah, satu alat untuk dilempar dari lubang, dan satu alat panjang untuk memukul sejauh mungkin.",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: B. Stik pemukul dari bambu dan bambu pendek.\nPenjelasan: Tok Kadal (atau Patil Lele) dimainkan dengan 2 bilah kayu/bambu: satu kayu pendek ('kadal'/'anak tok') dan satu kayu panjang untuk mengungkit dan memukul bambu pendek dari atas lubang tanah."
  },
  {
    id: "q_19", type: "pg", level: "L1",
    question: "Permainan tradisional Betawi yang dimainkan secara berkelompok di mana penjaga berdiri di garis melintang dan membujur untuk menghalangi lawan agar tidak lewat adalah...",
    options: ["Galasin (Gobak Sodor)", "Petak Umpet", "Kelereng", "Keripik Jengkol"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Ciri permainan dengan garis kotak-kotak tanah. \nPermainan ini butuh lapangan bergaris berbentuk kotak (biasanya 3x2 kotak). Tim penjaga tidak boleh keluar garis saat menangkap musuh yang mau lewat.",
    explanation_correct: "Pilihan: A. Galasin, B. Petak umpet, C. Kelereng, D. Keripik jengkol.\n\nJawaban Benar: A. Galasin (Gobak Sodor).\nPenjelasan: Di Betawi, Gobak Sodor dikenal dengan nama Galasin atau Margal. Tim penjaga harus mondar-mandir di garis batas (horizontal dan vertikal) untuk mencegah tim penyerang menyeberang."
  },
  {
    id: "q_20", type: "pg", level: "L3",
    question: "Manfaat utama dari sering melakukan permainan tradisional berkelompok (seperti Galasin atau Bentengan) bagi anak-anak adalah...",
    options: ["Menjadi cepat kaya", "Melatih kerja sama tim kekompakan dan kelincahan fisik", "Bisa begadang setiap malam", "Mendapatkan nilai rapor tinggi tanpa belajar"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Pikirkan manfaat positif secara fisik dan mental. \nPermainan ini mengharuskan kita berdiskusi dengan teman dan banyak berlari memeras keringat.",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: B. Melatih kerja sama tim dan kelincahan fisik.\nPenjelasan: Permainan tradisional menuntut koordinasi antar anggota tim (kerjasama/sosialisasi), melatih strategi, dan aktivitas fisik luar ruang yang membuat tubuh sehat dan lincah."
  },
  {
    id: "q_9", type: "pg", level: "L2",
    question: "Seni bela diri Maen Pukul Betawi memiliki banyak aliran dan jurus. Aliran Maen Pukul yang konon diciptakan oleh Ki Maing berdasarkan gerakan lincah seekor kera/monyet adalah aliran...",
    options: ["Beksi", "Cingkrik", "Sabeni", "Tiga Berantai"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Cari aliran di BAB 1. \nGerakan aliran ini terinspirasi dari kera/monyet (Jingkrak-jingkrik). Aliran ini berasal dari daerah Rawa Belong, Jakarta Barat.",
    explanation_correct: "Pilihan: A. Beksi, B. Cingkrik, C. Sabeni, D. Tiga Berantai.\n\nJawaban Benar: B. Cingkrik.\nPenjelasan: Aliran Cingkrik (termasuk Cingkrik Goning) sangat khas dengan gerakan kaki yang lincah melompat dan menghindar, terinspirasi dari gerakan lincah kera."
  },
  {
    id: "q_21", type: "pg", level: "L2",
    question: "Tujuan utama pemuda Betawi di masa lalu mempelajari seni bela diri Maen Pukul adalah untuk...",
    options: ["Memeras pedagang pasar", "Melindungi diri dan mempertahankan kebenaran (agama)", "Mengikuti perlombaan di luar negeri", "Membuat onar di kampung"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Pahami moral budaya pahlawan lokal (seperti Si Pitung). \nPesilat Betawi pantang mencari musuh. Mereka belajar mengaji dan silat hanya untuk satu tujuan mulia.",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: B. Melindungi diri dan mempertahankan kebenaran.\nPenjelasan: Filosofi Maen Pukul Betawi sangat erat dengan ajaran agama. Silat dipelajari bukan untuk kesombongan atau menindas, melainkan alat membela diri, melindungi orang lemah, dan menjaga kampung."
  },
  {
    id: "q_22", type: "pg", level: "L2",
    question: "Jurus-jurus dalam Maen Pukul Betawi umumnya berfokus pada teknik...",
    options: ["Pukulan tangan jarak dekat dan bantingan", "Tendangan memutar di udara", "Melempar senjata tajam", "Gulat di lantai"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Analisis nama bela dirinya (Maen 'Pukul'). \nDari namanya saja sudah jelas bagian tubuh mana yang paling dominan digunakan dalam jarak dekat.",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: A. Pukulan tangan jarak dekat dan bantingan.\nPenjelasan: Sebagian besar aliran Silat Betawi (Maen Pukul) sangat mengandalkan pukulan beruntun yang cepat dari jarak dekat, serta teknik tangkapan/kuncian untuk menjatuhkan lawan."
  },
  {
    id: "q_34", type: "essay", level: "L2",
    question: "Batik Betawi memiliki ciri khas tersendiri dibanding Batik Jawa. Uraikan 2 ciri khas motif atau warna Batik Betawi!",
    explanation_wrong: "📌 Tips Belajar: Bandingkan dengan batik keraton (BAB 1). \nBatik keraton (Jogja) biasanya berwarna coklat tua/gelap. Batik Betawi dipengaruhi budaya pesisir (Tiongkok/Arab). Apa warna dan gambarnya?",
    explanation_correct: "Jawaban Benar: 1) Warnanya sangat cerah mencolok (merah, hijau, kuning terang). 2) Motifnya berupa ikon kota Jakarta (Ondel-ondel, Monas, Nusa Kalapa, Pucuk Rebung).\nPenjelasan: Ciri utama batik pesisir Betawi adalah penggunaan palet warna yang semarak/terang ceria, serta gambar flora/fauna/landmark ikonik dari tanah Jakarta."
  },
  {
    id: "q_23", type: "pg", level: "L1",
    question: "Motif batik Betawi yang berbentuk deretan segitiga runcing saling berjejer (biasanya diletakkan di pinggiran bawah kain) disebut motif...",
    options: ["Nusa Kalapa", "Ondel-ondel", "Pucuk Rebung", "Gigi Balang"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Ingat bentuk tunas bambu. \nTunas bambu (rebung) bentuknya mengerucut ke atas seperti segitiga. Motif ini melambangkan harapan agar pemakainya terus bertumbuh baik.",
    explanation_correct: "Pilihan: A. Nusa Kalapa, B. Ondel-ondel, C. Pucuk Rebung, D. Gigi Balang.\n\nJawaban Benar: C. Pucuk Rebung.\nPenjelasan: Motif Pucuk Rebung (tunas bambu) berbentuk segitiga-segitiga tajam berjajar. Ini sering dipakai sebagai hiasan pinggir kain sarung atau bawahan batik."
  },
  {
    id: "q_24", type: "pg", level: "L2",
    question: "Salah satu motif batik Betawi menggambarkan kejayaan Jakarta di masa lampau sebagai pelabuhan kelapa yang besar. Nama motif tersebut adalah...",
    options: ["Motif Loreng Ondel", "Motif Nusa Kalapa", "Motif Salakanagara", "Motif Rasamala"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Cari sinonim kata 'Kelapa' dan 'Pulau'. \nPelabuhan lama Jakarta bernama Sunda Kelapa. Nama motif batik ini mengambil unsur kata pulau (Nusa) dan Kelapa (Kalapa).",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: B. Motif Nusa Kalapa.\nPenjelasan: Motif Nusa Kalapa (Pulau Kelapa) mengambil inspirasi dari masa kejayaan bandar Sunda Kelapa. Motifnya banyak didominasi gambar pohon kelapa/nyiur."
  },
  // B. SAINS & TEKNOLOGI
  {
    id: "q_10", type: "pg", level: "L3",
    question: "Budi ingin naik kereta api jarak jauh menuju Surabaya, sedangkan Andi ingin naik kapal laut menuju Makassar. Fasilitas transportasi umum yang harus mereka datangi secara berurutan adalah...",
    options: ["Terminal dan Bandara", "Stasiun dan Pelabuhan", "Pelabuhan dan Stasiun", "Bandara dan Halte"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Hubungkan jenis kendaraan dengan pangkalan/fasilitasnya (BAB 4). \nKereta api berhenti di bangunan yang penuh rel baja. Kapal laut berlabuh di tepi laut (dermaga). Apa nama tempatnya?",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: B. Stasiun dan Pelabuhan.\nPenjelasan: \n- Budi (Kereta Api) harus pergi ke Stasiun (Gambir / Senen).\n- Andi (Kapal Laut) harus pergi ke Pelabuhan (Tanjung Priok)."
  },
  {
    id: "q_11", type: "pg", level: "L2",
    question: "Di Jakarta terdapat layanan bus umum terintegrasi yang memiliki jalur khusus (busway). Nama transportasi kebanggaan Jakarta ini adalah...",
    options: ["Kopaja", "Metromini", "TransJakarta", "Angkot JakLingko"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Ingat bus besar berwarna merah/biru. \nBus ini berjalan di jalur khusus yang dibatasi separator (Busway). Namanya diawali dengan 'Trans-'.",
    explanation_correct: "Pilihan: A. Kopaja, B. Metromini, C. TransJakarta, D. Angkot.\n\nJawaban Benar: C. TransJakarta.\nPenjelasan: TransJakarta (sering disebut Busway) adalah sistem transportasi Bus Rapid Transit (BRT) pertama dan terpanjang di Asia Tenggara, memiliki jalur khusus steril."
  },
  {
    id: "q_31", type: "essay", level: "L3",
    question: "Sebutkan 3 aturan atau larangan mutlak saat berkendara di Jalan Tol (Jalan Bebas Hambatan)!",
    explanation_wrong: "📌 Tips Belajar: Ingat fungsi jalan Tol di BAB 4. \nJalan tol dibuat agar mobil bisa melaju kencang tanpa terhalang. Apa bahayanya jika kamu berhenti mendadak atau memutar balik di tol?",
    explanation_correct: "Jawaban Benar: 1) Dilarang berhenti di bahu jalan tanpa alasan darurat. 2) Dilarang menaik-turunkan penumpang. 3) Dilarang memutar balik (U-Turn). 4) Dilarang masuk bagi motor/sepeda.\nPenjelasan: Tol adalah jalan bebas hambatan dengan kecepatan tinggi. Aturan utamanya adalah menjaga kelancaran dan keselamatan (tidak boleh ada aktivitas stop-go)."
  },
  {
    id: "q_25", type: "pg", level: "L2",
    question: "MRT (Moda Raya Terpadu) Jakarta tahap 1 membentang membelah jalan Sudirman-Thamrin. Rute kereta cepat MRT tahap 1 ini menghubungkan stasiun...",
    options: ["Bekasi ke Jakarta Kota", "Lebak Bulus ke Bundaran HI", "Bogor ke Manggarai", "Cibubur ke Dukuh Atas"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Ingat rute ikonik MRT (BAB 4). \nMRT tahap pertama dimulai dari stasiun depo di Jakarta Selatan dan berakhir persis di bawah monumen patung Selamat Datang di Jakarta Pusat.",
    explanation_correct: "Pilihan: A. Bekasi-Kota, B. Lebak Bulus-HI, C. Bogor-Manggarai, D. Cibubur-Dukuh Atas.\n\nJawaban Benar: B. Lebak Bulus ke Bundaran HI.\nPenjelasan: Rute MRT Fase 1 (koridor Selatan-Utara) beroperasi sejauh 15,7 km melintasi 13 stasiun, dimulai dari Stasiun layang Lebak Bulus hingga stasiun bawah tanah Bundaran HI."
  },
  {
    id: "q_39", type: "essay", level: "L2",
    question: "Jelaskan 2 manfaat besar bagi warga Jakarta dari dibangunnya transportasi massal seperti MRT dan LRT!",
    explanation_wrong: "📌 Tips Belajar: Hubungkan dengan masalah utama kota Jakarta (Macet & Polusi). \nJika jutaan warga yang tadinya membawa mobil beralih naik MRT, apa yang terjadi pada kondisi jalanan dan udara Jakarta?",
    explanation_correct: "Jawaban Benar: 1) Mengurangi kemacetan parah di jalan raya. 2) Mengurangi polusi udara (karena MRT menggunakan listrik). 3) Mempercepat waktu tempuh warga berangkat bekerja.\nPenjelasan: Manfaat utama transportasi massal berbasis rel (MRT/LRT/KRL) adalah efisiensi waktu (bebas macet lalu lintas darat) dan menekan emisi gas buang kendaraan pribadi."
  },
  // C. LINGKUNGAN HIDUP & KESEHATAN
  {
    id: "q_32", type: "essay", level: "L2",
    question: "Banyak warga Jakarta menanam sayuran menggunakan pipa pralon air tanpa menggunakan tanah sama sekali. Sistem penanaman modern ini disebut apa? Sebutkan 1 keuntungannya!",
    explanation_wrong: "📌 Tips Belajar: Ingat nama teknik bertani air (BAB 5). \nKata ini diawali dengan 'Hidro-' yang berarti air. Keuntungannya sangat cocok untuk rumah di Jakarta yang tidak punya lahan luas.",
    explanation_correct: "Jawaban Benar: Nama sistemnya adalah Hidroponik. Keuntungannya: Tidak butuh lahan tanah yang luas (bisa di teras), hemat air, dan panen lebih bersih.\nPenjelasan: Hidroponik adalah sistem cocok tanam perkotaan (urban farming) dengan mengalirkan air nutrisi. Sangat solutif untuk warga kota yang padat pemukiman."
  },
  {
    id: "q_26", type: "pg", level: "L2",
    question: "Tanaman khas Jakarta ini kulit buahnya bersisik seperti ular, warnanya cokelat, dan rasanya manis agak sepat. Tanaman ini banyak dibudidayakan di daerah Condet. Tanaman apakah ini?",
    options: ["Rambutan Rapiah", "Salak Condet", "Duku Condet", "Durian Monthong"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Identifikasi kulit sisik ular (Snake fruit). \nBuah apa yang kulit luarnya tajam dan mengelupas seperti sisik? Buah ini menjadi salah satu maskot lambang bus TransJakarta berdampingan dengan elang.",
    explanation_correct: "Pilihan: A. Rambutan, B. Salak Condet, C. Duku Condet, D. Durian.\n\nJawaban Benar: B. Salak Condet.\nPenjelasan: Buah bersisik ular (snake fruit) yang menjadi endemis asli dari tanah Ciliwung (Condet, Jakarta Timur) adalah Salak Condet. Bersama Elang Bondol, buah ini dijadikan maskot kota DKI Jakarta."
  },
  {
    id: "q_27", type: "pg", level: "L3",
    question: "Selain Salak Condet, ada tanaman buah Duku Condet yang memiliki keunggulan dibanding duku dari daerah lain. Keunggulan Duku Condet adalah...",
    options: ["Daging buahnya tipis", "Buahnya sebesar buah kelapa", "Bijinya kecil dan rasanya sangat manis", "Warnanya merah menyala"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Pikirkan kenapa buah lokal ini mahal/terkenal. \nOrang suka makan buah jika kualitasnya bagus. Kalau bijinya besar, dagingnya sedikit. Coba cari opsi kualitas unggulan buah duku.",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: C. Bijinya kecil dan rasanya sangat manis.\nPenjelasan: Duku Condet primadona karena dagingnya tebal putih bening, bijinya kecil (bahkan nyaris tidak berbiji), dan rasanya jauh lebih manis ketimbang duku dari palembang."
  },
  {
    id: "q_12", type: "pg", level: "L3",
    question: "Warga Jakarta bisa mendapatkan layanan pengobatan gratis atau bersubsidi asalkan terdaftar sebagai peserta BPJS Kesehatan, dengan berobat ke...",
    options: ["Rumah Sakit Swasta Mewah", "Klinik Kecantikan", "RSUD (Rumah Sakit Umum Daerah) atau Puskesmas", "Apotek Obat"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Cari layanan kesehatan milik pemerintah (BAB 4). \nFasilitas yang disediakan oleh negara/pemerintah daerah untuk rakyat berawalan RS... atau Pusk...",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: C. RSUD atau Puskesmas.\nPenjelasan: Pemerintah DKI Jakarta menjamin kesehatan warganya melalui Puskesmas (Tingkat pertama) dan RSUD (Rujukan) bagi pengguna fasilitas JKN KIS/BPJS."
  },
  {
    id: "q_28", type: "pg", level: "L2",
    question: "Berdasarkan kemampuan pelayanan dan kelengkapan alat medisnya, RSUD Tarakan di Jakarta Pusat diklasifikasikan sebagai Rumah Sakit Tipe...",
    options: ["Tipe A", "Tipe B", "Tipe C", "Tipe D"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Rumah sakit rujukan tertinggi di DKI. \nRumah sakit yang paling besar dan lengkap (tingkat provinsi) biasanya diberi nilai huruf abjad paling pertama.",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: A. Tipe A.\nPenjelasan: RSUD Tarakan adalah RS Kelas A Utama. Memiliki dokter spesialis dan sub-spesialis yang sangat lengkap sehingga menjadi RS rujukan tertinggi bagi warga DKI Jakarta."
  },
  {
    id: "q_40", type: "essay", level: "L1",
    question: "Sebutkan 3 nama Rumah Sakit (RSUD atau RS Nasional) yang berlokasi di wilayah DKI Jakarta!",
    explanation_wrong: "📌 Tips Belajar: Coba ingat RS di sekitar kotamu (BAB 4). \nRSUD Cengkareng, RSUD Tarakan, RSCM (Rumah Sakit Cipto Mangunkusumo), RSUP Fatmawati, dll.",
    explanation_correct: "Jawaban Benar: RSUD Cengkareng, RSUD Tarakan, RSUD Koja, RS Cipto Mangunkusumo (RSCM), RS Harapan Kita (Bebas asal di Jakarta).\nPenjelasan: Penilaian difokuskan pada ketepatan wilayah. Jawaban RS daerah dari luar provinsi Jakarta harus disalahkan."
  },
  // D. WISATA & BUDAYA
  {
    id: "q_33", type: "essay", level: "L1",
    question: "Upacara 'Nginjek Tanah' adalah tradisi daur hidup masyarakat Betawi. Tujuan diadakannya upacara adat Nginjek Tanah adalah...",
    explanation_wrong: "📌 Tips Belajar: Pahami makna 'Turun Tanah' untuk bayi (BAB 5). \nUpacara ini dilakukan pada bayi (sekitar umur 8 bulan) yang baru pertama kali kakinya belajar menapak di bumi. Apa doa orang tuanya untuk masa depan si bayi?",
    explanation_correct: "Jawaban Benar: Mensyukuri perkembangan fisik anak yang mulai bisa berjalan, serta memohon doa agar sang anak kuat menapak bumi dan mandiri mengarungi kehidupan kelak.\nPenjelasan: Tradisi nginjek tanah (Tedak Siten dalam budaya Jawa) adalah ungkapan rasa syukur orang tua kepada Tuhan saat sang bayi sudah mulai bisa menjejakkan kaki di tanah / belajar berjalan."
  },
  {
    id: "q_29", type: "pg", level: "L1",
    question: "Jakarta memiliki wisata religi yang menjadi simbol toleransi antar umat beragama, di mana Masjid Istiqlal berdiri berdampingan secara harmonis dengan gereja Katolik yaitu...",
    options: ["Gereja Immanuel", "Gereja Katedral", "Gereja Tugu", "Gereja Sion"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Ingat nama bangunan megah gaya Gotik di depan Istiqlal (BAB 5). \nGereja terbesar di Jakarta Pusat ini memiliki menara lancip-lancip tinggi yang berseberangan persis dengan Masjid Istiqlal.",
    explanation_correct: "Pilihan: A, B, C, D.\n\nJawaban Benar: B. Gereja Katedral.\nPenjelasan: Masjid Istiqlal dan Gereja Katedral letaknya berhadapan di daerah Lapangan Banteng, Jakarta Pusat. Presiden Soekarno sengaja mendirikannya berdekatan sebagai simbol teguhnya Bhinneka Tunggal Ika (Kerukunan Umat Beragama)."
  },
  {
    id: "q_30", type: "pg", level: "L2",
    question: "Ciri khas arsitektur dari wisata religi Klenteng Jin De Yuan (Vihara Dharma Bhakti) di kawasan Petak Sembilan Glodok adalah...",
    options: ["Memiliki kubah berbentuk setengah lingkaran yang sangat besar", "Didominasi warna merah terang dengan hiasan ornamen naga", "Terbuat seluruhnya dari batu andesit bertumpuk seperti candi", "Berbentuk seperti rumah Gadang dengan atap melengkung"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Identifikasi ciri bangunan Tionghoa. \nKlenteng atau Vihara Cina sangat identik dengan warna merah pembawa keberuntungan, dan hewan mitologi perwujudan kekuatan.",
    explanation_correct: "Pilihan: A. Kubah besar, B. Warna merah/Naga, C. Batu andesit candi, D. Atap rumah gadang.\n\nJawaban Benar: B. Didominasi warna merah terang dengan ornamen naga.\nPenjelasan: Klenteng/Vihara peranakan Tionghoa selalu khas dengan cat merah (simbol hoki/keberkahan) dan ornamen ukiran naga di bubungan atapnya. Kubah adalah ciri Masjid, batu andesit ciri Candi Hindu/Buddha purba."
  }
];

async function insertPLBJ() {
  try {
    const subjRef = doc(db, 'artifacts/portal-ujian-sekolah-dbe8e/public/data/subjects/subject_plbj_2026');
    await setDoc(subjRef, {
      title: "Pend. Lingkungan Budaya Jakarta (PLBJ)",
      description: "Kisi-kisi PSKA PLBJ (Kelas 5 & 6). Materi Seni Budaya Betawi, Geografi Jakarta, Transportasi Umum, dan Tata Ruang DKI Jakarta.",
      summary: htmlSummary,
      questions: questions,
      isLocked: false // Initially open
    });
    console.log("SUCCESS: PLBJ Subject injected successfully!");
    process.exit(0);
  } catch (error) {
    console.error("ERROR injecting PLBJ:", error);
    process.exit(1);
  }
}

insertPLBJ();
