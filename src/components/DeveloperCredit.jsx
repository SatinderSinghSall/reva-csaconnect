import React from "react";

const DeveloperCredit = () => {
  return (
    <div className="w-full py-12 px-4 bg-transparent border-t border-black/[0.08]">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        <p className="text-slate-700 text-sm sm:text-base tracking-wide leading-relaxed">
          Crafted with{" "}
          <span className="text-rose-500 font-medium inline-block animate-pulse">
            ♥
          </span>{" "}
          and precision by{" "}
          <a
            href="https://satinder-portfolio.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-violet-600 hover:text-violet-600 transition-all duration-200"
          >
            Satinder Singh Sall
          </a>
          <span className="text-slate-300 mx-2.5">•</span>
          <span className="text-slate-600 font-medium">BCA Alumni (2025)</span>
          <span className="text-slate-300 mx-2.5">•</span>
          <span className="text-slate-600 font-medium">
            CSA, REVA University
          </span>
        </p>
      </div>
    </div>
  );
};

export default DeveloperCredit;
