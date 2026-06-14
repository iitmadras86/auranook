import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Destructure expected fields
    const { name, company, email, phone, profession, projectStage, requirement, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Temporarily logging the submission. 
    // In the future, this will connect to PostgreSQL, n8n, CRM, or a Webhook.
    console.log('--- NEW LEAD RECEIVED ---');
    console.log({
      name,
      company,
      email,
      phone,
      profession,
      projectStage,
      requirement,
      message,
      timestamp: new Date().toISOString()
    });
    console.log('-------------------------');

    return NextResponse.json(
      { success: true, message: 'Your inquiry has been received. Our team will contact you shortly.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
