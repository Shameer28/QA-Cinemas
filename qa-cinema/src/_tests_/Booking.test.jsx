import TicketSelector from '../components/Bookings/TicketSelector'
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe(`Form testing`,() => {

    describe(`onSubmit test`, () => {

        // Parent level arranging
        const data = "test_name";
        const adult = 2;
        const Child = 3;
       
        it(`Should update the value of the input (which updates state) when text is typed in`, () => {

            // ? Arrange
            // render(Form) is being deconstructed and saved as 'container'
            const {container} = render(<TicketSelector/>);

            const textInput = container.querySelector('#Name');
            const textInput2 = container.querySelector('#Adults');
            const textInput3 = container.querySelector('#Child');
            
            // console.log(textInput);
            expect(textInput.value).toEqual("");
            expect(textInput2.value).toEqual("");
            expect(textInput3.value).toEqual("");
            
            // ? Act - simulated typing
            userEvent.type(textInput, data);
            userEvent.type(textInput2, adult);
            userEvent.type(textInput3, Child);
            
            // ? Assert
            expect(textInput.value).toEqual(data);
            expect(textInput2.value).toEqual(adult);
            expect(textInput3.value).toEqual(Child);
            
        });

        it(`Should call handleSubmit() when the submit button is clicked`, () => {

            const mockSubmit = jest.fn();

            // Arrange
            const {container} = render(<TicketSelector/>);

            const submitButton = container.querySelector('#submit');

            // Act
             submitButton.onClick = mockSubmit();
             userEvent.click(submitButton, mockSubmit())

            // Assert
            expect(mockSubmit).toHaveBeenCalled();

        });

    });    
})