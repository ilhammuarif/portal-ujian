import { initializeApp } from 'firebase/app';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';

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

const questions = [
  {
    id: "q_1", type: "pg", level: "L1",
    question: "Tujuan utama melakukan permainan lompat tali secara rutin adalah untuk meningkatkan...",
    options: ["Kekuatan otot perut", "Daya tahan jantung dan otot tungkai (kaki)", "Kelenturan leher", "Kekuatan jari tangan"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Saat melompat tali, bagian bawah tubuhmu (kaki) yang paling banyak bekerja, serta jantung memompa lebih cepat.",
    explanation_correct: "Jawaban Benar: Daya tahan jantung dan otot tungkai. Lompat tali adalah latihan kardio yang menguatkan kaki dan jantung."
  },
  {
    id: "q_2", type: "pg", level: "L2",
    question: "Dalam permainan beregu seperti sepak bola, jika satu pemain egois tidak mau mengoper bola, akibatnya adalah...",
    options: ["Tim akan cepat menang", "Pemain tersebut mendapat hadiah", "Kerja sama tim hancur dan mudah kalah", "Wasit akan menghentikan permainan selamanya"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Permainan beregu sangat bergantung pada kerja sama (passing). Jika bermain sendiri, musuh mudah merebut bola.",
    explanation_correct: "Jawaban Benar: Kerja sama hancur. Kunci utama olahraga beregu adalah kerja sama tim (teamwork)."
  },
  {
    id: "q_3", type: "pg", level: "L2",
    question: "Teknik menendang bola untuk memberikan umpan pendek yang akurat kepada teman satu tim sebaiknya menggunakan...",
    options: ["Ujung jari kaki", "Kaki bagian dalam", "Tumit", "Punggung kaki luar"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Kaki bagian dalam memiliki permukaan yang lebar dan datar, sangat cocok untuk operan yang butuh ketepatan (akurasi).",
    explanation_correct: "Jawaban Benar: Kaki bagian dalam. Permukaan kaki bagian dalam paling datar sehingga arah bola umpan pendek sangat akurat."
  },
  {
    id: "q_4", type: "pg", level: "L1",
    question: "Dalam permainan bola basket, teknik mengoper bola menggunakan dua tangan dari depan dada disebut...",
    options: ["Bounce Pass", "Chest Pass", "Overhead Pass", "Underhand Pass"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Dada dalam bahasa Inggris adalah 'Chest'.",
    explanation_correct: "Jawaban Benar: Chest Pass. Operan setinggi dada dengan dua tangan lurus ke depan adalah teknik dasar Chest Pass."
  },
  {
    id: "q_5", type: "pg", level: "L3",
    question: "Dalam permainan bola kasti, gerakan berlari menuju tiang hinggap sambil sesekali menghindar dari lemparan bola lawan merupakan kombinasi gerak dasar...",
    options: ["Lokomotor dan Manipulatif", "Non-lokomotor dan Lokomotor", "Manipulatif dan Non-lokomotor", "Statis dan Dinamis"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Berlari (berpindah tempat = Lokomotor). Melempar/menghindar benda (Manipulatif).",
    explanation_correct: "Jawaban Benar: Lokomotor dan Manipulatif. Berpindah tempat sambil merespon objek (bola) adalah gabungannya."
  },
  {
    id: "q_6", type: "pg", level: "L2",
    question: "Tindakan yang paling tepat setelah berhasil memukul bola dalam permainan bola bakar adalah...",
    options: ["Diam di tempat melihat bola", "Langsung berlari kencang menuju tiang hinggap (base)", "Membuang pemukul ke arah lawan", "Meminta minum ke wasit"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Dalam bola bakar/kasti, setelah memukul bola sejauh mungkin, kamu harus segera menyelamatkan diri ke pos.",
    explanation_correct: "Jawaban Benar: Berlari kencang menuju tiang hinggap. Ini untuk menghindari bola yang ditangkap regu penjaga."
  },
  {
    id: "q_7", type: "pg", level: "L2",
    question: "Posisi kedua lengan lurus dirapatkan di depan bawah perut untuk memantulkan bola voli yang datang dari arah bawah disebut teknik...",
    options: ["Passing Atas", "Passing Bawah", "Smash", "Blocking"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Kata kuncinya 'di depan bawah perut'. Berarti passing ini posisinya rendah.",
    explanation_correct: "Jawaban Benar: Passing Bawah. Teknik ini digunakan untuk menahan bola servis atau bola rendah."
  },
  {
    id: "q_8", type: "pg", level: "L3",
    question: "Jika dalam pertandingan bulutangkis kok (shuttlecock) jatuh tepat di atas garis tepi lapangan lawan, maka keputusan wasit adalah...",
    options: ["Pindah servis", "Poin untuk kita karena kok dianggap Masuk (In)", "Kok diulang", "Poin untuk lawan karena kok dianggap Keluar (Out)"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Garis lapangan adalah bagian dari area permainan yang sah.",
    explanation_correct: "Jawaban Benar: Masuk (In). Dalam aturan resmi BWF, kok yang menyentuh garis batas sekecil apapun dihitung masuk sah."
  },
  {
    id: "q_9", type: "pg", level: "L2",
    question: "Contoh gerakan berpindah tempat (lokomotor) saat melakukan aktivitas senam lantai adalah...",
    options: ["Sikap lilin", "Melentingkan punggung di tempat", "Berlari kecil saat awalan sebelum melompat ke matras", "Menahan napas"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Lokomotor artinya 'Berpindah tempat'.",
    explanation_correct: "Jawaban Benar: Berlari kecil saat awalan. Lari awalan membuat tubuh berpindah mendekati matras."
  },
  {
    id: "q_10", type: "pg", level: "L3",
    question: "Prinsip utama penyusunan rangkaian gerakan senam ritmik (irama) agar terlihat indah adalah...",
    options: ["Dilakukan dengan sangat cepat", "Gerakan selaras dan harmonis mengikuti ketukan irama musik", "Memakai baju termahal", "Melakukan salto di udara"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Sesuai namanya, senam irama dinilai dari kecocokan antara gerakan tubuh dengan iramanya.",
    explanation_correct: "Jawaban Benar: Selaras mengikuti ketukan. Estetika senam irama bergantung pada koordinasi musikal."
  },
  {
    id: "q_11", type: "pg", level: "L2",
    question: "Jika kamu kesulitan mengikuti gerakan senam ritmik karena koordinasi kakimu sering salah, tindakan perbaikannya adalah...",
    options: ["Marah dan berhenti", "Berlatih menghitung ketukan secara lambat tanpa musik terlebih dahulu", "Memakai sepatu lari", "Tidur"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Koordinasi yang sulit butuh pengulangan pelan (slow motion) dengan menghitung manual.",
    explanation_correct: "Jawaban Benar: Berlatih menghitung ketukan lambat. Memecah gerakan kompleks menjadi pelan sangat membantu memori otot."
  },
  {
    id: "q_12", type: "pg", level: "L2",
    question: "Tujuan utama mengkombinasikan gerak langkah kaki dan ayunan lengan dalam senam irama adalah untuk...",
    options: ["Mempersulit gerakan", "Menciptakan keseimbangan tubuh, keluwesan, dan keindahan gerak", "Mengeluarkan banyak keringat", "Menghibur penonton"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Gabungan ayunan tangan dan kaki membuat tubuh bergerak utuh seluruhnya.",
    explanation_correct: "Jawaban Benar: Keseimbangan, keluwesan, dan keindahan."
  },
  {
    id: "q_13", type: "pg", level: "L1",
    question: "Dalam lomba lari estafet, benda yang wajib diberikan secara estafet dari pelari pertama ke pelari berikutnya tanpa boleh terjatuh disebut...",
    options: ["Bendera", "Bola kecil", "Tongkat estafet", "Cincin"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Estafet identik dengan kayu kecil/alumunium yang dioper.",
    explanation_correct: "Jawaban Benar: Tongkat estafet (Baton). Alat ini menjadi syarat sah perpindahan giliran lari."
  },
  {
    id: "q_14", type: "pg", level: "L1",
    question: "Manfaat dari berlari awalan (ancang-ancang) sebelum melakukan lompat jauh atau lompat jangkit adalah...",
    options: ["Agar musuh takut", "Mendapatkan gaya dorong dan daya ledak untuk lompatan yang lebih jauh", "Agar tidak kepleset", "Menurunkan berat badan"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Semakin kencang kita berlari sebelum melompat, daya dorong ke depan semakin kuat.",
    explanation_correct: "Jawaban Benar: Mendapatkan gaya dorong/daya ledak jauh. Momentum lari diubah menjadi momentum lompat (Tolakan)."
  },
  {
    id: "q_15", type: "pg", level: "L1",
    question: "Latihan push-up, sit-up, dan pull-up adalah berbagai macam gerakan kebugaran jasmani yang difokuskan untuk melatih...",
    options: ["Kekuatan otot polos", "Kekuatan otot rangka (dada, perut, lengan)", "Kelenturan tulang belakang", "Kecepatan berlari"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Push-up melatih dada, sit-up perut, pull-up lengan. Semuanya adalah latihan kekuatan otot.",
    explanation_correct: "Jawaban Benar: Kekuatan otot rangka. Ketiganya menggunakan berat badan sendiri (bodyweight) untuk melatih otot."
  },
  {
    id: "q_16", type: "pg", level: "L3",
    question: "Saat melakukan latihan lari zig-zag, teknik terpenting ketika tubuh hendak berbelok di tikungan tajam adalah...",
    options: ["Menutup mata", "Menurunkan sedikit titik berat badan (agak merendah) untuk menjaga keseimbangan sebelum memutar arah", "Melompat tinggi", "Berteriak keras"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Mobil balap dibuat ceper (rendah) agar tidak terbalik saat menikung tajam. Begitu pula tubuh manusia.",
    explanation_correct: "Jawaban Benar: Menurunkan titik berat badan. Gravitasi yang rendah menjaga tubuh tidak goyah/jatuh saat mengerem dan berbelok tajam."
  },
  {
    id: "q_17", type: "pg", level: "L2",
    question: "Saat berlari jarak menengah (maraton), cara terbaik mengatur napas dan tenaga agar tidak cepat lelah (ngos-ngosan) adalah...",
    options: ["Berlari secepat kilat di awal", "Menarik napas dangkal dengan cepat", "Menjaga ritme lari tetap stabil (pacing) dan bernapas teratur dalam", "Berlari sambil berbicara dengan teman"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Lari jauh butuh manajemen energi jangka panjang, bukan balap sprint.",
    explanation_correct: "Jawaban Benar: Ritme lari stabil dan napas teratur. Asupan oksigen harus seimbang dengan energi yang dibakar otot secara stabil."
  },
  {
    id: "q_18", type: "pg", level: "L1",
    question: "Tujuan melakukan gerakan pemanasan (stretching) sebelum olahraga berat adalah...",
    options: ["Membuat otot menjadi kaku", "Menaikkan suhu otot dan kelenturan sendi agar terhindar dari kram/cedera", "Mendinginkan tubuh", "Agar cepat capek"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Otot yang dingin ibarat karet kaku yang mudah putus jika ditarik paksa.",
    explanation_correct: "Jawaban Benar: Menaikkan suhu otot dan mencegah kram."
  },
  {
    id: "q_19", type: "pg", level: "L3",
    question: "Gaya renang yang gerakannya menyerupai katak berenang (kedua kaki menendang ke luar, kedua tangan membuka) disebut gaya...",
    options: ["Gaya Bebas (Crawl)", "Gaya Punggung", "Gaya Dada (Katak)", "Gaya Kupu-kupu"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Sebutan umumnya di Indonesia memang langsung memakai nama hewan amfibi tersebut.",
    explanation_correct: "Jawaban Benar: Gaya Dada (Katak/Breaststroke)."
  },
  {
    id: "q_20", type: "pg", level: "L1",
    question: "Mengapa saat berolahraga keras, napas kita menjadi terengah-engah dan cepat?",
    options: ["Karena otot kita meminta pasokan Oksigen lebih banyak untuk membakar energi", "Karena udara di lapangan panas", "Karena kita kenyang", "Karena paru-paru mengecil"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Mesin mobil butuh bensin dan udara. Otot butuh nutrisi dan oksigen untuk menghasilkan tenaga kinetik.",
    explanation_correct: "Jawaban Benar: Otot butuh oksigen tinggi untuk membakar cadangan gula (energi)."
  },
  {
    id: "q_21", type: "pg", level: "L2",
    question: "Olahraga terbukti secara ilmiah dapat menjaga kesehatan mental. Strategi positif mengurangi stres/kecemasan setelah seharian belajar adalah...",
    options: ["Bermain game online 5 jam di kamar", "Bersepeda santai sore hari atau lari kecil menikmati udara segar", "Makan permen banyak", "Tidur siang sampai malam"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Olahraga ringan memicu hormon kebahagiaan (Endorfin) di otak.",
    explanation_correct: "Jawaban Benar: Bersepeda santai sore. Aktivitas aerobik di luar ruangan terbukti menurunkan kortisol (hormon stres)."
  },
  {
    id: "q_22", type: "pg", level: "L1",
    question: "Langkah pertama yang paling tepat jika temanmu jatuh terluka lecet (berdarah) di lapangan adalah...",
    options: ["Diberi minum es", "Membersihkan lukanya perlahan dengan air mengalir atau cairan antiseptik", "Ditiup saja", "Dioles minyak panas"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Luka terbuka sangat rentan kemasukan kuman/debu tanah dari lapangan.",
    explanation_correct: "Jawaban Benar: Membersihkan luka dengan air mengalir. Mencegah infeksi bakteri adalah prioritas luka lecet."
  },
  {
    id: "q_23", type: "pg", level: "L2",
    question: "Sikap berdiri yang sering membungkuk akan berakibat fatal pada usia tua nanti. Membiasakan sikap tegak sempurna menjaga kesehatan dari...",
    options: ["Otot leher kaku", "Tulang belakang dan mencegah bungkuk (Kifosis/Skoliosis)", "Penyakit lambung", "Sakit gigi"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Postur yang buruk terus menerus menekan ruas tulang punggung.",
    explanation_correct: "Jawaban Benar: Menjaga tulang belakang."
  },
  {
    id: "q_24", type: "pg", level: "L3",
    question: "Perilaku Sedenter (mager / rebahan main HP seharian) dapat memicu obesitas. Strategi terbaik menguranginya adalah...",
    options: ["Membatasi screen-time HP dan melakukan peregangan tiap 1 jam duduk", "Membeli HP baru", "Makan sambil tiduran", "Tidak tidur seharian"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Putus kebiasaan diam dengan bergerak secara interval (berkala).",
    explanation_correct: "Jawaban Benar: Membatasi waktu layar (Screen time) dan bergerak (stretching) secara rutin."
  },
  {
    id: "q_25", type: "pg", level: "L2",
    question: "Anak sekolah idealnya mengatur aktivitas tubuh tiap hari dengan cara...",
    options: ["Tidur 12 jam, belajar tanpa istirahat", "Menyeimbangkan jam belajar, tidur cukup (8 jam), dan bermain aktif di luar ruangan minimal 30 menit sehari", "Olahraga berat 5 jam sehari", "Rebahan terus"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Tubuh butuh keseimbangan (Balance) antara kerja otak, istirahat, dan kerja fisik.",
    explanation_correct: "Jawaban Benar: Seimbang antara tidur, belajar, dan olahraga luar ruangan."
  },
  {
    id: "q_26", type: "pg", level: "L2",
    question: "Makanan bergizi seimbang dikenal dengan sebutan 'Isi Piringku'. Manakah pilihan makanan yang paling sehat bergizi tinggi?",
    options: ["Nasi putih + Mie goreng + Kerupuk", "Nasi merah + Ikan bakar + Sayur bayam rebus + Pisang", "Hamburger + Minuman Soda", "Sosis goreng + Nugget goreng"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Gizi seimbang wajib ada Karbohidrat kompleks, Protein murni, Sayur, dan Buah (Serat).",
    explanation_correct: "Jawaban Benar: Nasi merah, Ikan, Bayam, Buah."
  },
  {
    id: "q_27", type: "pg", level: "L1",
    question: "Minuman kemasan sangat tidak sehat karena kandungan gulanya ekstrim. Alternatif minuman pelepas dahaga yang 100% sehat untuk ginjal adalah...",
    options: ["Air putih mineral murni", "Es sirup", "Kopi instan kemasan", "Es teh manis pinggir jalan"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Ginjal bertugas menyaring cairan tubuh. Semakin jernih airnya, semakin sehat ginjal.",
    explanation_correct: "Jawaban Benar: Air putih mineral. Zero kalori dan pembersih alami."
  },
  {
    id: "q_28", type: "pg", level: "L2",
    question: "Menjaga lingkungan rumah bebas nyamuk Demam Berdarah dilakukan dengan membuang sampah genangan air. Ini merupakan tindakan...",
    options: ["3R (Reduce Reuse Recycle)", "3M Plus (Menguras, Menutup, Mendaur ulang barang bekas genangan)", "Go Green", "Penghijauan"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Nyamuk Aedes sangat suka bertelur di air bening dalam kaleng bekas.",
    explanation_correct: "Jawaban Benar: 3M Plus."
  },
  {
    id: "q_29", type: "pg", level: "L3",
    question: "Di sekolah terdapat tempat sampah warna Hijau, Kuning, dan Merah. Jika kamu habis memakan pisang, kulitnya dibuang ke warna...",
    options: ["Merah (B3 Berbahaya)", "Kuning (Anorganik / Plastik)", "Hijau (Organik / Daun Sisa Makanan)", "Dibuang ke selokan"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Kulit buah bisa membusuk diurai alam secara cepat (Organik). Organik identik dengan tumbuhan/hijau.",
    explanation_correct: "Jawaban Benar: Hijau (Organik). Sampah sisa makhluk hidup sangat cocok dijadikan kompos/pupuk."
  },
  {
    id: "q_30", type: "pg", level: "L2",
    question: "Contoh kegiatan bakti kelestarian lingkungan yang sangat bermanfaat menjaga kualitas udara Jakarta adalah...",
    options: ["Membakar sampah karet di halaman", "Menanam bibit pohon (Penghijauan) di lahan kosong sekolah", "Menebang pohon tua pinggir jalan", "Membuang sampah ke sungai"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Daun pohon menyerap Karbon Dioksida (polusi knalpot) dan mengeluarkan Oksigen bersih.",
    explanation_correct: "Jawaban Benar: Menanam pohon (Penghijauan)."
  },
  {
    id: "q_31", type: "essay", level: "L3",
    question: "Jelaskan mengapa rasa disiplin dan kesabaran sangat berperan penting dalam memenangkan lomba Tarik Tambang antar kelas!",
    explanation_wrong: "📌 Tips Belajar: Jika setiap orang menarik tambang sesuka hati di waktu yang berbeda, tenaganya tidak akan berkumpul.",
    explanation_correct: "Jawaban Benar: Tarik tambang butuh kedisiplinan mendengarkan aba-aba kapten (tarik bersamaan pada detik yang sama), dan kesabaran menahan hentakan lawan sebelum melakukan tarikan balasan. Kekuatan kolektif jauh lebih penting dari kekuatan satu orang."
  },
  {
    id: "q_32", type: "essay", level: "L2",
    question: "Sebutkan nama Induk Organisasi Olahraga Bola Voli tingkat Dunia (Internasional) dan tingkat Indonesia (Nasional)!",
    explanation_wrong: "📌 Tips Belajar: Dunia berawalan F-I-V-B, Indonesia berawalan P-B-V-S-I.",
    explanation_correct: "Jawaban Benar: Internasional = FIVB (Federation Internationale de Volleyball). Indonesia = PBVSI (Persatuan Bola Voli Seluruh Indonesia)."
  },
  {
    id: "q_33", type: "essay", level: "L3",
    question: "Bandingkan perbedaan sikap akhir tubuh antara senam Roll Depan (Guling ke Depan) dengan Roll Belakang!",
    explanation_wrong: "📌 Tips Belajar: Lihat posisi kepala dan kaki ketika pendaratan (selesai berguling).",
    explanation_correct: "Jawaban Benar: Pada Roll Depan, sikap akhir adalah jongkok menghadap ke arah depan (searah dengan laju gulingan). Pada Roll Belakang, sikap akhir juga jongkok namun posisinya menghadap ke belakang (arah awal awalan jongkok berdiri)."
  },
  {
    id: "q_34", type: "essay", level: "L1",
    question: "Apa dampak positif dari kerja sama dan kekompakan tim dalam penampilan pertunjukan Senam Irama (Ritmik) kelompok?",
    explanation_wrong: "📌 Tips Belajar: Jika semuanya bergerak serempak seirama musik, apa yang dilihat oleh penonton dan juri?",
    explanation_correct: "Jawaban Benar: Gerakan menjadi harmonis, sinkron (serempak), tidak ada yang tabrakan, dan menghasilkan nilai estetika (keindahan seni) yang tinggi untuk dilihat."
  },
  {
    id: "q_35", type: "essay", level: "L1",
    question: "Lompat jangkit dikenal dengan istilah bahasa Inggris 'Hop, Step, Jump'. Jelaskan gerakan kakinya secara berurutan!",
    explanation_wrong: "📌 Tips Belajar: Hop (berjingkat kaki sama), Step (melangkah pindah kaki), Jump (melompat mendarat ke pasir).",
    explanation_correct: "Jawaban Benar: 1. Hop (Berjingkat/tolakan pertama mendarat di kaki yang sama). 2. Step (Langkah jauh mendarat ke kaki sebelahnya). 3. Jump (Lompatan terakhir terbang ke bak pasir)."
  },
  {
    id: "q_36", type: "essay", level: "L1",
    question: "Sebutkan 2 prinsip keamanan (Safety) wajib yang harus dilakukan sebelum latihan Senam Lantai!",
    explanation_wrong: "📌 Tips Belajar: Tubuh dibanting ke lantai bisa cedera punggung. Apa alat yang harus diletakkan di lantai?",
    explanation_correct: "Jawaban Benar: 1) Wajib menggunakan Matras senam yang tebal/empuk. 2) Melakukan pemanasan peregangan leher dan pinggang. 3) Didampingi oleh Guru olahraga."
  },
  {
    id: "q_37", type: "essay", level: "L2",
    question: "Tuliskan 3 jenis olahraga atau gerakan latihan fisik yang terbukti dapat melatih Kekuatan Otot dan Kepadatan Tulang (Otot rangka)!",
    explanation_wrong: "📌 Tips Belajar: Gerakan mengangkat beban berat tubuh sendiri (Push.., Sit.., Angkat Barbel, dll).",
    explanation_correct: "Jawaban Benar: Push-up (Otot dada/tangan), Sit-up (Otot perut), Pull-up, Angkat beban, atau Squat jump."
  },
  {
    id: "q_38", type: "essay", level: "L2",
    question: "Jelaskan kepanjangan dan tindakan dari istilah medis C dan E pada metode R.I.C.E penanganan keseleo/cedera!",
    explanation_wrong: "📌 Tips Belajar: C = Compression (pembalutan perban ketat), E = Elevation (Angkat/tinggikan ke atas).",
    explanation_correct: "Jawaban Benar: C = Compression (Membalut area yang bengkak dengan perban elastis agar stabil). E = Elevation (Meninggikan atau mengangkat area yang cedera lebih tinggi dari posisi jantung saat pasien berbaring untuk mengurangi darah mengumpul di luka)."
  },
  {
    id: "q_39", type: "essay", level: "L2",
    question: "Bagaimana hubungan antara aktivitas fisik (olahraga lari) dengan kemampuan daya tahan jantung paru-paru tubuh (Stamina)?",
    explanation_wrong: "📌 Tips Belajar: Otot jantung itu seperti mesin. Semakin dilatih bergerak, mesinnya makin awet dan kuat.",
    explanation_correct: "Jawaban Benar: Semakin rajin aktivitas fisik aerobik/lari, maka otot jantung semakin kuat memompa darah ke seluruh tubuh dengan efisien, paru-paru lebih elastis menyerap oksigen. Hasilnya, tubuh tidak cepat lelah (Stamina meningkat drastis)."
  },
  {
    id: "q_40", type: "essay", level: "L2",
    question: "Sebutkan 3 kelompok kandungan utama Gizi Seimbang (Isi Piringku) beserta fungsinya!",
    explanation_wrong: "📌 Tips Belajar: Nasi untuk tenaga (K...), Daging untuk otot (P...), Sayur buah untuk antioksidan (V...).",
    explanation_correct: "Jawaban Benar: 1) Karbohidrat (Nasi, roti, kentang) berfungsi sbg sumber energi utama penggerak otot. 2) Protein (Telur, Ikan, Daging) sbg zat pembangun sel otot/tubuh. 3) Vitamin & Mineral (Sayur & Buah) sebagai zat pengatur tubuh dan penguat imun dari penyakit."
  }
];

async function updatePjokQuestions() {
  try {
    const subjRef = doc(db, 'artifacts/portal-ujian-sekolah-dbe8e/public/data/subjects/subject_pjok_2026');
    await updateDoc(subjRef, {
      questions: questions,
      description: "Kisi-kisi ASKA PJOK Paket 1 Kelas 6 (Full 40 Soal). Materi gerak senam, metode RICE (Cedera), olahraga kardio, & bahaya perilaku Mager."
    });
    console.log("SUCCESS: PJOK 40 Questions updated successfully!");
    process.exit(0);
  } catch (error) {
    console.error("ERROR updating PJOK:", error);
    process.exit(1);
  }
}

updatePjokQuestions();
