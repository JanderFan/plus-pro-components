import path from 'node:path'

const resolve = path.resolve

/** 项目根目录 `/`  */
export const projRoot = resolve(__dirname, '../../')
/** 包目录 `/packages` */
export const pkgRoot = resolve(projRoot, 'packages')
/** 组件目录 `/packages/components` */
export const compRoot = resolve(pkgRoot, 'components')
/** hooks目录  `/packages/hooks`  */
export const hookRoot = resolve(pkgRoot, 'hooks')
/** 工具函数目录 `/packages/utils`  */
export const utilRoot = resolve(pkgRoot, 'utils')
/** 语言包目录 `/packages/locale`  */
export const localesRoot = resolve(pkgRoot, 'locale')

/** plus-pro-components 目录 即 `/packages/plus-pro-components` */
export const pcRoot = resolve(pkgRoot, 'plus-pro-components')

/** Docs */
export const docsDirName = 'docs'
export const docRoot = resolve(projRoot, docsDirName)
export const vpRoot = resolve(docRoot, '.vitepress')

/** `/dist` */
export const buildOutput = resolve(projRoot, 'dist')
/** `/dist/plus-pro-components` */
export const pcOutput = resolve(buildOutput, 'plus-pro-components')

export const pcPackage = resolve(pcRoot, 'package.json')
export const projPackage = resolve(projRoot, 'package.json')
export const compPackage = resolve(compRoot, 'package.json')
export const hookPackage = resolve(hookRoot, 'package.json')
export const utilPackage = resolve(utilRoot, 'package.json')
export const docPackage = resolve(docRoot, 'package.json')
