"use client";

import { useState } from "react";

export function useExerciseResult(lessonSlug) {
  const [result, setResult] = useState(null);

  const complete = (answers, scores = {}) => {
    // Jedan oblik podataka za svih šest lekcija; kasnije se može poslati u bazu.
    const submission = {
      version: 1,
      lesson_slug: lessonSlug,
      answers,
      scores,
      completed_at: new Date().toISOString(),
    };
    setResult(submission);
    return submission;
  };

  return { result, complete, clear: () => setResult(null) };
}

export function ExerciseIntro({ label = "Praktična vežba", title, description, progress }) {
  return (
    <div className="rounded-3xl border border-[var(--accent-soft)] bg-white p-6 shadow-sm md:p-9">
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--primary)]">{label}</p>
      <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">{title}</h2>
      <p className="mt-3 max-w-3xl leading-relaxed text-gray-600">{description}</p>
      {progress && <p className="mt-5 text-sm font-bold text-[var(--success)]" aria-live="polite">{progress}</p>}
    </div>
  );
}

export function ExerciseCard({ number, title, children, className = "" }) {
  return (
    <section className={`rounded-3xl border border-[var(--accent-soft)] bg-white p-5 shadow-sm md:p-8 ${className}`}>
      {(number || title) && (
        <div className="mb-5 flex items-start gap-3">
          {number && <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-extrabold text-white">{number}</span>}
          {title && <h3 className="pt-1 text-lg font-extrabold tracking-tight md:text-xl">{title}</h3>}
        </div>
      )}
      {children}
    </section>
  );
}

export function ExerciseButton({ children, variant = "primary", className = "", ...props }) {
  const styles = variant === "secondary"
    ? "border border-[var(--accent-soft)] bg-white text-[var(--text-main)] hover:bg-[var(--accent-soft)]"
    : "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)]";
  return <button type="button" className={`rounded-full px-6 py-3 text-sm font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${styles} ${className}`} {...props}>{children}</button>;
}

export function ExerciseField({ label, value, onChange, placeholder, rows = 1 }) {
  const inputClass = "mt-2 w-full rounded-2xl border border-[var(--accent-soft)] bg-white px-4 py-3 text-sm text-[var(--text-main)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/15";
  return (
    <label className="block text-sm font-bold">
      {label}
      {rows > 1
        ? <textarea rows={rows} value={value} onChange={onChange} placeholder={placeholder} className={`${inputClass} resize-y`} />
        : <input type="text" value={value} onChange={onChange} placeholder={placeholder} className={inputClass} />}
    </label>
  );
}

export function UnsavedNote() {
  return <p className="text-xs leading-relaxed text-gray-500">Odgovori se za sada ne čuvaju. Zabeležite ih pre nego što napustite lekciju.</p>;
}
