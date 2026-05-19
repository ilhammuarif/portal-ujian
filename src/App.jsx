import React, { useState, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, doc, setDoc, getDoc, onSnapshot, collection, 
  updateDoc, increment, deleteField, addDoc
} from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { 
  BookOpen, Clock, AlertTriangle, CheckCircle, 
  LogOut, ShieldAlert, Monitor, Settings, Users, Trash2, RotateCcw,
  Plus, Edit, Eye, ArrowRight, ArrowLeft, Save, X, Lock, Unlock
} from 'lucide-react';

// --- FIREBASE CONFIGURATION ---
// Nilai diambil dari environment variables (.env) — tidak hardcode di kode
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Kredensial login diambil dari env — tidak pernah terlihat di kode publik
const ROLES = {
  ADMIN: {
    username: import.meta.env.VITE_ADMIN_USERNAME,
    password: import.meta.env.VITE_ADMIN_PASSWORD
  },
  STUDENT: {
    username: import.meta.env.VITE_STUDENT_USERNAME,
    password: import.meta.env.VITE_STUDENT_PASSWORD
  }
};

// --- MAIN COMPONENT ---
export default function App() {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);
  
  // Login States
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  // Global Data
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    signInAnonymously(auth).then(() => {
      setLoading(false);
    }).catch((error) => {
      console.error("Auth Error:", error);
      setLoading(false);
    });

    const subjectsRef = collection(db, 'artifacts/portal-ujian-sekolah-dbe8e/public/data/subjects');
    const unsubSubjects = onSnapshot(subjectsRef, (snapshot) => {
      const data = [];
      snapshot.forEach(doc => data.push({ id: doc.id, ...doc.data() }));
      setSubjects(data);
    });

    return () => unsubSubjects();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (usernameInput === ROLES.ADMIN.username && passwordInput === ROLES.ADMIN.password) {
      setUser({ role: 'admin', username: usernameInput });
    } else if (usernameInput === ROLES.STUDENT.username && passwordInput === ROLES.STUDENT.password) {
      setUser({ role: 'student', username: usernameInput });
    } else {
      setLoginError('Username atau password salah!');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setUsernameInput('');
    setPasswordInput('');
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50 text-indigo-600"><Monitor className="animate-pulse w-12 h-12" /></div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {user && (
        <nav className="bg-white shadow-sm border-b px-4 md:px-6 py-4 flex flex-row justify-between items-center sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <BookOpen className="text-indigo-600 w-5 h-5 md:w-6 md:h-6" />
            <h1 className="font-bold text-lg md:text-xl text-gray-900 tracking-tight">Portal Ujian</h1>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <span className="text-xs md:text-sm font-medium bg-indigo-50 text-indigo-700 px-2 md:px-3 py-1 rounded-full max-w-[120px] md:max-w-none truncate">
              {user.role === 'admin' ? 'Admin' : `Siswa: ${user.username}`}
            </span>
            <button onClick={handleLogout} className="text-gray-500 hover:text-red-600 transition-colors p-1 md:p-2 flex items-center gap-1" title="Logout">
              <LogOut className="w-5 h-5" /> <span className="hidden sm:inline text-sm font-medium">Keluar</span>
            </button>
          </div>
        </nav>
      )}

      <main className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        {!user && (
          <LoginScreen 
            usernameInput={usernameInput} setUsernameInput={setUsernameInput}
            passwordInput={passwordInput} setPasswordInput={setPasswordInput}
            handleLogin={handleLogin} loginError={loginError}
          />
        )}
        {user?.role === 'student' && <StudentDashboard username={user.username} subjects={subjects} />}
        {user?.role === 'admin' && <AdminDashboard subjects={subjects} />}
      </main>
    </div>
  );
}

// --- LOGIN SCREEN ---
function LoginScreen({ usernameInput, setUsernameInput, passwordInput, setPasswordInput, handleLogin, loginError }) {
  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mb-4">
          <BookOpen className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Selamat Datang</h2>
        <p className="text-gray-500 mt-2">Masuk ke Portal Ujian Terpusat</p>
      </div>
      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input 
            type="text" required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 outline-none"
            value={usernameInput} onChange={(e) => setUsernameInput(e.target.value)} 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            type="password" required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 outline-none"
            value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} 
          />
        </div>
        {loginError && <p className="text-red-500 text-sm font-medium">{loginError}</p>}
        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md">
          Masuk
        </button>
      </form>
    </div>
  );
}

