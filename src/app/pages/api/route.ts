import { NextResponse, NextRequest } from 'next/server';
import connectToDatabase from '@/lib/mongo';
import Job from '@/model/Job';

export async function POST(request: Request) {
  await connectToDatabase();

  try {
    const body = await request.json();
    const job = await Job.create(body);
    return NextResponse.json({ message: 'Job created successfully!',job}, { status: 201 });
  } catch (error) {
    console.error('Error creating job:', error);
    return NextResponse.json({ error: 'Failed to create job' }, { status: 500 });
  }
}


export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    const posts=await Job.find({})
    return NextResponse.json({ message: 'Job fetched successfully!',data:posts}, { status: 200});

    
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch job' }, { status: 500 });
    
  }

}