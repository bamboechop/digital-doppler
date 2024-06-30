module.exports = {
  apps: [
    {
      cron_restart: '10 4 * * *',
      cwd: '/home/bambat/digital-doppler',
      name: 'coworking (digital-doppler)',
      script: './dist/server/entry.mjs',
    },
  ],
};
