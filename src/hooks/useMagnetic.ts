import { useRef } from "react";
import type { MouseEvent } from "react";
import { useMotionValue, useReducedMotion, useSpring } from "motion/react";

import { usePointerDevice } from "@/src/hooks/usePointerDevice";

export function useMagnetic<T extends HTMLElement>(strength = 0.28) {
  const ref = useRef<T>(null);
  const reduceMotion = useReducedMotion();
  const hasFinePointer = usePointerDevice();
  const enabled = !reduceMotion && hasFinePointer;
  const xValue = useMotionValue(0);
  const yValue = useMotionValue(0);
  const x = useSpring(xValue, { stiffness: 220, damping: 18, mass: 0.45 });
  const y = useSpring(yValue, { stiffness: 220, damping: 18, mass: 0.45 });

  const onMouseMove = (event: MouseEvent<T>) => {
    if (!enabled) return;
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const relativeX = event.clientX - rect.left - rect.width / 2;
    const relativeY = event.clientY - rect.top - rect.height / 2;

    xValue.set(relativeX * strength);
    yValue.set(relativeY * strength);
  };

  const onMouseLeave = () => {
    xValue.set(0);
    yValue.set(0);
  };

  return { ref, x, y, onMouseMove, onMouseLeave, reduceMotion, hasFinePointer, enabled };
}
