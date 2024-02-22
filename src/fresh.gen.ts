// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $api_constants from "./routes/api/constants.ts";
import * as $index from "./routes/index.tsx";
import * as $profile_index from "./routes/profile/index.tsx";
import * as $start_layout from "./routes/start/_layout.tsx";
import * as $start_index from "./routes/start/index.tsx";
import * as $island from "./islands/island.tsx";
import * as $page_container from "./islands/page.container.tsx";
import * as $store_provider from "./islands/store.provider.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/api/constants.ts": $api_constants,
    "./routes/index.tsx": $index,
    "./routes/profile/index.tsx": $profile_index,
    "./routes/start/_layout.tsx": $start_layout,
    "./routes/start/index.tsx": $start_index,
  },
  islands: {
    "./islands/island.tsx": $island,
    "./islands/page.container.tsx": $page_container,
    "./islands/store.provider.tsx": $store_provider,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;