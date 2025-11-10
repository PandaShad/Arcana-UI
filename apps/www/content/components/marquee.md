---
title: Marquee
description: An infinite scrolling component that can be used to display text, images, or videos.Displays a scrolling text or component.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/button
---

<script>
	import ComponentPreview from "$lib/components/component-preview.svelte";
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
	import PMInstall from "$lib/components/pm-install.svelte";
	import Steps from "$lib/components/steps.svelte";
	import InstallTabs from "$lib/components/install-tabs.svelte";
	import Step from "$lib/components/step.svelte";
</script>

<ComponentPreview name="marquee-demo" />

## Installation

<InstallTabs>
{#snippet cli()}
<PMAddComp name="marquee" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

Copy and paste the component source files linked at the top of this page into your project.

</Step>

</Steps>
{/snippet}
</InstallTabs>

## Usage

```svelte showLineNumbers
<script lang="ts">
  import { Marquee } from "$lib/components/ui/marquee/index.js";
</script>
 
<Marquee>
  <span>SvelteKit</span>
  <span>Svelte</span>
  <span>TypeScript</span>
  <span>Tailwind CSS</span>
</Marquee>
```

## Examples

### Vertical

<ComponentPreview name="marquee-vertical" />

### 3D

<ComponentPreview name="marquee-3d" />

## Props

| Prop           | Type      | Default | Description                                                                  |
| -------------- | --------- | ------- | ---------------------------------------------------------------------------- |
| `reverse`      | `boolean` | `false` | Whether or not to reverse the direction of the marquee.                      |
| `pauseOnHover` | `boolean` | `false` | Whether or not to pause the marquee when the user hovers over the component. |
| `vertical`     | `boolean` | `false` | Whether or not to display the marquee vertically.                            |
| `repeat`       | `number`  | `4`     | The number of times to repeat the content.                                   |
| `children`     | `Component`    | `-`     | The content to display in the marquee.                                       |

