import { closeAndOpenRandomTab } from './commands/closeAndOpenRandomTab'
import { openRandomTab } from './commands/openRandomTab'

chrome.action.onClicked.addListener(async () => {})

chrome.commands.onCommand.addListener((command) => {
  switch (command) {
    case 'open_random_tab':
      openRandomTab(false)
      break
    case 'open_random_tab_same_domain':
      openRandomTab(true)
      break
    case 'close_and_open_random_tab':
      closeAndOpenRandomTab(false)
      break
    case 'close_and_open_random_tab_same_domain':
      closeAndOpenRandomTab(true)
      break
    default:
      console.error('Invalid action:', command)
      break
  }
})

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
