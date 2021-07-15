import { create } from 'react-test-renderer';
import { render, screen, wait, waitFor} from "@testing-library/react";
import PurchaseManager from '../components/Bookings/PurchaseManager';
import userEvent from "@testing-library/user-event";
import {act} from 'react-dom/test-utils';
import { useState } from 'react';

describe(`All Gallery Page testing`, () => {

    // beforeAll(() => {
    //     const [getCart, setCart] = useState([]);
    //     const [getPage, setPage] = useState("TicketSelector");
    // })

    it('Should match the snapshot', () => {
        const instance = create(<PurchaseManager/>).toJSON();
        expect(instance).toMatchSnapshot();
    })

    it('Add item to cart',  async() =>{

        render(<PurchaseManager/>);

        expect(screen.findByText("Loading Form")).toBeTruthy();

        await waitFor(() => screen.getAllByRole("button")) // Wait for Checkout Buttons

        const textInput = screen.getByLabelText('Name:');
        const textInput1 = screen.getByLabelText('Adults £10:');
        const textInput2 = screen.getByLabelText('Child (Under 16s) £5:');
        const dropInput = screen.getByLabelText('Concession:');

        expect(textInput.value).toEqual("");
        expect(textInput1.value).toEqual("");
        expect(textInput2.value).toEqual("");
        expect(dropInput.value).toEqual("0");

        userEvent.type(textInput, "data");
        userEvent.type(textInput1, "4");
        userEvent.type(textInput2, "3");
        userEvent.selectOptions(dropInput, "2")

        expect(textInput.value).toEqual("data");
        expect(textInput1.value).toEqual("4");
        expect(textInput2.value).toEqual("3");
        expect(dropInput.value).toEqual("2");

        const dropInput1 = screen.getByDisplayValue("Select A Movie")
        expect(dropInput1.value).toEqual("0");
        userEvent.selectOptions(dropInput, "2")
    })


})