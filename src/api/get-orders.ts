import { api } from '@/lib/axios'

export interface GetOrderResponse {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrder() {
  const response = await api.get<GetOrderResponse>('/orders', {
    params: {
      pageIndex: 0,
    },
  })

  return response.data
}
