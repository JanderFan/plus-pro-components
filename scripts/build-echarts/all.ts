import { resolve } from 'path'
import vuePlugin from '@vitejs/plugin-vue'
import type { Plugin } from 'rollup'
import { rollup } from 'rollup'
import consola from 'consola'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild, { minify as minifyPlugin } from 'rollup-plugin-esbuild'
import { ecOutput, ecRoot } from '../utils/paths'
import { writeBundles, formatBundleFilename, PKG_CAMEL_CASE_NAME, target } from '../utils'
import { external } from '../utils/echarts'

const buildAll = async (minify?: boolean) => {
  const plugins = [
    vuePlugin() as Plugin,
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.ts']
    }),
    commonjs(),
    esbuild({
      sourceMap: false,
      target: target,
      loaders: {
        '.vue': 'ts'
      }
    })
  ]

  if (minify) {
    plugins.push(
      minifyPlugin({
        target: target,
        sourceMap: false
      })
    )
  }

  const bundle = await rollup({
    input: resolve(ecRoot, 'index.ts'),
    plugins,
    external: external,
    treeshake: true
  })

  await writeBundles(bundle, [
    {
      format: 'umd',
      file: resolve(ecOutput, formatBundleFilename('index', minify, 'js')),
      exports: 'named',
      name: PKG_CAMEL_CASE_NAME,
      globals: {
        vue: 'Vue',
        echarts: 'echarts'
      },
      sourcemap: false
    },
    {
      format: 'esm',
      file: resolve(ecOutput, formatBundleFilename('index', minify, 'mjs')),
      sourcemap: false
    }
  ])
  const msg = minify
    ? 'Successfully build compressed umd and esm!'
    : 'Successfully build into umd and esm!'
  consola.success(msg)
}

const task = [buildAll(false), buildAll(true)]

export default task
