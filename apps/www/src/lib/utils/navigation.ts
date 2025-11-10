import { getAllDocs } from "@/content/loader";
import type { SidebarNavItem } from "@/types/navigation";

const allComponents = getAllDocs().filter((doc) => doc.path.startsWith("components/"));

export function generateGetStartedNav(): SidebarNavItem[] {
	const getStartedNavItems: SidebarNavItem[] = [
		{
			title: "Introduction",
			href: "/docs",
			items: []
		},
		{
			title: "Installation",
			href: "/docs/installation",
			items: []
		},
		{
			title: "Theming",
			href: "/docs/theming",
			items: []
		},
		{
			title: "CLI",
			href: "/docs/cli",
			items: []
		},
		{
			title: "Changelog",
			href: "/docs/changelog",
			items: []
		}
	];

	return getStartedNavItems;
}

export function generateComponentsNav(): SidebarNavItem[] {
	const componentsNavItems: SidebarNavItem[] = [];
	const index = allComponents.find((doc) => doc.title === "Components");

	if (index) {
		componentsNavItems.push({
			title: index.title,
			href: "/docs/components",
			items: []
		});
	}

	for (const doc of allComponents) {
		if (doc.title === "Components") continue;
		componentsNavItems.push({
			title: doc.title,
			href: `/docs/components/${doc.slug}`,
			items: []
		});
	}

	return componentsNavItems;
}

export function getFullNavItems(): Array<SidebarNavItem & { index: number }> {
	return [
		...generateGetStartedNav(),
		...generateComponentsNav(),
	].map((item, index) => ({
		...item,
		index,
	}));
}

const fullNavItems = getFullNavItems();

export function findNeighbors(pathName: string): {
  previous: SidebarNavItem | null;
  next: SidebarNavItem | null;
} {
  const path = pathName.split("?")[0].split("#")[0];
  const index = fullNavItems.findIndex((item) => item.href === path);

	let previous: SidebarNavItem | null = null;
	for (let i = index - 1; i >= 0; i--) {
		if (fullNavItems[i].href !== "/llms.txt") {
			previous = fullNavItems[i];
			break;
		}
	}

	let next: SidebarNavItem | null = null;
	for (let i = index + 1; i < fullNavItems.length; i++) {
		if (fullNavItems[i].href !== "/llms.txt") {
			next = fullNavItems[i];
			break;
		}
	}

	return { previous, next };
}