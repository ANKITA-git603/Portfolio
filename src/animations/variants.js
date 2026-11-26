import { easeCustom } from './transitions';

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: easeCustom
    }
  }
};

export const maskReveal = {
  hidden: { opacity: 0, y: "100%", clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
  visible: {
    opacity: 1,
    y: "0%",
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      duration: 1.1,
      ease: easeCustom
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const scaleIn3D = {
  hidden: { opacity: 0, scale: 0.85, rotateX: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 1.2,
      ease: easeCustom
    }
  }
};
