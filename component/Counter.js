"use client";

import {
  animate,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function Counter({
  from = 0,
  to = 1000,
  duration = 3,
}) {
  const count = useMotionValue(from);
  const [value, setValue] = useState(from);

  useMotionValueEvent(count, "change", (latest) => {
    setValue(Math.round(latest));
  });

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [count, to, duration]);

  return <span className="font-extrabold">{value.toLocaleString()}</span>;
}