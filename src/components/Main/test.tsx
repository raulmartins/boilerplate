import { screen, render } from '@testing-library/react'
import Main from './'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)
    expect(
      screen.getByRole('heading', { name: /React avançado/i })
    ).toBeInTheDocument()
  })
})
