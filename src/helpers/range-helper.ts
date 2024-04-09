export const range = (start: number, end?: number, step: number = 1) => {
  let output = [];
  if (!end) {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const random = (
  min: number,
  max: number,
  { rounded } = { rounded: true }
) => {
  const partialVal = Math.random() * (max - min);

  if (rounded) {
    return Math.floor(partialVal) + min;
  } else {
    return partialVal + min;
  }
};
