module.exports = {
    services: {
        simple: {
            name: 'simple',
            endpoint: 'https://simple.ripley.cl/api/v2/',
            partNumbers: [
                '2000377765906',
                'MPM00001631377',
                'MPM00003692966',
                'MPM00002087138',
                'MPM00004450184',
                'MPM00009521812',
                'MPM00009080782',
                'MPM00009502894',
                'MPM00003901404',
                '2000374444194P',
                'MPM00002121046',
                'MPM00007531550',
                '2000362599233',
                'MPM00004328162',
                '2000366250574P',
                '2000368954630P',
                '2000350093989',
                'MPM00007149278',
                '2000375538458',
                'MPM00002034288',
                'MPM00009037614',
                'MPM00003106106',
                '2000377581681',
                '2000374667845P',
            ],
        },
    },
    redis: {
        key: 'test-ripley',
        cache_duration_seconds: 7200,
    },
};
