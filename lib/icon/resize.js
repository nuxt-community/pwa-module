const path = require('path')
const Jimp = require('jimp-compact')

async function resize ({ input, distDir, sizes, iosSizes }) {
  const inputFile = await Jimp.read(input)

  // Icons
  await Promise.all(sizes.map((size) => {
    const distFile = path.join(distDir, `${size}.png`)
    return new Promise((resolve) => {
      inputFile.clone().contain(size, size).write(distFile, () => resolve())
    })
  }))

  // IOS Splash Screens
  await Promise.all(iosSizes.map((iosSize) => {
    const distFile = path.join(distDir, `${iosSize[0]}.png`)
    return new Promise((resolve) => {
      inputFile.clone().contain(iosSize[1], iosSize[2]).write(distFile, () => resolve())
    })
  }))
}

resize(JSON.parse(process.argv[2])).then(() => {
  process.exit(0)
}).catch((error) => {
  console.error(error) // eslint-disable-line no-console
  process.exit(1)
})
