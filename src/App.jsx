import React from 'react';

// Helper component for SVG icons to keep the code clean
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d={path} />
  </svg>
);

const LeafIcon = () => <Icon path="M17.62,2.38C17.21,1.97 16.6,1.75 16,1.75C15.4,1.75 14.79,1.97 14.38,2.38L12,4.76L9.62,2.38C8.79,1.55 7.21,1.55 6.38,2.38C5.55,3.21 5.55,4.79 6.38,5.62L8.76,8L2,14.76V22H9.24L16,15.24L18.38,17.62C19.21,18.45 20.79,18.45 21.62,17.62C22.45,16.79 22.45,15.21 21.62,14.38L19.24,12L17.62,10.38L12,4.76L14.38,2.38Z" />;
const CameraIcon = () => <Icon path="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z" />;
const WaterDropIcon = () => <Icon path="M12,2C12,2 5,8.25 5,13A7,7 0 0,0 12,20A7,7 0 0,0 19,13C19,8.25 12,2 12,2M12,18A5,5 0 0,1 7,13C7,9.9 10.29,6.23 12,4.43C13.71,6.23 17,9.9 17,13A5,5 0 0,1 12,18Z" />;
const SunIcon = () => <Icon path="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L9.9,4.1L10.1,7.2L7.3,8.3L6.2,11.1L3.9,12L6.2,12.9L7.3,15.7L10.1,16.8L9.9,19.9L12,22L14.1,19.9L13.9,16.8L16.7,15.7L17.8,11.1L20.1,12L17.8,12.9L16.7,8.3L13.9,7.2L14.1,4.1L12,2Z" />;
const LanguageIcon = () => <Icon path="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.34.16-2h4.68c.09.66.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />;
const SparklesIcon = () => <Icon path="M12,2.6L9.3,5.4L6.2,3.3L5.4,6.5L2.6,9.3L5.6,12L2.6,14.7L5.4,17.5L6.2,20.7L9.3,18.6L12,21.4L14.7,18.6L17.8,20.7L18.6,17.5L21.4,14.7L18.4,12L21.4,9.3L18.6,6.5L17.8,3.3L14.7,5.4L12,2.6M12,7.3A4.7,4.7 0 0,1 16.7,12A4.7,4.7 0 0,1 12,16.7A4.7,4.7 0 0,1 7.3,12A4.7,4.7 0 0,1 12,7.3Z" className="w-5 h-5 mr-2"/>;

// Text content for language toggle
const content = {
    en: {
        nav: ["Home", "Diagnose", "History", "About"],
        tagline: "Snap. Diagnose. Treat.",
        subTagline: "Save your plant with a single click.",
        upload: "Upload Plant Photo",
        diagnose: "Diagnose Now",
        diagnosing: "Diagnosing Plant...",
        scanner: "AI scanner analyzing leaf structure...",
        result: "Diagnosis Result",
        healthy: "Healthy",
        disease: "Disease Detected",
        plantName: "Tomato Plant",
        remedies: "Organic Remedies & Tips",
        remedy1: "Increase watering frequency to twice a day.",
        remedy2: "Ensure at least 6 hours of direct sunlight.",
        remedy3: "Use neem oil spray weekly to prevent pests.",
        getSmartCare: "Get AI Smart Care Tips",
        smartCareTitle: "✨ AI-Powered Smart Care Plan",
        fetchingCareTips: "Generating personalized care plan...",
        back: "Diagnose Another",
        history: "Diagnosis History",
        historyItem: "Tomato Plant",
        footer: "Brewed Brains - AI Hackathon 2025"
    },
    hi: {
        nav: ["होम", "निदान", "इतिहास", "हमारे बारे में"],
        tagline: "फोटो लें। निदान करें। इलाज करें।",
        subTagline: "एक क्लिक में अपने पौधे को बचाएं।",
        upload: "पौधे का फोटो अपलोड करें",
        diagnose: "अभी निदान करें",
        diagnosing: "पौधे का निदान हो रहा है...",
        scanner: "एआई स्कैनर पत्ती की संरचना का विश्लेषण कर रहा है...",
        result: "निदान परिणाम",
        healthy: "स्वस्थ",
        disease: "रोग का पता चला",
        plantName: "टमाटर का पौधा",
        remedies: "जैविक उपचार और सुझाव",
        remedy1: "पानी देने की आवृत्ति दिन में दो बार बढ़ाएँ।",
        remedy2: "कम से कम 6 घंटे की सीधी धूप सुनिश्चित करें।",
        remedy3: "कीटों को रोकने के लिए साप्ताहिक रूप से नीम तेल स्प्रे का प्रयोग करें।",
        getSmartCare: "एआई स्मार्ट केयर टिप्स प्राप्त करें",
        smartCareTitle: "✨ एआई-संचालित स्मार्ट केयर प्लान",
        fetchingCareTips: "व्यक्तिगत देखभाल योजना तैयार हो रही है...",
        back: "दूसरा निदान करें",
        history: "निदान का इतिहास",
        historyItem: "टमाटर का पौधा",
        footer: "ब्रूड ब्रेन्स - एआई हैकथॉन २०२५"
    }
};

