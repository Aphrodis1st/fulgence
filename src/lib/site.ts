/** Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.example.com) */
export const SITE_URL = (() => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
})();

export const SITE_NAME = "GEOSURVEY ENGINEERING Ltd";
