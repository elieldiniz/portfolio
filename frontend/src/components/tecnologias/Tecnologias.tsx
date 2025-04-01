import { Tecnologia } from "../../core/index"
import Image from "next/image"

export interface TecnologiasProps {
	lista: Tecnologia[]
	tamanhoMenor?: boolean
}

export default function Tecnologias(props: TecnologiasProps) {
	return props.lista ? (
		<div className="flex justify-center gap-4 flex-wrap w-4/5">
			{props.lista.map((tecnologia) => (
				<div key={tecnologia.id} className="flex flex-col items-center gap-1">
					<span
						className={`
							relative h-9 w-9 rounded-xl overflow-hidden
							${!props.tamanhoMenor && "sm:h-12 sm:w-12"}
						`}
					>
						<Image
							src={tecnologia.imagem}
							alt={tecnologia.nome}
							fill
							className="object-contain"
						/>
					</span>
					<span className="text-[10px] text-zinc-400">{tecnologia.nome}</span>
				</div>
			))}
		</div>
	) : null
}
