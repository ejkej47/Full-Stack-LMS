"use client";

import { useState } from "react";
import { situations, styles } from "./data";
import { ExerciseButton, ExerciseCard, ExerciseIntro, UnsavedNote, useExerciseResult } from "./ExerciseUI";

export default function CommunicationStylesExercise() {
  const [answers, setAnswers] = useState(situations.map((item) => item.responses.map(() => "")));
  const { result, complete, clear } = useExerciseResult("vezba-stilovi-komunikacije");
  const total = situations.reduce((sum, item) => sum + item.responses.length, 0);
  const answered = answers.flat().filter(Boolean).length;

  const update = (situation, response, value) => {
    setAnswers((current) => current.map((row, rowIndex) => rowIndex === situation
      ? row.map((choice, choiceIndex) => choiceIndex === response ? value : choice)
      : row));
    clear();
  };

  const finish = () => {
    complete(Object.fromEntries(answers.map((row, index) => [String(index + 1), row])), {
      classified: answered,
      total,
    });
  };

  return (
    <div className="space-y-5">
      <ExerciseIntro title="Prepoznajte četiri stila komunikacije" description="Pročitajte svaku situaciju i odredite stil svake ponuđene reakcije. Vežba je namenjena prepoznavanju obrazaca u razgovoru." progress={`${answered} od ${total} reakcija označeno`} />
      {situations.map((item, situationIndex) => (
        <ExerciseCard key={situationIndex} number={situationIndex + 1} title={`Situacija ${situationIndex + 1}`}>
          <p className="mb-5 leading-relaxed text-gray-600">{item.description}</p>
          <div className="space-y-3">
            {item.responses.map((response, responseIndex) => (
              <div key={responseIndex} className="grid gap-3 rounded-2xl bg-[var(--bg-soft)] p-4 md:grid-cols-[minmax(0,1fr)_220px] md:items-center">
                <p className="text-sm leading-relaxed"><span className="mr-2 font-extrabold text-[var(--primary)]">{String.fromCharCode(65 + responseIndex)}.</span>{response}</p>
                <label className="text-xs font-bold text-gray-600">Stil komunikacije
                  <select aria-label={`Situacija ${situationIndex + 1}, reakcija ${String.fromCharCode(65 + responseIndex)}`} value={answers[situationIndex][responseIndex]} onChange={(event) => update(situationIndex, responseIndex, event.target.value)} className="mt-1 w-full rounded-xl border border-[var(--accent-soft)] bg-white px-3 py-2.5 text-sm text-black outline-none focus:border-[var(--primary)]">
                    <option value="">Izaberite stil</option>
                    {styles.map((style) => <option key={style} value={style}>{style}</option>)}
                  </select>
                </label>
              </div>
            ))}
          </div>
        </ExerciseCard>
      ))}
      <div className="flex flex-wrap items-center gap-4">
        <ExerciseButton onClick={finish} disabled={answered !== total}>Završi vežbu</ExerciseButton>
        {result && <p role="status" className="text-sm font-bold text-[var(--success)]">Označili ste sve reakcije. Sada možete da pregledate svoje izbore iznad.</p>}
      </div>
      <UnsavedNote />
    </div>
  );
}
