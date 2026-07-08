import { useEffect, useLayoutEffect } from "react";

/**
 * useLayoutEffect on the client, useEffect on the server — avoids the
 * "useLayoutEffect does nothing on the server" warning while keeping
 * layout-synced animation setup on the client.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
