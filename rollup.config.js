import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
export default {
    input: 'src/index.js',
    output: {
        file: './dist/cacheSimple.js',
        format: 'umd',
        name: 'cacheSimple'
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**' // 只编译我们的源代码
        }),
        uglify()
    ]
};

