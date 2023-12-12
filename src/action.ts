export type Action =
  | 'open'
  | 'open/same-domain'
  | 'close-and-open'
  | 'close-and-open/same-domain'

export function isAction(value: string): value is Action {
  return [
    'open',
    'open/same-domain',
    'close-and-open',
    'close-and-open/same-domain',
  ].includes(value)
}

// export function action(actionType: Action) {
//   switch (actionType) {
//     case 'open':
//       openRandomTab()
//       break
//     case 'open/same-domain':
//       openRandomTab(true)
//       break
//     case 'close-and-open':
//       closeAndOpenRandomTab()
//       break
//     case 'close-and-open/same-domain':
//       closeAndOpenRandomTab(true)
//       break
//   }
// }

async function openRandomTab(sameDomain = false) {
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

async function closeAndOpenRandomTab(sameDomain = false) {
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
