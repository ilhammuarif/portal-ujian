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

const htmlSummary = `
<div style="font-family: 'Comic Sans MS', 'Chalkboard SE', sans-serif; line-height: 1.8; color: #334155;">
  <p style="font-size: 1.2rem; color: #db2777; font-weight: bold; text-align: center; margin-bottom: 2rem;">
    Halo Seniman Cilik! 🎨<br/>Mari berkreasi dan mengenal keindahan seni rupa di sekitar kita!
  </p>

  <!-- BAB 1: Mengalami Seni -->
  <div style="background: #fdf2f8; border-left: 6px solid #be185d; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #9d174d; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #fbcfe8; padding-bottom: 1rem;">🖌️ BAB 1: Unsur dan Prinsip Seni Rupa</h3>
    <ul>
      <li><b>Titik:</b> Unsur seni rupa yang paling kecil dan paling dasar. Semua gambar bermula dari sebuah titik.</li>
      <li><b>Garis:</b> Gabungan dari titik-titik yang bersambung. Garis bisa lurus, melengkung, atau zigzag.</li>
      <li><b>Bidang & Bentuk:</b> Bidang adalah area pipih 2 dimensi (persegi, segitiga). Bentuk memiliki ruang 3 dimensi (kubus, tabung).</li>
      <li><b>Prinsip Seni:</b> Agar gambar terlihat indah, kita harus memperhatikan <i>Keseimbangan</i> (Proporsi), <i>Irama</i> (Ritme pengulangan gambar), dan <i>Kesatuan</i> (Kekompakan unsur gambar).</li>
    </ul>
  </div>

  <!-- BAB 2: Mengapresiasi Karya -->
  <div style="background: #eff6ff; border-left: 6px solid #2563eb; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #1e3a8a; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #bfdbfe; padding-bottom: 1rem;">🖼️ BAB 2: Apresiasi & Teknik Berkarya</h3>
    <ul>
      <li><b>Anyaman:</b> Seni menyilangkan bahan (bambu, rotan, atau daun pandan) untuk membuat tikar, bakul, atau piring.</li>
      <li><b>Teknik Simpul (Makrame):</b> Karya seni yang dibuat dengan cara mengikat-ngikat (menyimpul) tali hingga membentuk pola indah.</li>
      <li><b>Teknik Menggambar:</b> Ada teknik Dusel (menggosok pensil), Arsir (garis menyilang), Pointilis (kumpulan titik warna), dan Aquarel (sapuan cat air tipis).</li>
    </ul>
  </div>

  <!-- BAB 3: Ide Karya & Daur Ulang -->
  <div style="background: #ecfdf5; border-left: 6px solid #10b981; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #064e3b; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #a7f3d0; padding-bottom: 1rem;">♻️ BAB 3: Berkreasi dari Limbah</h3>
    <ul>
      <li>Kita bisa membuat karya seni indah (sekaligus menyelamatkan bumi) dari limbah rumah tangga. Contoh: Membuat pot bunga dari botol plastik, atau hiasan dari sedotan.</li>
      <li><b>Bubur Kertas:</b> Kertas koran bekas direndam air dan lem, lalu dicetak menjadi topeng atau celengan (karya 3 Dimensi).</li>
      <li>Manfaat Mendaur Ulang: Mengurangi penumpukan sampah plastik yang sulit terurai di alam, serta menghasilkan barang baru yang berguna dan memiliki nilai ekonomi.</li>
    </ul>
  </div>

  <!-- BAB 4: Dampak & Respon Karya -->
  <div style="background: #fffbeb; border-left: 6px solid #f59e0b; padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
    <h3 style="color: #b45309; margin-top: 0; font-size: 1.5rem; border-bottom: 2px dashed #fde68a; padding-bottom: 1rem;">🌟 BAB 4: Dampak Positif Seni Rupa</h3>
    <ul>
      <li><b>Bagi Diri Sendiri:</b> Menggambar bisa menjadi tempat meluapkan perasaan (emosi), melatih kesabaran, dan kreativitas imajinasi.</li>
      <li><b>Bagi Lingkungan Sekolah:</b> Majalah dinding (mading), lukisan dinding kelas (mural), atau pot tanaman hias hasil karya siswa membuat sekolah lebih ceria, indah, dan nyaman.</li>
      <li>Mencari ide seni (inspirasi) bisa dari mana saja: Menonton film, melihat pemandangan alam, atau mengamati budaya lokal (Nusantara).</li>
    </ul>
  </div>
</div>
`;

