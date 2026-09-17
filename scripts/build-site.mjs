import { spawnSync } from 'node:child_process';
const production = process.argv.includes('--production');
const check = spawnSync(process.execPath, ['scripts/check-seo.mjs'], { stdio: 'inherit' });
if (check.status !== 0) process.exit(check.status || 1);
const build = spawnSync(process.execPath, ['node_modules/next/dist/bin/next', 'build'], {
  stdio: 'inherit',
  env: { ...process.env, SITE_PUBLISHED: production ? 'true' : 'false' },
});
process.exit(build.status || (build.error ? 1 : 0));
