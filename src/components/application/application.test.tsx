import { render,screen} from "@testing-library/react";
import { Application } from "./application";

describe('Application',()=>{
    test('renders correctly',()=>{
        render(<Application/>);
        const pageHeading=screen.getByRole('heading',{
            level:1,
        })
        expect(pageHeading).toBeInTheDocument();
        const sectionHeading=screen.getByRole('heading',{
            level:2
        })
        expect(sectionHeading).toBeInTheDocument();
        const paragraphelement=screen.getByText('All Fielads are mandatory');
        expect(paragraphelement).toBeInTheDocument();
       const nameElement= screen.getByRole('textbox',{
        name:'Name'
       })
       const closeElement=screen.getByTitle('close')
       expect(closeElement).toBeInTheDocument();
       const imageElement=screen.getByAltText('a person with a laptop');
       expect(imageElement).toBeInTheDocument();
       const customElemnt=screen.getByTestId('custom-element')
       expect(customElemnt).toBeInTheDocument();
       expect(nameElement).toBeInTheDocument();
       const nameElement2=screen.getByLabelText('Name',{
        selector:'input'
       });
       expect(nameElement2).toBeInTheDocument();
       const nameElement3=screen.getByPlaceholderText('FullName');
       expect(nameElement3).toBeInTheDocument();
       const nameElement4=screen.getByDisplayValue('priya');
       expect(nameElement4).toBeInTheDocument();
       const bioElement=screen.getByRole('textbox',{
        name:"Bio"
       })

       expect(bioElement).toBeInTheDocument();
       expect(nameElement).toBeInTheDocument()
       const jobLocationElement=screen.getByRole('combobox')
       expect(jobLocationElement).toBeInTheDocument()
       const termselement=screen.getByRole('checkbox')
       expect(termselement).toBeInTheDocument()
       const termsElement2=screen.getByLabelText('I agree to the terms and conditions')
       expect(termsElement2).toBeInTheDocument();
       const submitButtonElement=screen.getByRole('button')
       expect(submitButtonElement).toBeInTheDocument()
    })
})