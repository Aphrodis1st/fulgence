/** Set NEXT_PUBLIC_SITE_URL in production if different from the canonical domain. */
export const SITE_URL = (() => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "https://www.geosurveyengineeringltd.com";
})();

export const SITE_NAME = "GEOSURVEY ENGINEERING Ltd";
