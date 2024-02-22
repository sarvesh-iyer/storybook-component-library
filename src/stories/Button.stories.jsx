import { Button } from "../components/Button";

export default {
    title: "UI/Buttton",
    component: Button,
    argTypes: {
        backgroundColor: {control: 'color'},
        color: {control: 'color'},
        size: { control: 'radio', options: ['small', 'medium', 'large'] },
    }
}

const Template = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
    label: 'This is working!',
    size: 'medium'
}

export const Primary = Template.bind({})
Primary.args = {
    label: "Primary button",
    size: 'large'
}


export const Secondary = Template.bind({})
Secondary.args = {
    size: 'medium',
    label: 'Secondary button',
    color: 'black',
    backgroundColor: '#fccdcd'
}