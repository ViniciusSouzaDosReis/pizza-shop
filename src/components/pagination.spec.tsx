import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Pagination } from './pagination'

const onPageChangeCallback = vi.fn()

describe('Pagination', () => {
  it('should display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        perPage={10}
        totalCount={200}
        onPageChange={() => {}}
      />,
    )

    expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
    expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
  })

  it('should be able to navigate to the next page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={0}
        perPage={10}
        totalCount={200}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima página',
    })

    await user.click(nextPageButton)

    // Checa se a função onPageChangeCallback é chamada com o valor 1 - Próxima pagina, ja q a atual é a 0
    expect(onPageChangeCallback).toHaveBeenCalledWith(1)
  })
})
