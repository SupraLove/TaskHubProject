interface Props {
  title: string;
}

export function SidebarHeading({ title }: Props) {
  return (
    <div className="mb-3 font-medium text-neutral-400 dark:text-white opacity-60">
      {title}
    </div>
  );
}
