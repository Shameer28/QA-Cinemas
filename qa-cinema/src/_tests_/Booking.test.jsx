import { create } from 'react-test-renderer';
import { fireEvent, render, screen, wait, waitFor} from "@testing-library/react";
import PurchaseManager from '../components/Bookings/PurchaseManager';
import userEvent from "@testing-library/user-event";
import {act} from 'react-dom/test-utils';
import Cart from '../components/Bookings/Cart';

describe(`All Gallery Page testing`, () => {

    it('Should match the snapshot', () => {
        const instance = create(<PurchaseManager/>).toJSON();
        expect(instance).toMatchSnapshot();
    })

    // it('Error Form Alert',async() => {
    //     render(<PurchaseManager/>)
    //     await waitFor(() => screen.getAllByRole("button"))
    //     userEvent.click(screen.getByText("Add to Cart"));
    // })

    it('Fill In Form',  async() =>{
        const instance = render(<PurchaseManager/>);

       

        expect(screen.findByText("Loading Form")).toBeTruthy();

        await waitFor(() => screen.getAllByRole("button")) // Wait for Checkout Buttons

        const textInput = screen.getByLabelText('Name:');
        const textInput1 = screen.getByLabelText('Adults £10:');
        const textInput2 = screen.getByLabelText('Child (Under 16s) £5:');
        const dropInput = screen.getByLabelText('Concession:');

        userEvent.type(textInput, "data");
        userEvent.type(textInput1, "4");
        userEvent.type(textInput2, "3");
        userEvent.selectOptions(dropInput, "2")

        expect(textInput.value).toEqual("data");
        expect(textInput1.value).toEqual("4");
        expect(textInput2.value).toEqual("3");
        expect(dropInput.value).toEqual("2");
        const dropInput1 = screen.getByDisplayValue("Select A Movie")
        expect(dropInput1.value).toEqual("Select A Movie");
        userEvent.selectOptions(dropInput1, "60ec614b2506fc7c20193ce6")
        expect(dropInput1.value).toEqual("60ec614b2506fc7c20193ce6");

        await waitFor(() => screen.getByDisplayValue("25/07/2021 - 9:15"))

        const dropInput2 = screen.getByDisplayValue("25/07/2021 - 9:15")
        expect(dropInput2.value).toEqual("25/07/2021 - 9:15");

        userEvent.click(screen.getByText("Add to Cart"), {target:screen.getByTestId("form").children} ); // event on handle submit is not propergated properly
        
        // Object Added To cart

        await waitFor(() => textInput1=="") // Wait for Cart process

        expect(screen.getByText("Basket:")).toBeTruthy();

        // Payment / Checkout
        userEvent.click(screen.getByText("Checkout"))

        await waitFor(() => screen.getByLabelText("Billing Name:"))


        // Billing Form Details
        const textInput3 = screen.getByLabelText('Billing Name:');
        const textInput4 = screen.getByLabelText('Email:');
        const textInput5 = screen.getByLabelText('Address:');
        
        userEvent.type(textInput3, "Andrew McCall");
        userEvent.type(textInput4, "Email@TestEmail.com");
        userEvent.type(textInput5, "123456789,\nStreet Rd,\nNewcastle");

        expect(textInput3.value).toEqual("Andrew McCall");
        expect(textInput4.value).toEqual("Email@TestEmail.com");
        expect(textInput5.value).toEqual("123456789,\nStreet Rd,\nNewcastle");


    })

    it("Cart - Empty & Full", () =>{

        // Empty Cart
        expect(create(<Cart getCart={[]}/>).toJSON()).toMatchSnapshot();
       
        const instance = create(<Cart getCart={[{
            Adults: "1",
            Child: "1",
            Concessions: "3",
            MovieId: "60ec63782506fc7c20193d1d",
            MovieTimings: "25/07/2021 - 9:15",
            MovieTitle: "Fast and Furious 9",
            Name: "2",
            price: 22.5
        }]}/>);

        // Full Cart
        expect(instance.toJSON()).toMatchSnapshot();
    })

})