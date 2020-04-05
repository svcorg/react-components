import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default {
  input: [
    'lib/index.ts'
  ],
  output: [
    {
      file: 'dist/index.js',
      format: 'es',
      name: 'copyToClipboard'
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'copyToClipboard',
      globals: {
        react: 'React'
      }
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      name: 'copyToClipboard'
    },
    {
      file: 'dist/index.iife.js',
      format: 'iife',
      name: 'copyToClipboard',
      globals: {
        react: 'React'
      }
    },
    {
      file: 'dist/index.system.js',
      format: 'system',
      name: 'copyToClipboard'
    },
    {
      file: 'dist/index.amd.js',
      format: 'amd',
      name: 'copyToClipboard'
    }
  ],
  plugins: [
    terser(), 
    typescript()
  ],
  external: ['react']
};