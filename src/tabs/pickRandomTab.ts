export async function pickRandomTab(
  currentTab: chrome.tabs.Tab,
  sameDomain: boolean
) {
  let tabs = await chrome.tabs.query({ lastFocusedWindow: true })

  const url = currentTab.url
  if (!url) return null

  if (sameDomain) {
    const currentDomain = new URL(url).hostname
    const sameDomainTabs = tabs.filter(
      (tab) => !!tab.url && new URL(tab.url).hostname === currentDomain
    )
    tabs = sameDomainTabs
  }

  return tabs.length >= 2 ? tabs[Math.floor(Math.random() * tabs.length)] : null
}
