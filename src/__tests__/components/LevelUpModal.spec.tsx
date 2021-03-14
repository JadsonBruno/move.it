import {LevelUpModal} from '../../components/LevelUpModal';
import {render} from '../test-utils';

describe("Challenge Box component tests", () =>
{
    it("should be able to render a Challenge box component", () =>
    {   
        const {getByTestId} = render(<LevelUpModal />);

        const countdown = getByTestId('level-up-modal');

        expect(countdown).toBeTruthy();
    });
})
