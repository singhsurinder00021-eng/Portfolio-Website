export function magneticEffect(e) {
  const target = e.currentTarget;
  const rect = target.getBoundingClientRect();

  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  target.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
}

export function resetMagnetic(e) {
  const target = e.currentTarget;
  target.style.transform = "translate(0, 0)";
}
