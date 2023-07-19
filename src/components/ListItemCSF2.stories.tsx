import { StoryFn, Meta } from '@storybook/react';

import { ListItem } from './ListItem';

const meta: Meta<typeof ListItem> = { component: ListItem };

export default meta;

const Template: StoryFn<typeof ListItem> = (args) => <ListItem {...args} />;

export const Checked = Template.bind({});

Checked.args = {
  isChecked: true,
  label: 'Checked',
};

export const Unchecked = Template.bind({});

Unchecked.args = {
  isChecked: false,
  label: 'Unchecked',
};
