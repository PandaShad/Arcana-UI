import type { Component } from "svelte";

export type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  icon?: Component;
  indicator?: "new";
};

export type SidebarNavItem = NavItem & {
  items?: SidebarNavItem[];
};