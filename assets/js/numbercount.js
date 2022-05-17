
const counters = document.querySelectorAll('.2count');
const speed = 1;

counters.forEach((number) => {
  const updateCount = () => {
    const target = parseInt(number.getAttribute('data-target'));
    const count = parseInt(number.innerText);
    const increment = Math.trunc(target / speed);

    if (count < target) {
      number.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      number.innerText = target;
    }
  };
  updateCount();
});
            