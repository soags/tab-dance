export type Options = {
  clickAction: string
}

export const defaultOptions: Options = {
  clickAction: 'open',
}

export async function setOptions(options: Options) {
  await chrome.storage.sync.set(options)
}

export async function getOptions() {
  return await chrome.storage.sync.get(defaultOptions)
}
