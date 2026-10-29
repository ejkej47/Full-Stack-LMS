"use client";

import { useState } from "react";
import { rights, demands } from "./data";
import { ExerciseButton, ExerciseCard, ExerciseIntro, UnsavedNote, useExerciseResult } from "./ExerciseUI";

const groups = [
  { title: "Lična prava", items: rights },
  { title: "Pravo da ne ispunjavate svaki zahtev", items: demands },
];

export default function SelfRightsExercise() {
  const [answers, setAnswers] = useState({});
  const { result, complete, clear } = useExerciseResult("vezba-vratite-sebi-pravo");
  const allItems = [...rights, ...demands];

  const toggle = (id, period) => {
    setAnswers((current) => ({
      ...current,
      [id]: { ...current[id], [period]: !current[id]?.[period] },
    }));
    clear();
  };

  const regained = allItems.filter((item) => answers[item.id]?.past && !answers[item.id]?.now);
  const reclaim = allItems.filter((item) => answers[item.id]?.now);

  return (
    <div className="space-y-5">
      <ExerciseIntro title="Vratite sebi pravo" description="Za svaku izjavu označite da li ste je doživljavali kao zabranu ili zahtev ranije i da li je osećate i danas. Na kraju pogledajte prava koja ste već osvojili i ona kojima želite da se vratite." />
      {groups.map((group, groupIndex) => (
        <ExerciseCard key={group.title} number={groupIndex + 1} title={group.title}>
          <div className="space-y-3">
            {group.items.map((item) => (
              <div key={item.id} className="rounded-2xl border border-[var(--accent-soft)] p-4 md:p-5">
                <p className="font-bold leading-relaxed">{item.text}</p>
                <p className="mt-1 text-sm text-gray-500">{item.past}</p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                  {[["past", "Važilo ranije"], ["now", "Važi i danas"]].map(([period, label]) => (
                    <label key={period} className="flex cursor-pointer items-center gap-2 font-semibold">
                      <input type="checkbox" checked={Boolean(answers[item.id]?.[period])} onChange={() => toggle(item.id, period)} className="h-4 w-4 accent-[var(--primary)]" />{label}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ExerciseCard>
      ))}
      <ExerciseButton onClick={() => complete(answers, { regained: regained.length, reclaim: reclaim.length })}>Prikaži moj pregled</ExerciseButton>
      {result && <div className="grid gap-5 md:grid-cols-2">
        <ExerciseCard title={`Osvojena prava (${regained.length})`}>
          {regained.length ? <ul className="space-y-2 text-sm leading-relaxed text-[var(--success)]">{regained.map((item) => <li key={item.id}>✓ {item.text}</li>)}</ul> : <p className="text-sm text-gray-500">Označite zabranu koja je važila ranije, ali ne i danas.</p>}
        </ExerciseCard>
        <ExerciseCard title={`Prava koja vraćate sebi (${reclaim.length})`}>
          {reclaim.length ? <ul className="space-y-2 text-sm leading-relaxed text-[var(--primary)]">{reclaim.map((item) => <li key={item.id}>• {item.text}</li>)}</ul> : <p className="text-sm text-gray-500">Trenutno niste označili nijednu zabranu koja traje.</p>}
        </ExerciseCard>
      </div>}
      <UnsavedNote />
    </div>
  );
}
