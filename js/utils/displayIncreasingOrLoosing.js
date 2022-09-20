export const displayIncreasingOrLoosing = (
  input,
  limit,
  target,
  mainClassName
) => {
  return input >= limit
    ? target.classList?.add(`${mainClassName}`, "social-up")
    : target.classList?.add(`${mainClassName}`, "social-down");
};
