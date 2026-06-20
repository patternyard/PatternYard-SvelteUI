// The layout reads `?theme=` from the URL at render time for theme switching,
// which is a runtime concern and incompatible with prerendering. Render on the
// server instead (adapter-auto deploys this as a serverless function on Vercel).
export const prerender = false;
