import { DashedList, DashedListItem } from "@/components/ui/dashed-list";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 py-12">
      <div className="flex flex-col gap-3">
        <p className="max-w-fit rounded-md border px-2 py-1 font-mono text-sm">
          Updated to Next.js{" "}
          <a
            className="text-numbers hover:border-numbers border-b-2 border-transparent font-semibold transition-all duration-300 hover:bg-yellow-500/10"
            href="https://nextjs.org/blog/next-15-1"
            target="_blank"
          >
            15.1.7
          </a>
        </p>
        <h2 className="mb-8 text-3xl font-bold tracking-tight">
          Some kind of lead paragraph
        </h2>
      </div>
      <p className="max-w-prose leading-7">
        When you start a project it&apos;s nice to think that somebody has
        already laid out some sensible basics. Nothing mad &ndash; maybe the
        default colours; the common UI components; a little thought towards the
        space and time.{" "}
      </p>
      <p className="max-w-prose leading-7">
        But poor Stickeen, the wee, hairy, sleekit beastie, think of him! When I
        had decided to dare the bridge, and while I was on my knees chipping a
        hollow on the rounded brow above it, he came behind me, pushed his head
        past my shoulder, looked down and across, scanned the sliver and its
        approaches with his mysterious eyes, then looked me in the face with a
        startled air of surprise and concern, and began to mutter and whine;
        saying as plainly as if speaking with words, &quot;Surely, you are not
        going into that awful place.&quot;
      </p>
      <div>
        <p className="mb-2 max-w-prose leading-7">
          Overall, this repo is designed to get you moving faster, by taking
          inspiration from:{" "}
        </p>
        <DashedList>
          <DashedListItem>
            <a href="https://emilkowal.ski/" target="_blank">
              Emil Kowalski
            </a>
          </DashedListItem>
          <DashedListItem>The Anysphere dark Cursor theme</DashedListItem>
          <DashedListItem>MacOS</DashedListItem>
        </DashedList>
      </div>
    </div>
  );
}
