import React from "react";
import {
  CalendarDays,
  Users,
  BookOpen,
  ClipboardList,
  Layers,
  PenTool,
  ExternalLink,
} from "lucide-react";

export default function Events() {
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

    {
      id: 8,
      name: "Code2Unlock",
      category: "Code2Unlock",
      organizedBy: "AI-IOT Club Presents",
      description:
        "The AI-IOT Club ,Department of Computer Science and Applications (CSA) at Reva University is thrilled to launch Code to Unlock – a fast-paced, puzzle-based C programming competition! You and your partner will race against the clock to solve three levels of clever C-based challenges. You'll need to trace logic, hunt for bugs, and unravel riddles hidden in the code. Each level you solve 'unlocks' the next, with the difficulty increasing as you go.",
      dateTime: "21st November 2025 | 9:00 AM – 3:00 PM",
      team: "Team Size:  2 members",
      rules: ["Language: C Programing", "Levels: 3"],
      fee: " ₹60 per team",
      registration:
        "https://docs.google.com/forms/d/e/1FAIpQLSfhChWhc_jeouKw4iU-h4evMKkCcvySHcwnWqxbxonP-1gmhA/viewform",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-700">
        🎓 REVA University - CSA Tech & Media Fest 2025
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-700 flex items-center gap-2 mb-1">
                <BookOpen className="w-6 h-6 text-blue-500" />
                {event.name}
              </h2>

              {event.tagline && (
                <p className="italic text-gray-500 mb-4 text-sm">
                  “{event.tagline}”
                </p>
              )}

              {event.description && (
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {event.description}
                </p>
              )}

              <div className="space-y-1 mb-4">
                <p className="flex items-center gap-2 text-gray-700">
                  <CalendarDays className="w-5 h-5 text-blue-500" />
                  {event.dateTime}
                </p>
                {event.faculty && event.faculty.length > 0 && (
                  <div className="mt-3">
                    <h3 className="font-semibold text-lg flex items-center gap-2 text-gray-800 mb-2">
                      <Users className="w-5 h-5 text-blue-500" />
                      Faculty Coordinators
                    </h3>
                    <ul className="list-disc ml-5 text-gray-700 space-y-1 text-sm">
                      {event.faculty.map((fac, i) => (
                        <li key={i}>
                          {fac.name} –{" "}
                          <span className="text-gray-600">{fac.phone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {event.student && event.student.length > 0 && (
                  <div className="mt-3">
                    <h3 className="font-semibold text-lg flex items-center gap-2 text-gray-800 mb-2">
                      <Users className="w-5 h-5 text-blue-500" />
                      Students
                    </h3>
                    <ul className="list-disc ml-5 text-gray-700 space-y-1 text-sm">
                      {event.student.map((stu, i) => (
                        <li key={i}>
                          {stu.name} –{" "}
                          <span className="text-gray-600">{stu.phone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {event.organizedBy && (
                  <p className="flex items-center gap-2 text-gray-700">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span>
                      <strong>Organized by:</strong> {event.organizedBy}
                    </span>
                  </p>
                )}
              </div>

              {(event.objective || event.objectives) && (
                <div className="mt-3">
                  <h3 className="font-semibold text-lg flex items-center gap-2 text-gray-800 mb-2">
                    <PenTool className="w-5 h-5 text-blue-500" />
                    Objective
                  </h3>

                  {Array.isArray(event.objective || event.objectives) ? (
                    <ul className="list-disc ml-5 text-gray-700 space-y-1">
                      {(event.objective || event.objectives).map((obj, i) => (
                        <li key={i}>{obj}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700">
                      {event.objective || event.objectives}
                    </p>
                  )}
                </div>
              )}

              {event.howToPlay && (
                <div className="mt-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2 text-gray-800 mb-2">
                    <ClipboardList className="w-5 h-5 text-blue-500" />
                    How to Play
                  </h3>
                  <ul className="list-decimal ml-5 text-gray-700 space-y-1 text-sm">
                    {event.howToPlay.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>
              )}

              {event.rules && (
                <div className="mt-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2 text-gray-800 mb-2">
                    <ClipboardList className="w-5 h-5 text-blue-500" />
                    Rules & Regulations
                  </h3>
                  <ul className="list-decimal ml-5 text-gray-700 space-y-1 text-sm">
                    {event.rules.map((rule, i) => (
                      <li key={i}>{rule}</li>
                    ))}
                  </ul>
                </div>
              )}

              {event.levels && (
                <div className="mt-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2 text-gray-800 mb-2">
                    <Layers className="w-5 h-5 text-blue-500" />
                    Levels
                  </h3>
                  <ul className="list-disc ml-5 text-gray-700 space-y-1 text-sm">
                    {event.levels.map((lvl, i) => (
                      <li key={i}>{lvl}</li>
                    ))}
                  </ul>
                </div>
              )}

              {event.example && (
                <div className="mt-4 bg-gray-100 p-3 rounded-lg font-mono text-sm text-gray-800 overflow-x-auto">
                  <p className="mb-2 font-semibold text-gray-700">Example:</p>
                  <pre>{event.example}</pre>
                </div>
              )}

              {event.scoring && (
                <div className="mt-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2 text-gray-800 mb-2">
                    <ClipboardList className="w-5 h-5 text-blue-500" />
                    Scoring Criteria
                  </h3>
                  <ul className="list-disc ml-5 text-gray-700 space-y-1 text-sm">
                    {event.scoring.map((score, i) => (
                      <li key={i}>{score}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-4 text-sm text-gray-700 space-y-1">
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
                {event.duration && (
                  <p>
                    <strong>Duration:</strong> {event.duration}
                  </p>
                )}
              </div>
            </div>

            {event.registration && (
              <div className="border-t border-gray-100 bg-gray-50 p-4 rounded-b-2xl flex justify-end">
                <a
                  href={event.registration}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-blue-700 transition-all"
                >
                  Register Now
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
