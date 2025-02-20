import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashedList, DashedListItem } from "@/components/ui/dashed-list";
import { Sparkles } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-20 pt-12">
      <div className="flex flex-col gap-3">
        <p className="max-w-fit rounded-md border px-2 py-1 font-mono text-sm">
          Updated to Next.js{" "}
          <a
            className="border-b-2 border-transparent font-semibold text-numbers transition-all duration-300 hover:border-numbers hover:bg-yellow-500/10"
            href="https://nextjs.org/blog/next-15-1"
            target="_blank"
          >
            15.1.7
          </a>
        </p>
        <h2 className="mb-6 text-3xl font-bold tracking-tight">
          Some kind of lead paragraph
        </h2>
      </div>
      <div className="flex flex-col gap-6">
        <p className="max-w-prose leading-7">
          When you start a project it&apos;s nice to think that somebody has
          already laid out some sensible basics. Nothing mad &ndash; maybe the
          default colours; the common UI components; a little thought towards
          the space and time.{" "}
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
            <DashedListItem>Supabase Studio UI</DashedListItem>
          </DashedList>
        </div>
      </div>

      <Card className="border-black">
        <CardHeader>
          <CardTitle>Dark on dark on dark</CardTitle>
        </CardHeader>
        <CardContent className="max-w-prose">
          <p className="mb-4 leading-7">
            Sometimes you need three levels of dark. I like the Supabase studio{" "}
            <span className="whitespace-nowrap rounded bg-numbers/10 px-1 py-0.5 font-mono text-numbers">
              9%, 12%, 15%{" "}
            </span>{" "}
            tiering, but a small swatch of{" "}
            <span className="whitespace-nowrap font-mono text-numbers">
              15%
            </span>{" "}
            can get lost on a big{" "}
            <span className="whitespace-nowrap font-mono text-numbers">
              12%
            </span>
            , so we lightened it a bit here.
          </p>

          <div className="flex items-center gap-5">
            <div className="rounded bg-contrast p-3 shadow">
              <Sparkles className="h-6 w-6 text-foreground" />
            </div>
            <p className="pt-1">
              The little icon backgrounds can&apos;t always be colours, so
              you&apos;ll need a contrast to work on cards. This contrast is{" "}
              <span className="whitespace-nowrap font-mono text-numbers">
                17%
              </span>{" "}
              and it stands out a little better.
            </p>
          </div>
        </CardContent>
      </Card>

      <div>
        <p className="max-w-prose leading-7">
          Other times, you might want to use your primary colour to highlight
          some text as interactive, you know, maybe have your readers enjoy
          <Popover>
            <PopoverTrigger className="mx-0.5 border-b border-primary bg-primary/20 px-0.5">
              footnotes as popovers
            </PopoverTrigger>
            <PopoverContent>
              You gotta pay the cheese tax if you wanna come in...
            </PopoverContent>
          </Popover>
          , rather than just a boring old list at the end.
        </p>
      </div>

      <div>
        <p className="max-w-prose leading-7">
          ShadCN has a few other colour tricks up its sleeve, too:{" "}
          <span className="rounded bg-muted px-2 py-1 text-muted-foreground">
            muted
          </span>{" "}
          and{" "}
          <span className="rounded bg-accent px-2 py-1 text-accent-foreground">
            accent
          </span>
          .
        </p>
      </div>
    </div>
  );
}
