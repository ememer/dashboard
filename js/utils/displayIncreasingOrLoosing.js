export const displayIncreasingOrLoosing = (
  currentState,
  prevState,
  target,
  mainClassName
) => {
  return currentState > prevState
    ? target.classList?.add(`${mainClassName}`, "social-up")
    : target.classList?.add(`${mainClassName}`, "social-down");
};
