import type { APIRoute } from 'astro';
import { db, eq, notes } from 'astro:db';

export const POST: APIRoute = async ({ request }) => {
  if(request.headers.get('Content-Type') !== 'application/json') {
    return new Response(JSON.stringify({ message: 'Invalid content type' }), { status: 400 });
  }
  try {
    const body = await request.json();
    const { noteId, status } = body;
    if(!noteId || !status) {
      return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
    }
    if(status !== 'completed' && status !== 'cancelled') {
      return new Response(JSON.stringify({ message: 'Invalid status' }), { status: 400 });
    }
    await db.update(notes).set({ status }).where(eq(notes.note_id, noteId));
    return new Response(JSON.stringify({ message: 'Success!' }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: 'Error updating note' }), { status: 500 });
  }
}
