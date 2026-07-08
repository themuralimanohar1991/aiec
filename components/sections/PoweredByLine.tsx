import { FadeUp } from "@/components/motion/FadeUp";

/** Quiet colophon line. */
export function PoweredByLine() {
  return (
    <FadeUp as="div" className="pbline" start="top 92%">
      AI Energy Council &nbsp;|&nbsp; Powered by Kissflow &nbsp;|&nbsp; Founding
      Chapter: Houston
    </FadeUp>
  );
}
