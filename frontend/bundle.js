const config =
{
    entryPoints: ['src/index.js'],
    outfile: 'out/out.js',
    bundle: true,
    minify: true,

    target: 'es6',
    loader: { '.js': 'jsx' },
    jsxFactory: 'm',
    jsxFragment: 'm.Fragment',
}

require('esbuild')
    .build(config)
    .catch(() => process.exit(1))