import { defineConfig } from 'astro/config';

const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'sentinel-agency';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'sentintel-agency.github.io';
const rootRepo = `${owner}.github.io`;

export default defineConfig({
  site: `https://${owner}.github.io`,
  base: repo.toLowerCase() === rootRepo.toLowerCase() ? '/' : `/${repo}`,
  trailingSlash: 'never',
});