const questions = [
  // --- PILIHAN GANDA (30 SOAL) ---
  {
    id: "q_1",
    type: "pg",
    level: "L1",
    question: "Dalam seni rupa, unsur yang paling kecil, paling dasar, dan menjadi awal mula terbentuknya sebuah gambar di atas bidang datar adalah...",
    options: ["Garis", "Warna", "Titik", "Bidang"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Ingat jejak pertama dari ujung pensilmu sebelum ditarik memanjang! Itu adalah unsur terkecil.",
    explanation_correct: "Jawaban Benar: Titik. Titik adalah unsur seni rupa paling dasar dan paling kecil. Semua coretan bermula dari sebuah titik."
  },
  {
    id: "q_2",
    type: "pg",
    level: "L1",
    question: "Salah satu unsur seni rupa yang terbentuk dari hubungan beberapa garis yang membatasi suatu area sehingga tampak rata/datar (dua dimensi) disebut...",
    options: ["Bidang", "Bentuk", "Tekstur", "Volume"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Pikirkan daerah tertutup seperti lingkaran atau persegi panjang yang tidak memiliki ketebalan.",
    explanation_correct: "Jawaban Benar: Bidang. Bidang adalah unsur seni rupa 2 dimensi yang dibatasi oleh garis dan hanya memiliki dimensi panjang dan lebar."
  },
  {
    id: "q_3",
    type: "pg",
    level: "L2",
    question: "Perhatikan deskripsi berikut: Sebuah gambar menunjukkan permukaan dinding batu kali yang kasar berdampingan dengan kaca jendela yang licin. Perbedaan visual permukaan benda yang dirasakan melalui indra penglihatan atau perabaan disebut unsur...",
    options: ["Garis spiral", "Bidang organis", "Tekstur", "Gradasi warna"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Unsur ini berhubungan erat dengan nilai raba permukaan suatu benda (kasar, halus, licin).",
    explanation_correct: "Jawaban Benar: Tekstur. Tekstur adalah unsur seni rupa yang menunjukkan kualitas atau nilai raba permukaan suatu benda, baik nyata maupun semu."
  },
  {
    id: "q_4",
    type: "pg",
    level: "L2",
    question: "Perhatikan tabel kecocokan prinsip seni rupa berikut!\n\n| No | Prinsip Seni Rupa | Keterangan |\n|---|---|---|\n| 1 | Keselarasan (Harmoni) | Kedekatan unsur rupa berbeda untuk menciptakan keindahan |\n| 2 | Gelap Terang | Teknik mewarnai lukisan menggunakan kuas basah |\n| 3 | Keseimbangan | Penyusunan objek gambar agar tidak terkesan berat sebelah |\n| 4 | Titik Pusat | Titik koordinat awal saat membuat sketsa gambar |\n\nPasangan prinsip seni rupa yang tepat beserta keterangannya ditunjukkan oleh nomor...",
    options: ["1 dan 2", "1 dan 3", "2 dan 4", "3 dan 4"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Keselarasan merujuk pada keindahan harmonis, dan keseimbangan mengatur agar tata letak tidak berat sebelah.",
    explanation_correct: "Jawaban Benar: 1 dan 3. Keselarasan adalah keserasian unsur rupa, sedangkan Keseimbangan (balance) mengatur agar komposisi tidak berat sebelah."
  },
  {
    id: "q_5",
    type: "pg",
    level: "L2",
    question: "Prinsip seni rupa yang mengatur penyusunan unsur-unsur rupa secara berulang, teratur, dan berkesinambungan sehingga memberikan kesan gerakan visual yang mengalir dinamis disebut...",
    options: ["Proporsi", "Kesatuan (Unity)", "Irama (Ritme)", "Keseimbangan"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Seperti halnya ketukan nada yang berulang dalam musik, dalam seni rupa prinsip ini juga disebut r....",
    explanation_correct: "Jawaban Benar: Irama (Ritme). Irama dalam seni rupa adalah pengulangan unsur rupa secara teratur dan berkesinambungan untuk menciptakan kesan gerak."
  },
  {
    id: "q_6",
    type: "pg",
    level: "L3",
    question: "Bayangkan gambar dekoratif motif batik Mega Mendung. Pengulangan bentuk awan yang berderet secara konsisten dari ukuran besar hingga mengecil mencerminkan penerapan prinsip seni rupa...",
    options: ["Irama dan Keselarasan", "Keseimbangan simetris dan Kontras", "Kesatuan tanpa irama", "Proporsi acak"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Pengulangan yang rapi menciptakan irama visual, sedangkan perpaduan warnanya membentuk keselarasan yang indah.",
    explanation_correct: "Jawaban Benar: Irama dan Keselarasan. Pengulangan motif awan Mega Mendung yang teratur menciptakan irama, dan kedekatan unsurnya membentuk keselarasan."
  },
  {
    id: "q_7",
    type: "pg",
    level: "L2",
    question: "Dalam pembuatan karya makrame, ketika kita menyilangkan dua utas tali di mana tali kanan melewati depan tali kiri lalu dimasukkan ke dalam lubang membentuk ikatan pembuka yang kuat namun mudah digeser, jenis simpul tersebut adalah...",
    options: ["Simpul Mati", "Simpul Tunggal (Overhand Knot)", "Simpul Pangkal", "Simpul Ganda"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Simpul ini adalah simpul paling mendasar dan paling sederhana yang biasa kita buat pada ujung tali tunggal.",
    explanation_correct: "Jawaban Benar: Simpul Tunggal. Simpul tunggal adalah ikatan paling dasar pada makrame yang berfungsi sebagai pengunci awal pada untaian tali."
  },
  {
    id: "q_8",
    type: "pg",
    level: "L1",
    question: "Dalam teknik menganyam bambu, apabila kita menyilangkan bilah bambu pakan dan lungsin secara selang-seling satu per satu (atas-bawah-atas-bawah) secara konsisten, motif anyaman dasar yang dihasilkan disebut...",
    options: ["Anyaman Tunggal (Sasak)", "Anyaman Ganda (Kembar)", "Anyaman Tiga (Tepas)", "Anyaman Bunga Cengkeh"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Karena disilangkan satu per satu secara tunggal bergantian, namanya anyaman t.....",
    explanation_correct: "Jawaban Benar: Anyaman Tunggal (Sasak). Anyaman tunggal dibuat dengan cara menyilangkan satu lungsin dengan satu pakan secara berselang-seling."
  },
  {
    id: "q_9",
    type: "pg",
    level: "L2",
    question: "Daun kelapa muda (janur) banyak dimanfaatkan warga Indonesia untuk membuat kerajinan tradisional. Benda fungsional wadah makanan khas hari raya yang dibuat dengan teknik anyam janur tersebut adalah...",
    options: ["Bakul nasi bambu", "Celongsong ketupat", "Topi caping petani", "Sapu lidi hias"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Makanan ini sangat identik dengan perayaan Idul Fitri dan kuahnya opor ayam.",
    explanation_correct: "Jawaban Benar: Celongsong ketupat. Ketupat dibuat dengan cara menganyam helaian daun kelapa muda (janur) membentuk wadah kantong beras berbentuk jajar genjang."
  },
  {
    id: "q_10",
    type: "pg",
    level: "L1",
    question: "Teknik menggambar dengan cara menggosokkan pensil, krayon, atau arang secara mendatar menggunakan bantuan ujung jari tangan atau kertas khusus untuk menghasilkan efek gradasi gelap terang yang halus disebut teknik...",
    options: ["Arsir (Hatching)", "Dusel (Smudging)", "Pointilis", "Aquarel"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Teknik ini menggunakan teknik gosok untuk meratakan kepekatan warna pensil atau arang pada kertas gambar.",
    explanation_correct: "Jawaban Benar: Dusel. Dusel adalah teknik menggambar dengan menggosokkan goresan pensil secara rebah untuk memperoleh bayangan halus."
  },
  {
    id: "q_11",
    type: "pg",
    level: "L2",
    question: "Dalam bidang seni rupa, istilah \"Monokromatik\" merujuk pada karya lukisan atau gambar yang dibuat menggunakan...",
    options: ["Satu warna dengan berbagai tingkat kepekatan (gelap-terang)", "Kombinasi warna kontras yang saling berhadapan", "Warna-warna pastel yang meriah", "Gradasi cat air transparan"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Arti dari kata \"mono\" adalah tunggal atau satu, sedangkan \"chroma\" artinya warna.",
    explanation_correct: "Jawaban Benar: Satu warna dengan berbagai tingkat kepekatan (gelap-terang). Monokromatik menggunakan variasi nilai (value) dari satu warna dasar tunggal."
  },
  {
    id: "q_12",
    type: "pg",
    level: "L3",
    question: "Perhatikan langkah acak pembuatan karya topeng bubur kertas berikut!\n1. Menempelkan bubur kertas lapis demi lapis ke atas cetakan topeng.\n2. Membuat rancangan sketsa ide bentuk wajah topeng di kertas.\n3. Mengamplas permukaan topeng setelah kering dan memberi warna dengan cat.\n4. Merendam potongan kertas koran bekas lalu menghancurkannya dan dicampur lem kayu.\n\nUrutan langkah pembuatan topeng bubur kertas yang paling tepat adalah...",
    options: ["2 -> 4 -> 1 -> 3", "4 -> 2 -> 1 -> 3", "2 -> 1 -> 4 -> 3", "4 -> 1 -> 2 -> 3"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Kita harus menentukan ide sketsa dulu (2), baru menyiapkan bubur kertas (4), menempel cetak (1), dan terakhir finishing cat (3).",
    explanation_correct: "Jawaban Benar: 2 -> 4 -> 1 -> 3. Langkah dimulai dari sketsa konsep, persiapan bubur kertas, pencetakan adonan lunak, lalu finishing pengamplasan dan pewarnaan."
  },
  {
    id: "q_13",
    type: "pg",
    level: "L1",
    question: "Teknik dasar seni rupa berupa kegiatan menempelkan potongan-potongan kertas warna, potongan kain perca, atau biji-bijian di atas permukaan sketsa gambar disebut teknik...",
    options: ["Kolase", "Butsir", "Pahat", "Cetak Tinggi"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Ingat kreasi menempel bahan kering di kertas gambar saat tugas kelas Seni Rupa.",
    explanation_correct: "Jawaban Benar: Kolase. Kolase adalah komposisi artistik yang dibuat dari berbagai bahan yang ditempelkan pada permukaan gambar."
  },
  {
    id: "q_14",
    type: "pg",
    level: "L1",
    question: "Ukiran relief cerita pada dinding Candi Borobudur memiliki bentuk menonjol dan memiliki dimensi ketebalan rabaan yang nyata. Teknik pengerjaan batu candi tersebut adalah...",
    options: ["Teknik Butsir", "Teknik Pahat", "Teknik Cor", "Teknik Anyam"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Batu candi yang keras diolah dengan cara dikikis sedikit demi sedikit menggunakan alat tajam dan palu pemukul.",
    explanation_correct: "Jawaban Benar: Teknik Pahat. Teknik pahat dilakukan dengan membuang bagian bahan keras yang tidak diperlukan menggunakan pahat dan martil."
  },
  {
    id: "q_15",
    type: "pg",
    level: "L2",
    question: "Saat menggambar bentuk geometris bangun ruang seperti kerucut dan tabung dalam seni rupa, murid menerapkan konsep jaring-jaring bangun yang dipelajari pada mata pelajaran...",
    options: ["Matematika", "Bahasa Indonesia", "IPAS (Geografi)", "Pendidikan Jasmani"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Mata pelajaran ini mengajarkan kita tentang rumus luas, volume bangun ruang, garis tengah (diameter), dan jaring-jaring balok/kubus.",
    explanation_correct: "Jawaban Benar: Matematika. Menggambar bentuk presisi/geometris memanfaatkan ilmu geometri dan proporsi matematis yang dipelajari di pelajaran Matematika."
  },
  {
    id: "q_16",
    type: "pg",
    level: "L2",
    question: "Pada pembuatan anyaman dari bahan pita kertas, langkah kerja awal yang harus dilakukan setelah menyiapkan alat-bahan kertas dasar adalah...",
    options: ["Mengoleskan lem kayu", "Memotong/mengiris kertas dasar sejajar sesuai lebar pita untuk lubang anyam", "Melipat anyaman menjadi kantong", "Mewarnai pita dengan cat air"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Kertas dasar harus dilubangi secara sejajar terlebih dahulu agar pita kertas warna bisa masuk berseling-seling.",
    explanation_correct: "Jawaban Benar: Memotong/mengiris kertas dasar secara sejajar. Ini dilakukan untuk membuat baris lungsin yang akan dimasuki oleh pakan pita kertas."
  },
  {
    id: "q_17",
    type: "pg",
    level: "L2",
    question: "Perhatikan tabel kelompok alat dan bahan berikut!\n\n| Kelompok | Alat dan Bahan |\n|---|---|\n| I | Daun pandan kering, air, pewarna alami, pisau penipis |\n| II | Tanah liat, plastisin, butsir, air |\n| III | Botol plastik bekas, gunting, cat akrilik, kuas |\n| IV | Kertas koran bekas, ember, air, lem kayu, blender |\n\nJika siswa ingin mempraktikkan pembuatan anyaman tikar tradisional khas daerah, kelompok bahan yang tepat dipilih adalah...",
    options: ["Kelompok I", "Kelompok II", "Kelompok III", "Kelompok IV"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Tikar anyam alami yang harum dan lentur dibuat dari daun sejenis tanaman berduri yang dikeringkan.",
    explanation_correct: "Jawaban Benar: Kelompok I. Daun pandan kering adalah bahan baku utama pembuatan tikar anyaman tradisional yang dihaluskan dengan pisau penipis."
  },
  {
    id: "q_18",
    type: "pg",
    level: "L3",
    question: "Simpul ini dibuat dengan melilitkan tali sebanyak dua kali pada sebilah bambu, lalu menyilangkan ujung tali di bawah lilitan pertama sehingga menghasilkan ikatan kuat untuk mengawali dan mengakhiri gantungan makrame. Nama simpul tersebut adalah...",
    options: ["Simpul Mati", "Simpul Pangkal (Clove Hitch)", "Simpul Jangkar", "Simpul Ganda"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Simpul ini sangat terkenal di Pramuka untuk mengikat tali pertama kali pada tiang/tongkat kayu.",
    explanation_correct: "Jawaban Benar: Simpul Pangkal. Simpul pangkal adalah simpul awal yang paling kokoh dan aman digunakan untuk menambatkan tali makrame pada kayu penopang."
  },
  {
    id: "q_19",
    type: "pg",
    level: "L1",
    question: "Perhatikan tabel rancangan ide karya seni berikut!\n1. Patung abstrak dari cor semen pasir\n2. Pot tanaman gantung dari botol plastik bekas minuman\n3. Bingkai foto estetik dari ranting pohon kering di kebun\n4. Lukisan cat minyak di atas kain kanvas\n\nIde karya seni rupa terapan yang memanfaatkan bahan limbah anorganik rumah tangga secara langsung ditunjukkan oleh nomor...",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Limbah anorganik adalah sampah buatan manusia yang tidak bisa membusuk alami di tanah, contohnya botol kemasan plastik bekas.",
    explanation_correct: "Jawaban Benar: 2. Botol plastik bekas adalah contoh sampah plastik anorganik rumah tangga yang sangat baik untuk didaur ulang menjadi kerajinan pot gantung."
  },
  {
    id: "q_20",
    type: "pg",
    level: "L1",
    question: "Karya seni rupa 3 dimensi adalah karya seni rupa yang memiliki volume, kedalaman, dan ruang nyata. Kelompok benda berikut yang tergolong karya 3 dimensi adalah...",
    options: ["Lukisan cat air, kaligrafi kertas, dan foto", "Patung semen, gerabah tanah liat, dan gantungan makrame", "Poster, baliho digital, dan stiker dinding", "Tenun batik cap, foto pigura, dan gambar karikatur"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Carilah kelompok benda yang memiliki tinggi, lebar, sekaligus KETEBALAN nyata yang bisa disentuh dari belakang dan samping.",
    explanation_correct: "Jawaban Benar: Patung semen, gerabah tanah liat, dan gantungan makrame. Semuanya memiliki wujud fisik ruang 3 dimensi (panjang, lebar, tinggi/volume)."
  },
  {
    id: "q_21",
    type: "pg",
    level: "L2",
    question: "Perhatikan dekorasi berikut: Hiasan disusun dengan urutan lingkaran biru, segitiga merah, kotak kuning, lalu berulang kembali lingkaran biru, segitiga merah, kotak kuning secara berkelanjutan. Jenis ritme gambar ini menggunakan pola...",
    options: ["Pengulangan Alternatif (Selingan)", "Gradasi Ukuran (Makin membesar)", "Ritme Acak Bebas", "Ritme Oposisi Kontras"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Polanya bergantian secara teratur selang-seling antara lingkaran, segitiga, dan kotak.",
    explanation_correct: "Jawaban Benar: Pengulangan Alternatif. Ritme alternatif terbentuk dari pengulangan unsur rupa yang berbeda secara bergantian dengan pola teratur."
  },
  {
    id: "q_22",
    type: "pg",
    level: "L2",
    question: "Kerajinan daur ulang bubur kertas (papier-mache) dibuat dari rendaman kertas bekas yang dihancurkan dan dicampur lem kayu. Benda yang paling umum dibuat menggunakan teknik cetakan bubur kertas ini adalah...",
    options: ["Piring kaca hias", "Topeng hiasan dinding", "Tikar anyaman rotan", "Keranjang belanja bambu"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Benda ini diletakkan pada cetakan berbentuk wajah manusia atau hewan, lalu dikeringkan dan dicat warna-warni.",
    explanation_correct: "Jawaban Benar: Topeng hiasan dinding. Adonan bubur kertas yang lembek mudah ditekan ke cetakan topeng wajah, lalu mengeras kuat saat kering."
  },
  {
    id: "q_23",
    type: "pg",
    level: "L2",
    question: "Ketika siswa menggambar ragam hias pada media papan kayu tebal agar menghasilkan warna cemerlang, menutup serat kayu rapat, tahan lama, dan tidak luntur terkena air, media pewarna yang paling tepat digunakan adalah...",
    options: ["Pensil warna 2B", "Krayon lilin anak", "Cat akrilik dan kuas", "Pensil arang (dusel)"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Cat ini terbuat dari emulsi plastik/resin akrilik yang akan mengering menjadi kedap air dan mengkilap kuat di atas permukaan kayu.",
    explanation_correct: "Jawaban Benar: Cat akrilik dan kuas. Cat akrilik memiliki daya tutup tebal (opaque), cepat kering, kedap air, dan sangat rekat pada kayu atau kanvas."
  },
  {
    id: "q_24",
    type: "pg",
    level: "L3",
    question: "Sebelum mulai menggambar pemandangan alam Nusantara, cara terbaik bagi seorang siswa untuk memicu kreativitas otak dan memperoleh ide rancangan yang orisinal adalah...",
    options: ["Menjiplak utuh gambar milik teman sebangku", "Mengamati keindahan alam sekitar secara langsung atau melihat foto dokumentasi wisata", "Membeli lukisan jadi lalu mengumpulkannya", "Menunggu datangnya mimpi di kelas"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Inspirasi gambar terbaik berasal dari tangkapan panca indra kita saat berinteraksi dengan keindahan dunia nyata di luar ruangan.",
    explanation_correct: "Jawaban Benar: Mengamati keindahan alam secara langsung atau foto dokumentasi. Observasi langsung memberikan stimulasi visual terbaik untuk melahirkan ide orisinal."
  },
  {
    id: "q_25",
    type: "pg",
    level: "L1",
    question: "Dengan menggunakan konsep daur ulang ramah lingkungan (Reuse), sedotan plastik bekas minuman dapat diolah menjadi kerajinan rupa berupa...",
    options: ["Tikar anyam bambu tebal", "Bunga hias dekorasi meja", "Patung tanah liat memijat", "Celengan bubur kertas"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Sedotan plastik warna-warni digunting rumbai lalu dililit membentuk mahkota kelopak bunga.",
    explanation_correct: "Jawaban Benar: Bunga hias dekorasi meja. Sedotan plastik bekas mudah dipotong-potong dan dibentuk menjadi aneka kuntum bunga warna-warni yang indah."
  },
  {
    id: "q_26",
    type: "pg",
    level: "L2",
    question: "Ketika melihat sebuah lukisan laut yang didominasi oleh warna biru tua, hijau toska, dan aksen busa putih bersih, respon emosi psikologis yang umumnya dirasakan oleh pengamat adalah...",
    options: ["Kemarahan meluap-luap", "Ketenangan, kedamaian, dan sejuk", "Ketakutan yang mencekam", "Kebingungan dan pusing"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Biru dan hijau tergolong lingkaran \"warna dingin\" (cool colors) yang memancarkan efek menenangkan jiwa.",
    explanation_correct: "Jawaban Benar: Ketenangan, kedamaian, dan sejuk. Lingkaran warna dingin (biru, hijau) merangsang syaraf otak untuk merasakan relaksasi dan kedamaian."
  },
  {
    id: "q_27",
    type: "pg",
    level: "L2",
    question: "Pasangan alat dan media gambar yang paling cocok untuk mempraktikkan teknik lukis sapuan cat basah transparan (Aquarel) adalah...",
    options: ["Krayon lilin di atas kain terpal", "Cat air dan kuas halus di atas kertas gambar khusus (Watercolor Paper)", "Pensil warna kering di atas triplek", "Spidol hitam di atas pecahan kaca"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Cat air membutuhkan media kertas berdaya serap air tinggi dan tebal agar tidak melengkung hancur saat disapu air basah.",
    explanation_correct: "Jawaban Benar: Cat air dan kuas di atas kertas gambar khusus. Teknik Aquarel menggunakan sapuan air tipis transparan di atas kertas tebal bertekstur penyerap air."
  },
  {
    id: "q_28",
    type: "pg",
    level: "L2",
    question: "Meluangkan waktu untuk menggambar bebas, mewarnai pola, atau mencetak plastisin terbukti memberikan dampak positif bagi kesehatan mental anak, yaitu...",
    options: ["Membuat anak cepat mengantuk di sekolah", "Menjadi media penyaluran emosi (terapi seni) serta melatih kesabaran", "Membuat anak melupakan tugas Matematika", "Memicu sifat sombong jika gambarnya paling bagus"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Aktivitas mengekspresikan coretan warna dapat menurunkan kadar hormon stres dan menenangkan denyut nadi.",
    explanation_correct: "Jawaban Benar: Menjadi media penyaluran emosi dan melatih kesabaran. Art Therapy (Terapi Seni) membantu anak memproses emosi negatif menjadi karya visual indah."
  },
  {
    id: "q_29",
    type: "pg",
    level: "L3",
    question: "Perhatikan tabel dampak visual di bawah ini!\n1. Sekolah terlihat indah, ceria, dan edukatif dengan adanya lukisan mural di dinding lorong kelas.\n2. Sekolah terkesan kumuh akibat banyaknya sisa ceceran kertas praktek menggambar.\n3. Murid merasa terinspirasi, nyaman, dan betah belajar di sekolah.\n4. Guru kesulitan mengajar karena fokus murid terganggu gambar mural.\n\nKesimpulan dampak positif penataan karya seni rupa di lingkungan sekolah yang benar adalah...",
    options: ["1 dan 2", "1 dan 3", "2 dan 4", "3 dan 4"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Sifat seni pajang dinding mading/mural berfungsi estetis (memperindah ruang) sekaligus inspiratif bagi warga sekolah.",
    explanation_correct: "Jawaban Benar: 1 dan 3. Mural edukasi dinding mempercantik visual lingkungan sekolah dan meningkatkan kenyamanan psikologis murid saat belajar."
  },
  {
    id: "q_30",
    type: "pg",
    level: "L3",
    question: "Kegiatan kerja bakti menghias dinding pos ronda desa dengan lukisan pemandangan dan ornamen daerah memiliki manfaat sosial bagi lingkungan masyarakat sekitar, yaitu...",
    options: ["Menimbulkan kecemburuan sosial antar kampung", "Meningkatkan keindahan visual lingkungan (estetika) serta mempererat kerukunan warga", "Menyebabkan kemacetan jalan karena warga menonton pos ronda", "Membuat pos ronda cepat kotor oleh coretan baru"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Kebersamaan warga saat menggambar mempererat tali silaturahmi, dan hasilnya membuat kampung tampak asri bersih.",
    explanation_correct: "Jawaban Benar: Meningkatkan keindahan visual lingkungan serta mempererat kerukunan warga. Karya seni publik menumbuhkan rasa kepemilikan dan persatuan sosial."
  },

  // --- URAIAN / ESSAY (10 SOAL) ---
  {
    id: "q_31",
    type: "essay",
    level: "L1",
    question: "Karya seni rupa dibangun oleh beberapa elemen dasar rupa. Sebutkan dan jelaskan secara singkat 3 unsur fisik pembentuk seni rupa yang paling mendasar!",
    correctAnswer: "1. Titik: Unsur paling kecil sebagai awal coretan. 2. Garis: Gabungan titik memanjang yang memiliki arah. 3. Bidang: Area dua dimensi yang datar.",
    explanation_wrong: "📌 Tips Belajar: Unsur rupa fisik mulai dari jejak terkecil ujung pensil (T....), tarikan memanjang (G....), hingga daerah 2D datar (B....).",
    explanation_correct: "Jawaban Benar: Titik (elemen dasar terkecil), Garis (rangkaian titik memanjang), dan Bidang (area datar yang terbentuk dari pertemuan garis)."
  },
  {
    id: "q_32",
    type: "essay",
    level: "L2",
    question: "Jelaskan perbedaan mendasar antara gambar seni rupa yang menggunakan prinsip Keseimbangan Simetris (Symmetrical Balance) dengan Keseimbangan Asimetris (Asymmetrical Balance)!",
    correctAnswer: "Keseimbangan Simetris menempatkan objek yang sama persis bentuk dan ukurannya di kiri-kanan (cermin). Keseimbangan Asimetris menempatkan objek berbeda bentuk di kiri-kanan namun secara visual tetap terlihat seimbang.",
    explanation_wrong: "📌 Tips Belajar: Bayangkan cermin di tengah gambar. Symmetrical berarti kiri-kanan sama persis, sedangkan Asymmetrical kiri-kanan berbeda objek namun berat visualnya sebanding.",
    explanation_correct: "Jawaban Benar: Simetris membagi objek sama persis di kedua sisi sumbu tengah. Asimetris membagi objek berbeda jenis/ukuran namun diatur harmonis agar berat visualnya seimbang."
  },
  {
    id: "q_33",
    type: "essay",
    level: "L3",
    question: "Apabila Anda ingin membuat lukisan bertema buah-buahan di atas meja dengan menerapkan prinsip seni rupa \"Kesatuan\" (Unity) dan \"Proporsi\" (Ukuran ideal), hal praktis apa saja yang wajib Anda lakukan?",
    correctAnswer: "Menyusun buah saling berdekatan/berhimpit (Kesatuan) dan menggambar ukuran buah secara wajar (Proporsi), misalnya buah semangka digambar jauh lebih besar daripada buah jeruk.",
    explanation_wrong: "📌 Tips Belajar: Kesatuan berarti mendekatkan objek agar tidak menyebar acak. Proporsi berarti menggambar ukuran buah yang besar lebih besar dibanding buah yang kecil agar terlihat logis.",
    explanation_correct: "Jawaban Benar: Menerapkan Kesatuan dengan mendekatkan posisi penumpukan buah di tengah meja. Menerapkan Proporsi dengan menjaga perbandingan ukuran logis antar buah."
  },
  {
    id: "q_34",
    type: "essay",
    level: "L2",
    question: "Sebutkan dan jelaskan secara urut 4 langkah utama sistematis dalam proses melukis gambar dekoratif bertema \"Hewan Bawah Laut\"!",
    correctAnswer: "1. Menentukan tema/ide gambar. 2. Menyiapkan alat dan bahan. 3. Membuat sketsa tipis dengan pensil. 4. Mewarnai sketsa dengan cat.",
    explanation_wrong: "📌 Tips Belajar: Ingat langkah awal penentuan konsep di kepala, penyiapan alat mewarnai, penggambaran pola tipis pensil, dan diakhiri dengan sapuan warna kuas.",
    explanation_correct: "Jawaban Benar: 1. Ide/Gagasan (menentukan konsep hewan laut), 2. Persiapan alat-bahan, 3. Pembuatan Sketsa (kerangka tipis pensil), 4. Pewarnaan & Finishing."
  },
  {
    id: "q_35",
    type: "essay",
    level: "L1",
    question: "Dalam teknik mewarnai gambar dua dimensi, jelaskan apa yang dimaksud dengan teknik menggambar \"Arsir\" (Hatching) dan teknik \"Pointilis\"!",
    correctAnswer: "Teknik Arsir membuat goresan garis sejajar/menyilang untuk bayangan gelap terang. Teknik Pointilis membuat susunan titik-titik warna hingga membentuk gambar utuh.",
    explanation_wrong: "📌 Tips Belajar: Arsir mengandalkan garis berulang sejajar, sedangkan Pointilis mengandalkan ketukan ujung pena/pensil membentuk jutaan bintik-bintik kecil.",
    explanation_correct: "Jawaban Benar: Arsir adalah teknik arsir garis sejajar/menyilang untuk gradasi kegelapan. Pointilis adalah teknik mewarnai menggunakan kumpulan titik kerapatan warna."
  },
  {
    id: "q_36",
    type: "essay",
    level: "L1",
    question: "Karya seni rupa terapan (applied art) memiliki fungsi pakai sehari-hari di samping keindahannya. Sebutkan 3 contoh benda hasil seni rupa terapan tradisional yang ada di rumah Anda!",
    correctAnswer: "1. Batik (pakaian). 2. Bakul nasi dari anyaman bambu. 3. Guci keramik hias sebagai wadah penyimpanan.",
    explanation_wrong: "📌 Tips Belajar: Pikirkan peralatan rumah tangga di dapur atau lemari pakaian yang memiliki ukiran/hiasan indah namun dipakai sehari-hari.",
    explanation_correct: "Jawaban Benar: Pakaian kain batik tulis, bakul/tudung saji anyaman bambu, dan gerabah tempayan air berbahan tanah liat bakar berpola hias."
  },
  {
    id: "q_37",
    type: "essay",
    level: "L2",
    question: "Jelaskan langkah aman mewarnai gambar menggunakan teknik sapuan basah cat air (Aquarel) agar menghasilkan efek transparan cemerlang tanpa merobek kertas gambar!",
    correctAnswer: "Mengencerkan cat air dengan air yang cukup banyak, disapukan tipis menggunakan kuas lembut di atas kertas watercolor tebal secara perlahan tanpa digosok berulang kali.",
    explanation_wrong: "📌 Tips Belajar: Kuncinya adalah cat air diencerkan dengan air melimpah, disapu kuas sekali gores halus di atas kertas khusus berukuran minimal 200 gram.",
    explanation_correct: "Jawaban Benar: Menggunakan perbandingan air lebih banyak dibanding pigmen cat, menyapukan kuas secara tipis (layering) di atas kertas cat air tebal agar air terserap rata."
  },
  {
    id: "q_38",
    type: "essay",
    level: "L2",
    question: "Diberikan 3 buah unsur seni rupa berikut: \"Garis zig-zag tajam, Bidang lingkaran besar, dan Pilihan Warna Primer\". Rancanglah sebuah ide konsep lukisan dekoratif dua dimensi sederhana yang kreatif dari unsur tersebut!",
    correctAnswer: "Saya akan menggambar lingkaran besar sebagai kelopak tengah bunga matahari, dikelilingi garis zig-zag tajam sebagai mahkota bunga luar, lalu diwarnai kuning-merah primer yang kontras.",
    explanation_wrong: "📌 Tips Belajar: Satukan lingkaran besar sebagai badan/inti objek, garis zig-zag sebagai pancaran luar (sinar/kelopak), dan warnai dengan merah-kuning primer menyala.",
    explanation_correct: "Jawaban Benar: Konsep dekoratif bunga matahari bersinar: Lingkaran sebagai mahkota tengah, dikelilingi garis zig-zag tajam sebagai sinar matahari, diwarnai kuning dan merah primer."
  },
  {
    id: "q_39",
    type: "essay",
    level: "L2",
    question: "Mengapa kegiatan daur ulang sampah plastik bekas rumah tangga menjadi kerajinan tas belanja atau wadah pensil bernilai seni memiliki dampak penting bagi pelestarian lingkungan?",
    correctAnswer: "Karena sampah plastik sulit terurai tanah selama ratusan tahun. Dengan mendaur ulang, kita mengurangi penumpukan sampah plastik di lingkungan dan mencegah polusi tanah/laut.",
    explanation_wrong: "📌 Tips Belajar: Plastik bersifat anorganik (tidak bisa busuk/hancur alami). Jika dibiarkan menumpuk akan meracuni tanah, menyumbat got banjir, dan merusak laut.",
    explanation_correct: "Jawaban Benar: Plastik kemasan butuh waktu ratusan tahun untuk hancur. Daur ulang kerajinan memperpanjang masa pakai plastik (Reuse), menekan jumlah sampah anorganik, dan melestarikan ekosistem."
  },
  {
    id: "q_40",
    type: "essay",
    level: "L3",
    question: "Saat berkunjung ke pameran seni dan melihat sebuah patung kayu ukiran tradisional khas Papua yang dikerjakan secara manual dengan tingkat ketelitian tinggi, jelaskan bagaimana apresiasi emosional dan kesimpulan perasaan Anda terhadap karya tersebut!",
    correctAnswer: "Saya merasa sangat kagum, bangga, dan menghargai karya tersebut karena dibuat dengan tangan terampil secara manual dengan kerumitan tinggi tanpa bantuan mesin modern, mencerminkan kekayaan budaya bangsa.",
    explanation_wrong: "📌 Tips Belajar: Apresiasi mencakup rasa kagum terhadap kerumitan kerajinan tangan manual pemahat lokal dan kebanggaan atas lestarinya warisan budaya asli Nusantara.",
    explanation_correct: "Jawaban Benar: Merasa kagum dan bangga. Mengapresiasi ketekunan manual pemahat tradisional Suku Asmat Papua yang menjaga orisinalitas nilai spiritual adat dan teknik warisan leluhur Indonesia."
  }
];

async function insertSeni() {
  try {
    const subjRef = doc(db, 'artifacts/portal-ujian-sekolah-dbe8e/public/data/subjects/subject_seni_2026');
    await setDoc(subjRef, {
      title: "Seni Rupa (SBD)",
      description: "Kisi-kisi ASKA Seni Rupa Kelas 5-6. Mengulas unsur visual dasar, karya 2D/3D, seni anyaman, serta daur ulang sampah.",
      summary: htmlSummary,
      questions: questions,
      isLocked: false 
    });
    console.log("SUCCESS: Seni Rupa Subject injected successfully!");
    process.exit(0);
  } catch (error) {
    console.error("ERROR injecting Seni Rupa:", error);
    process.exit(1);
  }
}

insertSeni();
