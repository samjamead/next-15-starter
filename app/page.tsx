import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashedList, DashedListItem } from "@/components/ui/dashed-list";
import { ArrowRight } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pt-12 pb-20">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <p className="max-w-fit rounded-md border px-2 py-1 font-mono text-sm">
            Next.js{" "}
            <a
              className="text-numbers hover:border-numbers border-b-2 border-transparent font-semibold transition-all duration-300 hover:bg-yellow-500/10"
              href="https://nextjs.org/blog/next-15-4"
              target="_blank"
            >
              15.4.1
            </a>
          </p>
          <p className="max-w-fit rounded-md border px-2 py-1 font-mono text-sm">
            Tailwind{" "}
            <a
              className="text-numbers hover:border-numbers border-b-2 border-transparent font-semibold transition-all duration-300 hover:bg-yellow-500/10"
              href="https://tailwindcss.com/blog/tailwindcss-v4"
              target="_blank"
            >
              4.1.11
            </a>
          </p>
        </div>
        <h2 className="mb-6 text-3xl font-bold tracking-tight">
          Here&apos;s the page header
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
            inspiration from others:{" "}
          </p>
          <DashedList>
            <DashedListItem>
              <a
                href="https://shadcn.com/"
                target="_blank"
                className="underline"
              >
                shadcn
              </a>
            </DashedListItem>
            <DashedListItem>
              <a
                href="https://emilkowal.ski/"
                target="_blank"
                className="underline"
              >
                Emil Kowalski
              </a>
            </DashedListItem>
            <DashedListItem>The Anysphere dark Cursor theme</DashedListItem>
            <DashedListItem>MacOS</DashedListItem>
            <DashedListItem>Supabase Studio UI</DashedListItem>
          </DashedList>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-6">
        <h3 className="text-xl font-semibold">Colours</h3>
        <p className="max-w-prose leading-7">
          Out of the box, ShadCN sets up a bunch of colour variables to use in
          the default components. They need a little tweaking so they
          aren&apos;t black and white (literally).
        </p>
      </div>
      <Card className="border-black">
        <CardHeader>
          <CardTitle>Dark on dark on dark</CardTitle>
        </CardHeader>
        <CardContent className="max-w-prose">
          <p className="mb-4 leading-7">
            Sometimes you need three levels of dark. I like the Supabase studio{" "}
            <span className="bg-numbers/10 text-numbers rounded px-1 py-0.5 font-mono whitespace-nowrap">
              9%, 12%, 15%{" "}
            </span>{" "}
            tiering, but a small swatch of{" "}
            <span className="text-numbers font-mono whitespace-nowrap">
              15%
            </span>{" "}
            can get lost on a big{" "}
            <span className="text-numbers font-mono whitespace-nowrap">
              12%
            </span>
            , so we lightened it a bit here.
          </p>

          <div className="flex items-center gap-5">
            <div className="bg-contrast rounded p-3 shadow-sm">
              <ArrowRight className="text-foreground h-6 w-6" />
            </div>
            <p className="pt-1">
              The little icon backgrounds can&apos;t always be colours, so
              you&apos;ll need a contrast to work on cards. This contrast is{" "}
              <span className="text-numbers font-mono whitespace-nowrap">
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
            <PopoverTrigger className="border-primary bg-primary/20 mx-0.5 border-b px-0.5">
              footnotes as popovers
            </PopoverTrigger>
            <PopoverContent>
              You gotta pay the cheese tax if you wanna come in...
            </PopoverContent>
          </Popover>
          , rather than just a boring old list at the end.
        </p>
      </div>
      <p className="max-w-prose leading-7">
        ShadCN has a few other colour tricks up its sleeve, too:{" "}
        <span className="bg-muted text-muted-foreground rounded px-2 py-1">
          muted
        </span>{" "}
        and{" "}
        <span className="bg-accent text-accent-foreground rounded px-2 py-1">
          accent
        </span>
        .
      </p>
      <p className="max-w-prose leading-7">
        <span className="bg-accent text-accent-foreground rounded px-2 py-1">
          Accent
        </span>{" "}
        acts as a background colour for interactive elements, like buttons, or
        as a hover colour for things like dropdown lists.
      </p>
      <div className="bg-card flex h-48 items-center justify-center rounded-md border border-black p-8">
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded border px-4 py-2">
            Here, a dropdown
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Purple shadows dance</DropdownMenuItem>
            <DropdownMenuItem>Through twilight mist they flow</DropdownMenuItem>
            <DropdownMenuItem>Deep violet dreams</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <p className="max-w-prose leading-7">
        <span className="bg-muted text-muted-foreground rounded px-2 py-1">
          Muted
        </span>{" "}
        is there to fade into the background, for example, behind the tabs in a
        tab list.
      </p>
      <div className="flex items-center justify-center rounded-md border p-8">
        <Tabs
          defaultValue="tab1"
          className="bg-muted w-full max-w-lg rounded-md"
        >
          <TabsList className="w-full justify-stretch rounded-t-md rounded-b-none border-b-2 border-b-black pb-1">
            <TabsTrigger value="tab1" className="w-full">
              Tab 1
            </TabsTrigger>
            <TabsTrigger value="tab2" className="w-full">
              Tab 2
            </TabsTrigger>
            <TabsTrigger value="tab3" className="w-full">
              Tab 3
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="rounded-md p-4">
            But poor Stickeen, the wee, hairy, sleekit beastie, think of him!
            When I had decided to dare the bridge, and while I was on my knees
            chipping a hollow on the rounded brow above it, he came behind me,
            pushed his head past my shoulder, looked down and across, scanned
            the sliver and its approaches with his mysterious eyes, then looked
            me in the face with a startled air of surprise and concern, and
            began to mutter and whine; saying as plainly as if speaking with
            words, &quot;Surely, you are not going into that awful place.&quot;
          </TabsContent>
          <TabsContent value="tab2" className="rounded-md p-4">
            This was the first time I had seen him gaze deliberately into a
            crevasse, or into my face with an eager, speaking, troubled look.
            That he should have recognized and appreciated the danger at the
            first glance showed wonderful sagacity. Never before had the daring
            midget seemed to know that ice was slippery or that there was any
            such thing as danger anywhere. His looks and tones of voice when he
            began to complain and speak his fears were so human that I
            unconsciously talked to him in sympathy as I would to a frightened
            boy, and in trying to calm his fears perhaps in some measure
            moderated my own.
          </TabsContent>
          <TabsContent value="tab3" className="rounded-md p-4">
            &quot;Hush your fears, my boy,&quot; I said, &quot;we will get
            across safe, though it is not going to be easy. No right way is easy
            in this rough world. We must risk our lives to save them. At the
            worst we can only slip, and then how grand a grave we will have, and
            by and by our nice bones will do good in the terminal moraine.&quot;
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
