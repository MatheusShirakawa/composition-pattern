import { ButtonHTMLAttributes, ElementType } from "react";
import { twMerge } from "tailwind-merge";

interface NotificationActionProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	icon:ElementType,
}

export function NotificationAction({ icon: Icon, ...rest}:NotificationActionProps) {
	return(
		<button {...rest} className={twMerge("bg-zinc-500 text-zinc-100 px-4 py-2 rounded-lg duration-300 ease-in-out", rest.className)}>
			<Icon className="w-6 h-6 text-zinc-50"/>
		</button>
	)
}