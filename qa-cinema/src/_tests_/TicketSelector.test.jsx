import TicketSelector from '../components/Bookings/TicketSelector'
import { create } from 'react-test-renderer';


describe(`Ticket Selector testing`, () => {

    it(`Should match the snapshot`, () => {
        const instance = create(<TicketSelector/>).toJSON();
        expect(instance).toMatchSnapshot();
    })
})