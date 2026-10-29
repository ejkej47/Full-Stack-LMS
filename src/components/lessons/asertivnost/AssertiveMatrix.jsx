"use client";

import { useState } from "react";
import { people, skills } from "./data";
import { ExerciseButton, ExerciseCard, ExerciseIntro, UnsavedNote, useExerciseResult } from "./ExerciseUI";

export default function AssertiveMatrix() {
  const [ratings, setRatings] = useState({});
  const [personIndex, setPersonIndex] = useState(0);
  const { result, complete, clear } = useExerciseResult("vezba-asertivna-mreza");
  const person = people[personIndex];
  const rated = Object.values(ratings).reduce((sum, row) => sum + Object.values(row).filter(Boolean).length, 0);

  const update = (skillIndex, value) => {
    setRatings((current) => ({
      ...current,
      [personIndex]: { ...current[personIndex], [skillIndex]: value ? Number(value) : null },
    }));
    clear();
  };

  const finish = () => {
    const averages = Object.fromEntries(skills.map((skill, skillIndex) => {
      const values = Object.values(ratings).map((row) => row[skillIndex]).filter((value) => typeof value === "number");
      return [String(skillIndex), values.length ? Number((values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(1)) : null];
    }));
    complete(ratings, { rated, total: people.length * skills.length, averages });
  };

  return (
    <div className="space-y-5">
      <ExerciseIntro title="Asertivna mreža" description="Ocenite koliko vam je teško da primenite određenu veštinu sa različitim ljudima. Ocena 1 znači bez teškoća, a 5 velike teškoće. Možete preskočiti odnose koji nisu deo vašeg života." progress={`${rated} od ${people.length * skills.length} mogućih ocena`} />
      <ExerciseCard title="Izaberite osobu ili grupu">
        <label className="block text-sm font-bold">Osoba ili grupa
          <select value={personIndex} onChange={(event) => setPersonIndex(Number(event.target.value))} className="mt-2 w-full rounded-2xl border border-[var(--accent-soft)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--primary)]">
            {people.map((name, index) => <option key={index} value={index}>{index + 1}. {name}</option>)}
          </select>
        </label>
        <p className="mt-4 text-xs text-gray-500">{Object.values(ratings[personIndex] || {}).filter(Boolean).length} od {skills.length} veština ocenjeno za ovu grupu</p>
      </ExerciseCard>
      <ExerciseCard number={personIndex + 1} title={person}>
        <div className="grid gap-3 md:grid-cols-2">
          {skills.map((skill, skillIndex) => (
            <label key={skillIndex} className="flex flex-col justify-between gap-3 rounded-2xl bg-[var(--bg-soft)] p-4 text-sm font-bold sm:flex-row sm:items-center">
              <span>{skill}</span>
              <select aria-label={`${skill} — ${person}`} value={ratings[personIndex]?.[skillIndex] || ""} onChange={(event) => update(skillIndex, event.target.value)} className="w-full rounded-xl border border-[var(--accent-soft)] bg-white px-3 py-2 outline-none focus:border-[var(--primary)] sm:w-28">
                <option value="">Bez ocene</option>
                {[1, 2, 3, 4, 5].map((value) => <option key={value} value={value}>{value}</option>)}
              </select>
            </label>
          ))}
        </div>
      </ExerciseCard>
      <div className="flex flex-wrap justify-between gap-3">
        <ExerciseButton variant="secondary" disabled={personIndex === 0} onClick={() => setPersonIndex((index) => index - 1)}>Prethodna grupa</ExerciseButton>
        <ExerciseButton disabled={personIndex === people.length - 1} onClick={() => setPersonIndex((index) => index + 1)}>Sledeća grupa</ExerciseButton>
      </div>
      <ExerciseButton onClick={finish} disabled={rated === 0}>Prikaži moj pregled</ExerciseButton>
      {result && <ExerciseCard title="Prosečna težina po veštini">
        <p className="mb-5 text-sm text-gray-600">Prosek je izračunat samo za ocenjene odnose. Viši broj pokazuje gde vam je trenutno teže.</p>
        <div className="space-y-4">
          {skills.map((skill, index) => {
            const average = result.scores.averages[index];
            return <div key={index} className="grid grid-cols-[minmax(0,1fr)_3rem] items-center gap-3 text-sm"><span className="font-bold">{skill}</span><span className="text-right font-extrabold text-[var(--primary)]">{average ?? "—"}</span>{average !== null && <div className="col-span-2 h-2 overflow-hidden rounded-full bg-[var(--accent-soft)]"><div className="h-full rounded-full bg-[var(--primary)]" style={{ width: `${average / 5 * 100}%` }} /></div>}</div>;
          })}
        </div>
      </ExerciseCard>}
      <UnsavedNote />
    </div>
  );
}
