import { defineConfig } from 'vite'
import { crx, defineManifest } from '@crxjs/vite-plugin'

import packageJson from './package.json'
const { version } = packageJson

const manifest = defineManifest({
  manifest_version: 3,
  name: 'Tab Roulette',
  description: '',
  version: version,
  version_name: version,
  //   icons: {
  //     '16': 'public/icon-16.png',
  //     '48': 'public/icon-48.png',
  //     '128': 'public/icon-128.png',
  //   },
  action: {
    // default_icon: {
    //   '16': 'public/icon-16.png',
    //   '48': 'public/icon-48.png',
    //   '128': 'public/icon-128.png',
    // },
    default_title: 'Tab Dance',
  },
  commands: {
    random_tab: {
      suggested_key: {
        default: 'Alt+R',
      },
      description: 'Open a random tab',
    },
  },
  background: {
    service_worker: 'src/background.ts',
    type: 'module',
  },
  permissions: [],
})

export default defineConfig({
  plugins: [crx({ manifest })],
})
