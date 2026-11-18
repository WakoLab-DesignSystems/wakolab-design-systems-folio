// Demo environment, HTTP mode (`npm run example`; later the Docker kit). Original code.
// The example configuration and its files are read from /design/ (examples/config) at each page
// load, with assetBase "/design/" (standard DIRECTIONS §4 at 8e3b818). Selected by the
// "folio-demo-env" alias in examples/vite.config.ts; the offline HTML file uses ./offline.ts.
import type { DesignConfig } from "wakolab-design-systems-folio";
import { EXAMPLE_PATHS, KIT_STANDARD_SHA } from "./shared";

export const KIT = { offline: false, sourceSha: undefined as string | undefined, standardSha: KIT_STANDARD_SHA };
/** The example configuration and the files it names, for download. */
export const EXAMPLE_FILES = ["design-config.json", ...EXAMPLE_PATHS].map((path) => ({ path, url: `/design/${path}` }));
export async function loadExample(): Promise<{ config: DesignConfig; assetBase: string | undefined }> {
  const response = await fetch("/design/design-config.json");
  return { config: await response.json(), assetBase: "/design/" };
}
