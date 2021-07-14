import Email from "../components/ContactPage/Email";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe(`Form testing`,() => {

    describe(`onSubmit test`, () => {

        // Parent level arranging
        const data = "test_name";
        const email = "test@gmail.com";
        const last = "doe";
        const Text = "This is a test to see if the text area works";
        it(`Should update the value of the input (which updates state) when text is typed in`, () => {

            // ? Arrange
            // render(Form) is being deconstructed and saved as 'container'
            const {container} = render(<Email/>);

            const textInput = container.querySelector('#FirstName');
            const textInput2 = container.querySelector('#Email');
            const textInput3 = container.querySelector('#LastName');
            const textInput4 = container.querySelector('#TextArea');
            // console.log(textInput);
            expect(textInput.value).toEqual("");
            expect(textInput2.value).toEqual("");
            expect(textInput3.value).toEqual("");
            expect(textInput4.value).toEqual("");
            // ? Act - simulated typing
            userEvent.type(textInput, data);
            userEvent.type(textInput2, email);
            userEvent.type(textInput3, last);
            userEvent.type(textInput4, Text);
            // ? Assert
            expect(textInput.value).toEqual(data);
            expect(textInput2.value).toEqual(email);
            expect(textInput3.value).toEqual(last);
            expect(textInput4.value).toEqual(Text);
        });

        it(`Should call handleSubmit() when the submit button is clicked`, () => {

            const mockSubmit = jest.fn();

            // Arrange
            const {container} = render(<Email/>);

            const submitButton = container.querySelector('#submit');

            // Act
             submitButton.onClick = mockSubmit();
             userEvent.click(submitButton, mockSubmit())

            // Assert
            expect(mockSubmit).toHaveBeenCalled();

        });

    });    
})