import Nav from "@/components/Nav";
import { getDriveImageUrl } from "@/lib/str";
import { google } from "googleapis";
import Image from "next/image";
import { notFound } from "next/navigation";

type PhotoRow = {
  folder: string;
  subfolder?: string;
  title: string;
  url: string;
};

async function fetchSheetData(): Promise<PhotoRow[]> {
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
    range: "PHOTOS!A:D", // Folder | Subfolder | URL | Title
  });

  const rows = res.data.values ?? [];
  return rows.slice(1).map((r) => ({
    folder: slugify(r[0]),
    subfolder: r[1] || "",
    url: r[2],
    title: r[3] || "",
  }));
}

function slugify(name: string): string {
  
  const folder = name
  .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^\w\-]+/g, "")
    .replace("_", " ")

  console.log(folder)
  return folder
}

export async function generateStaticParams() {
  const data = await fetchSheetData();
  const folders = Array.from(new Set(data.map((d) => d.folder)));
  return folders.map((folder) => ({ folder }));
}

export default async function PhotoFolderPage({
  params,
}: {
  params: Promise<{ folder: string }>;
}) {
  const data = await fetchSheetData();
  const folder = (await params).folder.replace("-", " ")
  const photos = data.filter((d) => d.folder === folder);

  if (photos.length === 0) {
    notFound();
  }

  // Group photos by subfolder
  const groups: Record<string, PhotoRow[]> = {};
  for (const p of photos) {
    const key = p.subfolder || "Misc";
    if (!groups[key]) groups[key] = [];
    groups[key].push(p);
  }

  return (
    <>
      <Nav theme="dark" />
      <section className="p-6">
        <h1 className="text-3xl font-bold mb-8">{folder}</h1>

        {Object.entries(groups).map(([subfolder, phs]) => (
          <div key={subfolder} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{subfolder}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {phs.map((p, i) =>( 
                <>
                {
                i < 50 ?
                <div
                  key={i}
                  className="rounded-xl overflow-hidden shadow-lg bg-white"
                >
                  <div className="relative w-full h-64">
                    <Image
                      src={getDriveImageUrl(p.url)}
                      alt={p.title || `Photo ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-medium">{p.title || "Untitled"}</p>
                  </div>
                </div>
                :
                <>
                </>
              }
              </>
              )
              )}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
