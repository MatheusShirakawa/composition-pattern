import { Rocket, X, Check } from "lucide-react"

import { Notification } from './Notification'

export function Widget() {
	return (
		<div className="container gap-4 flex flex-col">
			<Notification.Root>
				<Notification.Icon icon={Rocket} />
				<Notification.Content text="Você recebeu um convite para participar de um grupo" />
				<Notification.Actions>
					<Notification.Action icon={X}/>
					<Notification.Action icon={Check}/>
				</Notification.Actions>
			</Notification.Root>

			<Notification.Root>
				{/* <Notification.Icon icon={Rocket} /> */}
				<Notification.Content text="Você recebeu um convite para participar de um grupo" />
				<Notification.Actions>
					<Notification.Action icon={X} className="bg-red-500 hover:bg-red-700"/>
					<Notification.Action icon={Check} className="bg-violet-500 hover:bg-violet-700"/>
				</Notification.Actions>
			</Notification.Root>

			<Notification.Root>
				<Notification.Icon icon={Rocket} />
				<Notification.Content text="Você recebeu um convite para participar de um grupo" />
				<Notification.Actions>
					{/* <Notification.Action icon={X}/> */}
					<Notification.Action icon={Check} className="bg-violet-500 hover:bg-violet-700"/>
				</Notification.Actions>
			</Notification.Root>

			<Notification.Root>
				{/* <Notification.Icon icon={Rocket} /> */}
				<Notification.Content text="Você recebeu um convite para participar de um grupo" />
				<Notification.Actions>
					<Notification.Action icon={X} className="bg-red-500 hover:bg-red-700"/>
					{/* <Notification.Action icon={Check}/> */}
				</Notification.Actions>
			</Notification.Root>

		</div>
		
	);
}