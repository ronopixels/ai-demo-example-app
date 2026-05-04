export type LessonId = "tour" | "sizes" | "race" | "moon";

export type LessonQuiz = {
  question: string;
  options: string[];
  correctIndex: number;
  praise: string;
};

export type LessonCopy = {
  id: LessonId;
  emoji: string;
  title: string;
  tagline: string;
  steps: string[];
  tryThis: string[];
  quiz: LessonQuiz;
};

export const lessons: LessonCopy[] = [
  {
    id: "tour",
    emoji: "🚀",
    title: "Grand space tour",
    tagline: "Fly around the Sun and planets like a tiny spacecraft!",
    steps: [
      "Drag with your finger or mouse to look around.",
      "Scroll or pinch to zoom closer or farther.",
      "Tap a planet or the Sun — watch the facts light up on the side.",
    ],
    tryThis: [
      "Find Earth — it’s the blue marble we live on.",
      "Find Saturn — can you spot the icy rings?",
    ],
    quiz: {
      question: "What is at the very center of our Solar System?",
      options: ["Jupiter", "The Sun", "Earth", "The Moon"],
      correctIndex: 1,
      praise: "Yes! The Sun’s gravity holds everything together.",
    },
  },
  {
    id: "sizes",
    emoji: "📏",
    title: "Planet size parade",
    tagline: "See which worlds are giants and which are pebbles (sizes are boosted so you can see them!).",
    steps: [
      "Each ball is a planet — bigger ball = bigger real planet (roughly).",
      "Spin the view — planets gently bounce so they feel alive.",
      "Notice Jupiter and Saturn — gas giants are huge!",
    ],
    tryThis: [
      "Point to the smallest ball — that’s Mercury.",
      "Compare Earth to Jupiter — wow, right?",
    ],
    quiz: {
      question: "Which planet is the biggest in our Solar System?",
      options: ["Saturn", "Earth", "Jupiter", "Neptune"],
      correctIndex: 2,
      praise: "Jupiter wins the size contest!",
    },
  },
  {
    id: "race",
    emoji: "🏁",
    title: "Orbit race track",
    tagline: "Watch how fast each planet goes around the Sun (not real-time — sped up for fun!).",
    steps: [
      "Mercury is closest — it finishes laps super fast.",
      "Neptune is far away — it crawls around the track.",
      "Longer orbit = more time to go once around the Sun.",
    ],
    tryThis: [
      "Count which dot passes the finish line first over and over.",
      "Imagine you’re on Neptune — your birthday would be rare!",
    ],
    quiz: {
      question: "Which planet has the shortest year (fastest orbit)?",
      options: ["Neptune", "Earth", "Mercury", "Mars"],
      correctIndex: 2,
      praise: "Mercury zips around the Sun the quickest!",
    },
  },
  {
    id: "moon",
    emoji: "🌙",
    title: "Earth & Moon buddy",
    tagline: "The Moon orbits Earth while Earth orbits the Sun — a dance in space!",
    steps: [
      "The big blue world is Earth — oceans, clouds, continents.",
      "The smaller gray ball is our Moon — it lights our night sky.",
      "Click Earth or the Moon to read a kid-friendly fact.",
    ],
    tryThis: [
      "Spin the camera under the Moon — pretend you’re an astronaut.",
      "Ask: why do we see moon phases from Earth?",
    ],
    quiz: {
      question: "What does the Moon orbit?",
      options: ["The Sun only", "Mars", "Earth", "Jupiter"],
      correctIndex: 2,
      praise: "The Moon is Earth’s cosmic neighbor!",
    },
  },
];

export function getLesson(id: LessonId): LessonCopy {
  const l = lessons.find((x) => x.id === id);
  if (!l) return lessons[0];
  return l;
}
