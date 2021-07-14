import PurchaseManager from '../components/Bookings/PurchaseManager';
import { create } from 'react-test-renderer';


describe(`PurchaseManager testing`, () => {

    it(`Should match the snapshot`, () => {
        const instance = create(<PurchaseManager/>).toJSON();
        expect(instance).toMatchSnapshot();
    })
})