import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const OnScrollAnimation = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [view]);

  return [element, controls];
};

export default OnScrollAnimation;
