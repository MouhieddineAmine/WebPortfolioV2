import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Backend server is up and running!' });
}

export async function POST() {
  return NextResponse.json({ message: 'POST request received!' });
}
