import {Profile} from '../../components/Profile';
import {render} from '../test-utils';
import {waitFor} from '../test-utils';

describe("Profile component tests", () =>
{
    it("should be able to render a profile component", async () =>
    {   
        const {getByTestId} = render(<Profile />);

        const profile = getByTestId('profile');

        await waitFor(() =>
            expect(profile).toBeTruthy()
        );
    });
})
