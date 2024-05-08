
interface NotificationActionProps{
	onCancelAction?: () => void
	onSubmitAction?: () => void
}

export function NotificationAction({ onCancelAction, onSubmitAction }:NotificationActionProps) {
	return(
		<div className="flex gap-2 self-center">
			<button onClick={onCancelAction} className="bg-red-500 text-zinc-100 px-4 py-2 rounded-lg">Recusar</button>
			<button onClick={onSubmitAction} className="bg-violet-500 text-zinc-100 px-4 py-2 rounded-lg">Aceitar</button>
		</div>
	)
}