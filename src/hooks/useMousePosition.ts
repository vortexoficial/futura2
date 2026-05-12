import { useEffect } from "react";
import {
  useMotionValue,
  useReducedMotion,
  useSpring,
  type SpringOptions,
} from "motion/react";

import { usePointerDevice } from "@/src/hooks/usePointerDevice";

const spring: SpringOptions = { stiffness: 90, damping: 24, mass: 0.6 };

export function useMousePosition(enabled = true) {
  const rawX = useMotionValue(-600);
  const rawY = useMotionValue(-600);
  const x = useSpring(rawX, spring);
  const y = useSpring(rawY, spring);
  const reduceMotion = useReducedMotion();
  const hasFinePointer = usePointerDevice();
  const shouldTrack = enabled && !reduceMotion && hasFinePointer;

  useEffect(() => {
    if (!shouldTrack) return;

    const onPointerMove = (event: PointerEvent) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [rawX, rawY, shouldTrack]);

  return { x, y, reduceMotion, hasFinePointer, shouldTrack };
}
