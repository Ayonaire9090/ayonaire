import { NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phoneNumber } = body;

    // 1. Basic validation
    if (!fullName || !email || !phoneNumber) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 2. Initialize Supabase client safely
    const supabase = getSupabaseClient();
    if (!supabase) {
      console.error('Supabase client failed to initialize. Check your env variables.');
      return NextResponse.json(
        { error: 'Database configuration error' },
        { status: 500 }
      );
    }

    // 3. Prepare payload
    const payload = {
      full_name: fullName,
      email,
      phone_number: phoneNumber,
    };

    // 4. Perform Supabase Insertion
    const { error } = await supabase.from('registrations').insert([payload]);

    if (error) {
      console.error('Supabase Insert Error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to save registration' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: any) {
    // Log the exact error in your server console to diagnose issues immediately
    console.error('Unhandled Registration API Error:', err);
    
    return NextResponse.json(
      { error: err.message || 'Server error' },
      { status: 500 }
    );
  }
}
