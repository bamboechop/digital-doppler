import { dbClient } from '../../lib/db.client';

export async function GET() {
  const responseOptions = {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const openNotes = (await dbClient.notes.findMany({
      orderBy: [
        { note_id: 'asc' },
      ],
      select: {
        date: true,
        note_id: true,
        text: true,
        user_id: true,
        users: {
          select: {
            avatar_url: true,
            display_name: true,
          },
        },
      },
      where: {
        status: 'in-progress',
      },
    })).map(({ users, ...rest }) => ({ ...rest, avatarUrl: users?.avatar_url, displayName: users?.display_name }));
    return new Response(JSON.stringify(openNotes), responseOptions);
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify([]), responseOptions);
  }
}
