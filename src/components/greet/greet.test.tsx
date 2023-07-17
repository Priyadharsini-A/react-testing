import { Greet } from "./greet"
import { render,screen } from "@testing-library/react"
describe('Greet',()=>{
    test('renders correctly',()=>{
        render(<Greet/>)
       const textElement= screen.getByText(/Hello/)
       expect(textElement).toBeInTheDocument()
    })
    
    
})
