const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
})

describe('Pokedex', () => {
  test('a pokemon item can be opened', async ({ page }) => {
    await page.goto('')
    await page.getByRole('link', { name: 'squirtle' }).click()
    await expect(page.getByText('squirtle')).toBeVisible()
    await expect(page.getByText('torrent')).toBeVisible()
    await expect(page.getByText('rain dish')).toBeVisible()
  })
})
