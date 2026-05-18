import { initializeApp } from 'firebase/app';
import { getFirestore, doc, updateDoc, getDoc } from 'firebase/firestore';

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

const newQuestions = [
  // --- TASTE OF FOOD AND DRINK ---
  {
    id: "q_1", type: "pg", level: "L1",
    question: "Which of the following tastes is correct for a lemon?",
    options: ["Sweet", "Sour", "Salty", "Bitter"],
    correctAnswer: 1, hint: "Rasanya membuat mata terpejam.", 
    explanation: "📌 Tips Belajar: Silakan pelajari kembali BAB 1 tentang Rasa Makanan (Taste of Food). \nLemon adalah jeruk yang rasanya sangat kecut (asam). Dalam pilihan yang ada, ingatlah bahwa Sweet adalah untuk gula, Salty untuk garam, dan Bitter untuk obat. Manakah bahasa Inggris untuk rasa asam?"
  },
  {
    id: "q_2", type: "pg", level: "L2",
    question: "Rearrange these letters to form a correct taste: S - T - E - W - E",
    options: ["Seweet", "Stewee", "Sweet", "Wsteet"],
    correctAnswer: 2, hint: "Rasa dari permen dan gula.", 
    explanation: "📌 Tips Belajar: Buka kembali BAB 1 tentang Rasa Makanan. \nHuruf acak S-T-E-W-E ini jika disusun akan menjadi nama rasa yang dimiliki oleh permen atau gula (Manis). Perhatikan penempatan huruf double 'E' yang benar di antara pilihan tersebut."
  },
  {
    id: "q_31", type: "essay", level: "L2",
    question: "Read the dialogue:\nAndi: How does the medicine taste?\nBudi: It tastes ...\nWhat is the suitable answer to complete Budi's response?",
    hint: "Obat biasanya tidak enak.", 
    explanation: "📌 Tips Belajar: Coba ingat lagi materi Rasa Makanan. \nKata kunci di soal ini adalah 'Medicine' (Obat). Sebagian besar obat rasanya tidak enak di lidah (pahit). Tulislah terjemahan bahasa Inggris dari rasa pahit."
  },
  // --- QUANTITY ---
  {
    id: "q_3", type: "pg", level: "L2",
    question: "Look at the picture in your mind (A cup of tea). What do we say to express the quantity?",
    options: ["A slice of tea", "A cup of tea", "A bowl of tea", "A plate of tea"],
    correctAnswer: 1, hint: "Teh biasanya diminum dengan cangkir.", 
    explanation: "📌 Tips Belajar: Materi tentang Porsi Makanan (Quantity). \nTeh (Tea) adalah minuman panas. Minuman panas biasanya tidak diletakkan di piring (plate) atau mangkuk (bowl), melainkan di sebuah cangkir. Ingat apa bahasa Inggrisnya cangkir?"
  },
  {
    id: "q_4", type: "pg", level: "L3",
    question: "Arrange these words: of - water - a - I - drink - glass",
    options: ["I drink a glass of water", "I glass a drink of water", "A glass of water drink I", "Drink I a glass of water"],
    correctAnswer: 0, hint: "Dimulai dengan subjek (I).", 
    explanation: "📌 Tips Belajar: Pelajari susunan kalimat dasar bahasa Inggris. \nKalimat selalu diawali dengan Pelaku/Subjek (I), diikuti dengan Kata Kerja/Aktivitas (Drink), dan diakhiri dengan Benda/Porsi (Segelas air). Coba susun sesuai rumus: Pelaku + Aktivitas + Benda."
  },
  // --- PRICE ---
  {
    id: "q_5", type: "pg", level: "L3",
    question: "A plate of fried rice is Rp. 15.000. A glass of iced tea is Rp. 5.000. How much do they cost in total?",
    options: ["Fifteen thousand rupiahs", "Twenty thousand rupiahs", "Ten thousand rupiahs", "Twenty five thousand rupiahs"],
    correctAnswer: 1, hint: "15.000 + 5.000 = 20.000", 
    explanation: "📌 Tips Belajar: Pelajari BAB 1 tentang Harga (The Price). \nIni adalah soal matematika sederhana. Nasi goreng (15) + Es teh (5) = 20. Kamu hanya perlu mencari terjemahan angka 20 (Twenty) lalu ditambahkan kata 'Thousand' (Ribuan)."
  },
  {
    id: "q_6", type: "pg", level: "L2",
    question: "Based on the menu: Burger = Rp 25.000. What is the price of a Burger in English?",
    options: ["Twenty five thousand rupiahs", "Twelve thousand rupiahs", "Fifty thousand rupiahs", "Twenty thousand rupiahs"],
    correctAnswer: 0, hint: "25 = twenty five", 
    explanation: "📌 Tips Belajar: Ingat kembali materi angka puluhan. \nAngka 25 dibaca Dua Puluh Lima (Twenty-five). Jangan terkecoh dengan angka dua belas (Twelve) atau lima puluh (Fifty)."
  },
  {
    id: "q_32", type: "essay", level: "L1",
    question: "Nisa buys a bowl of meatball for Rp. 12.000 and orange juice for Rp. 8.000. How much is the total price she must pay? (Write in English!)",
    hint: "12.000 + 8.000 = 20.000.", 
    explanation: "📌 Tips Belajar: Latihan menjumlahkan harga (Price). \nKamu harus menjumlahkan 12 + 8 terlebih dahulu. Hasilnya adalah 20. Nah, tulislah angka dua puluh ribu tersebut menggunakan ejaan huruf bahasa Inggris yang benar."
  },
  // --- HEALTH PROBLEMS ---
  {
    id: "q_7", type: "pg", level: "L1",
    question: "A person who eats too much spicy food will probably get...",
    options: ["Toothache", "Stomachache", "Headache", "Earache"],
    correctAnswer: 1, hint: "Perutnya yang akan sakit.", 
    explanation: "📌 Tips Belajar: Buka BAB 1 tentang Penyakit Umum (Health Problems). \nMakanan yang terlalu pedas (spicy) akan masuk dan melukai lambung kita. Penyakit yang berhubungan dengan lambung berawalan 'Stomach-'. Pilih jawaban yang mengandung kata tersebut."
  },
  {
    id: "q_8", type: "pg", level: "L3",
    question: "Budi has a terrible toothache. What should he do?",
    options: ["He should go to the dentist", "He should eat more candies", "He should drink cold water", "He should run away"],
    correctAnswer: 0, hint: "Dokter khusus gigi.", 
    explanation: "📌 Tips Belajar: Pahami logika medis dasar di materi Health Problems. \nBudi sedang sakit gigi (Toothache). Logikanya, ia tidak boleh memakan hal manis lagi atau minum es dingin. Ia harus segera pergi ke dokter yang ahli merawat gigi (Dentist)."
  },
  {
    id: "q_33", type: "essay", level: "L2",
    question: "Write two steps of what you should do when you get a cold/fever!",
    hint: "Minum obat dan istirahat.", 
    explanation: "📌 Tips Belajar: Baca rangkuman tentang Penyakit Demam/Flu (Cold/Fever). \nTubuh yang sakit demam sangat butuh dua hal: Obat (Medicine) dan Istirahat (Rest). Buatlah kalimat perintah yang mengandung kedua hal tersebut."
  },
  // --- CLOTHES ---
  {
    id: "q_9", type: "pg", level: "L1",
    question: "Which of the following clothes is usually worn at home to sleep?",
    options: ["Uniform", "Jacket", "Pajamas", "Tie"],
    correctAnswer: 2, hint: "Baju tidur.", 
    explanation: "📌 Tips Belajar: Pelajari BAB 2 tentang Jenis Pakaian (Clothes). \nKata kunci di soal adalah 'sleep' (tidur). Pakaian khusus tidur tidak mungkin berupa dasi (Tie) atau seragam (Uniform). Carilah kosa kata yang artinya Piyama."
  },
  {
    id: "q_10", type: "pg", level: "L3",
    question: "Siti is going to school on Monday. What should she wear according to the school rule?",
    options: ["Pajamas", "Red and white uniform", "T-shirt", "Swimsuit"],
    correctAnswer: 1, hint: "Seragam hari Senin.", 
    explanation: "📌 Tips Belajar: Ingat budaya sekolah di materi Clothes. \nSiti pergi ke sekolah (school) di hari Senin (Monday). Sesuai aturan SD, tidak mungkin ia memakai kaos (T-Shirt) atau baju tidur (Pajamas). Pilih pakaian seragam wajib sekolah."
  },
  // --- BODY PARTS ---
  {
    id: "q_11", type: "pg", level: "L2",
    question: "Head, Shoulder, ..., and Toes.",
    options: ["Fingers", "Knees", "Eyes", "Hair"],
    correctAnswer: 1, hint: "Lutut.", 
    explanation: "📌 Tips Belajar: Nyanyikan lagu Head, Shoulders di BAB 2. \nLagu ini menyebutkan anggota tubuh dari atas ke bawah. Setelah pundak (shoulder), turun ke lutut, lalu jari kaki (toes). Apa bahasa Inggris dari lutut?"
  },
  {
    id: "q_12", type: "pg", level: "L3",
    question: "Which match is correct between the body part and its function?",
    options: ["Eyes - to hear", "Ears - to see", "Nose - to smell", "Hands - to walk"],
    correctAnswer: 2, hint: "Hidung untuk mencium bau.", 
    explanation: "📌 Tips Belajar: Pahami Fungsi Anggota Tubuh (Functions of Body Parts). \nPeriksa kecocokannya: Apakah mata (eyes) untuk mendengar (hear)? Tidak. Apakah hidung (nose) untuk bernapas/mencium bau (smell)? Cari pasangan tubuh dan kata kerja yang paling masuk akal."
  },
  {
    id: "q_34", type: "essay", level: "L1",
    question: "Explain the function of our legs!",
    hint: "Kaki untuk apa?", 
    explanation: "📌 Tips Belajar: Baca ulang BAB 2 tentang Fungsi Kaki. \nKaki (Legs) adalah alat gerak bawah kita. Coba sebutkan 2 aktivitas gerak yang biasa kita lakukan dengan kaki (berjalan, berlari) dalam bahasa Inggris."
  },
  // --- ADJECTIVES ---
  {
    id: "q_13", type: "pg", level: "L1",
    question: "Which word below is an adjective?",
    options: ["Run", "Beautiful", "Table", "Eat"],
    correctAnswer: 1, hint: "Kata yang mendeskripsikan sesuatu.", 
    explanation: "📌 Tips Belajar: Pelajari BAB 3 tentang Kata Sifat (Adjectives). \nKata sifat mendeskripsikan keadaan benda/orang (seperti tinggi, pendek, sedih, cantik). Sedangkan Run (lari) dan Eat (makan) adalah aktivitas gerak. Table (meja) adalah nama benda."
  },
  {
    id: "q_14", type: "pg", level: "L2",
    question: "An elephant is ... than a mouse.",
    options: ["Big", "Bigger", "Biggest", "More big"],
    correctAnswer: 1, hint: "Ada kata 'than' berarti perbandingan tingkat lebih.", 
    explanation: "📌 Tips Belajar: Pelajari aturan perbandingan (Comparative). \nSoal ini membandingkan Gajah (Elephant) dengan Tikus (Mouse). Jika membandingkan dua benda dan ada kata 'than', kamu hanya perlu menambahkan huruf '-er' di ujung kata sifat dasar."
  },
  {
    id: "q_15", type: "pg", level: "L3",
    question: "Among all the students in the class, Ali is the ...",
    options: ["Smart", "Smarter", "Smartest", "More smart"],
    correctAnswer: 2, hint: "Tingkat paling (superlative).", 
    explanation: "📌 Tips Belajar: Pelajari aturan Superlative (Tingkat Paling). \nKalimat ini menyebut Ali mengalahkan *seluruh siswa di kelas*, sehingga ia berada di tingkat PALING. Awalan wajibnya adalah 'The' dan diakhiri dengan '-est'."
  },
  {
    id: "q_35", type: "essay", level: "L3",
    question: "Make a simple sentence using the adjective 'Happy'!",
    hint: "Buat kalimat: Saya merasa senang.", 
    explanation: "📌 Tips Belajar: Pahami cara menyusun kalimat Adjective. \nKata sifat (Happy) tidak bisa berdiri sendiri di belakang subjek. Kamu wajib menaruh kata penghubung (to-be) seperti is, am, atau are di tengahnya. Contoh: Subjek + is/am/are + Happy."
  },
  // --- DATE AND MONTH ---
  {
    id: "q_16", type: "pg", level: "L1",
    question: "When do we celebrate Pancasila Day?",
    options: ["June 1st", "August 17th", "May 2nd", "April 21st"],
    correctAnswer: 0, hint: "Hari Lahir Pancasila.", 
    explanation: "📌 Tips Belajar: Ingat materi Hari Nasional. \nSetiap tanggal 1 Juni, siswa SD di Indonesia merayakan Hari Lahir Pancasila. August 17th adalah hari Kemerdekaan."
  },
  {
    id: "q_36", type: "essay", level: "L2",
    question: "Today is Monday, August 15th. What date and day is tomorrow?",
    hint: "Besok hari apa dan tanggal berapa?", 
    explanation: "📌 Tips Belajar: Pahami kata waktu (Today vs Tomorrow). \nToday artinya 'Hari ini'. Jika hari ini Senin tanggal 15, maka Tomorrow (Besok) adalah hari setelah Senin (Selasa) dan angka setelah 15 (16). Tulislah dengan ejaan yang benar."
  },
  // --- PAST ACTIVITIES (CLASS VI) ---
  {
    id: "q_17", type: "pg", level: "L2",
    question: "I ... a delicious cake yesterday.",
    options: ["Eat", "Eaten", "Ate", "Eating"],
    correctAnswer: 2, hint: "Bentuk Verb 2 dari Eat.", 
    explanation: "📌 Tips Belajar: Buka BAB 4 tentang Masa Lalu (Past Tense). \nKata kuncinya adalah 'Yesterday' (Kemarin). Berarti kita WAJIB menggunakan Verb 2 (Kata kerja bentuk lampau). Cari tahu bentuk kedua dari kata 'Eat'."
  },
  {
    id: "q_18", type: "pg", level: "L3",
    question: "She visited her grandmother ...",
    options: ["Tomorrow", "Next week", "Now", "Last week"],
    correctAnswer: 3, hint: "Keterangan Waktu lampau.", 
    explanation: "📌 Tips Belajar: Perhatikan bentuk kata kerjanya di BAB 4. \nKata 'visited' berakhiran -ed. Ini artinya kegiatan ini SUDAH LEWAT. Jadi carilah keterangan waktu yang menyatakan masa lalu, bukan masa depan (seperti Tomorrow/Next week)."
  },
  {
    id: "q_19", type: "pg", level: "L1",
    question: "They ... very happy yesterday.",
    options: ["Are", "Is", "Were", "Was"],
    correctAnswer: 2, hint: "Subject 'They' menggunakan to be lampau jamak.", 
    explanation: "📌 Tips Belajar: Pelajari aturan Was / Were. \nKejadiannya 'yesterday' (lampau). Jadi buang pilihan Are/Is. Lalu ingat, karena subjeknya 'They' (Mereka / Lebih dari satu), kita harus memakai pasangan to-be yang bentuk jamak."
  },
  {
    id: "q_20", type: "pg", level: "L2",
    question: "Arrange this: at - I - library - yesterday - was - the",
    options: ["I was yesterday at the library", "I was at the library yesterday", "At the library I yesterday was", "Yesterday was I at the library"],
    correctAnswer: 1, hint: "S + was + Keterangan Tempat + Keterangan Waktu.", 
    explanation: "📌 Tips Belajar: Pelajari susunan baku kalimat bahasa Inggris. \nUrutan yang paling natural adalah Subjek dahulu (I), lalu kata kerjanya (was), lalu sebutkan Tempatnya (at the library), dan selesaikan dengan keterangan Waktu di paling belakang (yesterday)."
  },
  {
    id: "q_21", type: "pg", level: "L1",
    question: "... did you go last night? I went to the cinema.",
    options: ["What", "When", "Where", "Who"],
    correctAnswer: 2, hint: "Jawabannya menunjuk tempat (cinema).", 
    explanation: "📌 Tips Belajar: Pahami Fungsi Kata Tanya (WH-Questions). \nLihat jawaban yang diberikan: 'I went to the cinema' (Saya pergi ke bioskop). Karena bioskop adalah sebuah TEMPAT, maka pertanyaan yang tepat adalah menanyakan arah/tempat (Di mana/Ke mana)."
  },
  {
    id: "q_22", type: "pg", level: "L2",
    question: "A: ...? \nB: I played football yesterday.",
    options: ["What did you do yesterday?", "Where did you go yesterday?", "When did you play football?", "Who played football?"],
    correctAnswer: 0, hint: "Menanyakan suatu kegiatan yang dilakukan.", 
    explanation: "📌 Tips Belajar: Logika tanya-jawab dalam Past Tense. \nJawaban Si B adalah tentang SEBUAH AKTIVITAS ('Saya bermain bola'). Jadi pertanyaan Si A harusnya berbunyi 'Apa aktivitas yang kamu LAKUKAN (Do)?', bukan menanyakan di mana (Where) atau kapan (When)."
  },
  {
    id: "q_37", type: "essay", level: "L3",
    question: "Write 2 'WH Questions' about a past activity!",
    hint: "Contoh: Where did you go? What did you eat?", 
    explanation: "📌 Tips Belajar: Berlatih merumuskan pertanyaan masa lampau. \nRumus utamanya: Kata Tanya (What/Where/When) + DID + Subjek (You) + Verb 1 dasar. Pastikan tidak lupa menyisipkan kata 'Did' sebagai tanda masa lalu."
  },
  {
    id: "q_23", type: "pg", level: "L2",
    question: "Did you watch TV last night? Yes, ...",
    options: ["I do", "I did", "I watch", "I am"],
    correctAnswer: 1, hint: "Sesuai dengan awalan pertanyaannya.", 
    explanation: "📌 Tips Belajar: Pelajari Respon Singkat (Short Answers). \nJika seseorang bertanya diawali dengan 'Did...', maka balasan konfirmasi pendekmu juga wajib berakhiran dengan kata yang sama. Sesuaikan awalan pertanyaan dengan jawaban akhir."
  },
  {
    id: "q_38", type: "essay", level: "L1",
    question: "Tell me one activity you did last Sunday in English!",
    hint: "Gunakan kalimat lampau (Verb 2).", 
    explanation: "📌 Tips Belajar: Praktik menulis kejadian masa lalu (Past). \nPoin yang paling sering salah adalah penggunaan Verb 1. Pastikan apapun aktivitasmu, ubahlah kata kerjanya menjadi Verb 2 (Misal: Go menjadi Went, Play menjadi Played)."
  },
  // --- FUTURE AND WILL ---
  {
    id: "q_24", type: "pg", level: "L1",
    question: "I ... go to Jakarta tomorrow.",
    options: ["Will", "Am", "Was", "Did"],
    correctAnswer: 0, hint: "Tomorrow = Besok (Masa depan).", 
    explanation: "📌 Tips Belajar: Buka BAB 4 tentang Masa Depan (Future). \nTerdapat kata kunci 'tomorrow' (besok). Ini berarti rencananya belum terjadi (akan terjadi). Dalam bahasa Inggris, tanda utama sebuah masa depan adalah penggunaan kata penolong 'Will'."
  },
  {
    id: "q_25", type: "pg", level: "L2",
    question: "Will you help me clean the room? ...",
    options: ["Yes, I do", "Yes, I am", "Yes, I will", "Yes, I was"],
    correctAnswer: 2, hint: "Respon harus senada dengan awalan pertanyaan.", 
    explanation: "📌 Tips Belajar: Seperti halnya 'Did', aturan respon juga berlaku untuk 'Will'. \nJika sebuah pertanyaan meminta konfirmasi di masa depan dan diawali dengan 'Will you...', maka jawabannya wajib ditutup dengan kata 'Will' juga."
  },
  {
    id: "q_26", type: "pg", level: "L2",
    question: "My father ... a new car next month.",
    options: ["Buy", "Will buy", "Bought", "Buys"],
    correctAnswer: 1, hint: "Next month artinya bulan depan.", 
    explanation: "📌 Tips Belajar: Perhatikan keterangan waktu (Next Month). \n'Bulan depan' belum terjadi. Jadi kegiatan ini adalah rencana masa depan. Cari pilihan yang menggabungkan kata 'Akan' (Will) dengan kata kerja dasar."
  },
  {
    id: "q_39", type: "essay", level: "L2",
    question: "Write one sentence about what your family will do next holiday!",
    hint: "Keluargaku akan... (Gunakan Will).", 
    explanation: "📌 Tips Belajar: Latihan membuat rencana masa depan. \nSusunlah dengan rumus: Subjek (My family) + Will + Aktivitas liburan (Go to the zoo / Visit grandma). Pastikan kamu menggunakan kata 'Will' di dalam kalimat."
  },
  // --- ADVERB OF FUTURE ---
  {
    id: "q_27", type: "pg", level: "L1",
    question: "We will have a test ...",
    options: ["Yesterday", "Last week", "Next week", "Two days ago"],
    correctAnswer: 2, hint: "Ada kata 'will', cari keterangan waktu depan.", 
    explanation: "📌 Tips Belajar: Pahami keterangan waktu masa depan. \nKarena kalimatnya ada kata 'Will' (Akan), berarti acaranya belum terjadi. Yesterday (Kemarin) dan Last week (Minggu lalu) sudah usang. Carilah opsi waktu masa depan."
  },
  {
    id: "q_28", type: "pg", level: "L2",
    question: "Arrange: W - O - R - O - R - O - M - T",
    options: ["Tomorow", "Tomorrow", "Morowtom", "Rotomow"],
    correctAnswer: 1, hint: "Bahasa inggrisnya 'besok', huruf M-nya cuma satu atau dua?", 
    explanation: "📌 Tips Belajar: Pelajari ejaan kata (Spelling). \nKata ini berarti 'Besok' dalam bahasa Inggris. Banyak siswa terjebak dengan huruf gandanya. Ingatlah: Huruf 'M'-nya hanya ada satu, tapi huruf 'R'-nya ada dua!"
  },
  // --- DREAM IN THE FUTURE ---
  {
    id: "q_29", type: "pg", level: "L1",
    question: "I want to cure sick people. I want to be a ...",
    options: ["Teacher", "Farmer", "Doctor", "Pilot"],
    correctAnswer: 2, hint: "Cure sick people = menyembuhkan orang sakit.", 
    explanation: "📌 Tips Belajar: Buka materi tentang Cita-Cita (Dreams). \nFokus pada kalimat 'cure sick people' yang artinya 'menyembuhkan orang sakit'. Profesi apakah yang bekerja di rumah sakit? Jelas bukan guru (Teacher) atau supir pesawat (Pilot)."
  },
  {
    id: "q_30", type: "pg", level: "L2",
    question: "He loves flying airplanes. He wants to be a ...",
    options: ["Pilot", "Driver", "Sailor", "Chef"],
    correctAnswer: 0, hint: "Flying airplanes = menerbangkan pesawat.", 
    explanation: "📌 Tips Belajar: Kenali hobi dan kaitan profesinya. \nKata 'flying airplanes' (menerbangkan pesawat udara) sangat identik dengan sebuah profesi. Ingat, profesi ini berbeda dengan supir darat (Driver) maupun pelaut kapal (Sailor)."
  },
  {
    id: "q_40", type: "essay", level: "L2",
    question: "Arrange these sentences to make a good paragraph: \n1. I want to be a teacher.\n2. My name is Budi.\n3. Because I like teaching children.",
    hint: "Perkenalan diri dulu, sebutkan cita-cita, lalu sebutkan alasannya.", 
    explanation: "📌 Tips Belajar: Latihan menyusun alur cerita (Paragraf). \nDalam bahasa apapun, saat bercerita kamu wajib 1) Memperkenalkan nama, 2) Menyebutkan cita-cita, 3) Menjelaskan alasannya (menggunakan 'Because'). Susunlah angka-angka tersebut sesuai urutan."
  }
];

async function updateAllQuestions() {
  try {
    const subjRef = doc(db, 'artifacts/portal-ujian-sekolah-dbe8e/public/data/subjects/subject_english_aska');
    await updateDoc(subjRef, { questions: newQuestions });
    console.log("SUCCESS: Explanations updated to be hints/tips without revealing answers.");
    process.exit(0);
  } catch (error) {
    console.error("ERROR updating questions:", error);
    process.exit(1);
  }
}

updateAllQuestions();
