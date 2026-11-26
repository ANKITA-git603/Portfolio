export const easeCustom = [0.16, 1, 0.3, 1]; // Smooth Apple/Linear cubic-bezier curve
export const easeSlow = [0.25, 0.1, 0.25, 1];
export const easeBounce = [0.34, 1.56, 0.64, 1];

export const transitionSmooth = {
  duration: 1.2,
  ease: easeCustom
};

export const transitionFast = {
  duration: 0.4,
  ease: easeCustom
};

export const transitionStagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  staggerChildren,
  delayChildren
});
