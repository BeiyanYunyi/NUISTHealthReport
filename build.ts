import { build } from 'esbuild';
import { clean } from 'esbuild-plugin-clean';

(async () => {
  const plugins = [clean({ patterns: ['./dist/*'] })];
  const isDev = process.env.DEV === 'true';
  try {
    await build({
      bundle: true,
      sourcemap: isDev,
      treeShaking: true,
      format: 'iife',
      platform: 'browser',
      target: ['es2017', 'chrome58'],
      entryPoints: { 'bundle.user': './src/index.ts' },
      minify: !isDev,
      outdir: './dist',
      plugins,
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
