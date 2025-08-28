export function getEmbedUrl(url: string): string {
  // Standard watch URL
  if (url.includes("watch?v=")) {
    return url.replace("watch?v=", "embed/");
  }

  // youtu.be short URL
  if (url.includes("youtu.be/")) {
    const id = url.split("/").pop()?.split("?")[0]; // grab last segment before query
    return `https://www.youtube.com/embed/${id}`;
  }

  // Shorts
  if (url.includes("shorts/")) {
    const id = url.split("/").pop()?.split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  // Fallback (return unchanged)
  return url;
}

export function getDriveImageUrl(url: string): string {
  // Match file ID from various Google Drive link patterns
  const match = url.match(/[-\w]{25,}/);
  if (match) {
    const id = match[0];
    return `https://drive.google.com/uc?export=view&id=${id}`;
  }
  return url; // fallback
}