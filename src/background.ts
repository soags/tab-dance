import { isAction } from './action'

chrome.action.onClicked.addListener(async () => {})

chrome.commands.onCommand.addListener((command) => {
  if (!isAction(command)) {
    console.error('Invalid action:', command)
    return
  }

  switch (command) {
    case 'open':
      console.log('Action: open')
      break
    case 'open/same-domain':
      console.log('Action: open/same-domain')
      break
    case 'close-and-open':
      console.log('Action: close-and-open')
      break
    case 'close-and-open/same-domain':
      console.log('Action: close-and-open/same-domain')
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
