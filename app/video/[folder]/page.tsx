import Nav from "@/components/Nav";
import { getEmbedUrl } from "@/lib/str";
import { google } from "googleapis";
import { notFound } from "next/navigation";

type VideoRow = {
  folder: string;
  title: string;
  url: string;
};

// helper to fetch data from Google Sheets
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
    range: "VIDEOS!A:C", // Folder | Title | URL
  });

  const rows = res.data.values ?? [];
  return rows.slice(1).map((r) => ({
    folder: slugify(r[0]),
    title: r[1] || "",
    url: r[2],
  }));
}

// slugify helper
function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "_") // spaces to underscores
    .replace(/[^\w\-]+/g, ""); // remove non-word chars
}

// 👇 build static routes from folders
export async function generateStaticParams() {
  const data = await fetchSheetData();
  const folders = Array.from(new Set(data.map((d) => d.folder)));
  return folders.map((folder) => ({ folder }));
}

// 👇 server component page
export default async function VideoFolderPage({
  params,
}: {
  params: { folder: string };
}) {
  const data = await fetchSheetData();
  const videos = data.filter((d) => d.folder === params.folder);

  if (videos.length === 0) {
    notFound();
  }

  console.log(videos)

  return (
    <>
    <Nav theme="dark" />
    <section id="embed-vids" className="p-6">
      <h1 className="text-3xl font-bold mb-6">{params.folder}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((v, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-lg">
            <iframe
                src={getEmbedUrl(v.url)}              
                title={v.title || `Video ${i + 1}`}
                width="100%"
                height="300"
                allow="autoplay; fullscreen"
            />
            <div className="p-4">{v.title || "Untitled"}</div>
          </div>
        ))}
      </div>
    </section>
    </>

  );
}
