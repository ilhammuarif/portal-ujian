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

const questions = [
  {
    id: "q_1", type: "pg", level: "L1",
    question: "Which of the following tastes is correct for a lemon?",
    options: ["Sweet", "Sour", "Salty", "Bitter"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Silakan pelajari kembali BAB 1 tentang Rasa Makanan (Taste of Food). \nLemon adalah jeruk yang rasanya sangat kecut (asam). Dalam pilihan yang ada, ingatlah bahwa Sweet adalah untuk gula, Salty untuk garam, dan Bitter untuk obat. Manakah bahasa Inggris untuk rasa asam?",
    explanation_correct: "Pilihan: A. Sweet, B. Sour, C. Salty, D. Bitter.\n\nJawaban Benar: B. Sour.\nPenjelasan: Lemon adalah buah yang memiliki rasa kecut atau asam. Dalam bahasa Inggris, rasa asam disebut 'Sour'.\n- Sweet = manis (salah, karena lemon tidak manis seperti gula).\n- Salty = asin (salah, karena lemon bukan garam).\n- Bitter = pahit (salah, karena lemon tidak sepahit obat)."
  },
  {
    id: "q_2", type: "pg", level: "L2",
    question: "Rearrange these letters to form a correct taste: S - T - E - W - E",
    options: ["Seweet", "Stewee", "Sweet", "Wsteet"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Buka kembali BAB 1 tentang Rasa Makanan. \nHuruf acak S-T-E-W-E ini jika disusun akan menjadi nama rasa yang dimiliki oleh permen atau gula (Manis). Perhatikan penempatan huruf double 'E' yang benar di antara pilihan tersebut.",
    explanation_correct: "Pilihan: A. Seweet, B. Stewee, C. Sweet, D. Wsteet.\n\nJawaban Benar: C. Sweet.\nPenjelasan: Jika huruf S-T-E-W-E disusun dengan benar, akan membentuk kata 'Sweet' yang artinya Manis. Pilihan lainnya adalah kata palsu yang ejaannya salah."
  },
  {
    id: "q_31", type: "essay", level: "L2",
    question: "Read the dialogue:\nAndi: How does the medicine taste?\nBudi: It tastes ...\nWhat is the suitable answer to complete Budi's response?",
    explanation_wrong: "📌 Tips Belajar: Coba ingat lagi materi Rasa Makanan. \nKata kunci di soal ini adalah 'Medicine' (Obat). Sebagian besar obat rasanya tidak enak di lidah (pahit). Tulislah terjemahan bahasa Inggris dari rasa pahit.",
    explanation_correct: "Jawaban Benar: Bitter.\nPenjelasan: 'Medicine' artinya obat. Rasa dominan dari obat adalah pahit. Dalam bahasa Inggris, rasa pahit disebut 'Bitter'. Jika siswa menjawab sour/salty/sweet, itu kurang tepat secara umum untuk obat."
  },
  {
    id: "q_3", type: "pg", level: "L2",
    question: "Look at the picture in your mind (A cup of tea). What do we say to express the quantity?",
    options: ["A slice of tea", "A cup of tea", "A bowl of tea", "A plate of tea"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Materi tentang Porsi Makanan (Quantity). \nTeh (Tea) adalah minuman panas. Minuman panas biasanya tidak diletakkan di piring (plate) atau mangkuk (bowl), melainkan di sebuah cangkir. Ingat apa bahasa Inggrisnya cangkir?",
    explanation_correct: "Pilihan: A. A slice of tea, B. A cup of tea, C. A bowl of tea, D. A plate of tea.\n\nJawaban Benar: B. A cup of tea.\nPenjelasan: \n- Cup = secangkir. Sangat cocok untuk minuman panas (teh/kopi).\n- Slice = sepotong (salah, teh tidak bisa dipotong).\n- Bowl = semangkuk (salah, teh tidak diminum dari mangkuk).\n- Plate = sepiring (salah, teh akan tumpah di piring)."
  },
  {
    id: "q_4", type: "pg", level: "L3",
    question: "Arrange these words: of - water - a - I - drink - glass",
    options: ["I drink a glass of water", "I glass a drink of water", "A glass of water drink I", "Drink I a glass of water"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Pelajari susunan kalimat dasar bahasa Inggris. \nKalimat selalu diawali dengan Pelaku/Subjek (I), diikuti dengan Kata Kerja/Aktivitas (Drink), dan diakhiri dengan Benda/Porsi (Segelas air). Coba susun sesuai rumus: Pelaku + Aktivitas + Benda.",
    explanation_correct: "Pilihan: A. I drink a glass of water, B. I glass a drink of water, C. A glass of water drink I, D. Drink I a glass of water.\n\nJawaban Benar: A. I drink a glass of water.\nPenjelasan: Struktur kalimat yang benar adalah Subjek + Kata Kerja + Objek. \n- Subjek: I (Saya)\n- Kata Kerja: drink (minum)\n- Objek (Porsi): a glass of water (segelas air).\nKalimat pada pilihan lainnya strukturnya terbalik dan tidak masuk akal."
  },
  {
    id: "q_5", type: "pg", level: "L3",
    question: "A plate of fried rice is Rp. 15.000. A glass of iced tea is Rp. 5.000. How much do they cost in total?",
    options: ["Fifteen thousand rupiahs", "Twenty thousand rupiahs", "Ten thousand rupiahs", "Twenty five thousand rupiahs"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Pelajari BAB 1 tentang Harga (The Price). \nIni adalah soal matematika sederhana. Nasi goreng (15) + Es teh (5) = 20. Kamu hanya perlu mencari terjemahan angka 20 (Twenty) lalu ditambahkan kata 'Thousand' (Ribuan).",
    explanation_correct: "Pilihan: A. Fifteen thousand, B. Twenty thousand, C. Ten thousand, D. Twenty five thousand.\n\nJawaban Benar: B. Twenty thousand rupiahs.\nPenjelasan: Mari kita hitung: Nasi goreng (15.000) + Es teh (5.000) = Total 20.000. \nAngka 20 dalam bahasa Inggris adalah 'Twenty', dan Ribu adalah 'Thousand'. Jadi 20.000 adalah 'Twenty thousand'."
  },
  {
    id: "q_6", type: "pg", level: "L2",
    question: "Based on the menu: Burger = Rp 25.000. What is the price of a Burger in English?",
    options: ["Twenty five thousand rupiahs", "Twelve thousand rupiahs", "Fifty thousand rupiahs", "Twenty thousand rupiahs"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Ingat kembali materi angka puluhan. \nAngka 25 dibaca Dua Puluh Lima (Twenty-five). Jangan terkecoh dengan angka dua belas (Twelve) atau lima puluh (Fifty).",
    explanation_correct: "Pilihan: A. Twenty five thousand, B. Twelve thousand, C. Fifty thousand, D. Twenty thousand.\n\nJawaban Benar: A. Twenty five thousand rupiahs.\nPenjelasan: Angka 25 dibaca 'Twenty-five'. Karena ada ribuan (.000), maka ditambahkan 'thousand'. Pilihan B (Twelve = 12), C (Fifty = 50), dan D (Twenty = 20) semuanya salah."
  },
  {
    id: "q_32", type: "essay", level: "L1",
    question: "Nisa buys a bowl of meatball for Rp. 12.000 and orange juice for Rp. 8.000. How much is the total price she must pay? (Write in English!)",
    explanation_wrong: "📌 Tips Belajar: Latihan menjumlahkan harga (Price). \nKamu harus menjumlahkan 12 + 8 terlebih dahulu. Hasilnya adalah 20. Nah, tulislah angka dua puluh ribu tersebut menggunakan ejaan huruf bahasa Inggris yang benar.",
    explanation_correct: "Jawaban Benar: Twenty thousand rupiahs.\nPenjelasan: Bakso 12.000 + Jus 8.000 = Total 20.000. Siswa harus menuliskannya dalam kata bahasa Inggris, yaitu 'Twenty thousand rupiahs'. Kesalahan yang sering terjadi adalah siswa hanya menulis angka (20.000) tanpa mengejanya."
  },
  {
    id: "q_7", type: "pg", level: "L1",
    question: "A person who eats too much spicy food will probably get...",
    options: ["Toothache", "Stomachache", "Headache", "Earache"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Buka BAB 1 tentang Penyakit Umum (Health Problems). \nMakanan yang terlalu pedas (spicy) akan masuk dan melukai lambung kita. Penyakit yang berhubungan dengan lambung berawalan 'Stomach-'. Pilih jawaban yang mengandung kata tersebut.",
    explanation_correct: "Pilihan: A. Toothache, B. Stomachache, C. Headache, D. Earache.\n\nJawaban Benar: B. Stomachache.\nPenjelasan: Makanan pedas (spicy) masuk ke dalam perut dan lambung. Terlalu banyak makan pedas akan memicu sakit perut (Stomachache). \n- Toothache = Sakit gigi (akibat yang manis-manis).\n- Headache = Sakit kepala.\n- Earache = Sakit telinga."
  },
  {
    id: "q_8", type: "pg", level: "L3",
    question: "Budi has a terrible toothache. What should he do?",
    options: ["He should go to the dentist", "He should eat more candies", "He should drink cold water", "He should run away"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Pahami logika medis dasar di materi Health Problems. \nBudi sedang sakit gigi (Toothache). Logikanya, ia tidak boleh memakan hal manis lagi atau minum es dingin. Ia harus segera pergi ke dokter yang ahli merawat gigi (Dentist).",
    explanation_correct: "Pilihan: A. Go to the dentist, B. Eat more candies, C. Drink cold water, D. Run away.\n\nJawaban Benar: A. He should go to the dentist.\nPenjelasan: Jika Budi sakit gigi (toothache), maka solusi paling logis adalah pergi ke dokter gigi (dentist). Pilihan B (makan permen) akan memperparah sakitnya. Pilihan C (minum air dingin) bisa membuat linu. Pilihan D (kabur) tidak akan menyembuhkan sakitnya."
  },
  {
    id: "q_33", type: "essay", level: "L2",
    question: "Write two steps of what you should do when you get a cold/fever!",
    explanation_wrong: "📌 Tips Belajar: Baca rangkuman tentang Penyakit Demam/Flu (Cold/Fever). \nTubuh yang sakit demam sangat butuh dua hal: Obat (Medicine) dan Istirahat (Rest). Buatlah kalimat perintah yang mengandung kedua hal tersebut.",
    explanation_correct: "Jawaban Benar: Take medicine and get some rest (Atau kalimat serupa).\nPenjelasan: Jika demam/flu (cold/fever), dua hal utama yang harus dilakukan adalah meminum obat (take medicine) dan beristirahat (get some rest / sleep). Siswa yang menjawab 'go to the doctor' juga dibenarkan."
  },
  {
    id: "q_9", type: "pg", level: "L1",
    question: "Which of the following clothes is usually worn at home to sleep?",
    options: ["Uniform", "Jacket", "Pajamas", "Tie"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Pelajari BAB 2 tentang Jenis Pakaian (Clothes). \nKata kunci di soal adalah 'sleep' (tidur). Pakaian khusus tidur tidak mungkin berupa dasi (Tie) atau seragam (Uniform). Carilah kosa kata yang artinya Piyama.",
    explanation_correct: "Pilihan: A. Uniform, B. Jacket, C. Pajamas, D. Tie.\n\nJawaban Benar: C. Pajamas.\nPenjelasan: 'Sleep' artinya tidur. Pakaian yang didesain khusus untuk tidur adalah baju piyama (Pajamas). \n- Uniform = Seragam sekolah.\n- Jacket = Jaket (dipakai saat di luar/dingin).\n- Tie = Dasi (dipakai di acara formal/sekolah)."
  },
  {
    id: "q_10", type: "pg", level: "L3",
    question: "Siti is going to school on Monday. What should she wear according to the school rule?",
    options: ["Pajamas", "Red and white uniform", "T-shirt", "Swimsuit"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Ingat budaya sekolah di materi Clothes. \nSiti pergi ke sekolah (school) di hari Senin (Monday). Sesuai aturan SD, tidak mungkin ia memakai kaos (T-Shirt) atau baju tidur (Pajamas). Pilih pakaian seragam wajib sekolah.",
    explanation_correct: "Pilihan: A. Pajamas, B. Red and white uniform, C. T-shirt, D. Swimsuit.\n\nJawaban Benar: B. Red and white uniform.\nPenjelasan: Sesuai aturan SD (school rule) di Indonesia, pada hari Senin (Monday) siswa wajib menggunakan seragam merah putih (Red and white uniform). Tidak mungkin Siti memakai baju tidur (A), kaos oblong (C), atau baju renang (D) untuk pergi ke sekolah."
  },
  {
    id: "q_11", type: "pg", level: "L2",
    question: "Head, Shoulder, ..., and Toes.",
    options: ["Fingers", "Knees", "Eyes", "Hair"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Nyanyikan lagu Head, Shoulders di BAB 2. \nLagu ini menyebutkan anggota tubuh dari atas ke bawah. Setelah pundak (shoulder), turun ke lutut, lalu jari kaki (toes). Apa bahasa Inggris dari lutut?",
    explanation_correct: "Pilihan: A. Fingers, B. Knees, C. Eyes, D. Hair.\n\nJawaban Benar: B. Knees.\nPenjelasan: Ini adalah lirik lagu anggota tubuh anak-anak yang terkenal: 'Head, shoulders, KNEES, and toes' (Kepala, pundak, lutut, kaki). Knees artinya lutut."
  },
  {
    id: "q_12", type: "pg", level: "L3",
    question: "Which match is correct between the body part and its function?",
    options: ["Eyes - to hear", "Ears - to see", "Nose - to smell", "Hands - to walk"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Pahami Fungsi Anggota Tubuh (Functions of Body Parts). \nPeriksa kecocokannya: Apakah mata (eyes) untuk mendengar (hear)? Tidak. Apakah hidung (nose) untuk bernapas/mencium bau (smell)? Cari pasangan tubuh dan kata kerja yang paling masuk akal.",
    explanation_correct: "Pilihan: A. Eyes to hear, B. Ears to see, C. Nose to smell, D. Hands to walk.\n\nJawaban Benar: C. Nose - to smell.\nPenjelasan: \n- Hidung (Nose) fungsinya mencium bau (to smell). Ini sangat tepat.\n- Pilihan A salah, mata (eyes) harusnya untuk melihat (to see), bukan mendengar.\n- Pilihan B salah, telinga (ears) harusnya untuk mendengar (to hear), bukan melihat.\n- Pilihan D salah, tangan (hands) bukan untuk berjalan (to walk)."
  },
  {
    id: "q_34", type: "essay", level: "L1",
    question: "Explain the function of our legs!",
    explanation_wrong: "📌 Tips Belajar: Baca ulang BAB 2 tentang Fungsi Kaki. \nKaki (Legs) adalah alat gerak bawah kita. Coba sebutkan 2 aktivitas gerak yang biasa kita lakukan dengan kaki (berjalan, berlari) dalam bahasa Inggris.",
    explanation_correct: "Jawaban Benar: To walk / To run / To stand.\nPenjelasan: 'Legs' artinya kaki. Fungsi utama kaki pada manusia adalah untuk berjalan (walk), berlari (run), atau berdiri (stand). Jawaban apapun yang mengandung kata-kata aktivitas kaki ini akan dibenarkan."
  },
  {
    id: "q_13", type: "pg", level: "L1",
    question: "Which word below is an adjective?",
    options: ["Run", "Beautiful", "Table", "Eat"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Pelajari BAB 3 tentang Kata Sifat (Adjectives). \nKata sifat mendeskripsikan keadaan benda/orang (seperti tinggi, pendek, sedih, cantik). Sedangkan Run (lari) dan Eat (makan) adalah aktivitas gerak. Table (meja) adalah nama benda.",
    explanation_correct: "Pilihan: A. Run, B. Beautiful, C. Table, D. Eat.\n\nJawaban Benar: B. Beautiful.\nPenjelasan: 'Adjective' adalah kata sifat (kata yang menggambarkan sesuatu). Beautiful artinya 'Cantik', yang mana merupakan sifat seseorang/benda. \n- Run (berlari) & Eat (makan) adalah kata kerja (verb).\n- Table (meja) adalah kata benda (noun)."
  },
  {
    id: "q_14", type: "pg", level: "L2",
    question: "An elephant is ... than a mouse.",
    options: ["Big", "Bigger", "Biggest", "More big"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Pelajari aturan perbandingan (Comparative). \nSoal ini membandingkan Gajah (Elephant) dengan Tikus (Mouse). Jika membandingkan dua benda dan ada kata 'than', kamu hanya perlu menambahkan huruf '-er' di ujung kata sifat dasar.",
    explanation_correct: "Pilihan: A. Big, B. Bigger, C. Biggest, D. More big.\n\nJawaban Benar: B. Bigger.\nPenjelasan: Karena ada kata 'than' (daripada), maka kita harus menggunakan tingkat lebih (Comparative). Kata 'Big' ditambah akhiran '-er' menjadi 'Bigger'. 'More big' adalah grammar yang salah."
  },
  {
    id: "q_15", type: "pg", level: "L3",
    question: "Among all the students in the class, Ali is the ...",
    options: ["Smart", "Smarter", "Smartest", "More smart"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Pelajari aturan Superlative (Tingkat Paling). \nKalimat ini menyebut Ali mengalahkan *seluruh siswa di kelas*, sehingga ia berada di tingkat PALING. Awalan wajibnya adalah 'The' dan diakhiri dengan '-est'.",
    explanation_correct: "Pilihan: A. Smart, B. Smarter, C. Smartest, D. More smart.\n\nJawaban Benar: C. Smartest.\nPenjelasan: Kalimat ini membandingkan Ali dengan *seluruh siswa* di kelas. Ini berarti tingkat Paling (Superlative). Superlative ditandai dengan awalan 'the' dan akhiran '-est'. Jadi yang tepat adalah 'the smartest' (paling pintar)."
  },
  {
    id: "q_35", type: "essay", level: "L3",
    question: "Make a simple sentence using the adjective 'Happy'!",
    explanation_wrong: "📌 Tips Belajar: Pahami cara menyusun kalimat Adjective. \nKata sifat (Happy) tidak bisa berdiri sendiri di belakang subjek. Kamu wajib menaruh kata penghubung (to-be) seperti is, am, atau are di tengahnya. Contoh: Subjek + is/am/are + Happy.",
    explanation_correct: "Jawaban Benar: I am happy / She is very happy (Atau kalimat serupa yang masuk akal).\nPenjelasan: Siswa diminta merangkai kalimat dengan kata sifat 'Happy' (Senang). Siswa harus ingat menggunakan subjek dan to-be (is/am/are) sebelum kata sifatnya. Kesalahan umum: 'I happy' tanpa 'am'."
  },
  {
    id: "q_16", type: "pg", level: "L1",
    question: "When do we celebrate Pancasila Day?",
    options: ["June 1st", "August 17th", "May 2nd", "April 21st"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Ingat materi Hari Nasional. \nSetiap tanggal 1 Juni, siswa SD di Indonesia merayakan Hari Lahir Pancasila. August 17th adalah hari Kemerdekaan.",
    explanation_correct: "Pilihan: A. June 1st, B. August 17th, C. May 2nd, D. April 21st.\n\nJawaban Benar: A. June 1st.\nPenjelasan: Hari lahir Pancasila selalu dirayakan pada tanggal 1 Juni (June 1st). \n- August 17th adalah Hari Kemerdekaan.\n- May 2nd adalah Hari Pendidikan Nasional.\n- April 21st adalah Hari Kartini."
  },
  {
    id: "q_36", type: "essay", level: "L2",
    question: "Today is Monday, August 15th. What date and day is tomorrow?",
    explanation_wrong: "📌 Tips Belajar: Pahami kata waktu (Today vs Tomorrow). \nToday artinya 'Hari ini'. Jika hari ini Senin tanggal 15, maka Tomorrow (Besok) adalah hari setelah Senin (Selasa) dan angka setelah 15 (16). Tulislah dengan ejaan yang benar.",
    explanation_correct: "Jawaban Benar: Tomorrow is Tuesday, August 16th.\nPenjelasan: Jika hari ini (Today) adalah Senin tanggal 15, maka besok (Tomorrow) adalah hari Selasa (Tuesday) tanggal 16. Siswa sering lupa menerjemahkan 'Besok' dan malah menerjemahkan 'Kemarin'."
  },
  {
    id: "q_17", type: "pg", level: "L2",
    question: "I ... a delicious cake yesterday.",
    options: ["Eat", "Eaten", "Ate", "Eating"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Buka BAB 4 tentang Masa Lalu (Past Tense). \nKata kuncinya adalah 'Yesterday' (Kemarin). Berarti kita WAJIB menggunakan Verb 2 (Kata kerja bentuk lampau). Cari tahu bentuk kedua dari kata 'Eat'.",
    explanation_correct: "Pilihan: A. Eat, B. Eaten, C. Ate, D. Eating.\n\nJawaban Benar: C. Ate.\nPenjelasan: Karena ada kata 'yesterday' (kemarin), kalimat ini adalah Past Tense. Dalam Past Tense, kita wajib memakai Verb 2 (kata kerja bentuk kedua). Bentuk Verb 2 dari Eat adalah Ate."
  },
  {
    id: "q_18", type: "pg", level: "L3",
    question: "She visited her grandmother ...",
    options: ["Tomorrow", "Next week", "Now", "Last week"],
    correctAnswer: 3,
    explanation_wrong: "📌 Tips Belajar: Perhatikan bentuk kata kerjanya di BAB 4. \nKata 'visited' berakhiran -ed. Ini artinya kegiatan ini SUDAH LEWAT. Jadi carilah keterangan waktu yang menyatakan masa lalu, bukan masa depan (seperti Tomorrow/Next week).",
    explanation_correct: "Pilihan: A. Tomorrow, B. Next week, C. Now, D. Last week.\n\nJawaban Benar: D. Last week.\nPenjelasan: Kata kerja 'visited' (mengunjungi) diakhiri '-ed' yang menandakan kejadian masa lalu (Past Tense). Oleh karena itu, keterangan waktunya juga harus masa lalu. \n- Tomorrow, Next week (Masa depan)\n- Now (Masa sekarang)\n- Last week (Minggu lalu -> Masa lalu). Inilah jawaban yang tepat!"
  },
  {
    id: "q_19", type: "pg", level: "L1",
    question: "They ... very happy yesterday.",
    options: ["Are", "Is", "Were", "Was"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Pelajari aturan Was / Were. \nKejadiannya 'yesterday' (lampau). Jadi buang pilihan Are/Is. Lalu ingat, karena subjeknya 'They' (Mereka / Lebih dari satu), kita harus memakai pasangan to-be yang bentuk jamak.",
    explanation_correct: "Pilihan: A. Are, B. Is, C. Were, D. Was.\n\nJawaban Benar: C. Were.\nPenjelasan: Karena kejadiannya 'yesterday' (lampau), kita tidak bisa memakai Is/Am/Are. Pilihannya tinggal Was atau Were. Subjek 'They' (Mereka) adalah jamak, jadi pasangan yang tepat adalah 'Were'. 'Was' hanya untuk tunggal (I, He, She, It)."
  },
  {
    id: "q_20", type: "pg", level: "L2",
    question: "Arrange this: at - I - library - yesterday - was - the",
    options: ["I was yesterday at the library", "I was at the library yesterday", "At the library I yesterday was", "Yesterday was I at the library"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Pelajari susunan baku kalimat bahasa Inggris. \nUrutan yang paling natural adalah Subjek dahulu (I), lalu kata kerjanya (was), lalu sebutkan Tempatnya (at the library), dan selesaikan dengan keterangan Waktu di paling belakang (yesterday).",
    explanation_correct: "Pilihan: A. I was yesterday at the library, B. I was at the library yesterday, C. At the library I yesterday was, D. Yesterday was I at the library.\n\nJawaban Benar: B. I was at the library yesterday.\nPenjelasan: Susunan kalimat bahasa Inggris yang standar adalah: Subjek (I) + To-be lampau (was) + Tempat (at the library) + Keterangan Waktu di belakang (yesterday). Pilihan B memiliki susunan yang sempurna."
  },
  {
    id: "q_21", type: "pg", level: "L1",
    question: "... did you go last night? I went to the cinema.",
    options: ["What", "When", "Where", "Who"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Pahami Fungsi Kata Tanya (WH-Questions). \nLihat jawaban yang diberikan: 'I went to the cinema' (Saya pergi ke bioskop). Karena bioskop adalah sebuah TEMPAT, maka pertanyaan yang tepat adalah menanyakan arah/tempat (Di mana/Ke mana).",
    explanation_correct: "Pilihan: A. What, B. When, C. Where, D. Who.\n\nJawaban Benar: C. Where.\nPenjelasan: Jawabannya adalah 'I went to the cinema' (Saya pergi ke bioskop). Bioskop adalah sebuah TEMPAT. Kata tanya untuk menanyakan tempat adalah 'Where' (Di mana / Ke mana). \n- What = Apa\n- When = Kapan\n- Who = Siapa"
  },
  {
    id: "q_22", type: "pg", level: "L2",
    question: "A: ...? \nB: I played football yesterday.",
    options: ["What did you do yesterday?", "Where did you go yesterday?", "When did you play football?", "Who played football?"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Logika tanya-jawab dalam Past Tense. \nJawaban Si B adalah tentang SEBUAH AKTIVITAS ('Saya bermain bola'). Jadi pertanyaan Si A harusnya berbunyi 'Apa aktivitas yang kamu LAKUKAN (Do)?', bukan menanyakan di mana (Where) atau kapan (When).",
    explanation_correct: "Pilihan: A. What did you do yesterday?, B. Where did you go yesterday?, C. When did you play football?, D. Who played football?\n\nJawaban Benar: A. What did you do yesterday?.\nPenjelasan: Jawaban Si B adalah 'Saya bermain bola kemarin'. Ini adalah sebuah aktivitas (kegiatan). Jadi Si A pasti bertanya 'Apa yang kamu LAKUKAN kemarin?' (What did you do yesterday?). Jika si A bertanya 'where', maka si B harus menjawab nama tempat."
  },
  {
    id: "q_37", type: "essay", level: "L3",
    question: "Write 2 'WH Questions' about a past activity!",
    explanation_wrong: "📌 Tips Belajar: Berlatih merumuskan pertanyaan masa lampau. \nRumus utamanya: Kata Tanya (What/Where/When) + DID + Subjek (You) + Verb 1 dasar. Pastikan tidak lupa menyisipkan kata 'Did' sebagai tanda masa lalu.",
    explanation_correct: "Jawaban Benar: \n1. Where did you go yesterday? \n2. What did you do last night? (Atau kalimat serupa).\nPenjelasan: Siswa diminta merumuskan dua pertanyaan masa lampau. Ciri utamanya: Harus ada kata 'Did' setelah kata tanya (What/Where/When/Who), dan harus memakai Verb 1 setelah subjek karena sudah ada did."
  },
  {
    id: "q_23", type: "pg", level: "L2",
    question: "Did you watch TV last night? Yes, ...",
    options: ["I do", "I did", "I watch", "I am"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Pelajari Respon Singkat (Short Answers). \nJika seseorang bertanya diawali dengan 'Did...', maka balasan konfirmasi pendekmu juga wajib berakhiran dengan kata yang sama. Sesuaikan awalan pertanyaan dengan jawaban akhir.",
    explanation_correct: "Pilihan: A. I do, B. I did, C. I watch, D. I am.\n\nJawaban Benar: B. I did.\nPenjelasan: Dalam bahasa Inggris, jika pertanyaan pendek diawali dengan kata 'Did', maka balasan singkatnya juga wajib menggunakan 'did'. Jadi: Yes, I did."
  },
  {
    id: "q_38", type: "essay", level: "L1",
    question: "Tell me one activity you did last Sunday in English!",
    explanation_wrong: "📌 Tips Belajar: Praktik menulis kejadian masa lalu (Past). \nPoin yang paling sering salah adalah penggunaan Verb 1. Pastikan apapun aktivitasmu, ubahlah kata kerjanya menjadi Verb 2 (Misal: Go menjadi Went, Play menjadi Played).",
    explanation_correct: "Jawaban Benar: I played football / I went to the zoo / I slept all day (Contoh jawaban).\nPenjelasan: Siswa bebas bercerita kegiatannya hari minggu lalu. Poin penting penilaian: Siswa HARUS menggunakan kata kerja bentuk ke-2 (Verb 2) seperti played, went, ate, visited."
  },
  {
    id: "q_24", type: "pg", level: "L1",
    question: "I ... go to Jakarta tomorrow.",
    options: ["Will", "Am", "Was", "Did"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Buka BAB 4 tentang Masa Depan (Future). \nTerdapat kata kunci 'tomorrow' (besok). Ini berarti rencananya belum terjadi (akan terjadi). Dalam bahasa Inggris, tanda utama sebuah masa depan adalah penggunaan kata penolong 'Will'.",
    explanation_correct: "Pilihan: A. Will, B. Am, C. Was, D. Did.\n\nJawaban Benar: A. Will.\nPenjelasan: Terdapat kata 'tomorrow' (besok), yang berarti kejadian ini belum terjadi. Untuk masa depan, kita wajib menggunakan kata penolong 'Will' (Akan). Was dan Did digunakan untuk masa lalu."
  },
  {
    id: "q_25", type: "pg", level: "L2",
    question: "Will you help me clean the room? ...",
    options: ["Yes, I do", "Yes, I am", "Yes, I will", "Yes, I was"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Seperti halnya 'Did', aturan respon juga berlaku untuk 'Will'. \nJika sebuah pertanyaan meminta konfirmasi di masa depan dan diawali dengan 'Will you...', maka jawabannya wajib ditutup dengan kata 'Will' juga.",
    explanation_correct: "Pilihan: A. Yes I do, B. Yes I am, C. Yes I will, D. Yes I was.\n\nJawaban Benar: C. Yes, I will.\nPenjelasan: Pertanyaan diawali dengan kata pembantu 'Will' (Will you...). Maka, jawaban konfirmasi singkatnya juga harus menggunakan 'will'. (Yes, I will)."
  },
  {
    id: "q_26", type: "pg", level: "L2",
    question: "My father ... a new car next month.",
    options: ["Buy", "Will buy", "Bought", "Buys"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Perhatikan keterangan waktu (Next Month). \n'Bulan depan' belum terjadi. Jadi kegiatan ini adalah rencana masa depan. Cari pilihan yang menggabungkan kata 'Akan' (Will) dengan kata kerja dasar.",
    explanation_correct: "Pilihan: A. Buy, B. Will buy, C. Bought, D. Buys.\n\nJawaban Benar: B. Will buy.\nPenjelasan: 'Next month' berarti bulan depan (masa depan). Oleh karena itu, kita harus menggunakan kombinasi 'Will' (Akan) + Kata Kerja (Verb 1). Pilihan B (Will buy / Akan membeli) adalah jawaban mutlak."
  },
  {
    id: "q_39", type: "essay", level: "L2",
    question: "Write one sentence about what your family will do next holiday!",
    explanation_wrong: "📌 Tips Belajar: Latihan membuat rencana masa depan. \nSusunlah dengan rumus: Subjek (My family) + Will + Aktivitas liburan (Go to the zoo / Visit grandma). Pastikan kamu menggunakan kata 'Will' di dalam kalimat.",
    explanation_correct: "Jawaban Benar: My family will go to the beach / We will visit grandma (Atau kalimat serupa).\nPenjelasan: Siswa diminta merencanakan kegiatan liburannya. Penilaian: Harus ada subjek (My family / We), wajib menggunakan kata 'will', lalu diikuti oleh kata kerja dasar (go, visit, play)."
  },
  {
    id: "q_27", type: "pg", level: "L1",
    question: "We will have a test ...",
    options: ["Yesterday", "Last week", "Next week", "Two days ago"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Pahami keterangan waktu masa depan. \nKarena kalimatnya ada kata 'Will' (Akan), berarti acaranya belum terjadi. Yesterday (Kemarin) dan Last week (Minggu lalu) sudah usang. Carilah opsi waktu masa depan.",
    explanation_correct: "Pilihan: A. Yesterday, B. Last week, C. Next week, D. Two days ago.\n\nJawaban Benar: C. Next week.\nPenjelasan: Kalimat ini menggunakan 'will' (akan terjadi). Maka kita harus mencari keterangan waktu masa depan. \n- Yesterday (kemarin), Last week (minggu lalu), Two days ago (2 hari lalu) semuanya sudah lewat. \n- Next week (minggu depan) adalah satu-satunya masa depan."
  },
  {
    id: "q_28", type: "pg", level: "L2",
    question: "Arrange: W - O - R - O - R - O - M - T",
    options: ["Tomorow", "Tomorrow", "Morowtom", "Rotomow"],
    correctAnswer: 1,
    explanation_wrong: "📌 Tips Belajar: Pelajari ejaan kata (Spelling). \nKata ini berarti 'Besok' dalam bahasa Inggris. Banyak siswa terjebak dengan huruf gandanya. Ingatlah: Huruf 'M'-nya hanya ada satu, tapi huruf 'R'-nya ada dua!",
    explanation_correct: "Pilihan: A. Tomorow, B. Tomorrow, C. Morowtom, D. Rotomow.\n\nJawaban Benar: B. Tomorrow.\nPenjelasan: Kata bahasa Inggris untuk 'besok' adalah 'Tomorrow'. Siswa sering tertipu di ejaan huruf. Tomorrow memiliki SATU huruf M dan DUA huruf R (To-mor-row)."
  },
  {
    id: "q_29", type: "pg", level: "L1",
    question: "I want to cure sick people. I want to be a ...",
    options: ["Teacher", "Farmer", "Doctor", "Pilot"],
    correctAnswer: 2,
    explanation_wrong: "📌 Tips Belajar: Buka materi tentang Cita-Cita (Dreams). \nFokus pada kalimat 'cure sick people' yang artinya 'menyembuhkan orang sakit'. Profesi apakah yang bekerja di rumah sakit? Jelas bukan guru (Teacher) atau supir pesawat (Pilot).",
    explanation_correct: "Pilihan: A. Teacher, B. Farmer, C. Doctor, D. Pilot.\n\nJawaban Benar: C. Doctor.\nPenjelasan: Profesi yang bertugas menyembuhkan orang sakit (cure sick people) adalah seorang dokter (Doctor). Teacher = Guru, Farmer = Petani, Pilot = Supir pesawat."
  },
  {
    id: "q_30", type: "pg", level: "L2",
    question: "He loves flying airplanes. He wants to be a ...",
    options: ["Pilot", "Driver", "Sailor", "Chef"],
    correctAnswer: 0,
    explanation_wrong: "📌 Tips Belajar: Kenali hobi dan kaitan profesinya. \nKata 'flying airplanes' (menerbangkan pesawat udara) sangat identik dengan sebuah profesi. Ingat, profesi ini berbeda dengan supir darat (Driver) maupun pelaut kapal (Sailor).",
    explanation_correct: "Pilihan: A. Pilot, B. Driver, C. Sailor, D. Chef.\n\nJawaban Benar: A. Pilot.\nPenjelasan: Seseorang yang suka menerbangkan pesawat terbang (airplanes) memiliki cita-cita menjadi seorang Pilot. Driver = supir mobil, Sailor = pelaut, Chef = koki memasak."
  },
  {
    id: "q_40", type: "essay", level: "L2",
    question: "Arrange these sentences to make a good paragraph: \n1. I want to be a teacher.\n2. My name is Budi.\n3. Because I like teaching children.",
    explanation_wrong: "📌 Tips Belajar: Latihan menyusun alur cerita (Paragraf). \nDalam bahasa apapun, saat bercerita kamu wajib 1) Memperkenalkan nama, 2) Menyebutkan cita-cita, 3) Menjelaskan alasannya (menggunakan 'Because'). Susunlah angka-angka tersebut sesuai urutan.",
    explanation_correct: "Jawaban Benar: Urutan yang benar adalah 2 - 1 - 3.\nPenjelasan: \nParagraf yang baik harus masuk akal alurnya:\n1) Perkenalan diri (My name is Budi - 2)\n2) Menyebutkan cita-cita (I want to be a teacher - 1)\n3) Menyebutkan alasannya (Because I like teaching children - 3)."
  }
];

async function updateBothExplanations() {
  try {
    const subjRef = doc(db, 'artifacts/portal-ujian-sekolah-dbe8e/public/data/subjects/subject_english_aska');
    await updateDoc(subjRef, { questions: questions });
    console.log("SUCCESS: Split explanations into wrong and correct modes in Firestore!");
    process.exit(0);
  } catch (error) {
    console.error("ERROR updating questions:", error);
    process.exit(1);
  }
}

updateBothExplanations();
