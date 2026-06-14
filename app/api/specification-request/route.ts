import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // In the future: Integrate with CRM (e.g. HubSpot, Salesforce), PostreSQL, or n8n webhook.
    console.log('--- NEW SPECIFICATION REQUEST ---');
    console.log(JSON.stringify(data, null, 2));
    console.log('---------------------------------');

    // Example payload structure we expect:
    // {
    //   profession: 'Architect',
    //   projectType: 'Commercial Office',
    //   projectStage: 'Design Development',
    //   designIntent: 'Acoustic Performance',
    //   name: 'John Doe',
    //   email: 'john@example.com',
    //   phone: '+91 9876543210',
    //   company: 'Doe Architects',
    //   location: 'Mumbai',
    //   area: '15000 sq ft',
    //   notes: 'Need NRC 0.85 baffles'
    // }

    return NextResponse.json(
      { message: 'Specification request received successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing specification request:', error);
    return NextResponse.json(
      { error: 'Failed to process specification request.' },
      { status: 500 }
    );
  }
}
