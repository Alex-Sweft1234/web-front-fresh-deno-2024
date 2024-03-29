import { PageProps } from "$fresh/server.ts"
import { metaData } from "../layers/shared/config/mod.ts"
import { StoreProvider } from "../islands/store/store.provider.tsx"

export default function App({ Component }: PageProps) {
	return (
		<html lang="ru">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<meta name="description" content={`${metaData.description}`} />
				<meta property="og:title" content={`${metaData.titleShare}`} />
				<meta name="mrc__share_title" content={`${metaData.titleShare}`} />
				<meta property="og:description" content={`${metaData.descriptionShare}`} />
				<meta name="mrc__share_description" content={`${metaData.descriptionShare}`} />
				<meta name="theme-color" content={`${metaData.colorTheme}`} />

				<meta property="og:image" content="/img/meta.png" />

				<link rel="stylesheet" href="/styles/index.css" />
				<link rel="stylesheet" href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

				<title>{metaData.title}</title>
			</head>
			<body className="bg-secondary">
				<StoreProvider>
					<Component />
				</StoreProvider>
				<script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
			</body>
		</html>
	)
}
