import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware(async (context, next)  => {
  const token = context.cookies.get('twitch-token');
  if(!token) {
    if(context.url.pathname === '/dashboard') {
      return context.redirect('/');
    }
  }

  if(token) {
    if(context.url.pathname === '/') {
      return context.redirect('/dashboard');
    }
  }

  let isOnline = false;
  try {
    const response = await fetch('https://api.twitch.tv/helix/streams?user_login=bamboechop', {
      headers: {
        Authorization: `Bearer ${token!.value}`,
        'Client-Id': import.meta.env.PUBLIC_TWITCH_CLIENT_ID,
      },
    });
    isOnline = (await response.json())?.data?.length > 0;
  } catch (err) {
    isOnline = false;
  }
  context.locals.isOnline = isOnline;
  return next();
});
