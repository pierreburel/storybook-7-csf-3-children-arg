import { Checked, Unchecked } from './ListItem.stories';
import type { Meta, StoryObj } from '@storybook/react';

import { List } from './List';

const meta: Meta<typeof List> = { component: List };

export default meta;
type Story = StoryObj<typeof List>;

export const Empty: Story = {};

export const Args: Story = {
  args: {
    children: <Checked {...Checked.args} />,
    count: 2,
  },
};


export const RenderFunction: Story = {
  args: {
    count: 2,
  },
  render: (args) => (
    <List {...args}>
      <Checked {...Checked.args} />
      <Unchecked {...Unchecked.args} />
    </List>
  ),
};
