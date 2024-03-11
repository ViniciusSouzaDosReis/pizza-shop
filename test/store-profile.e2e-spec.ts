import { expect, test } from '@playwright/test'

test('update profile store', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('Rocket Pizza')
  await page.getByLabel('Descrição').fill('Another Description')
  await page.getByRole('button', { name: 'Salvar' }).click()

  const toast = page.getByText('Informações atualizadas com sucesso.')

  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await expect(page.getByRole('button', { name: 'Rocket Pizza' })).toBeVisible()
})
