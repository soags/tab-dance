chrome.action.onClicked.addListener(() => {
  randomTab()
})

chrome.commands.onCommand.addListener((command) => {
  switch (command) {
    case 'random_tab':
      randomTab()
      break
  }
})

chrome.tabs.onUpdated.addListener(updateBadge)

chrome.tabs.onActivated.addListener(updateBadge)

async function randomTab() {
  try {
    const tabs = await chrome.tabs.query({ lastFocusedWindow: true })
    if (tabs.length < 2) return

    const tab = tabs[Math.floor(Math.random() * tabs.length)]
    if (tab?.id) {
      chrome.tabs.update(tab.id, { active: true })
    }
  } catch (error) {
    console.error('Error opening a random tab:', error)
  }
}

async function updateBadge() {
  const tabs = await chrome.tabs.query({ currentWindow: true })

  chrome.action.setBadgeText({
    text: tabs.length.toString(),
  })
  chrome.action.setBadgeBackgroundColor({
    color: '#000000',
  })
}
