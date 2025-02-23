import { cn } from "@/lib/utils";

export default function Container({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div className={cn(className, "h-full max-w-[1120px] px-[20px] mx-auto")}>
			{children}
		</div>
	);
}
