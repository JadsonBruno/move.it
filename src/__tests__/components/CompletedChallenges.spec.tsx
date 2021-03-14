import {CompletedChallenges} from '../../components/CompletedChallenges';
import {render} from '../test-utils';

describe("Completed Challenges component tests", () =>
{
    it("should be able to render a Challenge box component", () =>
    {
        const {getByTestId} = render(<CompletedChallenges />);

        const countdown = getByTestId('completed-challenges');

        expect(countdown).toBeTruthy();
    });
})
