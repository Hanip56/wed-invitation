import { useInView } from "react-intersection-observer";

const FadeInScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only animate once
    threshold: 0.3, // trigger when 10% visible
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInScrollWrapper;
