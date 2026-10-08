# English Benkyou

ゼロからはじめる英語 — a small offline-ready web app for Japanese speakers learning basic English.

- 8 lessons (ABC, greetings, numbers, colors, family, food, everyday verbs, simple phrases), 108 items
- Flashcards with pronunciation via the browser's speech synthesis (normal, slow, example sentence)
- 10-question quizzes: English → Japanese, Japanese → English, listen and choose
- Progress, learned words and daily streak saved in the browser (localStorage)
- Installable PWA (manifest + service worker), works offline after first visit

No build step: everything lives in `index.html`. Lesson content is the `UNITS` array near the top of the script.

Hosted on GitHub Pages from the `main` branch root.
