"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const oracleWisdoms = [
  "The path you seek is neither 6 nor 7, but somewhere in between, no cap fr fr.",
  "Your aura is giving main character energy, but like, 6-7 main character, you feel?",
  "The ancestors whisper: touch grass, but spiritually, on a sigma level.",
  "What you seek also seeks you, but it is lowkey kinda mid about it.",
  "Your rizz is strong, but the universe needs you to lock in harder than a 6-7.",
  "The vibes you put out are literally 6-7 on the skibidi scale of existence.",
  "In the cosmic ledger, you are neither NPC nor main character - you are 6-7.",
  "The ancient scrolls say: you are valid, bestie. But also, go to Ohio spiritually.",
  "Your energy is immaculate but the timeline needs you to be more 6-7 about it.",
  "The oracle sees... maximum gyatt energy in your near future, no cap.",
  "Six... seven... the answer is yes, but like, a 6-7 yes, you know?",
  "The cosmic forces say: that is lowkey not it, chief. Very 5-6 energy.",
  "Absolutely. The universe is literally saying slay right now. Full 6-7.",
  "Hmm, the spirits are giving maybe. Very mid. Quite 6-7 fr.",
  "No cap, the answer is no. The ancestors did not skibidi for this.",
  "The orb sees a clear 6-7. Interpret that how you will, bestie.",
  "Your soulmate aura is pure 6-7 energy. You will know them by their vibes.",
  "Love is in the air, but it has got that 6-7 rizz. Proceed with caution and slay.",
  "The oracle sees romance, but you gotta stop being an NPC about it first.",
  "Your love life is about to go from ohio to 6-7 real quick. Stay ready.",
  "The bag is coming, but on a 6-7 timeline. Patience is sigma.",
  "Your career path is valid fr fr. The grind is about to hit different.",
  "The ancestors want you to know: quiet luxury is your destiny. Very 6-7.",
  "Financial abundance is coded in your DNA, but you gotta lock in like a 6-7.",
  "Why are we here? To experience the full spectrum from 6 to 7 and back again.",
  "Life is but a dream within a dream within a skibidi toilet. Very 6-7.",
  "The meaning of existence is somewhere between 6 and 7. Always has been.",
  "You are the universe experiencing itself, and rn it is experiencing 6-7 vibes.",
  "In the grand tapestry of fate, you are a single thread of pure 6-7 energy.",
  "Before enlightenment: chop wood, carry water. After enlightenment: still 6-7.",
  "The prophecy states: what is 6-7 will always be 6-7. No further questions.",
  "Six. Seven. Between these numbers lies all truth. And also mid vibes.",
  "You came here for answers but the only answer is 6-7. It was always 6-7.",
  "The oracle has consulted the ancient texts of TikTok. The answer remains 6-7.",
  "In a universe of infinite possibilities, you somehow ended up asking me. Very 6-7.",
  "The cosmic dice have been rolled. They landed on 6-7. Interpret wisely.",
  "Bro really asked the 6-7 Oracle for life advice. And honestly? Valid. 6-7.",
  "The ancestors are shook that you actually typed that question. Giving 6-7.",
  "I have seen a million questions and yours is... it is very you. Pure 6-7.",
  "The oracle third eye just rolled. But okay, here is your 6-7 wisdom anyway.",
  "This question has real did not study for the exam energy. Classic 6-7.",
];

const topicResponses: Record<string, string[]> = {
  love: [
    "Your heart chakra is radiating 6-7 frequencies. Love is coded in your timeline, but it is giving slow burn.",
    "The one you seek has main character energy and a 6-7 aura. They may or may not be currently in their villain arc.",
    "Love is literally just two people going 6-7 together until they die. Kinda beautiful tbh.",
    "Your romantic future is blessed but also cursed. Standard 6-7 love story incoming.",
    "They are into you but they are also chronically online. Embrace the 6-7 of modern romance.",
  ],
  money: [
    "The bag is en route, but it is taking the scenic 6-7 path. Stay locked in, sigma.",
    "Your bank account will experience a 6-7 glow up. The ancestors are working on it.",
    "Financial abundance requires you to embody 6-7 energy. Not 5-6. Not 7-8. Exactly 6-7.",
    "The oracle sees a windfall, but you gotta stop spending like you are already a 10.",
    "Crypto? Stocks? The true investment is believing you are a 6-7. That is the alpha.",
  ],
  work: [
    "Your career trajectory is strong, but you are moving like a 6-7 when you should be a full 7.",
    "That coworker? They are giving 4-5 energy max. You are clearly the 6-7 of the team.",
    "Promotion energy is imminent. The oracle suggests more corporate skibidi.",
    "Your boss aura is mid but yours is 6-7. The universe will correct this imbalance.",
    "Work-life balance is a myth. Work-6-7-life balance? Now that is sigma.",
  ],
  future: [
    "The future holds exactly what you expect, but also nothing you expect. Peak 6-7.",
    "In 6-7 days, something will happen. It might be big. It might be mid. Stay ready.",
    "Your timeline branches into infinite possibilities. All of them are 6-7.",
    "The oracle sees greatness in your future. But also some cringe. Very balanced 6-7.",
    "Tomorrow will bring clarity. Or confusion. The spirits are being very 6-7 about it.",
  ],
  meaning: [
    "The meaning of life is to find your personal 6-7 and vibe there eternally.",
    "Why are we here? To ask oracles questions and receive 6-7 wisdom. Obviously.",
    "Existence is just the universe way of going 6-7. You are doing it perfectly.",
    "The purpose of consciousness is to eventually understand what 6-7 really means.",
    "You seek meaning but meaning seeks 6-7. We are all connected through the mid.",
  ],
};

