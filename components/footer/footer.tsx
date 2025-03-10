import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { repoApiUrl, repoUrl } from "@/lib/repo-config";

export default async function Footer({
  maxWidth,
  bodyGutter = "px-4",
}: {
  maxWidth: string;
  bodyGutter?: string;
}) {
  const data = await fetch(`${repoApiUrl}/commits/main`);
  const repoData = await data.json();

  return (
    <footer className={cn("w-full border-t py-16", bodyGutter)}>
      <div className={cn("mx-auto w-full", maxWidth)}>
        <div className="flex flex-col gap-4 text-sm">
          <p>Made with ❤️ in the Channel Islands</p>
          <p>
            Last updated by{" "}
            <a
              href={`${repoData.author.html_url}`}
              target="_blank"
              className="rounded-t border-b-2 border-transparent bg-yellow-500/10 px-1 py-0.5 font-semibold text-numbers transition-all duration-300 hover:border-numbers"
            >
              @{repoData.author.login}
            </a>{" "}
            via commit{" "}
            <a
              href={`${repoUrl}/commits/main`}
              target="_blank"
              className="rounded-t border-b-2 border-transparent bg-yellow-500/10 px-1 py-0.5 font-semibold text-numbers transition-all duration-300 hover:border-numbers"
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