// Mock History Data
const mockHistory = [
    { id: 1, name: "Rose Plant", status: "Healthy", date: "2025-09-17", image: "https://placehold.co/400x400/22c55e/ffffff?text=Rose" },
    { id: 2, name: "Basil Plant", status: "Disease Detected", date: "2025-09-16", disease: "Powdery Mildew", image: "https://placehold.co/400x400/f97316/ffffff?text=Basil" },
    { id: 3, name: "Mint Plant", status: "Healthy", date: "2025-09-15", image: "https://placehold.co/400x400/22c55e/ffffff?text=Mint" },
];


export default function App() {
    const [page, setPage] = React.useState('home');
    const [image, setImage] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [diagnosis, setDiagnosis] = React.useState(null);
    const [language, setLanguage] = React.useState('en');
    const [aiCareTips, setAiCareTips] = React.useState("");
    const [isFetchingTips, setIsFetchingTips] = React.useState(false);

    const text = content[language];

    const handleImageUpload = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64Image = event.target.result;
                 // Storing blob URL for display and base64 for API
                setImage({
                    blobUrl: URL.createObjectURL(e.target.files[0]),
                    base64: base64Image.split(',')[1] 
                });
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleDiagnose = () => {
        if (!image) return;
        setIsLoading(true);
        setPage('diagnosing');
        
        // Simulate AI processing
        setTimeout(() => {
            const isHealthy = Math.random() > 0.5;
            setDiagnosis({
                isHealthy: isHealthy,
                diseaseName: isHealthy ? "N/A" : "Early Blight",
                plantName: text.plantName,
                remedies: [
                    { icon: <WaterDropIcon />, text: text.remedy1 },
                    { icon: <SunIcon />, text: text.remedy2 },
                    { icon: <LeafIcon />, text: text.remedy3 },
                ]
            });
            setIsLoading(false);
            setPage('result');
        }, 4000); // 4-second animation
    };

    const getAiCareTips = async () => {
        if (!diagnosis) return;
        setIsFetchingTips(true);
        setAiCareTips("");

        const systemPrompt = `You are a world-class botanist and plant pathologist named Dr. Leaf. Your goal is to provide encouraging, clear, and actionable advice to plant owners.
        - Provide a detailed care plan.
        - Start with an encouraging opening statement.
        - Use markdown for formatting (headings, bold text, lists).
        - Keep the tone positive and helpful.
        - The response should be in ${language === 'hi' ? 'Hindi' : 'English'}.`;

        const userQuery = `My ${diagnosis.plantName} has been diagnosed as ${diagnosis.isHealthy ? 'Healthy' : `having ${diagnosis.diseaseName}`}. Please provide a detailed, personalized care plan.`;

        const apiKey = ""; // Canvas will provide key
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        const payload = {
            contents: [{ parts: [{ text: userQuery }] }],
            systemInstruction: {
                parts: [{ text: systemPrompt }]
            },
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const result = await response.json();
            if (result.candidates && result.candidates[0].content.parts[0].text) {
                setAiCareTips(result.candidates[0].content.parts[0].text);
            } else {
                setAiCareTips("Sorry, I couldn't generate tips right now. Please try again.");
            }
        } catch (error) {
            console.error("Error fetching AI tips:", error);
            setAiCareTips("An error occurred while fetching tips. Check the console for details.");
        } finally {
            setIsFetchingTips(false);
        }
    };

    const reset = () => {
        setPage('home');
        setImage(null);
        setDiagnosis(null);
        setAiCareTips("");
    }
    
    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'hi' : 'en');
    }

    const renderPage = () => {
        switch (page) {
            case 'home':
                return <HeroSection onDiagnose={handleDiagnose} onImageUpload={handleImageUpload} image={image?.blobUrl} text={text} />;
            case 'diagnosing':
                return <LoadingScreen text={text} />;
            case 'result':
                return <ResultPage diagnosis={diagnosis} image={image?.blobUrl} onBack={reset} text={text} onGetAiTips={getAiCareTips} aiCareTips={aiCareTips} isFetchingTips={isFetchingTips} />;
            case 'history':
                return <HistoryPage text={text} />;
            default:
                return <HeroSection onDiagnose={handleDiagnose} onImageUpload={handleImageUpload} image={image?.blobUrl} text={text} />;
        }
    };

    return (
        <>
            {/* We need this style tag for the animations as Tailwind doesn't support them all out of the box */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
                body { font-family: 'Poppins', sans-serif; }
                .scanner-line {
                    position: absolute;
                    top: -10%;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, transparent, #34d399, transparent);
                    box-shadow: 0 0 10px #34d399, 0 0 20px #34d399;
                    animation: scan 4s ease-in-out infinite;
                    border-radius: 50%;
                }
                @keyframes scan {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(120px); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 0.7; transform: scale(0.95); }
                    50% { opacity: 1; transform: scale(1.05); }
                }
                .pulse-animation {
                    animation: pulse 2.5s infinite ease-in-out;
                }
                .prose-styles h3 { margin-top: 1.25em; margin-bottom: 0.5em; font-weight: 600; }
                .prose-styles ul { list-style-position: inside; padding-left: 1.25em; }
                .prose-styles li { margin-bottom: 0.5em; }
            `}</style>

            <div className="min-h-screen bg-green-50/50 text-gray-800 relative overflow-hidden">
                {/* Background Gradient Shapes */}
                <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-200/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-200/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-200/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                <div className="relative z-10">
                    <Header setPage={setPage} text={text} toggleLanguage={toggleLanguage} language={language} />
                    <main className="px-4 py-10 md:py-20">
                        {renderPage()}
                    </main>
                    <Footer text={text} />
                </div>
            </div>
        </>
    );
}

const Header = ({ setPage, text, toggleLanguage, language }) => (
    <header className="p-4">
        <nav className="container mx-auto flex justify-between items-center bg-white/60 backdrop-blur-md p-3 rounded-2xl shadow-sm">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
                <LeafIcon />
                <h1 className="text-xl font-bold text-green-700">Dr.Plant</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
                {text.nav.map((item, index) => (
                    <a key={item} href="#" onClick={(e) => { e.preventDefault(); setPage(Object.keys(content.en.nav)[index].toLowerCase()); }} className="text-gray-600 hover:text-green-600 transition-colors">{item}</a>
                ))}
            </div>
            <div className="flex items-center gap-4">
                 <button onClick={toggleLanguage} className="p-2 rounded-full hover:bg-green-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400">
                    <LanguageIcon />
                 </button>
                <button onClick={() => setPage('home')} className="md:hidden p-2 rounded-full hover:bg-green-100 transition-colors">
                    <Icon path="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                </button>
            </div>
        </nav>
    </header>
);

const HeroSection = ({ onDiagnose, onImageUpload, image, text }) => (
    <div className="container mx-auto text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-bold text-green-800 leading-tight">
            {text.tagline}
        </h2>
        <p className="text-lg text-gray-600 mt-4 mb-8">{text.subTagline}</p>

        <div className="w-full max-w-md bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center gap-6">
            <div className="w-full h-64 border-2 border-dashed border-green-300 rounded-2xl flex items-center justify-center bg-green-50/50 overflow-hidden">
                {image ? (
                    <img src={image} alt="Plant preview" className="w-full h-full object-cover" />
                ) : (
                    <div className="text-center text-gray-500">
                        <CameraIcon />
                        <p className="mt-2">{text.upload}</p>
                    </div>
                )}
            </div>

            <input type="file" id="plant-upload" accept="image/*" className="hidden" onChange={onImageUpload} />
            <label htmlFor="plant-upload" className="w-full cursor-pointer text-center bg-white py-3 px-6 rounded-2xl border border-green-300 text-green-700 font-semibold hover:bg-green-100 transition-all shadow-sm">
                {image ? "Change Photo" : text.upload}
            </label>

            <button
                onClick={onDiagnose}
                disabled={!image}
                className="w-full bg-green-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
            >
                {text.diagnose}
            </button>
        </div>
    </div>
);

const LoadingScreen = ({ text }) => (
    <div className="container mx-auto text-center flex flex-col items-center justify-center h-[60vh]">
        <div className="relative w-32 h-32 text-green-500 pulse-animation">
            <LeafIcon />
            <div className="scanner-line"></div>
        </div>
        <h3 className="text-2xl font-semibold text-green-700 mt-8">{text.diagnosing}</h3>
        <p className="text-gray-500 mt-2">{text.scanner}</p>
    </div>
);

const ResultPage = ({ diagnosis, image, onBack, text, onGetAiTips, aiCareTips, isFetchingTips }) => (
    <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-6">{text.result}</h2>
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
                <img src={image} alt="Diagnosed plant" className="rounded-2xl w-full h-auto object-cover shadow-md" />
            </div>
            <div className="w-full md:w-1/2 text-left">
                <h3 className="text-xl font-semibold mb-2">{diagnosis.plantName}</h3>
                <div className={`inline-flex items-center gap-2 px-4 py-1 rounded-full text-white font-semibold text-sm ${diagnosis.isHealthy ? 'bg-green-500' : 'bg-orange-500'}`}>
                    <Icon path={diagnosis.isHealthy ? "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z" : "M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"} className="w-4 h-4" />
                    <span>{diagnosis.isHealthy ? text.healthy : text.disease}</span>
                </div>

                <div className="mt-6">
                    <h4 className="font-bold text-lg mb-3">{text.remedies}</h4>
                    <ul className="space-y-3 text-gray-600">
                        {diagnosis.remedies.map((remedy, index) => (
                           <li key={index} className="flex items-start gap-3">
                                <span className="text-green-600 mt-1">{remedy.icon}</span>
                                <p>{remedy.text}</p>
                            </li> 
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        {/* Gemini API Feature Section */}
        <div className="mt-8 text-left">
             {!aiCareTips && !isFetchingTips && (
                <button
                    onClick={onGetAiTips}
                    className="w-full flex items-center justify-center bg-teal-500 text-white font-bold py-3 px-6 rounded-2xl shadow-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-300"
                >
                    <SparklesIcon /> {text.getSmartCare}
                </button>
             )}
            
            {isFetchingTips && (
                <div className="text-center p-4 bg-white/50 rounded-2xl">
                    <p className="text-teal-700 font-semibold">{text.fetchingCareTips}</p>
                </div>
            )}

            {aiCareTips && (
                <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6">
                    <h3 className="text-2xl font-bold mb-4 text-center">{text.smartCareTitle}</h3>
                    <div className="prose-styles max-w-none" dangerouslySetInnerHTML={{ __html: aiCareTips.replace(/\n/g, '<br />') }}></div>
                </div>
            )}
        </div>
        
         <button
            onClick={onBack}
            className="mt-8 bg-green-600 text-white font-bold py-3 px-8 rounded-2xl shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
        >
            {text.back}
        </button>
    </div>
);

const HistoryPage = ({ text }) => (
     <div className="container mx-auto max-w-4xl">
         <h2 className="text-3xl font-bold mb-8 text-center">{text.history}</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockHistory.map(item => (
                <div key={item.id} className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-4 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <img src={item.image} alt={item.name} className="rounded-xl w-full h-40 object-cover mb-4" />
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${item.status === 'Healthy' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                        {item.status}
                    </div>
                </div>
            ))}
         </div>
     </div>
);

const Footer = ({ text }) => (
    <footer className="text-center py-6 mt-12">
        <p className="text-gray-500">&copy; 2025 {text.footer}</p>
    </footer>
);