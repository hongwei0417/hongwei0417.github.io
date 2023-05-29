// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "想養鴨子的工程師",
	tagline: "不是在重構，就是在重構的路上",
	favicon: "img/dock.gif",

	// Set the production url of your site here
	url: "https://hongwei0417.github.io",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "hongwei0417", // Usually your GitHub org/user name.
	projectName: "hongwei0417.github.io", // Usually your repo name.
	trailingSlash: false,

	onBrokenLinks: "log",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: "/",
					sidebarPath: require.resolve("./sidebars.js"),
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					// 	"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					blogSidebarTitle: "All posts",
					blogSidebarCount: "ALL",
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: "img/duck-dolphin.jpg",
			navbar: {
				title: "想養鴨子的工程師",
				logo: {
					alt: "想養鴨子的工程師",
					src: "img/dock.gif",
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "defaultSidebar",
						position: "left",
						label: "筆記",
					},
					// { to: "/blog", label: "部落格", position: "left" },
					{
						href: "https://github.com/hongwei0417",
						label: "GitHub",
						position: "right",
					},
				],
				// hideOnScroll: true,
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Website",
						items: [
							{
								label: "筆記",
								to: "/",
							},
							// {
							// 	label: "部落格",
							// 	to: "/blog",
							// },
							{
								label: "分類",
								to: "/tags",
							},
						],
					},
					// {
					// 	title: "Community",
					// 	items: [
					// 		{
					// 			label: "Stack Overflow",
					// 			href: "https://stackoverflow.com/questions/tagged/docusaurus",
					// 		},
					// 		{
					// 			label: "Discord",
					// 			href: "https://discordapp.com/invite/docusaurus",
					// 		},
					// 		{
					// 			label: "Twitter",
					// 			href: "https://twitter.com/docusaurus",
					// 		},
					// 	],
					// },
					{
						title: "More",
						items: [
							{
								label: "GitHub",
								href: "https://github.com/hongwei0417",
							},
							{
								label: "LinkedIn",
								href: "https://www.linkedin.com/in/hongwei0417/",
							},
							{
								label: "Facebook",
								href: "https://www.facebook.com/hongwei0417/",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} 想養鴨子的工程師`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			algolia: {
				// The application ID provided by Algolia
				appId: "KT6S6ROYHW",

				// Public API key: it is safe to commit it
				apiKey: "5d80012f6dae0c5349790a6851ac1667",

				indexName: "hongwei0417io",

				// Optional: see doc section below
				contextualSearch: true,

				// Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
				externalUrlRegex: "external\\.com|domain\\.com",

				// Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
				replaceSearchResultPathname: {
					from: "/docs/", // or as RegExp: /\/docs\//
					to: "/",
				},

				// Optional: Algolia search parameters
				searchParameters: {},

				// Optional: path for search page that enabled by default (`false` to disable it)
				searchPagePath: "search",

				//... other Algolia params
			},
		}),
	themes: [
		// ... Your other themes.
		// [
		// 	require.resolve("@easyops-cn/docusaurus-search-local"),
		// 	/** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
		// 	({
		// 		// ... Your options.
		// 		// `hashed` is recommended as long-term-cache of index file is possible.
		// 		hashed: true,
		// 		docsRouteBasePath: "/",
		// 		// For Docs using Chinese, The `language` is recommended to set to:
		// 		// ```
		// 		// language: ["en", "zh"],
		// 		// ```
		// 	}),
		// ],
	],
};

module.exports = config;
