import { cn } from "@/lib/utils";
export default async function Footer({
  maxWidth,
  bodyGutter = "px-4",
}: {
  maxWidth: string;
  bodyGutter?: string;
}) {
  const data = await fetch(
    "https://api.github.com/repos/samjamead/next-15-starter",
  );
  const repoData = await data.json();

  console.log(repoData);

  return (
    <footer className={cn("w-full pb-8 pt-20", bodyGutter)}>
      <div className={cn("mx-auto w-full", maxWidth)}>
        <div className="flex items-center justify-between gap-4 text-sm">
          <p>Made with ❤️ in the Channel Islands</p>
        </div>
      </div>
    </footer>
  );
}
