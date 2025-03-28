import BotãoChat from "../../components/chat/BotaoChat"
export default function Layout(props: { children: React.ReactNode }) {
	return (
		<div>
			{props.children}
			<BotãoChat />
		</div>
	)
}