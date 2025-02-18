import { cn } from "@/lib/utils";
import { format } from "date-fns";
export default async function Footer({
  maxWidth,
  bodyGutter = "px-4",
}: {
  maxWidth: string;
  bodyGutter?: string;
}) {
  const data = await fetch(
    "https://api.github.com/repos/samjamead/next-15-starter/commits/main",
  );
  const repoData = await data.json();

  return (
    <footer className={cn("w-full border-t py-16", bodyGutter)}>
      <div className={cn("mx-auto w-full", maxWidth)}>
        <div className="flex flex-col gap-4 text-sm">
          <p>Made with ❤️ in the Channel Islands</p>
          <p>
            Last updated by commit{" "}
            <a
              href={`https://github.com/samjamead/next-15-starter/commits/main/`}
              target="_blank"
              className="text-numbers hover:border-numbers rounded-t border-b-2 border-transparent bg-yellow-500/10 px-1 py-0.5 font-semibold transition-all duration-300"
            >
              {repoData.sha.slice(0, 7)}
            </a>{" "}
            on{" "}
            {format(new Date(repoData.commit.author.date), "EEEE d MMMM, yyyy")}
          </p>
        </div>
      </div>
    </footer>
  );
}
