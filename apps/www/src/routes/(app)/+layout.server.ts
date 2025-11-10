import { USER_CONFIG_COOKIE_NAME, userConfigSchema } from "@/user-config.svelte";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ cookies }) => {
  const userConfigCookie = cookies.get(USER_CONFIG_COOKIE_NAME);
  const parsedUserConfig = userConfigCookie ? JSON.parse(userConfigCookie) : {};
	const userConfig = userConfigSchema.parse(parsedUserConfig);

  return { userConfig}
}