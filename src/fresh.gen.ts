// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx"
import * as $_app from "./routes/_app.tsx"
import * as $_layout from "./routes/_layout.tsx"
import * as $api_constants from "./routes/api/constants.ts"
import * as $faq_index from "./routes/faq/index.tsx"
import * as $feedback_index from "./routes/feedback/index.tsx"
import * as $index from "./routes/index.tsx"
import * as $profile_index from "./routes/profile/index.tsx"
import * as $start_layout from "./routes/start/_layout.tsx"
import * as $start_index from "./routes/start/index.tsx"
import * as $alert_alert from "./islands/alert/alert.tsx"
import * as $faq_faq from "./islands/faq/faq.tsx"
import * as $hooks_use_image_preload_hook from "./islands/hooks/use-image-preload.hook.ts"
import * as $hooks_use_script_hook from "./islands/hooks/use-script.hook.ts"
import * as $page_container_page_container from "./islands/page_container/page.container.tsx"
import * as $store_store_provider from "./islands/store/store.provider.tsx"
import * as $test_island_island from "./islands/test_island/island.tsx"
import { type Manifest } from "$fresh/server.ts"

const manifest = {
	routes: {
		"./routes/_404.tsx": $_404,
		"./routes/_app.tsx": $_app,
		"./routes/_layout.tsx": $_layout,
		"./routes/api/constants.ts": $api_constants,
		"./routes/faq/index.tsx": $faq_index,
		"./routes/feedback/index.tsx": $feedback_index,
		"./routes/index.tsx": $index,
		"./routes/profile/index.tsx": $profile_index,
		"./routes/start/_layout.tsx": $start_layout,
		"./routes/start/index.tsx": $start_index,
	},
	islands: {
		"./islands/alert/alert.tsx": $alert_alert,
		"./islands/faq/faq.tsx": $faq_faq,
		"./islands/hooks/use-image-preload.hook.ts": $hooks_use_image_preload_hook,
		"./islands/hooks/use-script.hook.ts": $hooks_use_script_hook,
		"./islands/page_container/page.container.tsx": $page_container_page_container,
		"./islands/store/store.provider.tsx": $store_store_provider,
		"./islands/test_island/island.tsx": $test_island_island,
	},
	baseUrl: import.meta.url,
} satisfies Manifest

export default manifest
