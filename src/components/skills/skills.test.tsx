import {render,screen} from '@testing-library/react';
import { Skills } from './skills';

describe('Skills',()=>{
    const skills=['HTML','CSS','JAVASCRIPT'];
    test('renders correctly',()=>{
        render(<Skills skills={skills}/>)
        const listElement=screen.getByRole('list')
        expect(listElement).toBeInTheDocument();
    })
    test('renders a list of skills',()=>{
        render(<Skills skills={skills}/>)
        const listItemelements=screen.getAllByRole('listitem')
        expect(listItemelements).toHaveLength(skills.length)
    })
    test('renders login button',()=>{
        render(<Skills skills={skills}/>);
        const loginButton=screen.getByRole('button',{
            name:"Login",
        });
        expect(loginButton).toBeInTheDocument();


    })
    test("start lerning button is not rendered",()=>{
        render(<Skills skills={skills}/>);
        const StartLearningButton=screen.queryByRole('button',{
            name:'StartLearning',

        })
        expect(StartLearningButton).not.toBeInTheDocument();

    })
    test('start learnig button eventually displayed',async()=>{
        render(<Skills skills={skills}/>)
        const StartLearningButton=await screen.findByRole('button',{
            name:'StartLearning'
        },{
            timeout:2000,
        })
        expect(StartLearningButton).toBeInTheDocument();
    })
})