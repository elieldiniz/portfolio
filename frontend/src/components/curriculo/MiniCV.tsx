import Image from "next/image";

export default function MiniCV() {
	return (
		<div className="flex-1 flex flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-center bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
			<div className="relative min-w-72 h-64 mt-[-20px] transition-transform duration-300 hover:scale-105">
				<Image 
					src="/minha-foto.png" 
					alt="Foto de perfil" 
					fill 
					className="object-cover object-top filter grayscale transition-all duration-300 hover:grayscale-0"
				/>
			</div>
			<div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
				<div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
					<span className="
							bg-gradient-to-r from-red-500 via-white to-white
							text-transparent bg-clip-text text-2xl font-bold
						">
						Eliel Diniz
					</span>
					<span>Desenvolvedor de Software</span>
				</div>
				<p className="text-sm text-center md:text-left lg:text-center xl:text-left">
					Olá! Sou Eliel, desenvolvedor web focado em criar aplicações dinâmicas e eficientes que geram valor real para usuários. Trabalho com React.js, Next.js, NestJS, TypeScript e Node.js — construindo desde APIs escaláveis até interfaces intuitivas. No GitHub mantenho +70 projetos públicos, incluindo arquiteturas limpas em NestJS e exemplos práticos de design‑patterns em TypeScript.
				</p>
			</div>
		</div>
	);
}
