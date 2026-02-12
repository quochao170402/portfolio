const RATE_LIMIT_KEY = 'contact_form_submissions';
const MAX_ATTEMPTS = 3;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

export interface RateLimitResult {
  allowed: boolean;
  remainingTime?: number; // in minutes
}

export const checkRateLimit = (): RateLimitResult => {
  const stored = localStorage.getItem(RATE_LIMIT_KEY);
  if (!stored) return { allowed: true };

  try {
    const { count, timestamp } = JSON.parse(stored);
    const now = Date.now();
    const elapsed = now - timestamp;

    // Reset if window has passed
    if (elapsed > WINDOW_MS) {
      localStorage.removeItem(RATE_LIMIT_KEY);
      return { allowed: true };
    }

    // Check if limit exceeded
    if (count >= MAX_ATTEMPTS) {
      const remainingTime = Math.ceil((WINDOW_MS - elapsed) / 1000 / 60);
      return { allowed: false, remainingTime };
    }

    return { allowed: true };
  } catch {
    // If there's an error parsing, reset the limit
    localStorage.removeItem(RATE_LIMIT_KEY);
    return { allowed: true };
  }
};

export const incrementRateLimit = (): void => {
  const stored = localStorage.getItem(RATE_LIMIT_KEY);
  const now = Date.now();

  if (!stored) {
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({ count: 1, timestamp: now }));
    return;
  }

  try {
    const { count, timestamp } = JSON.parse(stored);

    // Reset if window has passed
    if (now - timestamp > WINDOW_MS) {
      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({ count: 1, timestamp: now }));
    } else {
      // Increment count
      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({ count: count + 1, timestamp }));
    }
  } catch {
    // If there's an error parsing, start fresh
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({ count: 1, timestamp: now }));
  }
};

export const resetRateLimit = (): void => {
  localStorage.removeItem(RATE_LIMIT_KEY);
};
