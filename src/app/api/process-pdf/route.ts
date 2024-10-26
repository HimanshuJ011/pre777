import { NextResponse } from 'next/server';
import { Buffer } from 'buffer';
import pdfParse from 'pdf-parse';

export async function POST(request: Request) {
  const data = await request.json();
  const buffer = Buffer.from(data.file, 'base64');
  
  try {
    const pdfData = await pdfParse(buffer);
    const filteredText = pdfData.text
      .split('\n')
      .filter(line => line.includes('A') || line.includes('B'))
      .join('\n');

    return NextResponse.json({ text: filteredText });
  } catch (error) {
    console.error("PDF processing error:", error);
    return NextResponse.json({ error: 'Failed to process PDF' }, { status: 500 });
  }
}