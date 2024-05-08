import { ReactNode } from "react";

interface NotificationRootProps {
	children: ReactNode;
}

export function NotificationRoot({ children }: NotificationRootProps) {
	return (
		<div className="w-[643px] mx-auto bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-center gap-6 rounded-lg">
			{children}
		</div>
	);
}