import type { NavItem, SidebarNavItem } from "@/types/navigation";
import { generateComponentsNav, generateGetStartedNav } from "@/utils/navigation";

export const mainNavItems: NavItem[] = [
	{
		title: "Docs",
		href: "/docs",
	},
	{
		title: "Components",
		href: "/docs/components",
	},
	{
		title: "Blocks",
		href: "/blocks",
	},
	{
		title: "Charts",
		href: "/charts/area",
	},
	{
		title: "Themes",
		href: "/themes",
	},
	{
		title: "Colors",
		href: "/colors",
	},
];

const getStartedNav = generateGetStartedNav();
// const migrationNav = generateMigrationNav();
const componentsNav = generateComponentsNav();
// const installationNav = generateInstallationNav();
// const darkModeNav = generateDarkModeNav();
// const registryNav = generateRegistryNav();

export const sidebarNavItems: SidebarNavItem[] = [
  {
		title: "Get Started",
		items: getStartedNav,
	},
	// {
	// 	title: "Migration",
	// 	items: migrationNav.filter((item) => item.title !== "Migration"),
	// },
	{
		title: "Components",
		items: componentsNav.filter((item) => item.title !== "Components"),
	},
	// {
	// 	title: "Installation",
	// 	items: installationNav.filter((item) => item.title !== "Installation"),
	// },
	// {
	// 	title: "Dark Mode",
	// 	items: darkModeNav,
	// },
	// {
	// 	title: "Registry",
	// 	items: registryNav,
	// },
];