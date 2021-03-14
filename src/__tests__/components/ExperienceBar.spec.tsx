import {ExperienceBar} from '../../components/ExperienceBar';
import {render} from '../test-utils';

describe("Challenge Box component tests", () =>
{
    it("should be able to render a Challenge box component", () =>
    {
        const {getByTestId} = render(<ExperienceBar />);

        const countdown = getByTestId('experience-bar');

        expect(countdown).toBeTruthy();
    });
})
