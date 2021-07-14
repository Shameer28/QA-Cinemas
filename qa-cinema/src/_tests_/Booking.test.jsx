import { create } from 'react-test-renderer';
import { render, screen, wait, waitFor} from "@testing-library/react";
import PurchaseManager from '../components/Bookings/PurchaseManager';
import userEvent from "@testing-library/user-event";
import {act} from 'react-dom/test-utils';

describe(`All Gallery Page testing`, () => {

    it('Should match the snapshot', () => {
        const instance = create(<PurchaseManager/>).toJSON();
        expect(instance).toMatchSnapshot();
    })

    it('Add item to cart',  async() =>{

        const {container} = render(<PurchaseManager/>);

        await waitFor(() => screen.getAllByText("Select A Movie"))

        const textInput = container.querySelector('#Name');
        const textInput2 = container.querySelector('#Adults');
        const textInput3 = container.querySelector('#Child');

        // console.log(textInput);
        expect(textInput.value).toEqual("");
        expect(textInput2.value).toEqual("");
        expect(textInput3.value).toEqual("");
        // ? Act - simulated typing
        userEvent.type(textInput, "data");
        userEvent.type(textInput2, "email");
        userEvent.type(textInput3, "last");
        // ? Assert
        expect(textInput.value).toEqual("data");
        expect(textInput2.value).toEqual("email");
        expect(textInput3.value).toEqual("last");

    })


})