import { getCurrentTab } from '../utils'

export async function openRandomTab(sameDomain: boolean) {
  try {
    const currentTab = await getCurrentTab()

    let tabs = await chrome.tabs.query({ lastFocusedWindow: true })
    if (tabs.length < 2) return

    if (sameDomain) {
      const url = currentTab.url
      if (!url) return

      const currentDomain = new URL(url).hostname
      const sameDomainTabs = tabs.filter(
        (tab) => !!tab.url && new URL(tab.url).hostname === currentDomain
      )
      if (sameDomainTabs.length < 2) return

      tabs = sameDomainTabs
    }

    const tab = tabs[Math.floor(Math.random() * tabs.length)]
    if (tab?.id) {
      chrome.tabs.update(tab.id, { active: true })
    }
  } catch (error) {
    console.error('Error opening a random tab:', error)
  }
}
