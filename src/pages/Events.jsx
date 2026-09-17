import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Code2,
  ExternalLink,
  Film,
  Layers3,
  Palette,
  ShieldCheck,
  Trophy,
  Users,
  WandSparkles,
  GraduationCap,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/*
  REVA University — CSA Tech & Media Fest 2026
  Event data below is taken from the supplied Techfusion link details document.
  Fields not specified in the source are intentionally left unspecified.
*/

const events = [
  {
    id: 1,
    title: "Treasure Hunt: Unlock 2.0",
    shortTitle: "Unlock 2.0",
    category: "TECH",
    icon: Layers3,
    accent: "from-violet-600 to-fuchsia-600",
    date: "2026-10-05",
    startTime: "11:30",
    endTime: "13:30",
    dateLabel: "05 October 2026",
    timeLabel: "11:30 AM – 1:30 PM",
    coordinator: "Prof. Aashitha",
    fee: "₹150",
    teamSize: "3–4 members per team",
    registration:
      "https://docs.google.com/forms/d/e/1FAIpQLSdnG_PHPYzDCxBbCKPbZGBTurAsp5GLo-CEtd1KQ1jyQfJM-w/viewform",
    registrationEnd: "30 September 2026",
    prize: "1st & 2nd Prize — Cash Prize + E-Certificate",
    students: [
      ["Raghul S", "99011 59016"],
      ["Ahsin Nair", "72279 68368"],
      ["Parth Mehta", "93228 15748"],
    ],
  },
  {
    id: 2,
    title: "Pixel Rush: The Ultimate Design Challenge",
    shortTitle: "Pixel Rush",
    category: "DESIGN",
    icon: Palette,
    accent: "from-cyan-600 to-blue-700",
    date: "2026-10-05",
    startTime: null,
    endTime: null,
    dateLabel: "05 October 2026",
    timeLabel: "Time not specified",
    coordinator: "Prof. Dhanush and Prof. Aarathi",
    fee: "₹100",
    teamSize: "1 member + 1 junior optional",
    registration: "https://forms.gle/xiHbG9Hrpf5787cH9",
    registrationEnd: "30 September 2026",
    prize: "Winner & Runner-up — Cash Prize + E-Certificate",
    students: [
      ["Darshan", "7483 928 470"],
      ["Summeth", "88671 58942"],
    ],
  },
  {
    id: 3,
    title: "Techtangle – The Ultimate Tech Puzzle Challenge",
    shortTitle: "Techtangle",
    category: "TECH",
    icon: Code2,
    accent: "from-emerald-600 to-teal-700",
    date: "2026-10-06",
    startTime: "11:30",
    endTime: "13:30",
    dateLabel: "06 October 2026",
    timeLabel: "11:30 AM – 1:30 PM",
    coordinator: "Prof. Karthika",
    fee: "₹100",
    teamSize: "2–3 members per team",
    registration: "https://forms.gle/zhuvWnFP4HsGvXTW9",
    registrationEnd: "30 September 2026",
    prize: "Winner & Runner-up — Cash Prize + E-Certificate",
    students: [
      ["Kundan", "62029 72050"],
      ["Pavithra", "8668139344"],
    ],
  },
  {
    id: 4,
    title: "One Minute Movie Challenge",
    shortTitle: "One Minute Movie",
    category: "MEDIA",
    icon: Film,
    accent: "from-orange-500 to-rose-600",
    date: "2026-10-06",
    startTime: null,
    endTime: null,
    dateLabel: "06 October 2026",
    timeLabel: "Time not specified",
    coordinator: "Prof. Dhanush and Prof. Aarathi",
    fee: "₹150",
    teamSize: "2–4 members per team",
    registration: "https://forms.gle/xiHbG9Hrpf5787cH9",
    registrationEnd: "30 September 2026",
    prize: "1st & 2nd Prize — Cash Prize + E-Certificate",
    students: [
      ["Darshan", "7483 928 470"],
      ["Summeth", "88671 58942"],
    ],
  },
  {
    id: 5,
    title: "Prompt Engineering Quest",
    shortTitle: "Prompt Engineering",
    category: "AI",
    icon: WandSparkles,
    accent: "from-pink-600 to-violet-700",
    date: "2026-10-07",
    startTime: "11:30",
    endTime: "13:30",
    dateLabel: "07 October 2026",
    timeLabel: "11:30 AM – 1:30 PM",
    coordinator: "Dr. Lakshmi J V N, Dr. Deeba, and Dr. Pradeepa",
    organiser:
      "YUKTAI – AI Club, School of Computer Science and Applications (CSA), REVA University",
    fee: "₹100 per team",
    teamSize: "2 members per team",
    registration:
      "https://docs.google.com/forms/d/e/1FAIpQLSfXGErHv45mbT0S_jDPveN9LqynkTIOvIeRo49kE6xT8tQmQQ/viewform?usp=publish-editor",
    registrationEnd: "30 September 2026",
    prize: "Cash Prize + E-Certificate; 2nd Prize — Cash Prize + E-Certificate",
    students: [
      ["Nandini Pandey", "+91-9599829054"],
      ["Roshini Singh", "7019061818"],
      ["Abrar", "+91-8105399680"],
    ],
  },
  {
    id: 6,
    title: "CodeVerse – A Technical Coding Challenge",
    shortTitle: "CodeVerse",
    category: "CODING",
    icon: Code2,
    accent: "from-blue-600 to-indigo-700",
    date: "2026-10-07",
    startTime: "13:30",
    endTime: "15:30",
    dateLabel: "07 October 2026",
    timeLabel: "1:30 PM – 3:30 PM",
    coordinator: "Prof. Padmavathi and Prof. Anitha",
    fee: "₹100",
    teamSize: "2 members per team",
    registration: "https://forms.gle/mKc9Yyj1XbEbXEkv9",
    registrationEnd: "30 September 2026",
    prize: "1st & 2nd Prize — Cash Prize + E-Certificate",
    students: [
      ["Poorvaj B R", "9019135749"],
      ["Anjana", "99864 78879"],
      ["Narmatha", "98451 06461"],
    ],
  },
  {
    id: 7,
    title: "Workshop: Foundations of Offensive Security (Phase 2)",
    shortTitle: "Offensive Security",
    category: "WORKSHOP",
    icon: ShieldCheck,
    accent: "from-amber-500 to-orange-700",
    date: "2026-10-07",
    startTime: null,
    endTime: null,
    dateLabel: "07 October 2026",
    timeLabel: "Time not specified",
    coordinator: "Prof. Vijaya Kumar",
    fee: "NIL",
    teamSize: "2 members per team",
    registration: null,
    registrationEnd: "30 September 2026",
    prize: null,
    students: [["Mr. Abhishek", "9611346327"]],
  },
];

