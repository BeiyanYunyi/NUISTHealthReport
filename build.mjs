import { build } from 'esbuild';
import { clean } from 'esbuild-plugin-clean';
import { esbuildPluginFileSize } from 'esbuild-plugin-filesize';

(async () => {
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
      plugins: [
        clean({ patterns: ['./dist/*'] }),
        esbuildPluginFileSize({
          showPluginTitle: false,
          showMinifiedSize: false,
          showBrotliSize: false,
        }),
      ],
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
