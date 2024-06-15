import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function POST(request: Request) {
    const data = await request.formData();
    const address = data.get('email')?.valueOf;

  try {
    if (!address ) throw new Error('address required');
    await sql`INSERT INTO Emails (address) VALUES (${address.toString()});`;
    return NextResponse.json({ address }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

}