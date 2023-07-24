import{render,screen} from '@testing-library/react';
import {Counter} from './counter';
describe('Counter',()=>{
    test('renders correctly',()=>{
        render(<Counter/>)
        const countElement=screen.getByRole('heading')
        expect(countElement).toBeInTheDocument();
    })
})