// --- STUDENT DASHBOARD ---
function StudentDashboard({ username, subjects }) {
  const [settings, setSettings] = useState({ readTimeSeconds: 60 });
  const [activeSubject, setActiveSubject] = useState(null);
  const [studentDoc, setStudentDoc] = useState(null);
  const [isCheatWarningVisible, setIsCheatWarningVisible] = useState(false);

  const studentRef = doc(db, `artifacts/portal-ujian-sekolah-dbe8e/public/data/student_records/${username}`);
  const settingsRef = doc(db, 'artifacts/portal-ujian-sekolah-dbe8e/public/data/settings/global');

  useEffect(() => {
    const unsubSettings = onSnapshot(settingsRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setSettings({ readTimeSeconds: data.readTimeSeconds !== undefined ? data.readTimeSeconds : 60 });
      }
    });

    const unsubStudent = onSnapshot(studentRef, (docSnap) => {
      if (docSnap.exists()) {
        setStudentDoc(docSnap.data());
      } else {
        setDoc(studentRef, { cheatCount: 0, subjects: {} }, { merge: true });
      }
    });
    return () => { unsubSettings(); unsubStudent(); };
  }, [username]);

  useEffect(() => {
    const handleBlur = async () => {
      if (activeSubject) {
        setIsCheatWarningVisible(true);
        try {
          await updateDoc(studentRef, { cheatCount: increment(1) });
        } catch(e) { console.error(e) }
      }
    };
    const handleFocus = () => setIsCheatWarningVisible(false);
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (e.key === 'PrintScreen' || (e.ctrlKey && e.key === 's')) {
        e.preventDefault();
        alert("Tindakan tidak diizinkan.");
      }
    };

    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSubject, studentRef]);

  if (!activeSubject) {
    return (
      <div className="space-y-6 md:space-y-8">
        {isCheatWarningVisible && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[90%] md:w-auto bg-red-100 border border-red-400 text-red-700 px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-2xl z-50 flex items-center gap-3 animate-bounce">
            <ShieldAlert className="w-6 h-6 md:w-8 md:h-8" />
            <div>
              <p className="font-bold text-sm md:text-base">Peringatan Kecurangan!</p>
              <p className="text-xs md:text-sm">Sistem mendeteksi Anda keluar dari halaman ujian. Tindakan ini dicatat oleh pengawas.</p>
            </div>
          </div>
        )}

        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">Halo, {username}! 👋</h2>
            <p className="text-gray-500">Pilih mata pelajaran di bawah ini untuk memulai belajar dan ujian.</p>
          </div>
        </div>
        
        {subjects.length === 0 ? (
          <p className="text-gray-500">Belum ada mata pelajaran yang ditambahkan oleh pengawas.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map(subj => (
              <div 
                key={subj.id}
                onClick={() => {
                  if (subj.isLocked) {
                    alert("Ujian ini masih dikunci oleh pengawas. Silakan tunggu instruksi selanjutnya.");
                    return;
                  }
                  setActiveSubject(subj);
                }}
                className={`bg-white p-6 rounded-2xl shadow-sm border ${subj.isLocked ? 'border-gray-200 opacity-60 cursor-not-allowed grayscale-[30%]' : 'border-gray-100 hover:shadow-md hover:border-indigo-200 cursor-pointer'} transition-all group relative`}
              >
                {subj.isLocked && (
                  <div className="absolute top-4 right-4 bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-red-100 shadow-sm">
                    <Lock className="w-3 h-3" /> Terkunci
                  </div>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${subj.isLocked ? 'bg-gray-100 text-gray-400' : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'}`}>
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 pr-12">{subj.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{subj.description}</p>
                
                {studentDoc?.subjects?.[subj.id]?.completed && (
                  <div className="mt-4 flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1.5 rounded-lg text-sm font-medium">
                    <CheckCircle className="w-4 h-4" /> Selesai (Nilai: {studentDoc.subjects[subj.id].score})
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <ExamSession 
        subject={activeSubject} settings={settings} 
        studentRef={studentRef} studentDoc={studentDoc}
        onBack={() => setActiveSubject(null)}
      />
    </>
  );
}

// --- EXAM SESSION (With Pagination & Time Tracking) ---
function ExamSession({ subject, settings, studentRef, studentDoc, onBack }) {
  const existingRecord = studentDoc?.subjects?.[subject.id];
  const [phase, setPhase] = useState(existingRecord?.completed ? 'result' : 'reading'); 
  const [timeLeft, setTimeLeft] = useState(settings.readTimeSeconds);
  
  // Exam States
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeSpent, setTimeSpent] = useState({}); // { qId: seconds }
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Timer for reading phase
  useEffect(() => {
    if (phase === 'reading' && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [phase, timeLeft]);

  // Timer for active question
  useEffect(() => {
    if (phase === 'exam' && !submitted && subject.questions && subject.questions.length > 0) {
      const qId = subject.questions[currentQIndex].id;
      const timer = setInterval(() => {
        setTimeSpent(prev => ({
          ...prev,
          [qId]: (prev[qId] || 0) + 1
        }));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [phase, submitted, currentQIndex, subject]);

  const handleGoBack = () => {
    if (phase === 'exam' && !submitted) {
      if (window.confirm("Peringatan: Jika Anda keluar sekarang, ujian ini akan dibatalkan dan jawaban Anda akan hilang. Yakin ingin kembali?")) {
        onBack();
      }
    } else {
      onBack();
    }
  };

  const handleSubmit = async () => {
    let correctCount = 0;
    const pgQuestions = subject.questions.filter(q => q.type === 'pg');
    
    subject.questions.forEach(q => {
      if (q.type === 'pg' && String(answers[q.id]) === String(q.correctAnswer)) {
        correctCount++;
      }
    });
    
    const calculatedScore = pgQuestions.length > 0 ? Math.round((correctCount / pgQuestions.length) * 100) : 100;
    setScore(calculatedScore);
    setSubmitted(true);
    setPhase('result');

    await setDoc(studentRef, {
      subjects: {
        [subject.id]: {
          completed: true,
          score: calculatedScore,
          answers: answers,
          timeSpent: timeSpent
        }
      }
    }, { merge: true });
  };

  if (phase === 'reading') {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return (
      <div className="max-w-4xl mx-auto">
        <button onClick={handleGoBack} className="mb-4 flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-bold bg-white px-4 py-2 rounded-xl shadow-sm border border-indigo-100 transition-colors w-fit text-sm md:text-base">
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5"/> Kembali
        </button>
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border-2 md:border-4 border-indigo-100">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 md:p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-20 hidden sm:block">
              <BookOpen className="w-64 h-64" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
            <div>
              <h2 className="text-2xl md:text-3xl font-black mb-1 md:mb-2 text-yellow-300 drop-shadow-md">Ayo Belajar Dulu! 🚀</h2>
              <p className="text-indigo-50 text-base md:text-lg font-medium">{subject.title}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/30 text-center w-full md:w-auto">
              <p className="text-xs uppercase tracking-widest font-bold text-indigo-100 mb-1">Waktu Membaca</p>
              <div className="text-2xl md:text-4xl font-mono font-black tabular-nums">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </div>
            </div>     
          </div>
        </div>
        
        {timeLeft === 0 && (
            <div className="p-6">
              <button 
                onClick={() => setPhase('exam')}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold px-8 py-4 rounded-full shadow-lg transform transition hover:scale-105 flex items-center justify-center gap-2"
              >
                Mulai Ujian Sekarang! <ArrowRight className="w-5 h-5" />
              </button>
            </div>
        )}

        <div className="p-8 md:p-12 bg-[#f8fafc]">
          <div 
            className="prose prose-lg md:prose-xl prose-headings:text-indigo-700 prose-a:text-pink-500 max-w-none text-gray-700 leading-loose"
            dangerouslySetInnerHTML={{ __html: subject.summary }}
          />
        </div>

        {timeLeft > 0 && (
          <div className="bg-blue-50 p-6 flex items-center justify-center gap-4 border-t-4 border-blue-100">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600"><AlertTriangle className="w-8 h-8" /></div>
            <p className="text-blue-800 font-bold text-lg">Pahami materi di atas baik-baik ya! Ujian akan otomatis terbuka saat waktu habis.</p>
          </div>
        )}
        </div>
      </div>
    );
  }

  if (phase === 'exam' && !submitted) {
    if (!subject.questions || subject.questions.length === 0) {
      return (
        <div className="text-center mt-20">
          <p className="text-gray-500">Belum ada soal untuk mata pelajaran ini.</p>
          <button onClick={onBack} className="mt-4 text-indigo-600 font-medium">Kembali</button>
        </div>
      );
    }

    const q = subject.questions[currentQIndex];
    const isLast = currentQIndex === subject.questions.length - 1;

    return (
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <button onClick={handleGoBack} className="flex items-center gap-1 md:gap-2 text-indigo-600 hover:text-indigo-800 font-bold bg-white px-3 py-2 md:px-4 md:py-2 rounded-xl shadow-sm border border-indigo-100 transition-colors text-sm md:text-base">
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5"/> Kembali
          </button>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-200 mb-4 md:mb-6 sticky top-[60px] md:top-20 z-30 flex flex-row justify-between items-center gap-2">
          <div>
            <h2 className="text-base md:text-xl font-bold text-gray-900 line-clamp-1">{subject.title}</h2>
            <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">Soal {currentQIndex + 1} dari {subject.questions.length}</p>
          </div>
          <div className="text-indigo-600 font-mono font-bold bg-indigo-50 px-3 py-1.5 md:px-4 md:py-2 rounded-lg flex items-center gap-1 md:gap-2 text-sm md:text-base whitespace-nowrap">
            <Clock className="w-3 h-3 md:w-4 md:h-4"/> 
            {timeSpent[q.id] || 0} dtk
          </div>
        </div>

        <div className="bg-white p-5 md:p-8 rounded-3xl shadow-sm border border-gray-100 mb-4 md:mb-6">
          <div className="flex gap-4 items-start">
            <div className="bg-indigo-100 text-indigo-600 font-black text-lg md:text-xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-2xl shrink-0">
              {currentQIndex + 1}
            </div>
            <div className="flex-1 min-w-0">
              <span className={`inline-block px-2 py-1 rounded text-xs font-bold mb-3 ${q.level === 'L1' ? 'bg-green-100 text-green-700' : q.level === 'L2' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                Level {q.level}
              </span>
              <p className="text-base md:text-lg text-gray-800 font-medium mb-6 leading-relaxed whitespace-pre-wrap">{q.question}</p>
            </div>
          </div>
          
          {q.visual && (
            <div className="mb-6 rounded-lg overflow-hidden border border-gray-100" dangerouslySetInnerHTML={{ __html: q.visual }} />
          )}

          {q.type === 'pg' ? (
            <div className="space-y-3">
              {(q.options || []).map((opt, oIdx) => (
                <label 
                  key={oIdx} 
                  className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${String(answers[q.id]) === String(oIdx) ? 'border-indigo-600 bg-indigo-50' : 'border-gray-100 hover:border-indigo-200 hover:bg-gray-50'}`}
                >
                  <input 
                    type="radio" name={q.id} className="w-5 h-5 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                    checked={String(answers[q.id]) === String(oIdx)}
                    onChange={() => setAnswers(prev => ({ ...prev, [q.id]: oIdx }))}
                  />
                  <span className="ml-3 text-gray-700">{opt}</span>
                </label>
              ))}
            </div>
          ) : (
            <textarea 
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-600 outline-none min-h-[150px]"
              placeholder="Ketik jawaban uraian Anda di sini..."
              value={answers[q.id] || ''}
              onChange={(e) => setAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
            />
          )}
        </div>

        <div className="mt-6 flex justify-between">
          <button 
            onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
            disabled={currentQIndex === 0}
            className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors disabled:opacity-50"
          >
            <ArrowLeft className="w-5 h-5"/> Sebelumnya
          </button>
          
          {isLast ? (
            <button 
              onClick={handleSubmit}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-xl transition-colors shadow-lg shadow-green-200"
            >
              <CheckCircle className="w-5 h-5"/> Kumpulkan
            </button>
          ) : (
            <button 
              onClick={() => setCurrentQIndex(prev => prev + 1)}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-xl transition-colors shadow-md shadow-indigo-200"
            >
              Selanjutnya <ArrowRight className="w-5 h-5"/>
            </button>
          )}
        </div>
      </div>
    );
  }

  // Result phase
  const record = existingRecord || { score, answers, timeSpent };
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handleGoBack} className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-bold bg-white px-4 py-2 rounded-xl shadow-sm border border-indigo-100 transition-colors">
          <ArrowLeft className="w-5 h-5"/> Ke Beranda
        </button>
      </div>

      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 md:p-8 rounded-3xl text-white text-center shadow-lg mb-6 md:mb-8 relative overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 relative z-10">Ujian Selesai!</h2>
        <div className="inline-block bg-white/20 backdrop-blur-md px-6 md:px-8 py-3 md:py-4 rounded-2xl border border-white/30 relative z-10 my-4">
          <p className="text-sm md:text-lg font-medium text-indigo-100 mb-1">Total Nilai Anda</p>
          <p className="text-4xl md:text-6xl font-black text-yellow-300 drop-shadow-md">{record.score}</p>
        </div>
        <p className="relative z-10 text-sm md:text-base opacity-90 max-w-md mx-auto">Jawaban Anda sudah tersimpan di sistem. Di bawah ini adalah hasil ulasannya.</p>
        <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10 hidden sm:block">
          <CheckCircle className="w-64 h-64" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8 relative z-10">  
        <button onClick={onBack} className="mt-4 inline-flex items-center justify-center gap-2 bg-white text-indigo-700 px-6 py-2.5 rounded-full font-semibold relative z-10">
          Kembali ke Dasbor
        </button>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900 px-2">Ulasan Pembahasan</h3>
        {(subject.questions || []).map((q, idx) => {
          const isCorrect = q.type === 'pg' ? String(record.answers[q.id]) === String(q.correctAnswer) : null;
          return (
            <div key={q.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <span className="bg-gray-100 text-gray-700 font-bold px-3 py-1 rounded-md">Soal {idx + 1}</span>
                  {q.type === 'pg' && (
                     isCorrect 
                     ? <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md uppercase">Benar</span>
                     : <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-md uppercase">Salah</span>
                  )}
                </div>
                <div className="text-xs font-mono font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded flex items-center gap-1 border border-gray-100">
                  <Clock className="w-3 h-3"/> Waktu pengerjaan: {record.timeSpent?.[q.id] || 0}d
                </div>
              </div>
              <p className="text-gray-800 font-medium mb-4 whitespace-pre-wrap">{q.question}</p>
              
              {isCorrect === false && q.explanation_wrong && (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <p className="text-sm font-bold text-amber-900 mb-2">💡 Tips Belajar:</p>
                  <p className="text-sm text-amber-800 leading-relaxed whitespace-pre-wrap">{q.explanation_wrong}</p>
                </div>
              )}

              {isCorrect !== false && q.explanation_correct && (
                <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl">
                  <p className="text-sm font-bold text-indigo-900 mb-2">Pembahasan Detail:</p>
                  <p className="text-sm text-indigo-800 leading-relaxed whitespace-pre-wrap">{q.explanation_correct}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  );
}

// --- ADMIN DASHBOARD ---
function AdminDashboard({ subjects }) {
  const [students, setStudents] = useState([]);
  const [readTimeMinutes, setReadTimeMinutes] = useState(1);
  const [activeTab, setActiveTab] = useState('monitoring'); 
  const [selectedStudentDetail, setSelectedStudentDetail] = useState(null); // { student, subjectId, record }

  const settingsRef = doc(db, 'artifacts/portal-ujian-sekolah-dbe8e/public/data/settings/global');

  useEffect(() => {
    const unsubSettings = onSnapshot(settingsRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        const storedSeconds = data.readTimeSeconds !== undefined ? data.readTimeSeconds : 60;
        setReadTimeMinutes(storedSeconds / 60);
      }
    });

    const recordsRef = collection(db, 'artifacts/portal-ujian-sekolah-dbe8e/public/data/student_records');
    const unsubStudents = onSnapshot(recordsRef, (snapshot) => {
      const data = [];
      snapshot.forEach(doc => data.push({ id: doc.id, ...doc.data() }));
      setStudents(data);
    });

    return () => { unsubSettings(); unsubStudents(); };
  }, []);

  const handleSaveSettings = async () => {
    await setDoc(settingsRef, { readTimeSeconds: Number(readTimeMinutes) * 60 }, { merge: true });
    alert('Pengaturan timer disimpan!');
  };

  const resetCheat = async (studentId) => {
    const sRef = doc(db, `artifacts/portal-ujian-sekolah-dbe8e/public/data/student_records/${studentId}`);
    await updateDoc(sRef, { cheatCount: 0 });
  };

  const deleteSession = async (studentId, subjectId) => {
    if(confirm("Yakin ingin menghapus sesi ujian ini?")) {
      const sRef = doc(db, `artifacts/portal-ujian-sekolah-dbe8e/public/data/student_records/${studentId}`);
      await updateDoc(sRef, { [`subjects.${subjectId}`]: deleteField() });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
        <button 
          className={`pb-4 px-4 font-medium text-sm border-b-2 flex-shrink-0 transition-colors ${activeTab === 'monitoring' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('monitoring')}
        >
          <div className="flex items-center gap-2"><Users className="w-4 h-4" /> Monitoring Ujian</div>
        </button>
        <button 
          className={`pb-4 px-4 font-medium text-sm border-b-2 flex-shrink-0 transition-colors ${activeTab === 'materi' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('materi')}
        >
          <div className="flex items-center gap-2"><BookOpen className="w-4 h-4" /> Manajemen Soal</div>
        </button>
        <button 
          className={`pb-4 px-4 font-medium text-sm border-b-2 flex-shrink-0 transition-colors ${activeTab === 'settings' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('settings')}
        >
          <div className="flex items-center gap-2"><Settings className="w-4 h-4" /> Pengaturan</div>
        </button>
      </div>

      {activeTab === 'settings' && (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 max-w-md">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Pengaturan Global</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Waktu Paksa Baca (Menit)</label>
            <input 
              type="number" min="0"
              value={readTimeMinutes} onChange={(e) => setReadTimeMinutes(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none"
            />
            <p className="text-xs text-gray-500 mt-2">Waktu wajib baca sebelum soal terbuka.</p>
          </div>
          <button onClick={handleSaveSettings} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg">
            Simpan Pengaturan
          </button>
        </div>
      )}

      {activeTab === 'materi' && <SubjectManager subjects={subjects} />}

      {activeTab === 'monitoring' && !selectedStudentDetail && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="p-4 text-sm font-semibold text-gray-600">Username Siswa</th>
                  <th className="p-4 text-sm font-semibold text-gray-600 text-center">Pelanggaran (Cheat)</th>
                  <th className="p-4 text-sm font-semibold text-gray-600">Status & Sesi Ujian</th>
                  <th className="p-4 text-sm font-semibold text-gray-600 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {students.length === 0 ? (
                  <tr><td colSpan="4" className="p-8 text-center text-gray-500">Belum ada data.</td></tr>
                ) : students.map(student => (
                  <tr key={student.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                    <td className="p-4 font-medium text-gray-900">{student.id}</td>
                    <td className="p-4 text-center">
                      <span className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-bold ${student.cheatCount > 0 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        {student.cheatCount || 0} kali
                      </span>
                    </td>
                    <td className="p-4">
                      {student.subjects && Object.entries(student.subjects).map(([subId, data]) => {
                        const subjTitle = subjects.find(s => s.id === subId)?.title || subId;
                        return (
                          <div key={subId} className="bg-white border border-gray-200 rounded-lg p-3 mb-2 flex justify-between items-center shadow-sm">
                            <div>
                              <p className="text-xs font-bold text-gray-800 uppercase">{subjTitle}</p>
                              <p className="text-sm text-indigo-600 font-semibold mt-0.5">Nilai: {data.score}</p>
                            </div>
                            <div className="flex gap-2">
                              <button 
                                onClick={() => setSelectedStudentDetail({ student, subjectId: subId, record: data, subjTitle })}
                                className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 p-1.5 rounded-md transition-colors"
                                title="Lihat Rincian Waktu & Jawaban"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => deleteSession(student.id, subId)}
                                className="text-red-500 hover:bg-red-50 p-1.5 rounded-md transition-colors"
                                title="Hapus Sesi Ini"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        )
                      })}
                      {(!student.subjects || Object.keys(student.subjects).length === 0) && (
                        <span className="text-sm text-gray-400">Belum ada sesi ujian</span>
                      )}
                    </td>
                    <td className="p-4 text-right">
                      <button 
                        onClick={() => resetCheat(student.id)}
                        disabled={!student.cheatCount || student.cheatCount === 0}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
                      >
                        <RotateCcw className="w-3.5 h-3.5" /> Reset
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'monitoring' && selectedStudentDetail && (
        <StudentDetailModal 
          detail={selectedStudentDetail} 
          onClose={() => setSelectedStudentDetail(null)}
          subjects={subjects}
        />
      )}
    </div>
  );
}

// --- ADMIN: STUDENT DETAIL MODAL ---
function StudentDetailModal({ detail, onClose, subjects }) {
  const { student, subjectId, record, subjTitle } = detail;
  const subjectDef = subjects.find(s => s.id === subjectId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Rincian Pekerjaan: {student.id}</h2>
            <p className="text-sm text-gray-500">{subjTitle} • Nilai Akhir: {record.score}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full text-gray-500"><X className="w-5 h-5"/></button>
        </div>
        <div className="p-6 overflow-y-auto bg-gray-50/50">
          {(!subjectDef || !subjectDef.questions) ? (
            <p className="text-gray-500 text-center">Data struktur soal asli tidak ditemukan. Mungkin soal telah dihapus.</p>
          ) : (
            <div className="space-y-4">
              {subjectDef.questions.map((q, i) => {
                const isPg = q.type === 'pg';
                const ans = record.answers?.[q.id];
                const isCorrect = isPg ? String(ans) === String(q.correctAnswer) : null;
                const time = record.timeSpent?.[q.id] || 0;

                return (
                  <div key={q.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <span className="bg-gray-100 text-gray-700 text-xs font-bold px-2 py-1 rounded">Soal {i+1}</span>
                        {isPg && (
                          isCorrect 
                          ? <span className="text-green-600 text-xs font-bold px-2 py-0.5 rounded bg-green-50">Benar</span>
                          : <span className="text-red-600 text-xs font-bold px-2 py-0.5 rounded bg-red-50">Salah</span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm font-mono text-indigo-700 bg-indigo-50 px-2 py-1 rounded-md">
                        <Clock className="w-4 h-4"/> {time} detik
                      </div>
                    </div>
                    <p className="text-sm text-gray-800 mb-3 whitespace-pre-wrap">{q.question}</p>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <p className="text-xs text-gray-500 font-medium mb-1">Jawaban Siswa:</p>
                      {isPg ? (
                        <p className="text-sm font-medium">{ans !== undefined && q.options ? q.options[ans] : '(Tidak dijawab)'}</p>
                      ) : (
                        <p className="text-sm whitespace-pre-wrap">{ans || '(Kosong)'}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// --- ADMIN: SUBJECT MANAGER ---
function SubjectManager({ subjects }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentSubj, setCurrentSubj] = useState(null);

  const handleCreateNew = () => {
    setCurrentSubj({
      title: '', description: '', summary: '', questions: []
    });
    setIsEditing(true);
  };

  const handleEdit = (s) => {
    setCurrentSubj(JSON.parse(JSON.stringify(s))); // Deep copy
    setIsEditing(true);
  };

  const saveSubject = async () => {
    if(!currentSubj.title) return alert("Judul wajib diisi!");
    try {
      const collectionRef = collection(db, 'artifacts/portal-ujian-sekolah-dbe8e/public/data/subjects');
      if (currentSubj.id) {
        await updateDoc(doc(collectionRef, currentSubj.id), currentSubj);
      } else {
        await addDoc(collectionRef, currentSubj);
      }
      setIsEditing(false);
      setCurrentSubj(null);
      alert("Materi berhasil disimpan!");
    } catch(e) {
      alert("Gagal menyimpan: " + e.message);
    }
  };

  const toggleLock = async (s) => {
    try {
      const collectionRef = collection(db, 'artifacts/portal-ujian-sekolah-dbe8e/public/data/subjects');
      await updateDoc(doc(collectionRef, s.id), { isLocked: !s.isLocked });
    } catch (e) {
      alert("Gagal mengubah status kunci: " + e.message);
    }
  };

  const addQuestion = () => {
    setCurrentSubj(prev => ({
      ...prev,
      questions: [...prev.questions, {
        id: 'q_' + Date.now(),
        type: 'pg', level: 'L1', question: '',
        options: ['', '', '', ''], correctAnswer: 0,
        explanation_wrong: '', explanation_correct: '', visual: ''
      }]
    }));
  };

  const updateQuestion = (idx, field, value) => {
    setCurrentSubj(prev => {
      const newQ = [...prev.questions];
      newQ[idx] = { ...newQ[idx], [field]: value };
      return { ...prev, questions: newQ };
    });
  };

  const deleteQuestion = (idx) => {
    if(confirm("Hapus soal ini?")) {
      setCurrentSubj(prev => {
        const newQ = [...prev.questions];
        newQ.splice(idx, 1);
        return { ...prev, questions: newQ };
      });
    }
  };

  if (!isEditing) {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Daftar Materi & Soal</h2>
          <button onClick={handleCreateNew} className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            <Plus className="w-4 h-4"/> Buat Materi Baru
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map(s => (
            <div key={s.id} className={`bg-white p-6 rounded-2xl shadow-sm border ${s.isLocked ? 'border-red-200 bg-red-50/20' : 'border-gray-100'} flex flex-col justify-between relative transition-all`}>
              {s.isLocked && <div className="absolute -top-3 -right-3 bg-red-100 text-red-600 p-2 rounded-full shadow-sm border border-red-200"><Lock className="w-4 h-4"/></div>}
              <div>
                <h3 className="font-bold text-lg mb-2 pr-6 text-gray-900">{s.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{s.questions?.length || 0} Soal</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => toggleLock(s)} 
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg font-medium transition-colors text-sm ${s.isLocked ? 'bg-green-100 text-green-700 hover:bg-green-200 border border-green-200' : 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-100'}`}
                >
                  {s.isLocked ? <><Unlock className="w-4 h-4"/> Buka Kunci</> : <><Lock className="w-4 h-4"/> Kunci Soal</>}
                </button>
                <button onClick={() => handleEdit(s)} className="flex items-center justify-center p-2 border border-indigo-200 text-indigo-600 rounded-lg hover:bg-indigo-50" title="Edit Materi">
                  <Edit className="w-4 h-4"/>
                </button>
              </div>
            </div>
          ))}
          {subjects.length === 0 && <p className="text-gray-500 col-span-3 text-center py-8 border-2 border-dashed rounded-xl">Belum ada materi dibuat.</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-900">{currentSubj.id ? 'Edit Materi' : 'Materi Baru'}</h2>
        <div className="flex gap-3">
          <button onClick={() => setIsEditing(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium">Batal</button>
          <button onClick={saveSubject} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium shadow-md">
            <Save className="w-4 h-4"/> Simpan
          </button>
        </div>
      </div>

      <div className="p-4 md:p-8 space-y-4 md:space-y-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Judul Mata Pelajaran</label>
          <input className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none" value={currentSubj.title} onChange={e => setCurrentSubj({...currentSubj, title: e.target.value})} placeholder="Contoh: Bahasa Inggris Kelas 5" />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Deskripsi Singkat</label>
          <textarea className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none" rows="2" value={currentSubj.description} onChange={e => setCurrentSubj({...currentSubj, description: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Materi Pembelajaran (Bisa HTML agar menarik & berwarna)</label>
          <textarea className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none font-mono text-sm" rows="6" value={currentSubj.summary} onChange={e => setCurrentSubj({...currentSubj, summary: e.target.value})} />
        </div>
        
        <div className="border-t pt-4 md:pt-6 mt-4 md:mt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-4">
            <h3 className="text-lg md:text-xl font-bold">Daftar Soal ({currentSubj.questions?.length || 0})</h3>
            <button onClick={addQuestion} className="w-full md:w-auto text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2">
              <Plus className="w-4 h-4"/> Tambah Soal
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {currentSubj.questions.map((q, idx) => (
            <div key={q.id} className="bg-gray-50 p-6 rounded-xl border border-gray-200 relative">
              <button onClick={() => deleteQuestion(idx)} className="absolute top-4 right-4 p-2 text-red-500 hover:bg-red-100 rounded-lg"><Trash2 className="w-5 h-5"/></button>
              
              <div className="flex gap-4 mb-4">
                <div className="w-32">
                  <label className="block text-xs font-bold text-gray-600 mb-1">Tipe Soal</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg" value={q.type} onChange={e => updateQuestion(idx, 'type', e.target.value)}>
                    <option value="pg">Pilihan Ganda</option>
                    <option value="essay">Uraian</option>
                  </select>
                </div>
                <div className="w-24">
                  <label className="block text-xs font-bold text-gray-600 mb-1">Level</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg" value={q.level} onChange={e => updateQuestion(idx, 'level', e.target.value)}>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-1">Pertanyaan</label>
                <textarea className="w-full p-3 border border-gray-300 rounded-lg min-h-[80px]" value={q.question} onChange={e => updateQuestion(idx, 'question', e.target.value)} />
              </div>

              <div className="mb-4">
                <label className="block text-xs font-bold text-gray-600 mb-1">Visual SVG / HTML (Opsional)</label>
                <textarea className="w-full p-2 border border-gray-300 rounded-lg text-xs font-mono" placeholder="<svg>...</svg>" value={q.visual || ''} onChange={e => updateQuestion(idx, 'visual', e.target.value)} />
              </div>

              {q.type === 'pg' && (
                <div className="mb-6 p-4 bg-white border border-gray-200 rounded-lg">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Pilihan Jawaban (Tandai yang benar)</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['A', 'B', 'C', 'D'].map((optLabel, optIdx) => (
                      <div key={optIdx} className="flex items-center gap-2">
                        <input type="radio" name={`correct_${idx}`} checked={q.correctAnswer === optIdx} onChange={() => updateQuestion(idx, 'correctAnswer', optIdx)} className="w-4 h-4 text-indigo-600" />
                        <input className="flex-1 p-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500" value={q.options[optIdx]} onChange={e => {
                          const newOpts = [...q.options];
                          newOpts[optIdx] = e.target.value;
                          updateQuestion(idx, 'options', newOpts);
                        }} placeholder={`Pilihan ${optLabel}`} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Tips Jika Salah (Pedagogik)</label>
                  <textarea className="w-full p-2 border border-gray-300 rounded-lg text-sm min-h-[100px]" value={q.explanation_wrong || ''} onChange={e => updateQuestion(idx, 'explanation_wrong', e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Pembahasan Jika Benar (Detail)</label>
                  <textarea className="w-full p-2 border border-gray-300 rounded-lg text-sm min-h-[100px]" value={q.explanation_correct || ''} onChange={e => updateQuestion(idx, 'explanation_correct', e.target.value)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
