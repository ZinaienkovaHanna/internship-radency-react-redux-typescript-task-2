import { Meta, StoryObj } from '@storybook/react';
import Table from '../components/Table/Table';

const meta: Meta<typeof Table> = {
    title: 'App/Table',
    component: Table,
    tags: ['autodocs'],
};

export default meta;

export const DefaultTable: StoryObj<typeof Table> = {
    args: {
        headers: [],
        rows: [],
        rowClassName: 'some-class-name',
    },
};
