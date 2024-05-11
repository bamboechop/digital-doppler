module.exports = {
  apps: [
    {
      cron_restart: '10 4 * * *',
      cwd: '/home/bambat/digital-doppler',
      name: 'digital-doppler',
      script: './dist/server/entry.mjs',
    },
  ],
};
