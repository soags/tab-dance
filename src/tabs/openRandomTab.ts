import { getCurrentTab } from './getCurrentTab'
import { pickRandomTab } from './pickRandomTab'

export async function openRandomTab(
  sameDomain: boolean,
  closeCurrent: boolean
) {
  const currentTab = await getCurrentTab()

  const tab = await pickRandomTab(currentTab, sameDomain)

  if (tab?.id) {
    if (closeCurrent && currentTab.id) {
      chrome.tabs.remove(currentTab.id)
    }

    chrome.tabs.update(tab.id, { active: true })
  }
}
