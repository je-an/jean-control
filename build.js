({
    baseUrl: '.',
    out: 'dist/jean-control.js',
    optimize: 'uglify2',
    name: 'node_modules/jean-amd/dist/jean-amd',
    include: ["src/Control"],
    wrap: {
        start: 
        "(function (root, factory) { \n" +
        " \t if (typeof define === 'function' && define.amd) { \n" +
        "\t \t define([], factory); \n" +
        "\t} else { \n" +
        "\t \troot.Control = root.Control || {}; \n" +
        "\t \troot.Control = factory();\n" +
        "\t}\n" +
        "}(this, function() {",
        end:
        "\n \t return require('src/Control'); \n" +
        "}));"
    },
     paths:{
        jquery: "node_modules/jquery/dist/jquery",
        TypeCheck: "node_modules/jean-type-check/src/TypeCheck",
    }
})