# English Benkyou

ゼロからはじめる英語 — a small offline-ready web app for Japanese speakers learning basic English.

- 8 lessons (ABC, greetings, numbers, colors, family, food, everyday verbs, simple phrases), 108 items
- Flashcards with pronunciation via the browser's speech synthesis (normal, slow, example sentence)
- 10-question quizzes: English → Japanese, Japanese → English, listen and choose
- Progress, learned words and daily streak saved in the browser (localStorage)
- Installable PWA (manifest + service worker), works offline after first visit
- Made for people who are not comfortable with phones: first-visit guide (つかいかた), large text by default
  with a 3-step text-size setting, explicit 「こたえを見る」 button, the phone's Back button returns Home
  (and asks before leaving a quiz), help for no sound / LINE in-app browser / adding to the home screen

No build step: everything lives in `index.html`. Lesson content is the `UNITS` array near the top of the script.

Hosted on GitHub Pages from the `main` branch root.
