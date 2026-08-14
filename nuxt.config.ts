// // // https://nuxt.com/docs/api/configuration/nuxt-config
// // export default defineNuxtConfig({
// //   compatibilityDate: '2025-07-15',
// //   devtools: { enabled: true }
// // })
// import tailwindcss from '@tailwindcss/vite'

// export default defineNuxtConfig({
//   compatibilityDate: '2025-07-15',

//   devtools: {
//     enabled: true
//   },

//   css: [
//      '~/assets/css/main.css'
//   ],

//   vite: {
//     plugins: [
//       tailwindcss()
//     ]
//   }
// })
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true
  },

  css: [
    '~/assets/css/main.css'
  ],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  app: {
    head: {
      title: 'Nget Sophun — Frontend & Mobile Developer',
      meta: [
        {
          name: 'description',
          content:
            'Nget Sophun is a developer from Cambodia specializing in Flutter, Vue, Nuxt, web applications, mobile applications, robotics and AI.'
        },
        {
          name: 'theme-color',
          content: '#09090b'
        }
      ]
    }
  }
})