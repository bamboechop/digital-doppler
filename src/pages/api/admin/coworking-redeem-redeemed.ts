import { dbClient } from '../../../lib/db.client.ts';
import { type AstroGlobal } from 'astro';

export async function PATCH({ request }: AstroGlobal) {
  const coworkingSecret = request.headers.get('Coworking-Secret');
  if(!coworkingSecret || coworkingSecret !== import.meta.env.COWORKING_SECRET) {
    return new Response(undefined, { status: 204 });
  }

  const userId = new URL(request.url).searchParams.get('userId');
  if(!userId) {
    return new Response(JSON.stringify({ error: 'userId missing' }), { status: 400 });
  }

  try {
    await dbClient.user_redeemed_coworking_redeem.upsert({
      create: {
        user_id: parseInt(userId, 10),
      },
      update: {},
      where: {
        user_id: parseInt(userId, 10),
      },
    });
    return new Response(undefined, { status: 200 });
  } catch(err) {
    console.error('err', err);
    return new Response(JSON.stringify({ error: 'An error occurred' }), { status: 400 });
  }
}