function detectTopic(question: string): string | null {
  const q = question.toLowerCase();
  if (q.includes("love") || q.includes("relationship") || q.includes("crush") || q.includes("date") || q.includes("boyfriend") || q.includes("girlfriend") || q.includes("marry") || q.includes("partner")) return "love";
  if (q.includes("money") || q.includes("rich") || q.includes("cash") || q.includes("invest") || q.includes("crypto") || q.includes("salary") || q.includes("afford")) return "money";
  if (q.includes("job") || q.includes("work") || q.includes("career") || q.includes("boss") || q.includes("promotion") || q.includes("quit") || q.includes("coworker")) return "work";
  if (q.includes("future") || q.includes("tomorrow") || q.includes("next") || q.includes("will i") || q.includes("going to") || q.includes("what happens")) return "future";
  if (q.includes("meaning") || q.includes("purpose") || q.includes("why") || q.includes("exist") || q.includes("life") || q.includes("point")) return "meaning";
  return null;
}

function getOracleResponse(question: string): string {
  const topic = detectTopic(question);
  if (topic && topicResponses[topic] && Math.random() < 0.7) {
    const responses = topicResponses[topic];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return oracleWisdoms[Math.floor(Math.random() * oracleWisdoms.length)];
}

function Stars() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; delay: number; size: number }>>([]);
  useEffect(() => {
    setStars(Array.from({ length: 50 }, (_, i) => ({
      id: i, x: Math.random() * 100, y: Math.random() * 100, delay: Math.random() * 5, size: Math.random() * 2 + 1,
    })));
  }, []);
  return (
    <div className="stars">
      {stars.map((star) => (
        <div key={star.id} className="star" style={{ left: star.x + "%", top: star.y + "%", width: star.size + "px", height: star.size + "px", animationDelay: star.delay + "s", opacity: 0.2 + Math.random() * 0.3 }} />
      ))}
    </div>
  );
}

function Particles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; duration: number }>>([]);
  useEffect(() => {
    setParticles(Array.from({ length: 20 }, (_, i) => ({
      id: i, x: Math.random() * 100, y: Math.random() * 100, delay: Math.random() * 8, duration: 6 + Math.random() * 6,
    })));
  }, []);
  return (
    <>
      {particles.map((p) => (
        <div key={p.id} className="particle" style={{ left: p.x + "%", top: p.y + "%", animationDelay: p.delay + "s", animationDuration: p.duration + "s" }} />
      ))}
    </>
  );
}

export default function Home() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [isThinking, setIsThinking] = useState(false);
  const [questionsAsked, setQuestionsAsked] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const askOracle = useCallback(() => {
    if (!question.trim() || isThinking) return;
    setIsThinking(true);
    setResponse(null);
    const thinkingTime = 1500 + Math.random() * 1500;
    setTimeout(() => {
      setResponse(getOracleResponse(question));
      setIsThinking(false);
      setQuestionsAsked(prev => prev + 1);
      setQuestion("");
    }, thinkingTime);
  }, [question, isThinking]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); askOracle(); }
  };

  const orbClass = "orb" + (isThinking ? " thinking" : "");

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      <Stars />
      <Particles />
      <div className="relative z-10 flex flex-col items-center max-w-2xl w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-2 shimmer-text">The 6-7 Oracle</h1>
        <p className="text-purple-300/70 text-center mb-8 text-sm sm:text-base">Ancient wisdom meets Gen Alpha chaos</p>
        <div className="orb-container mb-8">
          <div className={orbClass} onClick={() => inputRef.current?.focus()} />
        </div>
        <div className="w-full max-w-md mb-6">
          <input ref={inputRef} type="text" value={question} onChange={(e) => setQuestion(e.target.value)} onKeyDown={handleKeyDown} placeholder="Ask the oracle anything..." className="oracle-input w-full px-6 py-4 rounded-full text-white placeholder-purple-300/50 text-center" disabled={isThinking} />
        </div>
        <button onClick={askOracle} disabled={!question.trim() || isThinking} className="oracle-button px-8 py-3 rounded-full text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed mb-8">
          {isThinking ? "Channeling 6-7..." : "Consult the Oracle"}
        </button>
        {response && (
          <div className="response-card oracle-response rounded-2xl p-6 max-w-lg w-full">
            <div className="flex items-start gap-3">
              <span className="text-3xl">✨</span>
              <p className="text-lg text-purple-100 leading-relaxed italic">&ldquo;{response}&rdquo;</p>
            </div>
            <div className="mt-4 pt-4 border-t border-purple-500/20 flex justify-between items-center">
              <span className="text-purple-400/60 text-sm">- The 6-7 Oracle has spoken</span>
              <button onClick={() => { const text = "The 6-7 Oracle says: " + response + " - Ask yours at " + window.location.href; if (navigator.share) { navigator.share({ title: "The 6-7 Oracle", text: text, url: window.location.href }); } else { navigator.clipboard.writeText(text); alert("Copied to clipboard!"); } }} className="text-purple-400 hover:text-purple-300 text-sm underline underline-offset-2">Share wisdom</button>
            </div>
          </div>
        )}
        {questionsAsked > 0 && <p className="text-purple-400/40 text-xs mt-8">{questionsAsked} question{questionsAsked !== 1 ? "s" : ""} answered this session</p>}
        <div className="mt-12 text-center">
          <p className="text-purple-300/40 text-xs max-w-md">&ldquo;6-7&rdquo; was named Dictionary.com&apos;s 2025 Word of the Year. It means everything and nothing. Just like this oracle.</p>
          <div className="mt-4 flex items-center justify-center gap-2 text-purple-300/30 text-xs"><span>Built with</span><span className="hand-gesture">🤌</span><span>vibes</span></div>
        </div>
      </div>
    </main>
  );
}
