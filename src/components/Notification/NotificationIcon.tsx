import { ElementType } from "react";

interface NotificationProps{
	icon: ElementType
}

export function NotificationIcon({ icon: Icon }: NotificationProps) {
	return (
		<Icon size={32} className="text-violet-500 mt-3"/>
	);
}