import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function POST(request: Request) {

    const address = request.formData;
  try {
    if (!address ) throw new Error('address required');
    await sql`INSERT INTO emails (address, date_created) VALUES (${address}, ${Date.now()});`;
    return NextResponse.json({ address }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

}