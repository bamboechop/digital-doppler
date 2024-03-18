import type { APIRoute } from 'astro';
import { dbClient } from '../../lib/db.client.ts';

export const POST: APIRoute = async ({ request }) => {
  if(request.headers.get('Content-Type') !== 'application/json') {
    return new Response(JSON.stringify({ message: 'Invalid content type' }), { status: 400 });
  }
  try {
    const body = await request.json();
    const { text, userId } = body;
    if(!text || !userId) {
      return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
    }
    await dbClient.notes.create({
      data: {
        date: new Date(),
        text,
        user_id: userId,
      },
    });
    return new Response(JSON.stringify({ message: 'Success!' }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: 'Error creating note' }), { status: 500 });
  }
}
