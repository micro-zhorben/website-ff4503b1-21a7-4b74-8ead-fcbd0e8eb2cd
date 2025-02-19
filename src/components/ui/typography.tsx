import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";

function H1({ className, ...props }: ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-3xl font-extrabold leading-tight tracking-tight text-foreground lg:text-4xl",
        className
      )}
      {...props}
    />
  );
}

function H2({ className, ...props }: ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 text-2xl font-semibold leading-tight tracking-tight text-foreground first:mt-0",
        className
      )}
      {...props}
    />
  );
}

function H3({ className, ...props }: ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-xl font-semibold leading-tight tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  );
}

function H4({ className, ...props }: ComponentProps<"h4">) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-lg font-semibold leading-tight tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  );
}

function P({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-base leading-tight text-foreground [&:not(:first-child)]:mt-5",
        className
      )}
      {...props}
    />
  );
}

function Large({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("text-lg font-semibold text-foreground", className)}
      {...props}
    />
  );
}

function Small({ className, ...props }: ComponentProps<"small">) {
  return (
    <small
      className={cn(
        "text-sm font-medium leading-none text-foreground",
        className
      )}
      {...props}
    />
  );
}

function Muted({ className, ...props }: ComponentProps<"p">) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props} />
  );
}

function Lead({ className, ...props }: ComponentProps<"p">) {
  return (
    <p className={cn("text-xl text-muted-foreground", className)} {...props} />
  );
}

function Blockquote({ className, ...props }: ComponentProps<"blockquote">) {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic text-foreground", className)}
      {...props}
    />
  );
}

function InlineCode({ className, ...props }: ComponentProps<"code">) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground",
        className
      )}
      {...props}
    />
  );
}

function List({ className, ...props }: ComponentProps<"ul">) {
  return (
    <ul
      className={cn(
        "my-5 ml-6 list-disc text-base leading-tight text-foreground [&>li]:mt-2",
        className
      )}
      {...props}
    />
  );
}

export const Typography = {
  H1,
  H2,
  H3,
  H4,
  P,
  Large,
  Small,
  Muted,
  Lead,
  Blockquote,
  InlineCode,
  List,
} as const;
