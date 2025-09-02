// app/[folder]/page.tsx
import Nav from "@/components/Nav";
import { getEmbedUrl } from "@/lib/str";
import { google } from "googleapis";
import { notFound } from "next/navigation";

type VideoRow = {
  folder: string;
  subfolder?: string;
  title: string;
  url: string;
};

// Fetch from Google Sheets
async function fetchSheetData(): Promise<VideoRow[]> {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "VIDEOS!A:D", // Folder | Subfolder | URL | Title
  });

  const rows = res.data.values ?? [];

  return rows.slice(1).map((r) => ({
    folder: slugify(r[0]),
    subfolder: r[1] || "",
    url: r[2],
    title: r[3] || "",
  }));
}

// Slugify helper
function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^\w\-]+/g, "");
}

// Generate static routes from folder names
export async function generateStaticParams() {
  const data = await fetchSheetData();
  const folders = Array.from(new Set(data.map((d) => d.folder)));
  return folders.map((folder) => ({ folder }));
}

// Page
export default async function VideoFolderPage({
  params,
}: {
  params: Promise<{ folder: string }>;
}) {
  const data = await fetchSheetData();
  const folder = (await params).folder
  const videos = data.filter((d) => d.folder === folder);

  if (videos.length === 0) {
    notFound();
  }

  // Group videos by subfolder
  const groups: Record<string, VideoRow[]> = {};
  for (const v of videos) {
    const key = v.subfolder || "Misc";
    if (!groups[key]) groups[key] = [];
    groups[key].push(v);
  }

  return (
    <>
      <Nav theme="dark" />
      <section id="embed-vids" className="p-6">
        <h1 className="text-3xl font-bold mb-8">{folder}</h1>

        {Object.entries(groups).map(([subfolder, vids]) => (
          <div key={subfolder} className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">{subfolder}</h2>
            <div className="grid grid-cols-2 gap-6 ">
              {vids.map((v, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden shadow-lg bg-white"
                >
                  <iframe
                    src={getEmbedUrl(v.url)}
                    title={v.title || `Video ${i + 1}`}
                    width="100%"
                    height="300"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="p-4">
                    <p className="font-medium">{v.title || "Untitled"}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
