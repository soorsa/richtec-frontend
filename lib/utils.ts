import { AxiosError } from "axios";
import toast from "react-hot-toast";

export { cn } from "cn";
export const getFormattedCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
};
export const getCompactCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 1,
    notation: "compact",
  }).format(amount);
};

export type NormalizedErrors = Record<string, string[]>;

/**
 * Turn any DRF error body into { field: string[] }.
 * - { detail: "..." }                  → { detail: ["..."] }
 * - ["a", "b"]                         → { non_field_errors: ["a", "b"] }
 * - { email: ["bad"], non_field_errors: ["x"] } → unchanged
 */
export function normalizeDRFErrors(body: unknown): NormalizedErrors {
  if (body == null) return {};

  // list of strings (raise ValidationError("msg"))
  if (Array.isArray(body)) {
    return { non_field_errors: body.map(String) };
  }

  if (typeof body === "object") {
    const out: NormalizedErrors = {};
    for (const [key, value] of Object.entries(
      body as Record<string, unknown>
    )) {
      if (Array.isArray(value)) {
        out[key] = value.map(String);
      } else if (typeof value === "string") {
        out[key] = [value];
      } else if (value && typeof value === "object") {
        // nested serializer error — stringify defensively
        out[key] = [JSON.stringify(value)];
      }
    }
    return out;
  }

  return { non_field_errors: [String(body)] };
}

/** Show one toast per field, using its first message. */
export function toastDRFErrors(errors: NormalizedErrors) {
  Object.values(errors).forEach((msgs) => {
    const first = msgs.find((m) => m.trim().length > 0);
    if (first) toast.error(first);
  });
}

/** Convenience: straight from an axios error. */
export function toastFromAxiosError(error: AxiosError) {
  if (error.response) {
    toastDRFErrors(normalizeDRFErrors(error.response.data));
  } else {
    toast.error("Network error — please try again");
  }
}

export const getInitials = (text: string) =>
  text
    .split(" ")
    .slice(0, 2)
    .map((el) => el[0])
    .join("");

export const getTimeAgo = (date: string) => {
  const now = new Date();
  const past = new Date(date);
  const diff = Math.floor((now.getTime() - past.getTime()) / 1000);

  if (diff < 60) return "Just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;

  return `${Math.floor(diff / 86400)}d ago`;
};

export const gettTime = (date: string) => {
  const time = new Date(date).toLocaleTimeString("en-NG", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return time;
};
export const getShortDate = (date: string) => {
  const shortDate = new Date(date).toLocaleDateString("en-NG", {
    month: "short",
    day: "numeric",
  });
  return shortDate;
};
export const getDate = (date: string) => {
  const fullDate = new Date(date).toLocaleDateString("en-NG", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return fullDate;
};

export const formatLabel = (s?: string) =>
  s ? s.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) : "—";
