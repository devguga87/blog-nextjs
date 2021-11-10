import { screen } from '@testing-library/react';
import { HtmlContent } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<HtmlContent/>', () => {
  it('should render a text', () => {
    renderTheme(<HtmlContent html={'<b>Texto</b>'} />);
    expect(screen.getByText('Texto')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<HtmlContent html={'<b>Texto</b>'} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
