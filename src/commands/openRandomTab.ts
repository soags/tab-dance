export function openRandomTab() {
  chrome.tabs.query({ lastFocusedWindow: true }, (tabs) => {
    if (tabs.length < 2) return

    const index = Math.floor(Math.random() * tabs.length)
    const tab = tabs[index]
    if (tab.id) {
      chrome.tabs.update(tab.id, { active: true })
    }
  })
}
