import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

export interface CountUpProps {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness
  });

  const isInView = useInView(ref, { once: true, margin: '0px' });

  const getDecimalPlaces = (num: number) => {
    const str = num.toString();

    if (str.includes('.')) {
      const decimals = str.split('.')[1];

      if (parseInt(decimals, 10) !== 0) {
        return decimals.length;
      }
    }

    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (latest: number) => {
      const hasDecimals = maxDecimals > 0;

      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };

      const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);

      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === 'down' ? to : from);
    }
  }, [from, to, direction, formatValue]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === 'function') onStart();

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(
        () => {
          if (typeof onEnd === 'function') onEnd();
        },
        delay * 1000 + duration * 1000
      );

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', latest => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });

    return () => unsubscribe();
  }, [springValue, formatValue]);

  return <span className={className} ref={ref} />;
}

export interface StatCountUpProps {
  value: string;
  className?: string;
  duration?: number;
  delay?: number;
}

/**
 * Intelligent helper that parses numeric statistics like "+775%", "-90%", "1.000+", "8,000", "22"
 * and animates the numeric portion via CountUp while preserving symbols, prefixes, and suffixes.
 */
export function StatCountUp({ value, className = '', duration = 1.8, delay = 0 }: StatCountUpProps) {
  const trimmed = (value || '').trim();
  const match = trimmed.match(/^([+\-]?)\s*([0-9]+(?:[.,][0-9]+)*)\s*(.*)$/);

  if (!match) {
    return <span className={className}>{trimmed}</span>;
  }

  const prefix = match[1] || '';
  const numStr = match[2];
  const suffix = match[3] || '';

  let separator = '';
  let cleanNumber = numStr;

  if (numStr.includes('.')) {
    if (/\.[0-9]{3}$/.test(numStr)) {
      separator = '.';
      cleanNumber = numStr.replace(/\./g, '');
    }
  } else if (numStr.includes(',')) {
    if (/,[0-9]{3}$/.test(numStr)) {
      separator = ',';
      cleanNumber = numStr.replace(/,/g, '');
    } else {
      cleanNumber = numStr.replace(',', '.');
    }
  }

  const parsedNum = parseFloat(cleanNumber);

  if (isNaN(parsedNum)) {
    return <span className={className}>{trimmed}</span>;
  }

  return (
    <span className={`inline-flex items-baseline ${className}`}>
      {prefix && <span>{prefix}</span>}
      <CountUp
        to={parsedNum}
        from={0}
        separator={separator}
        duration={duration}
        delay={delay}
      />
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
