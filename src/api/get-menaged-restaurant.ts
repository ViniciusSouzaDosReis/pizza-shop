import { api } from '@/lib/axios'

export interface GetMenagedRestaurantResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getMenagedRestaurant() {
  const response = await api.get<GetMenagedRestaurantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
