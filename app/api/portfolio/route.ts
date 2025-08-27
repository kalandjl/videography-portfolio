// app/api/portfolio/route.ts
import { google } from "googleapis";

export async function GET() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.SHEET_ID!;

  const [videosRes, photosRes] = await Promise.all([
    sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "VIDEOS!A:C",
    }),
    sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "PHOTOS!A:C",
    }),
  ]);

  function parse(rows: string[][]) {
    const [header, ...data] = rows;
    return data.map((row) => ({
      folder: row[0],
      title: row[1],
      url: row[2],
    }));
  }

  return Response.json({
    videos: parse(videosRes.data.values || []),
    photos: parse(photosRes.data.values || []),
  });
}
