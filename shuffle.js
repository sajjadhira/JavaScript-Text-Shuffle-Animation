// Text Shuffle Animation
const shuffleText = (element, delay = 50, type = 'letter') => {
  const originalText = element.textContent;
  let characters;
  
  if (type == 'letter') {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  } else if (type == 'number') {
    characters = '0123456789';
  } else if (type == 'symbol') {
    characters = '!@#$%^&*()_+{}:"<>?|[];\',./';
  } else {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  }
  let iterations = 0;

  const interval = setInterval(() => {
    element.textContent = element.textContent
      .split('')
      .map((char, index) => {
        if (index < iterations) {
          return originalText[index];
        }
        return characters[Math.floor(Math.random() * characters.length)];
      })
      .join('');

    if (iterations >= originalText.length) {
      clearInterval(interval);
    }

    iterations += 1 / 3;
  }, delay);
};


// Trigger shuffle animation for each element with the class 'shuffle'
document.querySelectorAll('.shuffle').forEach(element => {
    // check if the element has data-duration attribute
    const durationData = element.getAttribute('data-shuffle-duration');
    const type = element.getAttribute('data-shuffle-type');
    let shuffle_duration = 25;
    let shuffle_type = 'letter';
    if (durationData) {
        shuffle_duration = parseInt(durationData);
    }
    if (type) {
        shuffle_type = type;
    }
    shuffleText(element, shuffle_duration, shuffle_type);
});

