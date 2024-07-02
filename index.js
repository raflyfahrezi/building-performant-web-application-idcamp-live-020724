import imagemin from 'imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminJpegtran from 'imagemin-jpegtran'

// Lossy
;(async () => {
  await imagemin(['images/*.jpg'], {
    destination: 'build/lossy',
    plugins: [imageminMozjpeg()],
  })

  console.log('Images lossy optimized')
})()

// Loseless
;(async () => {
  await imagemin(['images/*.jpg'], {
    destination: 'build/loseless',
    plugins: [imageminJpegtran()],
  })

  console.log('Images loseless optimized')
})()
