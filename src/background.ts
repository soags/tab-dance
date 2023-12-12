import { openRandomTab } from './commands/openRandomTab'

chrome.action.onClicked.addListener(() => {})

chrome.commands.onCommand.addListener((command) => {
  switch (command) {
    case 'open_random_tab':
      openRandomTab()
      break
  }
})

chrome.tabs.onUpdated.addListener(updateBadge)

chrome.tabs.onActivated.addListener(updateBadge)

function updateBadge() {
  chrome.tabs.query({ currentWindow: true }, (tabs) => {
    chrome.action.setBadgeText({
      text: tabs.length.toString(),
    })
    chrome.action.setBadgeBackgroundColor({
      color: '#000000',
    })
  })
}
