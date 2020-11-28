const path = require('path')
const jimp = require('jimp-compact')

async function resize ({ input, distDir, sizes }) {
  const inputFile = await jimp.read(input)

  // Icons
  await Promise.all(sizes.map(normalizeSize).map((size) => {
    const name = sizeName(size)
    const distFile = path.join(distDir, `${name}.png`)
    return new Promise((resolve) => {
      inputFile.clone().contain(size[0], size[1]).write(distFile, () => resolve())
    })
  }))
}

resize(JSON.parse(process.argv[2])).then(() => {
  process.exit(0)
}).catch((error) => {
  console.error(error) // eslint-disable-line no-console
  process.exit(1)
})

// TODO: Dedup
function sizeName (size) {
  size = normalizeSize(size)
  const prefix = size[2] ? (size[2] + '_') : ''
  return prefix + size[0] + 'x' + size[1]
}

// TODO: Dedup
function normalizeSize (size) {
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
