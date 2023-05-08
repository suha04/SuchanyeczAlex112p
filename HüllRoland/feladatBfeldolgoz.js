// Az űrlap lekérése az azonosítója alapján
const form = document.getElementById('myForm');

// Űrlap beküldés eseményének figyelése
form.addEventListener('submit', function(event) {
  // Az esemény alapértelmezett működésének megakadályozása
  event.preventDefault();

  // Az űrlapban lévő adatok lekérése
  const name = form.elements['nev'].value;
  const email = form.elements['email'].value;
  const message = form.elements['uzenet'].value;

  // A lekért adatok megjelenítése az értesítési üzenetben
  alert(`Név: ${name}\nEmail: ${email}\nÜzenet: ${message}`);

  // Az adatok elküldése az adatbázisba vagy más feldolgozásra itt történne
});
