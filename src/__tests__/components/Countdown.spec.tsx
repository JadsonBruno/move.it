import {Countdown} from '../../components/Countdown';
import {render} from '../test-utils';
import {waitFor} from '../test-utils';
import userEvent from '@testing-library/user-event';

describe("Countdown component tests", () =>
{
    it("should be able to render a Countdown component", () =>
    {
        const {getByTestId} = render(<Countdown />);

        const countdown = getByTestId('countdown');

        expect(countdown).toBeTruthy();
    });

    it("should be able to render start cycle button", () =>
    {
        const {getByTestId} = render(<Countdown />);

        const button = getByTestId('button-countdown');

        expect(button).toHaveTextContent('Iniciar um ciclo');
    });

    it("should be able to start a cycle", () =>
    {
        const {getByTestId} = render(<Countdown />);

        const button = getByTestId('button-countdown');

        userEvent.click(button);

        const secondButton = getByTestId('button-countdown');

        expect(secondButton).toHaveTextContent('Abandonar ciclo');
    });

    it("should be able to stop a cycle", async () =>
    {
        const {getByTestId} = render(<Countdown />);

        const button = getByTestId('button-countdown');

        userEvent.click(button);

        jest.advanceTimersByTime(25*60*1000);

        const secondButton = getByTestId('button-countdown');

        waitFor(() =>
            expect(secondButton).toHaveTextContent('Ciclo encerrado')
        )
    });
})
