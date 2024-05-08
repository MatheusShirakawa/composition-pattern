import { Rocket } from "lucide-react"

import { Notification } from './Notification'

export function Widget() {
	return (
		<div className="container gap-4 flex flex-col">
			<Notification.Root>
				<Notification.Icon icon={Rocket} />
				<Notification.Content text="Você recebeu um convite para participar de um grupo" />
				<Notification.Actions />	
			</Notification.Root>

			<Notification.Root>
				{/* <Notification.Icon icon={Rocket} /> */}
				<Notification.Content text="Você recebeu um convite para participar de um grupo" />
				<Notification.Actions />	
			</Notification.Root>

			<Notification.Root>
				<Notification.Icon icon={Rocket} />
				<Notification.Content text="Você recebeu um convite para participar de um grupo" />
				{/* <Notification.Actions />	 */}
			</Notification.Root>

			<Notification.Root>
				{/* <Notification.Icon icon={Rocket} /> */}
				<Notification.Content text="Você recebeu um convite para participar de um grupo" />
				{/* <Notification.Actions />	 */}
			</Notification.Root>

		</div>
		
	);
}