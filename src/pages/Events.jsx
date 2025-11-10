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
        { name: "Aashita Paliwal", phone: "9205713611" },
        { name: "Farhanaaz", phone: "9902329068" },
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
      tagline: "Where Ideas Take Shape",
      description:
        "Design a minimalistic poster that conveys a strong visual message through simplicity, space, and creativity.",
      dateTime: "18th November 2025 | 9:30 AM – 11:30 AM",
      team: "Individual participation (1 member)",
      fee: "₹30",
      eligibility: "Any CSA student and 1st Semester B.Sc (M&A) mandatory",
      rules: [
        "Theme will be announced on the spot.",
        "Time limit is strictly 2 hours.",
        "Participants must use Adobe Photoshop / Illustrator.",
        "Only minimalistic design principles should be followed (no cluttered visuals).",
        "Stock images and external assets allowed only if copyright-free.",
        "Final submission must be in JPEG / PNG format (A3 size, 300 DPI).",
        "Evaluation based on creativity, concept clarity, layout, and visual balance.",
      ],
      registration:
        "https://docs.google.com/forms/d/e/1FAIpQLSdv0mCipIcB5CBYJvrRDGJ0kCbDWWTPFD2ObkkNAifpgm06mg/viewform?usp=dialog",
    },
    {
      id: 3,
      name: "AdVerse – Product Ad Shoot",
      category: "Film & Media Event",
      description:
        "Create a 30-second product advertisement showcasing creativity, storytelling, and cinematography skills.",
      dateTime: "19th November 2025 | 9:30 AM – 12:00 Noon",
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
      category: "Film & 3D Event (For 3rd Year Students)",
      description:
        "Produce a 1–2 minute short movie based on topics announced on the spot.",
      dateTime: "21st November 2025 | 9:00 AM – 3:00 PM",
      eligibility:
        "Open to all CSA students | 3rd Year B.Sc (Media & Animation) students mandatory",
      registration:
        "https://docs.google.com/forms/d/e/1FAIpQLSdv0mCipIcB5CBYJvrRDGJ0kCbDWWTPFD2ObkkNAifpgm06mg/viewform?usp=dialog",
    },
    {
      id: 5,
      name: "CodeToUnlock",
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
        "A coding-based technical event to test logical thinking, debugging, and problem-solving through code reconstruction.",
      team: "2 members",
      fee: "₹50",
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
      category: "Fun Tech Activity",
      description:
        "Perform code like karaoke — sing, rap, or narrate it dramatically while others guess the output or logic.",
      duration: "30–45 Minutes",
      team: "2 members per team",
      fee: "₹50",
      objectives: [
        "Improve familiarity with programming syntax.",
        "Understand and visualize code flow.",
        "Make coding fun and engaging.",
        "Encourage confident and clear explanation skills.",
      ],
      howToPlay: [
        "Select a short code snippet.",
        "One participant performs the code dramatically or musically.",
        "Others guess the output or function.",
        "Points awarded for correct explanation and best performance.",
      ],
      example: `for i in range(1, 6):\n   print('Hello 🎤', i)`,
      scoring: [
        "Best Code Explanation – 3 Points",
        "Best Performance – 2 Points",
        "Participation Bonus – 1 Point",
      ],
      registration: "https://forms.gle/D2FpczvzVQXWWCqcA",
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
            {/* Header */}
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

              {/* Date & Organizer */}
              <div className="space-y-1 mb-4">
                <p className="flex items-center gap-2 text-gray-700">
                  <CalendarDays className="w-5 h-5 text-blue-500" />
                  {event.dateTime}
                </p>
                {event.organizedBy && (
                  <p className="flex items-center gap-2 text-gray-700">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span>
                      <strong>Organized by:</strong> {event.organizedBy}
                    </span>
                  </p>
                )}
              </div>

              {/* Objectives */}
              {event.objective && (
                <div className="mt-3">
                  <h3 className="font-semibold text-lg flex items-center gap-2 text-gray-800 mb-2">
                    <PenTool className="w-5 h-5 text-blue-500" />
                    Objective
                  </h3>

                  {Array.isArray(event.objective) ? (
                    <ul className="list-disc ml-5 text-gray-700 space-y-1">
                      {event.objective.map((obj, i) => (
                        <li key={i}>{obj}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700">{event.objective}</p>
                  )}
                </div>
              )}

              {/* Rules */}
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

              {/* Levels */}
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

              {/* Additional Info */}
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
              </div>
            </div>

            {/* Footer */}
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
