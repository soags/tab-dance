import { openRandomTab } from './tabs/openRandomTab'

// Click
chrome.action.onClicked.addListener(async () => {})

// Hotkeys
chrome.commands.onCommand.addListener((command) => {
  switch (command) {
    case 'open_random_tab':
      openRandomTab(false, false)
      break
    case 'open_random_tab_same_domain':
      openRandomTab(true, false)
      break
    case 'close_and_open_random_tab':
      openRandomTab(false, true)
      break
    case 'close_and_open_random_tab_same_domain':
      openRandomTab(true, true)
      break
  }
})

// Context menu
chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: 'Close Current Tab',
    type: 'checkbox',
    contexts: ['action'],
    id: 'close_current_tab',
  })

  chrome.contextMenus.create({
    title: 'Same domain',
    type: 'checkbox',
    contexts: ['action'],
    id: 'same_domain',
  })
})

chrome.contextMenus.onClicked.addListener((data) => {
  switch (data.menuItemId) {
    case 'close_current_tab':
      break
    case 'same_domain':
      break
  }
})

// Bedge
chrome.tabs.onUpdated.addListener(updateBadge)
chrome.tabs.onActivated.addListener(updateBadge)

async function updateBadge() {
  const tabs = await chrome.tabs.query({ currentWindow: true })

  chrome.action.setBadgeText({
    text: tabs.length.toString(),
  })
  chrome.action.setBadgeBackgroundColor({
    color: '#000000',
  })
}
