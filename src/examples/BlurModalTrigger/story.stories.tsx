import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BlurModalTrigger } from '.';
import { ModalProvider } from '../../providers/ModalProvider';

const meta = {
  title: 'Example/BlurModalTrigger',
  component: BlurModalTrigger,
  decorators: [
    (Story) => {
      return (
        <ModalProvider>
          <Story />
        </ModalProvider>
      );
    },
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlurModalTrigger>;

export default meta;

type Story = StoryObj<typeof BlurModalTrigger>;

export const Default: Story = {
  args: {},
};
