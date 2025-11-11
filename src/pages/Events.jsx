import React, { useState, useEffect } from "react";
import {
  CalendarDays,
  Users,
  BookOpen,
  ClipboardList,
  Layers,
  PenTool,
  ExternalLink,
  ChevronDown,
  Clock,
  Target,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";

function parseEventDate(dateTime) {
  try {
    const [datePart, timePartRaw] = dateTime.split("|").map((x) => x.trim());
    const cleanedDate = datePart.replace(/(\d+)(st|nd|rd|th)/, "$1");
    const startTime = timePartRaw.split("–")[0].trim();
    const finalString = `${cleanedDate} ${startTime}`;
    return new Date(finalString);
  } catch {
    return null;
  }
}

function getCountdown(eventDate, now) {
  const diff = eventDate - now;
  if (diff <= 0) return { over: true };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { over: false, days, hours, minutes, seconds };
}

export default function Events() {
  const [openEvent, setOpenEvent] = useState(null);
  const toggleEvent = (id) => setOpenEvent(openEvent === id ? null : id);

  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const events = [
    {
      id: 1,
      name: "Treasure Hunt – Unlock",
      organizedBy: "AI-IOT Club and Software Coding Club",
      dateTime: "17th November 2025 | 10:00 AM – 12:00 PM",
      faculty: [
        { name: "Prof. Farhanaaz", phone: "9902329068" },
        { name: "Prof. Aashita Paliwal", phone: "9205713611" },
      ],
      objective: [
        "Enhance logical thinking, problem-solving, and teamwork through a blend of treasure hunt and coding challenges.",
        "Collaborate to decode encrypted clues, write efficient code blocks, and navigate through logical stages simulating real-world problem-solving.",
        "Encourage technical skills, analytical abilities, and creativity to decode clues, solve programming puzzles, and reach the final destination.",
      ],
      team: "3–4 members",
      fee: "₹100 per team",
      rules: [
        "Each team must consist of 3–4 members.",
        "Teams may not skip any level — every clue and code piece is essential for the final challenge.",
        "Organizers and judges will be present at key locations to verify progress.",
        "The hunt is time-bound — the team that completes all levels first will be declared the winner.",
        "If no team completes all levels, the winner will be decided based on how far each team progressed and their total completion time.",
        "Tampering with other teams’ systems or data will result in immediate disqualification.",
        "Collaboration between teams is strictly prohibited.",
        "Any attempt to peek, copy, or share answers will lead to disqualification.",
        "Physical or verbal disturbance to other teams or organizers is not tolerated.",
        "Teams must follow all instructions given by event coordinators at each level.",
        "Judges’ decisions are final and binding.",
        "Teams must not damage, misplace, or write on any physical clues, QR sheets, or code printouts.",
        "To win, a team must collect all code pieces from every level.",
        "All code pieces must be correctly combined to form the final program.",
        "The final program must be successfully compiled and run to reveal the final clue or message.",
        "The first team to complete all levels and execute the final program correctly will be declared the champions.",
      ],
      levels: [
        "Level 1: The Database Awakens",
        "Level 2: The Binary Message",
        "Level 3: The Broken Code",
        "Level 4: The Hidden Bot",
        "Level 5: The Form of Truth",
        "Level 6: The Puzzle of Pieces",
        "Level 7: The Final Codebreaker",
      ],
      registration: "https://forms.gle/KWLGqy7WrzeTmkPh8",
    },

    {
      id: 2,
      name: "Film in a Frame – Minimalistic Poster Design",
      category: "Design & Media Event",
      tagline: "Where Ideas Take Shape",
      description:
        "Participants are required to design a minimalistic poster that conveys a strong visual message using simplicity, space, and creativity. The focus is on clean design, color harmony, and impactful typography.",
      dateTime: "18th November 2025 | 9:30 AM – 11:30 AM",
      team: "Individual participation (1 member)",
      fee: "₹30",
      eligibility: "Any CSA student and 1st Semester B.Sc (M&A) mandatory",
      rules: [
        "Theme will be announced on the spot.",
        "Time limit is strictly 2 hours.",
        "Participants must use Adobe Photoshop or Illustrator.",
        "Only minimalistic design principles should be followed (no cluttered visuals).",
        "Final submission must be in JPEG or PNG format (A3 size, 300 DPI).",
        "Evaluation will be based on creativity, concept clarity, layout, and visual balance.",
      ],
      registration:
        "https://docs.google.com/forms/d/e/1FAIpQLSdv0mCipIcB5CBYJvrRDGJ0kCbDWWTPFD2ObkkNAifpgm06mg/viewform?usp=dialog",
    },

    {
      id: 3,
      name: "AdVerse – Product Ad Shoot",
      faculty: [
        { name: "Prof. Dhanush N", phone: "7829791752" },
        { name: "Prof.Likith S", phone: "87789 54340" },
        { name: "Prof.Anjali", phone: "95622 2763" },
        { name: "Dr.Archana", phone: "N/A" },
      ],
      category: "Film & Media Event",
      description:
        "Participants will create a 30-second product advertisement showcasing creativity, storytelling, and cinematography skills.",
      dateTime: "19th November 2025 | 9:00 AM – 3:00 Noon",
      duration: "2 hours",
      team: "2 members per team",
      fee: "₹50",
      eligibility: "Any CSA student and 2nd Year B.Sc (M&A) mandatory",
      rules: [
        "Total ad duration: 30 seconds (±5 seconds tolerance).",
        "Product to be featured revealed on the spot.",
        "Entire shoot and edit must be completed within 2 hours.",
        "Participants can use mobile phones or cameras for shooting.",
        "Basic editing allowed (music, color correction, text, transitions).",
        "Final output format: MP4, 1080p resolution.",
        "Evaluation based on creativity, cinematography, editing, and brand message clarity.",
      ],
      registration:
        "https://docs.google.com/forms/d/e/1FAIpQLSdv0mCipIcB5CBYJvrRDGJ0kCbDWWTPFD2ObkkNAifpgm06mg/viewform?usp=dialog",
    },

    {
      id: 4,
      name: "CineMorph – Short Movie Challenge",
      faculty: [
        { name: "Prof. Dhanush N", phone: "7829791752" },
        { name: "Prof.Likith S", phone: "87789 54340" },
        { name: "Prof.Anjali", phone: "95622 2763" },
        { name: "Dr.Archana", phone: "N/A" },
      ],
      category: "Film & 3D Event (For 3rd Year Students)",
      description:
        "Participants must produce a 1–2 minute short movie based on topics announced on the spot. The challenge encourages creativity, storytelling, and technical skills in filmmaking.",
      dateTime: "21st November 2025 | 9:00 AM – 3:00 PM",
      eligibility:
        "Open to all CSA students | 3rd Year B.Sc (Media & Animation) students mandatory",
      team: "Individual or group participation (max 3 members)",
      duration: "6 hours",
      rules: [
        "Topic will be announced on the spot.",
        "Total video duration must be between 1–2 minutes.",
        "Participants can use any device for filming (camera or mobile).",
        "Editing tools of choice allowed (Adobe Premiere, DaVinci Resolve, etc.).",
        "Original content only – plagiarism or reused clips not allowed.",
        "Submission format: MP4, 1080p resolution.",
        "Judging based on creativity, storytelling, cinematography, and editing.",
      ],
      registration:
        "https://docs.google.com/forms/d/e/1FAIpQLSdv0mCipIcB5CBYJvrRDGJ0kCbDWWTPFD2ObkkNAifpgm06mg/viewform?usp=dialog",
    },

    {
      id: 5,
      name: "CodeToUnlock",
      category: "Technical Coding Event",
      organizedBy: "CSA Club",
      dateTime: "20th November 2025 | 9:30 AM – 11:30 AM",
      faculty: [
        { name: "Prof. Pooja N G", phone: "9742269635" },
        { name: "Prof. Padmavathi", phone: "8971952081" },
      ],
      student: [
        { name: "Anjana", phone: "9986478879" },
        { name: "Arathi", phone: "9886999401" },
      ],
      objective:
        "“CodeToUnlock” is a coding-based technical event designed to test participants’ logical thinking and programming knowledge. The event challenges students to analyze incomplete codes, identify missing logic, and reconstruct the correct program flow. It aims to enhance problem-solving, debugging, and code interpretation skills in an engaging and competitive environment.",
      team: "2 members per team",
      fee: "₹50 per team",
      rules: [
        "The event consists of two rounds – Code Completion and Logic Reconstruction.",
        "Round 1: Programs with missing lines and multiple-choice options.",
        "Round 2: Partial code and output provided; participants must deduce and complete the logic.",
        "Language allowed: C.",
        "Use of internet-enabled devices or external materials is prohibited.",
        "Time limits will be announced for each round.",
        "Late submissions will not be accepted.",
        "Judges’ decisions are final and binding.",
      ],
      evaluation: [
        "Accuracy and correctness",
        "Logical clarity",
        "Code efficiency",
        "Output validation",
      ],
      registration:
        "https://docs.google.com/forms/d/e/1FAIpQLSfhChWhc_jeouKw4iU-h4evMKkCcvySHcwnWqxbxonP-1gmhA/viewform",
    },

    {
      id: 6,
      name: "Code Karaoke",
      dateTime: "20th November 2025 | 12:00 PM – 2:00 Noon",
      category: "Fun Tech Activity",
      description:
        "Participants are given a short piece of code (any language). They must sing, rap, or dramatically narrate it — like karaoke — while the audience guesses the output or what the code does.",
      duration: "30–45 Minutes",
      team: "2 members per team",
      fee: "₹50 per team",
      eligibility: "Open to all students",
      activitySetup: {
        groupSize: "Small teams or individuals",
        time: "30–45 minutes",
        materials: "Projector / printed code snippets",
      },
      objectives: [
        "Improve familiarity with programming syntax.",
        "Understand and visualize code flow.",
        "Reduce fear and make coding fun.",
        "Encourage clear and confident explanation skills.",
      ],
      howToPlay: [
        "Select a simple code snippet.",
        "One participant performs the code (reads dramatically / sings / rap style).",
        "Others guess the output or function.",
        "Points awarded for correct explanation and best performance.",
      ],
      example: `for i in range(1, 6):\n    print('Hello 🎤', i)\n\nPerform like: “Helloooo number oneee… Helloooo number twoooo…” 🎶`,
      variations: [
        "Rap Code – Perform to a beat.",
        "Whisper Code – Narrate dramatically like a thriller.",
        "Opera Code – Sing code in opera voice 🎶.",
        "Speed Round – Read code fast and stay accurate.",
      ],
      scoring: [
        "Best Code Explanation – 3 Points",
        "Best Performance – 2 Points",
        "Participation Bonus – 1 Point",
      ],
      registration: "https://forms.gle/D2FpczvzVQXWWCqcA",
    },

    {
      id: 7,
      name: "3D Art & Design",
      category: "3D Art & Design",
      faculty: [
        { name: "Prof. Dhanush N", phone: "7829791752" },
        { name: "Prof.Likith S", phone: "87789 54340" },
        { name: "Prof.Anjali", phone: "95622 2763" },
        { name: "Dr.Archana", phone: "NA" },
      ],
      description:
        "Create a 3D model in Autodesk Maya based on the given theme. Participants must demonstrate modelling, texturing, and lighting within the given time.",
      dateTime: "21st November 2025 | 9:00 AM – 3:00 PM",
      eligibility: "CSA Students",
      duration: "9:00 AM – 3:00 PM",
      team: "Individual Participation",
      rules: [
        "Theme will be announced on the spot.",
        "Software: Autodesk Maya & Substance Painter (Texturing & Lighting mandatory).",
        "Time limit: 6 hours.",
        "Only in-built tools and materials allowed (no pre-made assets).",
        "Submission format: Rendered image (HD) and Maya project file (.fbx & .mb).",
        "Judging criteria: Model accuracy, detailing, lighting, and presentation.",
      ],
      registration:
        "https://docs.google.com/forms/d/e/1FAIpQLSdv0mCipIcB5CBYJvrRDGJ0kCbDWWTPFD2ObkkNAifpgm06mg/viewform?usp=dialog",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-700 to-indigo-600 text-white rounded-b-[3rem] shadow-lg">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-4"
        >
          REVA University
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl font-light tracking-wide"
        >
          CSA Tech & Media Fest 2025 ✨
        </motion.p>
      </section>

      {/* Event Cards */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="backdrop-blur-lg bg-white/70 border border-gray-200 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="p-6 flex-1 overflow-y-auto max-h-[80vh]">
              {/* Header */}
              <h2 className="text-2xl font-semibold text-blue-700 flex items-center gap-2 mb-3">
                <BookOpen className="w-6 h-6 text-blue-500" />
                {event.name}
              </h2>

              {event.category && (
                <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full mb-3">
                  {event.category}
                </span>
              )}

              {event.tagline && (
                <p className="text-sm italic text-gray-500 mb-3">
                  “{event.tagline}”
                </p>
              )}

              {event.description && (
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>
              )}

              {/* BASIC INFO */}
              <div className="text-gray-600 text-sm space-y-1">
                {/* DATE + COUNTDOWN ADDED HERE */}
                {event.dateTime &&
                  (() => {
                    const eventDate = parseEventDate(event.dateTime);
                    const countdown = eventDate
                      ? getCountdown(eventDate, now)
                      : null;

                    return (
                      <div className="flex flex-col gap-1">
                        <p className="flex items-center gap-2">
                          <CalendarDays className="w-4 h-4 text-blue-500" />
                          {event.dateTime}
                        </p>

                        {countdown && !countdown.over && (
                          <div className="text-xs flex gap-2 flex-wrap">
                            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                              {countdown.days} days left
                            </span>

                            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                              {String(countdown.hours).padStart(2, "0")}h :
                              {String(countdown.minutes).padStart(2, "0")}m :
                              {String(countdown.seconds).padStart(2, "0")}s
                            </span>
                          </div>
                        )}

                        {countdown && countdown.over && (
                          <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                            Event Started
                          </span>
                        )}
                      </div>
                    );
                  })()}

                {event.duration && (
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    Duration: {event.duration}
                  </p>
                )}

                {event.organizedBy && (
                  <p>
                    <strong>Organized by:</strong> {event.organizedBy}
                  </p>
                )}
                {event.team && (
                  <p>
                    <strong>Team:</strong> {event.team}
                  </p>
                )}
                {event.fee && (
                  <p>
                    <strong>Fee:</strong> {event.fee}
                  </p>
                )}
                {event.eligibility && (
                  <p>
                    <strong>Eligibility:</strong> {event.eligibility}
                  </p>
                )}
              </div>

              {/* Coordinators */}
              {(event.faculty || event.student) && (
                <div className="mt-6">
                  <h3 className="text-base font-semibold text-blue-800 mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    Event Coordinators
                  </h3>

                  {event.faculty && (
                    <div className="mb-3 p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                      <h4 className="font-medium text-blue-700 mb-1">
                        Faculty
                      </h4>
                      <ul className="ml-5 list-disc space-y-1 text-gray-700 text-sm">
                        {event.faculty.map((f, i) => (
                          <li key={i}>
                            <span className="font-medium">{f.name}</span>{" "}
                            <span className="text-gray-500">– {f.phone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {event.student && (
                    <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-100">
                      <h4 className="font-medium text-indigo-700 mb-1">
                        Student
                      </h4>
                      <ul className="ml-5 list-disc space-y-1 text-gray-700 text-sm">
                        {event.student.map((s, i) => (
                          <li key={i}>
                            <span className="font-medium">{s.name}</span>{" "}
                            <span className="text-gray-500">– {s.phone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Accordion Section */}
              <div className="mt-5">
                <button
                  onClick={() => toggleEvent(event.id)}
                  className="flex items-center justify-between w-full text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  <span>
                    {openEvent === event.id
                      ? "Hide Details"
                      : "View More Details"}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openEvent === event.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openEvent === event.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 text-sm text-gray-700 space-y-4"
                  >
                    {/* ✅ Objective */}
                    {event.objective && (
                      <div>
                        <h4 className="font-semibold mb-1 flex items-center gap-1">
                          <Target className="w-4 h-4 text-blue-500" />
                          Objective
                        </h4>
                        {Array.isArray(event.objective) ? (
                          <ul className="list-disc ml-5 space-y-1">
                            {event.objective.map((obj, i) => (
                              <li key={i}>{obj}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="ml-5">{event.objective}</p>
                        )}
                      </div>
                    )}

                    {/* Objectives */}
                    {event.objectives && (
                      <div>
                        <h4 className="font-semibold mb-1 flex items-center gap-1">
                          <Lightbulb className="w-4 h-4 text-blue-500" />
                          Objectives
                        </h4>
                        <ul className="list-disc ml-5 space-y-1">
                          {event.objectives.map((obj, i) => (
                            <li key={i}>{obj}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Activity Setup */}
                    {event.activitySetup && (
                      <div>
                        <h4 className="font-semibold mb-1 flex items-center gap-1">
                          <ClipboardList className="w-4 h-4 text-blue-500" />
                          Activity Setup
                        </h4>
                        <ul className="list-disc ml-5 space-y-1">
                          {Object.entries(event.activitySetup).map(
                            ([key, val], i) => (
                              <li key={i}>
                                <strong>{key}:</strong> {val}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Rules */}
                    {event.rules && (
                      <div>
                        <h4 className="font-semibold mb-1 flex items-center gap-1">
                          <ClipboardList className="w-4 h-4 text-blue-500" />
                          Rules
                        </h4>
                        <ul className="list-disc ml-5 space-y-1">
                          {event.rules.map((rule, i) => (
                            <li key={i}>{rule}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Levels */}
                    {event.levels && (
                      <div>
                        <h4 className="font-semibold mb-1 flex items-center gap-1">
                          <Layers className="w-4 h-4 text-blue-500" />
                          Levels
                        </h4>
                        <ul className="list-disc ml-5 space-y-1">
                          {event.levels.map((lvl, i) => (
                            <li key={i}>{lvl}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Evaluation */}
                    {event.evaluation && (
                      <div>
                        <h4 className="font-semibold mb-1 flex items-center gap-1">
                          <PenTool className="w-4 h-4 text-blue-500" />
                          Evaluation Criteria
                        </h4>
                        <ul className="list-disc ml-5 space-y-1">
                          {event.evaluation.map((ev, i) => (
                            <li key={i}>{ev}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* How To Play */}
                    {event.howToPlay && (
                      <div>
                        <h4 className="font-semibold mb-1 flex items-center gap-1">
                          <PenTool className="w-4 h-4 text-blue-500" />
                          How to Play
                        </h4>
                        <ul className="list-disc ml-5 space-y-1">
                          {event.howToPlay.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Variations */}
                    {event.variations && (
                      <div>
                        <h4 className="font-semibold mb-1 flex items-center gap-1">
                          <Lightbulb className="w-4 h-4 text-blue-500" />
                          Variations
                        </h4>
                        <ul className="list-disc ml-5 space-y-1">
                          {event.variations.map((v, i) => (
                            <li key={i}>{v}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Scoring */}
                    {event.scoring && (
                      <div>
                        <h4 className="font-semibold mb-1 flex items-center gap-1">
                          <ClipboardList className="w-4 h-4 text-blue-500" />
                          Scoring
                        </h4>
                        <ul className="list-disc ml-5 space-y-1">
                          {event.scoring.map((sc, i) => (
                            <li key={i}>{sc}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Example */}
                    {event.example && (
                      <div>
                        <h4 className="font-semibold mb-1 flex items-center gap-1">
                          <BookOpen className="w-4 h-4 text-blue-500" />
                          Example
                        </h4>
                        <pre className="bg-gray-100 p-3 rounded-lg text-xs overflow-x-auto whitespace-pre-wrap">
                          {event.example}
                        </pre>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Registration Button */}
            {event.registration && (
              <div className="border-t border-gray-100 bg-blue-50 p-4 rounded-b-3xl flex justify-end">
                <a
                  href={event.registration}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition-all"
                >
                  Register Now
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
