const gcb = (w, h) => {
  const mod = w % h
  if (mod === 0) return h
  return gcb(h, mod)
}

function solution(w, h) {
  const gcbVal = gcb(w, h)
  return w * h - (w + h - gcbVal)
}
