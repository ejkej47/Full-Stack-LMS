# Rezultati vežbi asertivnosti

Šest interaktivnih lekcija sada koristi isti oblik rezultata kroz `useExerciseResult`:

```json
{
  "version": 1,
  "lesson_slug": "kviz-koliko-ste-asertivni",
  "answers": {},
  "scores": {},
  "completed_at": "2026-10-29T12:00:00.000Z"
}
```

Rezultat trenutno postoji samo u stanju otvorene stranice. Ne šalje se u Supabase i ne prikazuje se istorija. Pre povezivanja sa bazom treba dodati serversku akciju koja uzima `user_id` iz prijavljene Supabase sesije, proverava oblik odgovora i upisuje novi red za svako završavanje vežbe. Istorija treba da čita samo redove tog korisnika, sortirane po `created_at`, uz RLS pravila za `user_id = auth.uid()`.

Za upitnik su `scores` četiri broja od 0 do 15 (`flight`, `attack`, `manipulation`, `harmonious`). Za asertivnu mrežu su `scores.averages` proseci po stabilnim indeksima veština, a `answers` sadrži ocene po indeksu osobe i veštine. Kod ostalih vežbi `answers` sadrži izabrane stavke ili tekstualne odgovore. `version` omogućava promenu oblika podataka bez gubitka ranije istorije.

Stara akcija `submitQuizResults` u `src/actions/quiz.js` trenutno upisuje nule za četiri skora. Pri budućem povezivanju upitnika treba koristiti stvarno izračunate rezultate iz nove komponente i proveriti ih ponovo na serveru.
