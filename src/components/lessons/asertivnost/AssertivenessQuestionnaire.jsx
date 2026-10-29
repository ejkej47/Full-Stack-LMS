"use client";

import { useState } from "react";
import { questions, scoringMap } from "./data";
import { ExerciseButton, ExerciseCard, ExerciseIntro, UnsavedNote, useExerciseResult } from "./ExerciseUI";

const scoreLabels = {
  flight: "Povlačenje",
  attack: "Napad",
  manipulation: "Manipulacija",
  harmonious: "Asertivnost",
};

const PAGE_SIZE = 10;

export default function AssertivenessQuestionnaire() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [page, setPage] = useState(0);
  const [error, setError] = useState("");
  const { result, complete, clear } = useExerciseResult("kviz-koliko-ste-asertivni");
  const answered = answers.filter((answer) => answer !== null).length;
  const pages = Math.ceil(questions.length / PAGE_SIZE);

  const setAnswer = (index, value) => {
    setAnswers((current) => current.map((answer, position) => position === index ? value : answer));
    setError("");
  };

  const finish = () => {
    const firstMissing = answers.findIndex((answer) => answer === null);
    if (firstMissing !== -1) {
      setPage(Math.floor(firstMissing / PAGE_SIZE));
      setError(`Odgovorite na svih ${questions.length} tvrdnji pre prikaza rezultata.`);
      return;
    }
    const scores = Object.fromEntries(Object.entries(scoringMap).map(([style, indices]) => [
      style,
      indices.filter((number) => answers[number - 1] === "true").length,
    ]));
    complete(Object.fromEntries(answers.map((answer, index) => [String(index + 1), answer])), scores);
  };

  const restart = () => {
    setAnswers(Array(questions.length).fill(null));
    setPage(0);
    setError("");
    clear();
  };

  return (
    <div className="space-y-5">
      <ExerciseIntro label="Upitnik" title="Koliko ste asertivni?" description="Za svaku tvrdnju izaberite odgovor koji vas najčešće opisuje. Rezultat prikazuje četiri načina komunikacije i služi za lično promišljanje." progress={`${answered} od ${questions.length} odgovora`} />
      {result ? (
        <ExerciseCard title="Vaš pregled komunikacijskih stilova">
          <div className="space-y-5">
            {Object.entries(result.scores).map(([style, score]) => (
              <div key={style}>
                <div className="mb-2 flex items-center justify-between gap-4 text-sm font-bold"><span>{scoreLabels[style]}</span><span>{score} / 15</span></div>
                <div className="h-3 overflow-hidden rounded-full bg-[var(--accent-soft)]"><div className="h-full rounded-full bg-[var(--primary)]" style={{ width: `${score / 15 * 100}%` }} /></div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-gray-600">Viši rezultat pokazuje da ste češće prepoznali taj obrazac u svojim odgovorima. Upitnik nije dijagnostički test.</p>
          <div className="mt-6 flex flex-wrap items-center gap-4"><ExerciseButton onClick={restart} variant="secondary">Popuni ponovo</ExerciseButton><UnsavedNote /></div>
        </ExerciseCard>
      ) : (
        <>
          <div className="space-y-4">
            {questions.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE).map((question, offset) => {
              const index = page * PAGE_SIZE + offset;
              return (
                <ExerciseCard key={index} number={index + 1} title={question}>
                  <div className="flex flex-wrap gap-3">
                    {[["true", "Uglavnom tačno"], ["false", "Uglavnom netačno"]].map(([value, label]) => (
                      <button key={value} type="button" aria-pressed={answers[index] === value} onClick={() => setAnswer(index, value)} className={`rounded-full border px-5 py-2.5 text-sm font-bold transition-colors ${answers[index] === value ? "border-[var(--primary)] bg-[var(--primary)] text-white" : "border-[var(--accent-soft)] bg-white hover:border-[var(--primary)]"}`}>{label}</button>
                    ))}
                  </div>
                </ExerciseCard>
              );
            })}
          </div>
          {error && <p role="alert" className="rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-700">{error}</p>}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <ExerciseButton variant="secondary" onClick={() => setPage((current) => current - 1)} disabled={page === 0}>Prethodnih 10</ExerciseButton>
            <span className="text-sm font-bold text-gray-500">Strana {page + 1} / {pages}</span>
            {page < pages - 1 ? <ExerciseButton onClick={() => setPage((current) => current + 1)}>Sledećih 10</ExerciseButton> : <ExerciseButton onClick={finish}>Prikaži rezultat</ExerciseButton>}
          </div>
          <UnsavedNote />
        </>
      )}
    </div>
  );
}
