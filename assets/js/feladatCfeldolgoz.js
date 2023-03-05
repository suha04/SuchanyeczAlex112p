function ellenorizz() {
    // Get the form element
    const form = document.getElementById('kviz');
    
    // Get the selected answer for each question
    const answer1 = form.querySelector('input[name="answer1"]:checked');
    const answer2 = form.querySelector('input[name="answer2"]:checked');
    const answer3 = form.querySelector('input[name="answer3"]:checked');
    
    // Check if all questions have been answered
    if (!answer1 || !answer2 || !answer3) {
      alert('Kérlek, válaszolj minden kérdésre!');
      return false;
    }
    
    // Check if the answers are correct
    if (answer1.value !== 'a' || answer2.value !== 'c' || answer3.value !== 'a') {
      alert('Sajnos nem minden válaszod helyes, próbáld újra!');
      return false;
    }
    
    // All answers are correct
    alert('Gratulálok, minden válaszod helyes!');
    return true;
  }