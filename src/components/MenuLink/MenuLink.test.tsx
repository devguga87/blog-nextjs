import { screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<MenuLink/>', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http://google.com">Menu</MenuLink>);
    expect(screen.getByRole('link', { name: 'Menu' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should open in a new tab', () => {
    renderTheme(
      <MenuLink link="http://google.com" newTab={true}>
        Menu
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Menu' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should match snapshot', () => {
    renderTheme(
      <MenuLink link="http://google.com" newTab={true}>
        Menu
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Menu' })).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.8rem;
        margin-bottom: 1.6rem;
        color: #FFFFFF;
        position: relative;
        border-right: 0.5rem solid #000000;
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
      }

      .c0:hover {
        border-right: 0.5rem solid #dc143c;
        color: #dc143c;
      }

      <a
        class="c0"
        href="http://google.com"
        target="_blank"
      >
        Menu
      </a>
    `);
  });
});
