"use client";

import { useState } from "react";
import { ExerciseButton, ExerciseCard, ExerciseField, ExerciseIntro, UnsavedNote, useExerciseResult } from "./ExerciseUI";

const assertiveRights = [
  "Imam pravo da kažem ne bez osećaja krivice.",
  "Imam pravo da izrazim svoje mišljenje i osećanja.",
  "Imam pravo da tražim ono što mi je potrebno.",
  "Imam pravo da promenim mišljenje.",
  "Imam pravo da pogrešim i učim iz greške.",
  "Imam pravo da postavim granice uz poštovanje drugih.",
];

export default function AssertiveRightsExercise() {
  const [right, setRight] = useState("");
  const [situation, setSituation] = useState("");
  const [oldResponse, setOldResponse] = useState("");
  const [newResponse, setNewResponse] = useState("");
  const [firstStep, setFirstStep] = useState("");
  const { result, complete, clear } = useExerciseResult("vezba-asertivna-prava");

  const update = (setter) => (event) => { setter(event.target.value); clear(); };
  const finish = () => complete({ right, situation, old_response: oldResponse, new_response: newResponse, first_step: firstStep });

  return (
    <div className="space-y-5">
      <ExerciseIntro title="Vratite sebi asertivno pravo" description="Izaberite pravo koje želite češće da koristite. Zatim opišite konkretnu situaciju i napišite rečenicu kojom biste ga izrazili jasno i uz poštovanje druge osobe." />
      <ExerciseCard number="1" title="Izaberite pravo">
        <div className="grid gap-3 md:grid-cols-2">
          {assertiveRights.map((option) => <button key={option} type="button" aria-pressed={right === option} onClick={() => { setRight(option); clear(); }} className={`rounded-2xl border p-4 text-left text-sm font-bold leading-relaxed transition-colors ${right === option ? "border-[var(--primary)] bg-[var(--primary)] text-white" : "border-[var(--accent-soft)] bg-white hover:border-[var(--primary)]"}`}>{option}</button>)}
        </div>
      </ExerciseCard>
      <ExerciseCard number="2" title="Primenite ga u svom životu">
        <div className="space-y-5">
          <ExerciseField label="U kojoj situaciji vam je ovo pravo važno?" value={situation} onChange={update(setSituation)} rows={3} placeholder="Opišite događaj ili razgovor..." />
          <ExerciseField label="Kako obično reagujete?" value={oldResponse} onChange={update(setOldResponse)} rows={3} placeholder="Šta biste najčešće rekli ili uradili?" />
          <ExerciseField label="Šta biste mogli da kažete asertivno?" value={newResponse} onChange={update(setNewResponse)} rows={3} placeholder="Kratka, jasna rečenica u prvom licu..." />
          <ExerciseField label="Koji je mali prvi korak?" value={firstStep} onChange={update(setFirstStep)} rows={2} placeholder="Kada i sa kim možete da probate?" />
        </div>
      </ExerciseCard>
      <ExerciseButton onClick={finish} disabled={!right || !situation.trim() || !newResponse.trim()}>Sastavi moj plan</ExerciseButton>
      {result && <ExerciseCard title="Vaš plan">
        <p className="font-bold text-[var(--primary)]">{right}</p>
        <p className="mt-4 text-sm text-gray-600">U situaciji: {situation}</p>
        <blockquote className="mt-4 rounded-2xl bg-[var(--accent-soft)] p-5 text-lg font-bold leading-relaxed">„{newResponse}“</blockquote>
        {firstStep && <p className="mt-4 text-sm text-gray-600">Prvi korak: {firstStep}</p>}
      </ExerciseCard>}
      <UnsavedNote />
    </div>
  );
}
