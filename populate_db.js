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

const subjectData = {
  title: "Bahasa Inggris ASKA (Kelas 5 & 6)",
  description: "Ujian Sumatif Akhir Kelas 6 mencakup materi Taste of Food, Price, Body Parts, Past Activities, hingga Future Dream.",
  summary: "MOHON DIBACA:\n\nUjian ini berisi 40 soal yang terdiri dari 30 soal Pilihan Ganda dan 10 soal Uraian.\n\nMateri yang diujikan meliputi:\n1. Kosa kata makanan, minuman, harga, dan porsi.\n2. Nama-nama bagian tubuh dan penyakit.\n3. Kata sifat (Adjectives), Perbandingan (Comparative/Superlative).\n4. Kegiatan masa lalu (Past Tense - was/were).\n5. Kegiatan masa depan dan cita-cita (Future Tense - will).\n\nBerdoalah sebelum mengerjakan, perhatikan waktu di pojok layar, dan teliti dalam memilih jawaban!",
  questions: [
    // --- TASTE OF FOOD AND DRINK ---
    {
      id: "q_1", type: "pg", level: "L1",
      question: "Which of the following tastes is correct for a lemon?",
      options: ["Sweet", "Sour", "Salty", "Bitter"],
      correctAnswer: 1, hint: "Rasanya membuat mata terpejam.", explanation: "Lemon has a sour (asam) taste."
    },
    {
      id: "q_2", type: "pg", level: "L2",
      question: "Rearrange these letters to form a correct taste: S - T - E - W - E",
      options: ["Seweet", "Stewee", "Sweet", "Wsteet"],
      correctAnswer: 2, hint: "Rasa dari permen dan gula.", explanation: "S-W-E-E-T means manis."
    },
    {
      id: "q_31", type: "essay", level: "L2",
      question: "Read the dialogue:\nAndi: How does the medicine taste?\nBudi: It tastes ...\nWhat is the suitable answer to complete Budi's response?",
      hint: "Obat biasanya tidak enak.", explanation: "Obat biasanya terasa pahit (bitter)."
    },
    // --- QUANTITY ---
    {
      id: "q_3", type: "pg", level: "L2",
      question: "Look at the picture in your mind (A cup of tea). What do we say to express the quantity?",
      options: ["A slice of tea", "A cup of tea", "A bowl of tea", "A plate of tea"],
      correctAnswer: 1, hint: "Teh biasanya diminum dengan cangkir.", explanation: "We use 'cup' for hot drinks like tea or coffee."
    },
    {
      id: "q_4", type: "pg", level: "L3",
      question: "Arrange these words: of - water - a - I - drink - glass",
      options: ["I drink a glass of water", "I glass a drink of water", "A glass of water drink I", "Drink I a glass of water"],
      correctAnswer: 0, hint: "Dimulai dengan subjek (I).", explanation: "I (Subject) + drink (verb) + a glass of water (object)."
    },
    // --- PRICE ---
    {
      id: "q_5", type: "pg", level: "L3",
      question: "A plate of fried rice is Rp. 15.000. A glass of iced tea is Rp. 5.000. How much do they cost in total?",
      options: ["Fifteen thousand rupiahs", "Twenty thousand rupiahs", "Ten thousand rupiahs", "Twenty five thousand rupiahs"],
      correctAnswer: 1, hint: "15.000 + 5.000 = 20.000", explanation: "15.000 + 5.000 = 20.000 (Twenty thousand)."
    },
    {
      id: "q_6", type: "pg", level: "L2",
      question: "Based on the menu: Burger = Rp25.000. What is the price of a Burger in English?",
      options: ["Twenty five thousand rupiahs", "Twelve thousand rupiahs", "Fifty thousand rupiahs", "Twenty thousand rupiahs"],
      correctAnswer: 0, hint: "25 = twenty five", explanation: "25.000 is twenty five thousand rupiahs."
    },
    {
      id: "q_32", type: "essay", level: "L1",
      question: "Nisa buys a bowl of meatball for Rp. 12.000 and orange juice for Rp. 8.000. How much is the total price she must pay? (Write in English!)",
      hint: "12.000 + 8.000 = 20.000.", explanation: "The total is twenty thousand rupiahs."
    },
    // --- HEALTH PROBLEMS ---
    {
      id: "q_7", type: "pg", level: "L1",
      question: "A person who eats too much spicy food will probably get...",
      options: ["Toothache", "Stomachache", "Headache", "Earache"],
      correctAnswer: 1, hint: "Perutnya yang akan sakit.", explanation: "Spicy food affects the stomach (stomachache)."
    },
    {
      id: "q_8", type: "pg", level: "L3",
      question: "Budi has a terrible toothache. What should he do?",
      options: ["He should go to the dentist", "He should eat more candies", "He should drink cold water", "He should run away"],
      correctAnswer: 0, hint: "Dokter khusus gigi.", explanation: "A dentist is a doctor for teeth."
    },
    {
      id: "q_33", type: "essay", level: "L2",
      question: "Write two steps of what you should do when you get a cold/fever!",
      hint: "Minum obat dan istirahat.", explanation: "Example: Take some medicine and get some rest."
    },
    // --- CLOTHES ---
    {
      id: "q_9", type: "pg", level: "L1",
      question: "Which of the following clothes is usually worn at home to sleep?",
      options: ["Uniform", "Jacket", "Pajamas", "Tie"],
      correctAnswer: 2, hint: "Baju tidur.", explanation: "Pajamas are clothes for sleeping."
    },
    {
      id: "q_10", type: "pg", level: "L3",
      question: "Siti is going to school on Monday. What should she wear according to the school rule?",
      options: ["Pajamas", "Red and white uniform", "T-shirt", "Swimsuit"],
      correctAnswer: 1, hint: "Seragam hari Senin.", explanation: "Indonesian elementary school students wear a red and white uniform on Monday."
    },
    // --- BODY PARTS ---
    {
      id: "q_11", type: "pg", level: "L2",
      question: "Head, Shoulder, ..., and Toes.",
      options: ["Fingers", "Knees", "Eyes", "Hair"],
      correctAnswer: 1, hint: "Ingat lagunya.", explanation: "The song goes: Head, shoulders, knees, and toes."
    },
    {
      id: "q_12", type: "pg", level: "L3",
      question: "Which match is correct between the body part and its function?",
      options: ["Eyes - to hear", "Ears - to see", "Nose - to smell", "Hands - to walk"],
      correctAnswer: 2, hint: "Hidung untuk mencium bau.", explanation: "We use our nose to smell."
    },
    {
      id: "q_34", type: "essay", level: "L1",
      question: "Explain the function of our legs!",
      hint: "Kaki untuk apa?", explanation: "Legs are used for walking, running, and standing."
    },
    // --- ADJECTIVES ---
    {
      id: "q_13", type: "pg", level: "L1",
      question: "Which word below is an adjective?",
      options: ["Run", "Beautiful", "Table", "Eat"],
      correctAnswer: 1, hint: "Kata yang mendeskripsikan sesuatu.", explanation: "Beautiful is an adjective (kata sifat)."
    },
    {
      id: "q_14", type: "pg", level: "L2",
      question: "An elephant is ... than a mouse.",
      options: ["Big", "Bigger", "Biggest", "More big"],
      correctAnswer: 1, hint: "Ada kata 'than' berarti lebih.", explanation: "Bigger is the comparative form of big."
    },
    {
      id: "q_15", type: "pg", level: "L3",
      question: "Among all the students in the class, Ali is the ...",
      options: ["Smart", "Smarter", "Smartest", "More smart"],
      correctAnswer: 2, hint: "Paling pintar.", explanation: "Superlative form uses 'the ...est', so it is smartest."
    },
    {
      id: "q_35", type: "essay", level: "L3",
      question: "Make a simple sentence using the adjective 'Happy'!",
      hint: "Buat kalimat: Saya merasa senang.", explanation: "Example: I am very happy today."
    },
    // --- DATE AND MONTH ---
    {
      id: "q_16", type: "pg", level: "L1",
      question: "When do we celebrate Pancasila Day?",
      options: ["June 1st", "August 17th", "May 2nd", "April 21st"],
      correctAnswer: 0, hint: "Hari Lahir Pancasila.", explanation: "Pancasila Day is celebrated on June 1st."
    },
    {
      id: "q_36", type: "essay", level: "L2",
      question: "Today is Monday, August 15th. What date and day is tomorrow?",
      hint: "Besok hari apa dan tanggal berapa?", explanation: "Tomorrow is Tuesday, August 16th."
    },
    // --- PAST ACTIVITIES (CLASS VI) ---
    {
      id: "q_17", type: "pg", level: "L2",
      question: "I ... a delicious cake yesterday.",
      options: ["Eat", "Eaten", "Ate", "Eating"],
      correctAnswer: 2, hint: "Bentuk V2 dari Eat.", explanation: "Ate is the past tense of eat."
    },
    {
      id: "q_18", type: "pg", level: "L3",
      question: "She visited her grandmother ...",
      options: ["Tomorrow", "Next week", "Now", "Last week"],
      correctAnswer: 3, hint: "Waktu lampau.", explanation: "Last week is an adverb of time for past activities."
    },
    {
      id: "q_19", type: "pg", level: "L1",
      question: "They ... very happy yesterday.",
      options: ["Are", "Is", "Were", "Was"],
      correctAnswer: 2, hint: "Subject 'They' menggunakan to be lampau.", explanation: "'They' uses 'were' in the past tense."
    },
    {
      id: "q_20", type: "pg", level: "L2",
      question: "Arrange this: at - I - library - yesterday - was - the",
      options: ["I was yesterday at the library", "I was at the library yesterday", "At the library I yesterday was", "Yesterday was I at the library"],
      correctAnswer: 1, hint: "S + was + Keterangan Tempat + Keterangan Waktu.", explanation: "I was at the library yesterday."
    },
    {
      id: "q_21", type: "pg", level: "L1",
      question: "... did you go last night? I went to the cinema.",
      options: ["What", "When", "Where", "Who"],
      correctAnswer: 2, hint: "Menanyakan tempat.", explanation: "'Where' is used to ask about a place."
    },
    {
      id: "q_22", type: "pg", level: "L2",
      question: "A: ...? \nB: I played football yesterday.",
      options: ["What did you do yesterday?", "Where did you go yesterday?", "When did you play football?", "Who played football?"],
      correctAnswer: 0, hint: "Menanyakan kegiatan.", explanation: "The question asks about the activity done yesterday."
    },
    {
      id: "q_37", type: "essay", level: "L3",
      question: "Write 2 'WH Questions' about a past activity!",
      hint: "Contoh: Where did you go? What did you eat?", explanation: "Example: 1. Where did you go yesterday? 2. What did you eat last night?"
    },
    {
      id: "q_23", type: "pg", level: "L2",
      question: "Did you watch TV last night? Yes, ...",
      options: ["I do", "I did", "I watch", "I am"],
      correctAnswer: 1, hint: "Sesuai dengan kata bantu pertanyaannya.", explanation: "Yes, I did."
    },
    {
      id: "q_38", type: "essay", level: "L1",
      question: "Tell me one activity you did last Sunday in English!",
      hint: "Gunakan Verb 2.", explanation: "Example: I played football with my friends last Sunday."
    },
    // --- FUTURE AND WILL ---
    {
      id: "q_24", type: "pg", level: "L1",
      question: "I ... go to Jakarta tomorrow.",
      options: ["Will", "Am", "Was", "Did"],
      correctAnswer: 0, hint: "Menandakan akan datang.", explanation: "Will is used for future activities."
    },
    {
      id: "q_25", type: "pg", level: "L2",
      question: "Will you help me clean the room? ...",
      options: ["Yes, I do", "Yes, I am", "Yes, I will", "Yes, I was"],
      correctAnswer: 2, hint: "Respon harus senada dengan 'will'.", explanation: "Yes, I will."
    },
    {
      id: "q_26", type: "pg", level: "L2",
      question: "My father ... a new car next month.",
      options: ["Buy", "Will buy", "Bought", "Buys"],
      correctAnswer: 1, hint: "Akan membeli.", explanation: "Will + V1 (buy) for future plan."
    },
    {
      id: "q_39", type: "essay", level: "L2",
      question: "Write one sentence about what your family will do next holiday!",
      hint: "My family will...", explanation: "Example: My family will go to the beach next holiday."
    },
    // --- ADVERB OF FUTURE ---
    {
      id: "q_27", type: "pg", level: "L1",
      question: "We will have a test ...",
      options: ["Yesterday", "Last week", "Next week", "Two days ago"],
      correctAnswer: 2, hint: "Waktu yang akan datang.", explanation: "Next week is a future time adverb."
    },
    {
      id: "q_28", type: "pg", level: "L2",
      question: "Arrange: W - O - R - O - R - O - M - T",
      options: ["Tomorow", "Tomorrow", "Morowtom", "Rotomow"],
      correctAnswer: 1, hint: "Besok dalam bahasa inggris.", explanation: "T-O-M-O-R-R-O-W means besok."
    },
    // --- DREAM IN THE FUTURE ---
    {
      id: "q_29", type: "pg", level: "L1",
      question: "I want to cure sick people. I want to be a ...",
      options: ["Teacher", "Farmer", "Doctor", "Pilot"],
      correctAnswer: 2, hint: "Menyembuhkan orang sakit.", explanation: "A doctor cures sick people."
    },
    {
      id: "q_30", type: "pg", level: "L2",
      question: "He loves flying airplanes. He wants to be a ...",
      options: ["Pilot", "Driver", "Sailor", "Chef"],
      correctAnswer: 0, hint: "Mengemudikan pesawat.", explanation: "A pilot flies an airplane."
    },
    {
      id: "q_40", type: "essay", level: "L2",
      question: "Arrange these sentences to make a good paragraph: \n1. I want to be a teacher.\n2. My name is Budi.\n3. Because I like teaching children.",
      hint: "Perkenalan diri dulu.", explanation: "The correct order: 2 - 1 - 3. (My name is Budi. I want to be a teacher. Because I like teaching children.)"
    }
  ]
};

async function uploadData() {
  try {
    const subjRef = doc(db, 'artifacts/portal-ujian-sekolah-dbe8e/public/data/subjects/subject_english_aska');
    await setDoc(subjRef, subjectData);
    console.log("SUCCESS: 40 questions uploaded to Firestore!");
    process.exit(0);
  } catch (error) {
    console.error("ERROR uploading data:", error);
    process.exit(1);
  }
}

uploadData();
