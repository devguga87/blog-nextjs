import { Heading } from '../Heading';
import { LogoLink } from '../LogoLink';
import * as Styled from './styles';

export type HeaderProps = {
  logo: string;
  blogName: string;
  blogDescription: string;
  showText?: boolean;
};

export const Header = ({
  blogDescription,
  blogName,
  showText,
  logo,
}: HeaderProps) => {
  return (
    <Styled.Container>
      <LogoLink
        text={`${blogName} - ${blogDescription}`}
        srcImg={logo}
        link="/"
      />

      {showText && (
        <Styled.Content>
          <Heading size="small" as="h2" colorDark={true}>
            {blogName}
          </Heading>
          <p>{blogDescription}</p>
        </Styled.Content>
      )}
    </Styled.Container>
  );
};
