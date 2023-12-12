import { getOptions, defaultOptions } from './options'

function saveOptions() {
  const radios = document.querySelectorAll<HTMLInputElement>(
    `input[name="click-action"]:checked`
  )

  const clickAction = radios.length > 0 ? radios[0].value : null
  const defaultAction = defaultOptions.clickAction

  chrome.storage.sync.set({ clickAction: clickAction || defaultAction })
}

// function restoreOptions() {
//   chrome.storage.sync.get({ clickAction: 'current-window' }, (items) => {
//     const radios = document.querySelectorAll<HTMLInputElement>(
//       `input[name="click-action"]`
//     )
//     radios.forEach((radio) => {
//       radio.checked = radio.value === items.clickAction
//     })
//   })
// }

document.addEventListener('DOMContentLoaded', async () => {
  const options = await getOptions()
  const { clickAction } = options

  const radios = document.querySelectorAll<HTMLInputElement>(
    `input[name="click-action"]`
  )
  radios.forEach((radio) => {
    radio.checked = radio.value === clickAction
  })
})

document.getElementById('save')?.addEventListener('click', () => {
  // function getClickAction() {
  // }
})
