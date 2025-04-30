import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import FadeInScrollWrapper from "../fadeInScrollWrapper";

interface CountdownProps {
  targetDate: string; // e.g. "2025-12-31T23:59:59"
  timeZone?: string; // e.g. "Asia/Jakarta"
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownProps> = ({
  targetDate,
  timeZone = "UTC",
}) => {
  const calculateTimeLeft = (): TimeLeft => {
    const now = DateTime.now().setZone(timeZone);
    const target = DateTime.fromISO(targetDate, { zone: timeZone });
    const diff = target.diff(now, ["days", "hours", "minutes", "seconds"]);

    if (diff.toMillis() <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff.days),
      hours: diff.hours,
      minutes: diff.minutes,
      seconds: Math.floor(diff.seconds),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate, timeZone]);

  //    border-t border-gray-200

  return (
    <FadeInScrollWrapper>
      <div className="py-4 mx-6">
        <div className="grid grid-cols-4 gap-4 text-center font-cormorant-garamond">
          {(Object.keys(timeLeft) as (keyof TimeLeft)[]).map((unit) => (
            <div
              key={unit}
              className="bg-white p-2 rounded-xl shadow-lg w-full"
            >
              <div className="text-2xl font-bold">
                {Math.floor(timeLeft[unit]).toString().padStart(2, "0")}
              </div>
              <div className="text-xs uppercase">
                {unit === "days"
                  ? "hari"
                  : unit === "hours"
                  ? "jam"
                  : unit === "minutes"
                  ? "menit"
                  : "detik"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeInScrollWrapper>
  );
};

export default CountdownTimer;
