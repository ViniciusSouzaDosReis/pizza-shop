import { expect, test } from '@playwright/test'

test('list ordes', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  expect(page.getByRole('cell', { name: 'order-1', exact: true }))
  expect(page.getByRole('cell', { name: 'order-10' }))
})

test('paginate ordes', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Próxima página' }).click()

  expect(page.getByRole('cell', { name: 'order-11' }))
  expect(page.getByRole('cell', { name: 'order-20' }))

  await page.getByRole('button', { name: 'Última página' }).click()

  expect(page.getByRole('cell', { name: 'order-51' }))
  expect(page.getByRole('cell', { name: 'order-60' }))

  await page.getByRole('button', { name: 'Página anterior' }).click()

  expect(page.getByRole('cell', { name: 'order-41' }))
  expect(page.getByRole('cell', { name: 'order-50' }))

  await page.getByRole('button', { name: 'Primeira página' }).click()

  expect(page.getByRole('cell', { name: 'order-1', exact: true }))
  expect(page.getByRole('cell', { name: 'order-10' }))
})

test('filter orders by id', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('ID do pedido').fill('order-1')
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  expect(page.getByRole('cell', { name: 'order-1', exact: true })).toBeVisible()
})

test('filter orders by custumer name', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('Nome do cliente').fill('Customer 1')
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true }),
  ).toBeVisible()
})

test('filter orders by status', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('combobox').click()
  await page.getByLabel('Pendente').click()
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  await expect(page.getByRole('cell', { name: 'Pendente' })).toHaveCount(10)
})
