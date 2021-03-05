import { posix, resolve, dirname } from 'path'
import { mkdirp, readFile, existsSync, writeFile } from 'fs-extra'
import template from 'lodash.template'
import devalue from '@nuxt/devalue'
import { name, version } from '../package.json'

export const PKG = {
  name,
  version
}

export const PKG_DIR = resolve(__dirname, '..')

export function isUrl (url) {
  return url.indexOf('http') === 0 || url.indexOf('//') === 0
}

export function joinUrl (...args) {
  return posix.join(...args).replace(':/', '://')
}

export function normalizeSize (size) {
  if (!Array.isArray(size)) {
    size = [size, size]
  }
  if (size.length === 1) {
    size = [size, size]
  } else if (size.length === 0) {
    size = 64
  }
  return size
}

export function sizeName (size) {
  size = normalizeSize(size)
  const prefix = size[2] ? (size[2] + '_') : ''
  return prefix + size[0] + 'x' + size[1]
}

export function getRouteParams (options) {
  // routerBase
  const routerBase = options.router.base

  // publicPath
  let publicPath
  if (isUrl(options.build.publicPath)) {
    publicPath = options.build.publicPath
  } else {
    publicPath = joinUrl(routerBase, options.build.publicPath)
  }

  return {
    routerBase,
    publicPath
  }
}

export function startCase (str) {
  return typeof str === 'string' ? str[0].toUpperCase() + str.substr(1) : str
}

export async function writeData (path, data) {
  path = path.split('?')[0]
  await mkdirp(dirname(path))
  await writeFile(path, await data)
}

export function emitAsset (nuxt, fileName, data) {
  const emitAsset = async () => {
    const buildPath = resolve(nuxt.options.buildDir, 'dist/client', fileName)
    await writeData(buildPath, data)
  }

  nuxt.hook('build:done', () => emitAsset())

  const isGenerate = nuxt.options.target === 'static' && !nuxt.options.dev
  if (isGenerate) {
    nuxt.hook('modules:done', () => emitAsset())
  }
}

export async function readJSFiles (nuxt, files) {
  const contents = []

  for (const file of Array.isArray(files) ? files : [files]) {
    const path = nuxt.resolver.resolvePath(file)
    if (path && existsSync(path)) {
      contents.push(await readFile(path, 'utf8').then(s => s.trim()))
    } else {
      throw new Error('Can not read ' + path)
    }
  }

  return contents.join('\n\n')
}

export function pick (obj, props) {
  const newObj = {}
  props.forEach((prop) => {
    newObj[prop] = obj[prop]
  })
  return newObj
}

export async function copyTemplate ({ src, dst, options }) {
  const compile = template(
    await readFile(src, 'utf8'),
    { imports: { devalue } }
  )
  await writeFile(dst, compile({ options }))
}

export function randomString (length) {
  const result = []
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < length; i++) {
    const char = characters.charAt(Math.floor(Math.random() * characters.length))
    result.push(char)
  }

  return result.join('')
}
