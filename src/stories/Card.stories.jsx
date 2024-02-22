import React from 'react';

import { Card } from '../components/Card/Card';

export default {
    title: 'UI/Card',
    component: Card,
};

const Template = args => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
    
};