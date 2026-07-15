const SIGNUP_URL = "https://go.strategicai.app/signup";

export function buildSignupUrl(source?: string) {
  if (!source) return SIGNUP_URL;

  const url = new URL(SIGNUP_URL);
  url.searchParams.set("source", source);
  return url.toString();
}
