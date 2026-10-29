"use client";

import { useState } from "react";
import { ExerciseButton, ExerciseCard, ExerciseField, ExerciseIntro, UnsavedNote, useExerciseResult } from "./ExerciseUI";

const people = [
  ["partner", "Partner/partnerka"],
  ["children", "Deca"],
  ["friends", "Prijatelji"],
  ["colleagues", "Kolege"],
];

export default function ComplimentExercise() {
  const [selfCompliments, setSelfCompliments] = useState(Array(7).fill(""));
  const [othersCompliments, setOthersCompliments] = useState({});
  const [behaviorPraise, setBehaviorPraise] = useState({});
  const [receivedFeelings, setReceivedFeelings] = useState("");
  const { result, complete, clear } = useExerciseResult("vezba-pohvale");

  const updateList = (index, value) => {
    setSelfCompliments((current) => current.map((item, position) => position === index ? value : item));
    clear();
  };
  const updateMap = (setter, key, value) => {
    setter((current) => ({ ...current, [key]: value }));
    clear();
  };
  const finish = () => complete({ self_compliments: selfCompliments, others_compliments: othersCompliments, behavior_praise: behaviorPraise, received_feelings: receivedFeelings }, {
    self_compliments_written: selfCompliments.filter((text) => text.trim()).length,
  });

  return (
    <div className="space-y-5">
      <ExerciseIntro title="Uputite i primite pohvale" description="Zapišite pohvale za sebe i druge. Zatim razmislite kako vam je kada primite pohvalu bez umanjivanja ili opravdavanja." />
      <ExerciseCard number="1" title="Sedam pohvala sebi">
        <p className="mb-5 text-sm leading-relaxed text-gray-600">Napišite sedam iskrenih pohvala za sebe. Ako želite, izgovorite ih naglas ispred ogledala.</p>
        <div className="grid gap-4 md:grid-cols-2">
          {selfCompliments.map((value, index) => <ExerciseField key={index} label={`Pohvala ${index + 1}`} value={value} onChange={(event) => updateList(index, event.target.value)} placeholder="Cenim kod sebe..." />)}
        </div>
      </ExerciseCard>
      <ExerciseCard number="2" title="Pohvale za bliske ljude">
        <p className="mb-5 text-sm leading-relaxed text-gray-600">Odaberite osobe koje su deo vašeg života. Napišite im pohvalu za osobinu koju cenite.</p>
        <div className="grid gap-4 md:grid-cols-2">
          {people.map(([key, label]) => <ExerciseField key={key} label={label} value={othersCompliments[key] || ""} onChange={(event) => updateMap(setOthersCompliments, key, event.target.value)} placeholder="Kod tebe mi se dopada..." />)}
        </div>
      </ExerciseCard>
      <ExerciseCard number="3" title="Pohvalite konkretno ponašanje">
        <p className="mb-5 text-sm leading-relaxed text-gray-600">Opišite šta je osoba uradila i zašto vam je to značilo. Nije neophodno popuniti svako polje.</p>
        <div className="grid gap-4 md:grid-cols-2">
          {people.map(([key, label]) => <ExerciseField key={key} label={label} value={behaviorPraise[key] || ""} onChange={(event) => updateMap(setBehaviorPraise, key, event.target.value)} placeholder="Hvala ti što si..." />)}
        </div>
      </ExerciseCard>
      <ExerciseCard number="4" title="Primite pohvalu">
        <p className="mb-5 text-sm leading-relaxed text-gray-600">Kada vam neko uputi pohvalu, pokušajte da odgovorite jednostavnim „Hvala“. Kako ste se osećali?</p>
        <ExerciseField label="Moje osećanje" value={receivedFeelings} onChange={(event) => { setReceivedFeelings(event.target.value); clear(); }} rows={4} placeholder="Zapišite svoje iskustvo..." />
      </ExerciseCard>
      <div className="flex flex-wrap items-center gap-4"><ExerciseButton onClick={finish}>Završi vežbu</ExerciseButton>{result && <p role="status" className="text-sm font-bold text-[var(--success)]">Zapisali ste {result.scores.self_compliments_written} od 7 pohvala sebi.</p>}</div>
      <UnsavedNote />
    </div>
  );
}
