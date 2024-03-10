import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getDailyRevenueInPeriodMock } from './get-day-revenue-in-period-mock'
import { getMonthCanceledOrdersAmountMock } from './get-mounth-canceled-orders-amount'
import { getMonthOrdersAmountMock } from './get-mounth-orders-amount-mock'
import { getMonthRevenueMock } from './get-mounth-revenue-mock'
import { getDayOrdersAmountMock } from './get-order-details-mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sign-in-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
