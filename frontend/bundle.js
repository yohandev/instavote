const config =
{
    entryPoints: ['src/app.js'],
    outdir: 'www/js',
    bundle: true,
    minify: true,

    target: 'es6',
    loader: { '.js': 'jsx' },
    jsxFactory: 'm',
    jsxFragment: 'm.Fragment',
}

require('esbuild')
    .serve({ servedir: 'www' }, config)
    .then(server => console.log(`Serving at http://${server.host}:${server.port}`))