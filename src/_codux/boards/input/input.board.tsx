import { createBoard } from '@wixc3/react-board';
import { Input } from '../../../components/input/input';
import Input_module from '../../../components/input/input.module.scss';

export default createBoard({
    name: 'Input',
    Board: () => <Input id={''} name={''}/>,
    isSnippet: true,
});
