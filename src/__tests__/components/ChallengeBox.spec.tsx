import {ChallengeBox} from '../../components/ChallengeBox';
import {render} from '../test-utils';

describe("Challenge Box component tests", () =>
{
    it("should be able to render a Challenge box component", () =>
    {   
        const {getByTestId} = render(<ChallengeBox />);

        const countdown = getByTestId('challengebox');

        expect(countdown).toBeTruthy();
    });
})
