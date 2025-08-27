export function getEmbedUrl(url: string): string {
  if (url.includes("watch?v=")) {
    return url.replace("watch?v=", "embed/");
  }
  if (url.includes("shorts/")) {
    return url.replace("shorts/", "embed/");
  }
  return url; // fallback
}