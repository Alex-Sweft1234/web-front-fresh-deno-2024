import Island from "../../../islands/test_island/island.tsx"
import { TGlobalState } from "../../types/mod.ts"
import { Container } from "../../shared/ui/mod.ts"

interface IProfilePage {
	state: TGlobalState
}

export function ProfilePage({ state }: IProfilePage) {
	return (
		<Container>
			<Island path="profile" constants={state.constants} />
		</Container>
	)
}
