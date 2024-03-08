import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

import { queryClient } from '@/lib/query'

import { SignIn } from './sign-in'

describe('SignIn', () => {
  it('should set default email input if email is present on search param', () => {
    const wrapper = render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <>
            <HelmetProvider>
              <QueryClientProvider client={queryClient}>
                <MemoryRouter
                  initialEntries={['/sign-in?email=vini@gmail.com']}
                >
                  {children}
                </MemoryRouter>
              </QueryClientProvider>
            </HelmetProvider>
          </>
        )
      },
    })

    const emailInput = wrapper.getByLabelText('Seu e-mail') as HTMLInputElement

    expect(emailInput.value).toEqual('vini@gmail.com')
  })
})
