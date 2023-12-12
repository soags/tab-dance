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
  options_page: 'src/options-page.html',
  commands: {
    open_random_tab: {
      suggested_key: {
        default: 'Alt+R',
      },
      description: 'Open a random tab',
    },
    open_random_tab_same_domain: {
      suggested_key: {
        default: 'Alt+Shift+R',
      },
      description: 'Open a random tab from the same domain',
    },
    close_and_open_random_tab: {
      suggested_key: {
        default: 'Alt+W',
      },
      description: 'Close and open a random tab',
    },
    close_and_open_random_tab_same_domain: {
      suggested_key: {
        default: 'Alt+Shift+W',
      },
      description: 'Close and open a random tab from the same domain',
    },
  },
  background: {
    service_worker: 'src/background.ts',
    type: 'module',
  },
  permissions: ['storage'],
})

export default defineConfig({
  plugins: [crx({ manifest })],
})
