import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ChevronDown,
  Check,
  X,
  ArrowRight,
  RotateCcw,
  Trophy,
} from "lucide-react";
import heroImg from "@/assets/hero-battlefield.jpg";
import dividedImg from "@/assets/divided-nation.jpg";
import gettysburgImg from "@/assets/gettysburg.jpg";
import reconstructionImg from "@/assets/reconstruction.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The American Civil War — 1861–1865" },
      {
        name: "description",
        content:
          "A nation divided against itself — exploring the context, causes, content, controversies, and consequences of America's bloodiest conflict.",
      },
      { property: "og:title", content: "The American Civil War — 1861–1865" },
      {
        property: "og:description",
        content:
          "A nation divided against itself — exploring the context, causes, content, controversies, and consequences of America's bloodiest conflict.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "context", label: "Context" },
  { id: "causes", label: "Causes" },
  { id: "content", label: "Content" },
  { id: "controversies", label: "Controversies" },
  { id: "consequences", label: "Consequences" },
  { id: "quiz", label: "Quiz" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Context />
        <Causes />
        <Content />
        <Controversies />
        <Consequences />
        <Quiz />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-heading italic text-lg sm:text-xl text-primary tracking-wide"
        >
          The Civil War
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Civil War battlefield at dawn with Union and Confederate flags"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 px-6 text-center max-w-4xl"
      >
        <p className="font-body text-xs sm:text-sm tracking-[0.4em] text-primary/90 uppercase mb-6">
          1861 &mdash; 1865
        </p>
        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl font-bold leading-[1.05] text-balance">
          The American
          <br />
          <span className="italic font-normal text-primary">Civil War</span>
        </h1>
        <p className="mt-8 font-body text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
          A nation divided against itself — exploring the context, causes,
          content, controversies, and consequences of America's bloodiest
          conflict.
        </p>
        <a
          href="#context"
          className="mt-14 inline-flex flex-col items-center gap-2 group"
        >
          <span className="font-body text-xs tracking-[0.35em] text-muted-foreground group-hover:text-primary transition-colors">
            EXPLORE
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-muted-foreground group-hover:text-primary transition-colors"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}

function SectionHeader({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="mb-12 sm:mb-16 text-center"
    >
      <p className="font-body text-xs tracking-[0.4em] text-primary/80 uppercase mb-4">
        {number}
      </p>
      <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 font-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

const CONTEXT_EVENTS = [
  {
    year: "1820",
    title: "Missouri Compromise",
    desc: "Attempted to balance slave and free states, drawing a line across the Louisiana Territory.",
  },
  {
    year: "1850",
    title: "Compromise of 1850",
    desc: "Admitted California as a free state and strengthened the Fugitive Slave Act.",
  },
  {
    year: "1852",
    title: "Uncle Tom's Cabin",
    desc: "Harriet Beecher Stowe's novel ignited anti-slavery sentiment across the North.",
  },
  {
    year: "1854",
    title: "Kansas-Nebraska Act",
    desc: 'Allowed popular sovereignty in new territories, leading to violent conflict in "Bleeding Kansas."',
  },
  {
    year: "1857",
    title: "Dred Scott Decision",
    desc: "Supreme Court ruled that enslaved people were not citizens and had no legal rights.",
  },
  {
    year: "1859",
    title: "John Brown's Raid",
    desc: "Abolitionist John Brown raided Harpers Ferry, deepening the national divide.",
  },
  {
    year: "1860",
    title: "Lincoln Elected",
    desc: "Abraham Lincoln's election as president pushed Southern states toward secession.",
  },
];

function Context() {
  return (
    <section
      id="context"
      className="relative py-24 sm:py-32 px-4 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="01 — Context"
          title="A Nation on the Brink"
          subtitle="By the mid-19th century, decades of tension over slavery, states' rights, and westward expansion had fractured the United States along deep ideological lines."
        />

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
          <div className="space-y-10 sm:space-y-16">
            {CONTEXT_EVENTS.map((e, i) => (
              <motion.div
                key={e.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-12 sm:items-start ${
                  i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"
                }`}
              >
                <div
                  className={`${
                    i % 2 === 0 ? "sm:text-right sm:pr-10" : "sm:pl-10"
                  }`}
                >
                  <p className="font-heading italic text-primary text-2xl sm:text-3xl">
                    {e.year}
                  </p>
                </div>
                <div
                  className={`mt-2 sm:mt-0 ${
                    i % 2 === 0 ? "sm:pl-10" : "sm:text-right sm:pr-10"
                  }`}
                >
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold mb-2">
                    {e.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {e.desc}
                  </p>
                </div>
                <span className="absolute left-3.5 sm:left-1/2 top-3 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const COMPARE = [
  {
    label: "Economy",
    union: "Industrial & manufacturing-based economy with factories and railroads",
    conf: "Agricultural economy dependent on cotton plantations and slave labor",
  },
  {
    label: "Slavery",
    union: "Growing abolitionist movement; saw slavery as morally wrong",
    conf: "Defended slavery as essential to their economy and way of life",
  },
  {
    label: "States' Rights",
    union: "Believed in a strong federal government that could override state laws",
    conf: "Believed each state had the right to govern itself and nullify federal laws",
  },
  {
    label: "Population",
    union: "22 million people — larger workforce and army recruitment pool",
    conf: "9 million people (3.5 million were enslaved) — smaller but deeply motivated",
  },
  {
    label: "Culture",
    union: "Urbanizing, immigrant communities, diverse workforce",
    conf: "Rural, plantation aristocracy, rigid social hierarchy",
  },
  {
    label: "Vision",
    union: "A unified nation moving toward industrialization and free labor",
    conf: "A traditional society preserving its independence and institutions",
  },
];

function Causes() {
  return (
    <section
      id="causes"
      className="relative py-24 sm:py-32 px-4 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="02 — Causes"
          title="A House Divided"
          subtitle="The North and South became two fundamentally different worlds — split by economics, morals, and political philosophy."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-14 border border-border"
        >
          <img
            src={dividedImg}
            alt="The divided nation map: Union North vs Confederate South"
            loading="lazy"
            width={1600}
            height={1000}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute inset-0 grid grid-cols-2">
            <div className="flex flex-col items-center justify-end pb-8 sm:pb-12">
              <p className="font-heading italic text-2xl sm:text-3xl text-[hsl(215_70%_70%)]">
                The Union
              </p>
              <p className="font-body text-xs sm:text-sm tracking-[0.3em] text-foreground/70 uppercase mt-1">
                Northern States
              </p>
            </div>
            <div className="flex flex-col items-center justify-end pb-8 sm:pb-12">
              <p className="font-heading italic text-2xl sm:text-3xl text-[hsl(355_70%_70%)]">
                The Confederacy
              </p>
              <p className="font-body text-xs sm:text-sm tracking-[0.3em] text-foreground/70 uppercase mt-1">
                Southern States
              </p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-3">
          {COMPARE.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-6 items-stretch"
            >
              <div className="md:text-right rounded-xl border border-[color:var(--union)]/20 bg-[color:var(--union)]/5 p-5">
                <p className="font-body text-sm sm:text-base text-foreground/85 leading-relaxed">
                  {row.union}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="font-heading italic text-primary text-lg px-4 py-1 rounded-full border border-border bg-card">
                  {row.label}
                </span>
              </div>
              <div className="rounded-xl border border-[color:var(--confederacy)]/25 bg-[color:var(--confederacy)]/5 p-5">
                <p className="font-body text-sm sm:text-base text-foreground/85 leading-relaxed">
                  {row.conf}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const BATTLES = [
  {
    date: "April 1861",
    title: "Fort Sumter",
    desc: "Confederate forces opened fire on the Union-held Fort Sumter in South Carolina, igniting the war. The Union garrison surrendered after 34 hours of bombardment.",
  },
  {
    date: "July 1861",
    title: "First Battle of Bull Run",
    desc: "The first major battle proved the war would be long and brutal. Confederate forces routed the overconfident Union army near Manassas, Virginia.",
  },
  {
    date: "January 1863",
    title: "Emancipation Proclamation",
    desc: "Lincoln declared all enslaved people in Confederate states free, transforming the war into a fight for human freedom and allowing Black soldiers to enlist.",
  },
  {
    date: "July 1863",
    title: "Battle of Gettysburg",
    desc: "The bloodiest battle of the war and its turning point. Over 50,000 casualties in three days. Lee's failed invasion of the North marked the beginning of Confederate decline.",
  },
  {
    date: "Nov 1864 – April 1865",
    title: "Sherman's March to the Sea",
    desc: "General Sherman's devastating campaign through Georgia destroyed Confederate infrastructure and broke Southern morale, hastening the end of the war.",
  },
  {
    date: "April 9, 1865",
    title: "Lee's Surrender at Appomattox",
    desc: "General Robert E. Lee surrendered to Ulysses S. Grant at Appomattox Court House, Virginia, effectively ending the Civil War after four years of bloodshed.",
  },
];

function Content() {
  return (
    <section
      id="content"
      className="relative py-24 sm:py-32 px-4 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="03 — Content"
          title="The War Itself"
          subtitle="Four years of devastating conflict that reshaped the nation. Over 620,000 soldiers died — more than in all other American wars combined."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-16 border border-border"
        >
          <img
            src={gettysburgImg}
            alt="Painterly depiction of the Battle of Gettysburg"
            loading="lazy"
            width={1600}
            height={900}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
            <p className="font-heading italic text-primary text-xl sm:text-2xl">
              Battle of Gettysburg
            </p>
            <p className="font-body text-xs sm:text-sm tracking-[0.25em] text-foreground/70 uppercase mt-1">
              July 1–3, 1863
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {BATTLES.map((b, i) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative rounded-2xl border border-border bg-card p-7 hover:border-primary/40 transition-colors"
            >
              <p className="font-body text-xs tracking-[0.25em] uppercase text-primary/80 mb-3">
                {b.date}
              </p>
              <h3 className="font-heading text-2xl font-semibold mb-3">
                {b.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {b.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

const DEBATES = [
  "Was the war really about slavery — or states' rights?",
  "Was Lincoln truly an abolitionist?",
  "Should Confederate monuments remain standing?",
  "Was Reconstruction a failure?",
  'Were there "good people on both sides"?',
];

function Controversies() {
  return (
    <section
      id="controversies"
      className="relative py-24 sm:py-32 px-4 border-t border-border"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          number="04 — Controversies"
          title="Still Debated Today"
          subtitle="The Civil War's legacy continues to spark heated debate. These are some of the biggest questions historians and Americans grapple with."
        />

        <div className="space-y-4">
          {DEBATES.map((q, i) => (
            <motion.div
              key={q}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex items-start gap-5 rounded-2xl border border-border bg-card/60 p-6 hover:border-accent/50 transition-colors"
            >
              <span className="font-heading italic text-3xl text-accent leading-none mt-1">
                ?
              </span>
              <p className="font-heading text-lg sm:text-xl text-foreground/90 leading-snug">
                {q}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const AFTERMATH = [
  {
    title: "13th Amendment",
    desc: "Slavery was permanently abolished throughout the entire United States, freeing approximately 4 million enslaved people.",
  },
  {
    title: "14th & 15th Amendments",
    desc: "Granted citizenship to all born in the U.S. and prohibited denying the vote based on race — foundational to civil rights.",
  },
  {
    title: "Federal Power Expanded",
    desc: "The war settled the debate: the federal government was supreme over individual states, fundamentally reshaping American governance.",
  },
  {
    title: "620,000+ Dead",
    desc: "The staggering death toll — roughly 2% of the entire population — scarred every community in America for generations.",
  },
  {
    title: "Reconstruction Era",
    desc: "The South was rebuilt under federal oversight. Despite early progress, the era ended with the rise of Jim Crow laws and systemic oppression.",
  },
];

function Consequences() {
  return (
    <section
      id="consequences"
      className="relative py-24 sm:py-32 px-4 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="05 — Consequences"
          title="The Aftermath"
          subtitle="The war ended, but its impact reshaped every aspect of American life — from the Constitution to the economy to race relations that persist today."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-14 border border-border"
        >
          <img
            src={reconstructionImg}
            alt="Reconstruction era aftermath"
            loading="lazy"
            width={1600}
            height={900}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {AFTERMATH.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <h3 className="font-heading text-xl font-semibold mb-3 text-primary">
                {a.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {a.desc}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="font-heading italic text-2xl sm:text-4xl text-foreground/90 leading-snug">
            “A house divided against itself cannot stand.”
          </p>
          <footer className="mt-5 font-body text-sm tracking-[0.3em] uppercase text-muted-foreground">
            — Abraham Lincoln, 1858
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}

const QUIZ = [
  {
    q: "What event on April 12, 1861 officially started the Civil War?",
    options: [
      "Battle of Bull Run",
      "Confederate attack on Fort Sumter",
      "Lincoln's inauguration",
      "Sherman's March",
    ],
    answer: 1,
  },
  {
    q: "Which document, issued by Lincoln in 1863, declared enslaved people in Confederate states free?",
    options: [
      "The Declaration of Independence",
      "The Gettysburg Address",
      "The Emancipation Proclamation",
      "The Missouri Compromise",
    ],
    answer: 2,
  },
  {
    q: "What was the bloodiest battle of the Civil War, fought in July 1863?",
    options: [
      "Battle of Antietam",
      "Battle of Shiloh",
      "Battle of Gettysburg",
      "Battle of Vicksburg",
    ],
    answer: 2,
  },
  {
    q: "Which amendment to the Constitution permanently abolished slavery?",
    options: ["13th Amendment", "14th Amendment", "15th Amendment", "12th Amendment"],
    answer: 0,
  },
  {
    q: "What was the main economic foundation of the Confederate South?",
    options: [
      "Manufacturing and industry",
      "Cotton plantations and slave labor",
      "Fishing and trade",
      "Gold mining",
    ],
    answer: 1,
  },
  {
    q: "Where did Confederate General Robert E. Lee surrender in April 1865?",
    options: [
      "Richmond, Virginia",
      "Gettysburg, Pennsylvania",
      "Appomattox Court House",
      "Washington D.C.",
    ],
    answer: 2,
  },
  {
    q: 'Which Union general led the famous "March to the Sea" through Georgia?',
    options: [
      "Ulysses S. Grant",
      "William T. Sherman",
      "George McClellan",
      'Thomas "Stonewall" Jackson',
    ],
    answer: 1,
  },
  {
    q: "Approximately how many soldiers died in the Civil War?",
    options: ["Around 50,000", "Around 200,000", "Around 620,000", "Around 1 million"],
    answer: 2,
  },
  {
    q: "Which political principle did Confederate states primarily argue justified their secession?",
    options: [
      "Federal supremacy",
      "States' rights",
      "Manifest Destiny",
      "Popular sovereignty only",
    ],
    answer: 1,
  },
  {
    q: "What was the period of federal oversight and rebuilding of the South after the war called?",
    options: ["The Gilded Age", "The Progressive Era", "Reconstruction", "The New Deal"],
    answer: 2,
  },
];

function Quiz() {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(0);
  const [history, setHistory] = useState<{ correct: boolean }[]>([]);

  const q = QUIZ[idx];
  const progress = (idx / QUIZ.length) * 100;

  const confirm = () => {
    if (selected === null) return;
    const correct = selected === q.answer;
    setRevealed(true);
    setHistory((h) => [...h, { correct }]);
    if (correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (idx + 1 >= QUIZ.length) {
      setDone(1);
    } else {
      setIdx((i) => i + 1);
      setSelected(null);
      setRevealed(false);
    }
  };

  const restart = () => {
    setIdx(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setDone(0);
    setHistory([]);
  };

  return (
    <section
      id="quiz"
      className="relative py-24 sm:py-32 px-4 border-t border-border"
    >
      <div className="max-w-2xl mx-auto">
        <SectionHeader
          number="06 — Quiz"
          title="Test Your Knowledge"
          subtitle="10 questions on the American Civil War. How much do you know?"
        />

        {done ? (
          <Results score={score} total={QUIZ.length} onRestart={restart} />
        ) : (
          <div>
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="font-body text-xs text-muted-foreground">
                  Question {idx + 1} of {QUIZ.length}
                </span>
                <span className="font-body text-xs text-muted-foreground">
                  {score} correct
                </span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-[hsl(215_70%_55%)] to-primary"
                />
              </div>
              <div className="flex gap-1.5 mt-3">
                {QUIZ.map((_, n) => (
                  <div
                    key={n}
                    className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                      n < history.length
                        ? history[n].correct
                          ? "bg-green-500"
                          : "bg-red-500"
                        : n === idx
                          ? "bg-primary"
                          : "bg-secondary"
                    }`}
                  />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-4">
                  <p className="font-heading text-lg sm:text-xl font-semibold leading-snug mb-6">
                    {q.q}
                  </p>
                  <div className="space-y-3">
                    {q.options.map((opt, n) => {
                      let cls =
                        "border-border bg-secondary/40 hover:border-primary/50 hover:bg-secondary";
                      if (selected === n && !revealed)
                        cls = "border-primary bg-primary/10";
                      if (revealed && n === q.answer)
                        cls = "border-green-500 bg-green-500/10";
                      if (revealed && selected === n && n !== q.answer)
                        cls = "border-red-500 bg-red-500/10";
                      return (
                        <button
                          key={n}
                          onClick={() => !revealed && setSelected(n)}
                          className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 ${cls}`}
                        >
                          <span className="w-7 h-7 rounded-full border border-current flex items-center justify-center text-xs font-body font-semibold flex-shrink-0 text-muted-foreground">
                            {String.fromCharCode(65 + n)}
                          </span>
                          <span className="font-body text-sm text-foreground">
                            {opt}
                          </span>
                          {revealed && n === q.answer && (
                            <Check className="w-5 h-5 text-green-500 ml-auto flex-shrink-0" />
                          )}
                          {revealed && selected === n && n !== q.answer && (
                            <X className="w-5 h-5 text-red-500 ml-auto flex-shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <AnimatePresence>
                  {revealed && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`rounded-xl px-5 py-3 mb-4 text-sm font-body ${
                        selected === q.answer
                          ? "bg-green-500/10 border border-green-500/30 text-green-400"
                          : "bg-red-500/10 border border-red-500/30 text-red-400"
                      }`}
                    >
                      {selected === q.answer
                        ? "✓ Correct! Well done."
                        : `✗ The correct answer was: "${q.options[q.answer]}"`}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex justify-end">
                  {revealed ? (
                    <button
                      onClick={next}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-xl hover:opacity-90 transition-opacity"
                    >
                      {idx + 1 >= QUIZ.length ? "See Results" : "Next Question"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={confirm}
                      disabled={selected === null}
                      className="px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-xl disabled:opacity-30 hover:opacity-90 transition-opacity"
                    >
                      Confirm Answer
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}

function Results({
  score,
  total,
  onRestart,
}: {
  score: number;
  total: number;
  onRestart: () => void;
}) {
  const pct = Math.round((score / total) * 100);
  const tier =
    pct >= 90
      ? { label: "History Expert!", color: "text-yellow-400" }
      : pct >= 70
        ? { label: "Well Done!", color: "text-green-400" }
        : pct >= 50
          ? { label: "Not Bad!", color: "text-blue-400" }
          : { label: "Keep Studying!", color: "text-red-400" };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.15, stiffness: 200 }}
        className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-6"
      >
        <Trophy className="w-10 h-10 text-primary" />
      </motion.div>
      <h3 className={`font-heading text-3xl sm:text-4xl font-bold mb-2 ${tier.color}`}>
        {tier.label}
      </h3>
      <p className="font-body text-muted-foreground mb-8">
        You scored{" "}
        <span className="text-foreground font-semibold">
          {score} out of {total}
        </span>{" "}
        ({pct}%)
      </p>
      <div className="max-w-sm mx-auto mb-10">
        <div className="h-3 bg-secondary rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-blue-500 via-primary to-yellow-400"
          />
        </div>
      </div>
      <div className="max-w-xl mx-auto space-y-2 mb-10 text-left">
        {QUIZ.map((u, c) => (
          <div
            key={c}
            className="flex items-start gap-3 px-4 py-3 rounded-lg bg-secondary/50"
          >
            <span className="font-body text-xs text-muted-foreground w-5 flex-shrink-0 mt-0.5">
              {c + 1}.
            </span>
            <span className="font-body text-sm text-foreground/80 flex-1">
              {u.q}
            </span>
            <span className="text-xs font-body text-muted-foreground flex-shrink-0">
              {u.options[u.answer]}
            </span>
          </div>
        ))}
      </div>
      <button
        onClick={onRestart}
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-xl hover:opacity-90 transition-opacity"
      >
        <RotateCcw className="w-4 h-4" />
        Try Again
      </button>
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-heading text-lg font-semibold text-primary mb-2">
          The American Civil War
        </p>
        <p className="font-body text-sm text-muted-foreground">
          1861 — 1865 · A nation divided, then reborn.
        </p>
      </div>
    </footer>
  );
}
