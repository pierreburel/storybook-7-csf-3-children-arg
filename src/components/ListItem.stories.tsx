import { ComponentStory, Meta, StoryObj } from '@storybook/react';

import { ListItem } from './ListItem';

const meta: Meta<typeof ListItem> = { component: ListItem };

export default meta;
type Story = StoryObj<typeof ListItem>;

// Without render function
export const Checked: Story = {
  args: {
    isChecked: true,
    label: 'Checked',
  },
};

// With render function
export const Unchecked: Story = {
  args: {
    isChecked: false,
    label: 'Unchecked',
  },
  render: ({ isChecked, label }) => <ListItem isChecked={isChecked} label={label} />
};

// CSF2
const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />;

export const CheckedCSF2 = Template.bind({});
CheckedCSF2.args = {
  isChecked: true,
  label: 'Checked',
};

export const UncheckedCSF2 = Template.bind({});
CheckedCSF2.args = {
  isChecked: false,
  label: 'Unchecked',
};
