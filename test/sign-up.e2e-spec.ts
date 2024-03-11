import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('Test')
  await page.getByLabel('Seu e-mail').fill('test@test.com')
  await page.getByLabel('Seu celular').fill('99999999999')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso!')

  await expect(toast).toBeVisible()
})
test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('wrong')
  await page.getByLabel('Seu nome').fill('Test')
  await page.getByLabel('Seu e-mail').fill('test@test.com')
  await page.getByLabel('Seu celular').fill('99999999999')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar restaurante.')

  await expect(toast).toBeVisible()
})
test('navigate to sign in page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()
  const url = page.url()

  expect(url).toContain('sign-in')
})
