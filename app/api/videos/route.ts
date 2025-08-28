import { NextResponse } from "next/server";
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
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "VIDEOS!A:C",
  });

  const rows = res.data.values ?? [];
  const data = rows.slice(1).map((r) => ({
    folder: r[0],
    title: r[1] || "",
    url: r[2],
  }));

  return NextResponse.json(data);
}
