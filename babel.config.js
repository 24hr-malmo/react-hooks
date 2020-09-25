module.exports = api => {
    api.cache(true);
    const presets = [
        [
            '@babel/preset-env',
            {
                targets: {
                    browsers: [
                        'last 2 versions',
                        'safari >= 7',
                        'not ie <= 11',
                        'not ie_mob <= 11',
                    ],
                },
                useBuiltIns: 'entry',
                corejs: 3,
                modules: process.env.ES_MODULES === 'true' ? false : 'auto',
            },
        ],
        [
            'minify',
            {
                keepFnName: false,
            },
        ],
    ];

    return { presets };
};
