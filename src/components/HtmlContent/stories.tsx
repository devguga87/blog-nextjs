import { Meta, Story } from '@storybook/react/types-6-0';
import { HtmlContent, HtmlContentProps } from '.';

export default {
  title: 'HtmlContent',
  component: HtmlContent,
  args: {
    html: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Expedita ullam nostrum facilis ipsa aut optio doloribus architecto atque natus.
    Autem alias architecto a nam maiores totam! Deserunt qui in aut!`,
  },
} as Meta;

export const Template: Story<HtmlContentProps> = (args) => {
  return (
    <div>
      <HtmlContent {...args} />
    </div>
  );
};
