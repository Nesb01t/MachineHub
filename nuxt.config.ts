import glsl from 'vite-plugin-glsl';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@tresjs/nuxt',
    '@nuxt/icon',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'MachineHub | 生电工房',
      meta: [
        { name: 'description', content: '👾Minecraft MachineHub | Machine, Farm, Survival' },
        { name: 'keywords', content: 'survival farm machine, minecraft survival redstone, 3d, mc, minecraft' },
      ],
    },
  },
  ssr: false,
  devtools: { enabled: false },
  compatibilityDate: '2024-04-03',
  vite: {
    assetsInclude: ['**/*.fbx', '**/*.glb'],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    plugins: [glsl()],
  },
});