const categoryLabels = [
  "ALL",
  "TECH",
  "CODING",
  "AI",
  "DESIGN",
  "MEDIA",
  "WORKSHOP",
];

function getEventDate(event) {
  if (!event.startTime) return null;
  return new Date(`${event.date}T${event.startTime}:00`);
}

function getCountdown(target, now) {
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function formatDay(dateString) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
  }).format(new Date(`${dateString}T00:00:00`));
}

function EventIcon({ event, className = "h-5 w-5" }) {
  const Icon = event.icon;
  return <Icon className={className} />;
}

function Countdown({ event, now }) {
  const target = getEventDate(event);
  if (!target) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-xs text-black/60">
        <Clock3 className="h-3.5 w-3.5" />
        Time TBA
      </span>
    );
  }

  const countdown = getCountdown(target, now);
  if (!countdown) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/10 px-3 py-1.5 text-xs font-medium text-black/70">
        Event started
      </span>
    );
  }

  return (
    <div className="flex flex-wrap gap-1.5">
      {[
        [countdown.days, "D"],
        [countdown.hours, "H"],
        [countdown.minutes, "M"],
        [countdown.seconds, "S"],
      ].map(([value, label]) => (
        <div
          key={label}
          className="min-w-[42px] rounded-xl border border-black/10 bg-black/[0.04] px-2 py-1.5 text-center backdrop-blur"
        >
          <div className="font-mono text-sm font-semibold text-black">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-[9px] font-medium tracking-widest text-black/40">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!selectedEvent) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelectedEvent(null);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedEvent]);

  const filteredEvents = useMemo(
    () =>
      selectedCategory === "ALL"
        ? events
        : events.filter((event) => event.category === selectedCategory),
    [selectedCategory],
  );

  const registrationOpen =
    now >= new Date("2026-09-05T00:00:00") &&
    now <= new Date("2026-09-30T23:59:59");

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f9fc] text-slate-900 selection:bg-violet-500/20">
      {/* Premium ambient layer */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[15%] top-[-16rem] h-[38rem] w-[38rem] rounded-full bg-violet-300/30 blur-[140px]" />
        <div className="absolute right-[-14rem] top-[25rem] h-[34rem] w-[34rem] rounded-full bg-cyan-200/40 blur-[140px]" />
        <div className="absolute bottom-[-18rem] left-[20%] h-[36rem] w-[36rem] rounded-full bg-fuchsia-300/20 blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-violet-100/40 to-transparent" />
      </div>

      <section className="relative z-10 mx-auto max-w-[1440px] px-5 pb-16 pt-4 sm:px-8 sm:pt-5 lg:px-12">
        {/* Fest identity row — intentionally compact so it sits cleanly below the app navbar */}
        <div className="mb-10 flex items-center justify-between gap-4 pt-2 sm:mb-14">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-black/[0.08] bg-black/[0.02] px-3 py-2 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-600 shadow-[0_0_12px_rgba(124,58,237,.5)]" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/60">
              CSA Tech & Media Fest 2026
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`hidden items-center gap-2 rounded-full border px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] sm:inline-flex shadow-sm ${
                registrationOpen
                  ? "border-emerald-500/20 bg-emerald-50 text-emerald-700"
                  : "border-black/10 bg-black/[0.03] text-black/40"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  registrationOpen
                    ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,.6)]"
                    : "bg-black/30"
                }`}
              />
              {registrationOpen ? "Registration open" : "Registration closed"}
            </span>
            <span className="rounded-full border border-black/[0.08] bg-black/[0.02] px-3.5 py-2 text-[9px] font-medium tracking-[0.12em] text-black/50 shadow-sm">
              05–07 OCT · 2026
            </span>
          </div>
        </div>

        <nav className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-indigo-500/5 shadow-xl shadow-violet-500/5">
              <GraduationCap className="h-6 w-6 text-violet-600" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold tracking-tight text-slate-900">
                REVA University
              </h2>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                School of Computer Science & Applications
              </p>
            </div>
          </div>
          <span className="hidden rounded-full border border-black/10 bg-white px-5 py-2.5 text-xs font-semibold tracking-wider text-slate-700 shadow-sm sm:block">
            OCT 05–07 · 2026
          </span>
        </nav>

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 border border-slate-200/80 mb-6 shadow-sm">
          <span className="text-sm sm:text-base font-bold tracking-wider uppercase bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Techfusion 2.0
          </span>
        </div>

        {/* Hero */}
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.25fr)_390px] xl:gap-20">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.65 }}
              className="max-w-4xl text-[3.8rem] font-semibold leading-[0.9] tracking-[-0.065em] text-slate-900 sm:text-7xl md:text-[5.8rem] lg:text-[6.8rem]"
            >
              Where ideas
              <br />
              <span className="text-slate-500">become</span>{" "}
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">
                experiences.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.13, duration: 0.65 }}
              className="mt-8 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8"
            >
              Seven curated challenges and experiences across technology, AI,
              coding, design, media and cybersecurity — all happening at REVA
              University.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              <HeroStat value="07" label="Events" />
              <HeroStat value="03" label="Fest days" />
              <HeroStat value="30 SEP" label="Reg. closes" />
            </motion.div>
          </div>

          {/* Schedule card */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/80 p-5 shadow-2xl shadow-slate-200 backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-200/50 blur-3xl" />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Fest schedule
                  </p>
                  <p className="mt-1 text-xs text-slate-600">October 2026</p>
                </div>
                <CalendarDays className="h-4 w-4 text-slate-400" />
              </div>

              <div className="space-y-2">
                {[
                  ["05 OCT", "2 events", "Treasure Hunt · Pixel Rush"],
                  ["06 OCT", "2 events", "Techtangle · One Minute Movie"],
                  ["07 OCT", "3 events", "Prompt Quest · CodeVerse · Security"],
                ].map(([day, count, names], index) => (
                  <div
                    key={day}
                    className="group rounded-2xl border border-black/[0.06] bg-slate-50 p-3.5 transition duration-300 hover:border-black/15 hover:bg-slate-100/80"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-800">
                        {day}
                      </span>
                      <span className="rounded-full bg-black/[0.04] px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                        {count}
                      </span>
                    </div>
                    <p className="mt-2 truncate text-[10px] text-slate-400">
                      {names}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Event browser header */}
        <div className="mt-20 border-y border-black/[0.08] py-5">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Explore{" "}
                <span className="font-semibold text-slate-900">
                  {filteredEvents.length}
                </span>{" "}
                {filteredEvents.length === 1 ? "experience" : "experiences"}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-400">
                Choose your arena
              </p>
            </div>

            <div className="flex max-w-full gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categoryLabels.map((category) => {
                const active = category === selectedCategory;
                return (
                  <button
                    type="button"
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`shrink-0 cursor-pointer rounded-full border px-4 py-2.5 text-[10px] font-semibold tracking-[0.14em] transition duration-300 ${
                      active
                        ? "border-slate-900 bg-slate-900 text-white shadow-md shadow-slate-900/10"
                        : "border-black/10 bg-white text-slate-600 hover:border-black/20 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Event cards */}
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                now={now}
                onDetails={() => setSelectedEvent(event)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom registration strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 overflow-hidden rounded-[2rem] border border-black/15 bg-white shadow-xl shadow-slate-200/50"
        >
          <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <p className="text-sm font-medium text-slate-900">
                Registration window
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                All event registrations open 05 September 2026 and close 30
                September 2026, according to the supplied event details.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2 rounded-2xl border border-black/10 bg-slate-50 px-4 py-3">
              <CalendarDays className="h-4 w-4 text-slate-400" />
              <div>
                <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
                  Deadline
                </p>
                <p className="text-xs font-medium text-slate-800">
                  30 Sep 2026
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <footer className="mt-14 flex flex-col gap-2 border-t border-black/[0.08] pt-6 text-[10px] uppercase tracking-[0.12em] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>REVA University · CSA Tech & Media Fest 2026</span>
          <span>School of Computer Science & Applications</span>
        </footer>
      </section>

      <AnimatePresence>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            now={now}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

function EventCard({ event, index, now, onDetails }) {
  const countdown = getEventDate(event)
    ? getCountdown(getEventDate(event), now)
    : null;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12, scale: 0.98 }}
      transition={{ delay: index * 0.045, duration: 0.45 }}
      className="group relative flex min-h-[500px] flex-col overflow-hidden rounded-[2rem] border border-black/10 bg-white p-5 shadow-xl shadow-slate-200/60 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-black/20 hover:shadow-2xl sm:p-6"
    >
      <div
        className={`pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br ${event.accent} opacity-[0.08] blur-3xl transition duration-700 group-hover:opacity-[0.15]`}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50/50 to-transparent" />

      <div className="relative flex items-start justify-between gap-4">
        <div
          className={`grid h-12 w-12 place-items-center rounded-[1.1rem] bg-gradient-to-br ${event.accent} shadow-md`}
        >
          <EventIcon event={event} className="h-5 w-5 text-white" />
        </div>
        <span className="rounded-full border border-black/10 bg-slate-50 px-3 py-1.5 text-[9px] font-semibold tracking-[0.17em] text-slate-600">
          {event.category}
        </span>
      </div>

      <div className="relative mt-9">
        <div className="mb-3 flex items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400">
            {formatDay(event.date)}
          </span>
          <span className="h-px w-5 bg-black/10" />
          <span className="font-mono text-[9px] text-slate-400">
            0{event.id}
          </span>
        </div>

        <h2 className="max-w-[22rem] text-[1.65rem] font-semibold leading-[1.04] tracking-[-0.045em] text-slate-900 sm:text-[1.8rem]">
          {event.title}
        </h2>
      </div>

      <div className="relative mt-7 grid grid-cols-2 gap-2">
        <InfoChip icon={CalendarDays} label={event.dateLabel} />
        <InfoChip icon={Users} label={event.teamSize} />
        <InfoChip icon={Clock3} label={event.timeLabel} />
        <InfoChip
          icon={Trophy}
          label={event.fee === "NIL" ? "Free entry" : event.fee}
        />
      </div>

      <div className="relative mt-4 rounded-2xl border border-black/[0.06] bg-slate-50/80 px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[9px] uppercase tracking-[0.16em] text-slate-400">
              Prize
            </p>
            <p className="mt-1 truncate text-[11px] text-slate-600">
              {event.prize || "Not specified"}
            </p>
          </div>
          <Trophy className="h-4 w-4 shrink-0 text-slate-400" />
        </div>
      </div>

      <div className="relative mt-auto border-t border-black/[0.08] pt-5">
        <div className="mb-4 flex min-h-[58px] items-center justify-between gap-4">
          <div>
            <p className="text-[9px] uppercase tracking-[0.17em] text-slate-400">
              {countdown
                ? "Starts in"
                : event.startTime
                  ? "Status"
                  : "Schedule"}
            </p>
            {event.registrationEnd && (
              <p className="mt-1 text-[10px] text-slate-500">
                Register by {event.registrationEnd}
              </p>
            )}
          </div>
          <Countdown event={event} now={now} />
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={onDetails}
            className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm font-medium text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-slate-50 active:translate-y-0"
          >
            Explore event
            <ArrowUpRight className="h-4 w-4 text-slate-400" />
          </button>

          {event.registration ? (
            <a
              href={event.registration}
              target="_blank"
              rel="noopener noreferrer"
              className={`grid w-12 shrink-0 cursor-pointer place-items-center rounded-2xl bg-gradient-to-br ${event.accent} text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] active:scale-100`}
              aria-label={`Register for ${event.title}`}
              title="Register now"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <span
              className="grid w-12 shrink-0 place-items-center rounded-2xl border border-black/10 bg-slate-100 text-slate-400"
              title="Registration link not specified"
            >
              <ExternalLink className="h-4 w-4" />
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function EventModal({ event, now, onClose }) {
  const countdown = getEventDate(event)
    ? getCountdown(getEventDate(event), now)
    : null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-2 backdrop-blur-md sm:p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`event-title-${event.id}`}
        initial={{ opacity: 0, y: 24, scale: 0.975 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 14, scale: 0.985 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className="relative flex max-h-[94vh] w-full max-w-3xl flex-col overflow-hidden rounded-[1.6rem] border border-black/15 bg-white shadow-[0_30px_100px_rgba(0,0,0,.15)] sm:rounded-[2rem]"
      >
        {/* Modal hero */}
        <header className="relative shrink-0 overflow-hidden border-b border-black/[0.08] bg-slate-50/50 px-5 py-6 sm:px-8 sm:py-8">
          <div
            className={`pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-gradient-to-br ${event.accent} opacity-15 blur-[80px]`}
          />
          <div
            className={`pointer-events-none absolute -left-28 bottom-[-12rem] h-64 w-64 rounded-full bg-gradient-to-br ${event.accent} opacity-[0.05] blur-[80px]`}
          />

          <div className="relative flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div
                className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${event.accent} shadow-md`}
              >
                <EventIcon event={event} className="h-5 w-5 text-white" />
              </div>

              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {event.category}
                </span>
                <span className="h-1 w-1 rounded-full bg-black/20" />
                <span className="text-[9px] font-mono text-slate-400">
                  EVENT 0{event.id}
                </span>
              </div>

              <h2
                id={`event-title-${event.id}`}
                className="max-w-2xl text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-slate-900 sm:text-4xl lg:text-[2.8rem]"
              >
                {event.title}
              </h2>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-[10px] text-slate-600 shadow-sm">
                  {event.dateLabel}
                </span>
                <span className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-[10px] text-slate-600 shadow-sm">
                  {event.timeLabel}
                </span>
                {event.registration && (
                  <span className="rounded-full border border-emerald-500/20 bg-emerald-50 px-3 py-1.5 text-[10px] text-emerald-700">
                    Registration available
                  </span>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-full border border-black/10 bg-white text-slate-500 shadow-sm transition duration-300 hover:bg-slate-100 hover:text-slate-900"
              aria-label="Close event details"
              title="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </header>

        {/* Modal content */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-white">
          <div className="space-y-8 p-5 sm:p-8">
            {/* Quick facts */}
            <section>
              <div className="mb-3 flex items-center justify-between">
                <SectionTitle>Event overview</SectionTitle>
                {countdown && <Countdown event={event} now={now} compact />}
              </div>

              <div className="grid gap-2.5 sm:grid-cols-2">
                <Detail
                  icon={CalendarDays}
                  label="Event date"
                  value={event.dateLabel}
                />
                <Detail
                  icon={Clock3}
                  label="Date & time"
                  value={event.timeLabel}
                />
                <Detail icon={Users} label="Team size" value={event.teamSize} />
                <Detail
                  icon={Trophy}
                  label="Registration fee"
                  value={event.fee}
                />
                <Detail
                  icon={CalendarDays}
                  label="Registration opens"
                  value="05 September 2026"
                />
                <Detail
                  icon={CalendarDays}
                  label="Registration closes"
                  value={event.registrationEnd}
                />
                <Detail
                  icon={Trophy}
                  label="Prize"
                  value={event.prize || "Not specified in the supplied details"}
                />
                <Detail
                  icon={Clock3}
                  label="Countdown"
                  value={
                    countdown
                      ? "Live countdown to event start"
                      : event.startTime
                        ? "Event has started"
                        : "Start time not specified"
                  }
                />
              </div>
            </section>

            {/* Organiser */}
            {event.organiser && (
              <section>
                <SectionTitle>Organiser</SectionTitle>
                <div className="rounded-2xl border border-black/10 bg-slate-50 p-4 sm:p-5">
                  <p className="text-sm leading-6 text-slate-700">
                    {event.organiser}
                  </p>
                </div>
              </section>
            )}

            {/* Coordinator */}
            <section>
              <SectionTitle>Faculty coordinator</SectionTitle>
              <div className="rounded-2xl border border-black/10 bg-slate-50 p-4 sm:p-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${event.accent} shadow-sm`}
                  >
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-sm font-medium text-slate-800">
                    {event.coordinator}
                  </p>
                </div>
              </div>
            </section>

            {/* Student coordinators */}
            <section>
              <SectionTitle>
                Student coordinator{event.students.length > 1 ? "s" : ""}
              </SectionTitle>
              <div className="grid gap-2">
                {event.students.map(([name, phone]) => (
                  <div
                    key={`${name}-${phone}`}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-slate-50 px-4 py-3.5"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-black/10 bg-white shadow-sm">
                        <Users className="h-3.5 w-3.5 text-slate-400" />
                      </div>
                      <span className="truncate text-sm text-slate-800">
                        {name}
                      </span>
                    </div>
                    <a
                      href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                      className="cursor-pointer whitespace-nowrap font-mono text-[11px] text-slate-500 transition hover:text-slate-900"
                    >
                      {phone}
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Registration */}
            <section className="rounded-[1.6rem] border border-black/10 bg-slate-50 p-5 sm:p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    Ready to participate?
                  </p>
                  <p className="mt-1 max-w-md text-xs leading-5 text-slate-500">
                    Registration closes on {event.registrationEnd}. Use the
                    official registration form provided for this event.
                  </p>
                </div>

                {event.registration ? (
                  <a
                    href={event.registration}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${event.accent} px-5 py-3.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg`}
                  >
                    Register now
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3.5 text-sm text-slate-400 shadow-sm">
                    Registration link not specified
                  </span>
                )}
              </div>
            </section>

            {/* Source completeness note */}
            <p className="text-center text-[10px] leading-5 text-slate-400">
              Event information shown here reflects the supplied Techfusion
              event details. Fields not specified in that source are
              intentionally marked as not specified.
            </p>
          </div>
        </div>

        {/* Modal footer */}
        <footer className="shrink-0 border-t border-black/[0.08] bg-slate-50 p-3 sm:px-5">
          <button
            type="button"
            onClick={onClose}
            className="w-full cursor-pointer rounded-xl border border-black/10 bg-white px-4 py-3 text-xs font-medium text-slate-600 shadow-sm transition duration-300 hover:bg-slate-100 hover:text-slate-900"
          >
            Close event details
          </button>
        </footer>
      </motion.div>
    </motion.div>
  );
}

function HeroStat({ value, label }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-sm">
      <p className="font-mono text-sm font-semibold text-slate-800">{value}</p>
      <p className="mt-0.5 text-[9px] uppercase tracking-[0.16em] text-slate-400">
        {label}
      </p>
    </div>
  );
}

function InfoChip({ icon: Icon, label }) {
  return (
    <div className="flex min-h-[54px] items-center gap-2.5 rounded-2xl border border-black/[0.06] bg-slate-50 px-3.5 py-2.5">
      <Icon className="h-3.5 w-3.5 shrink-0 text-slate-400" />
      <span className="line-clamp-2 text-[10px] leading-4 text-slate-600">
        {label}
      </span>
    </div>
  );
}

function Detail({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition duration-300 hover:border-black/20 hover:bg-slate-50">
      <div className="mb-2 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.17em] text-slate-400">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <p className="text-sm leading-5 text-slate-800">{value}</p>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h4 className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
      <span className="h-px w-5 bg-black/20" />
      {children}
    </h4>
  );
}
