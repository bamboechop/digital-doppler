import type { APIRoute } from 'astro';
import { db, notes } from 'astro:db';

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
    await db.insert(notes).values({ text, user_id: userId, date: new Date() });
    return new Response(JSON.stringify({ message: 'Success!' }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: 'Error creating note' }), { status: 500 });
  }
}
