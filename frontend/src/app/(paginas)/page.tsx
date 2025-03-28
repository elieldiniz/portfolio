import Curriculo from "@/components/curriculo";
import Principal from "@/components/landing/Principal";
import { obterTecnologias } from "@/function/tecnologias";

export default async function Home() {

  const tecnologia = await obterTecnologias()
  return (
      <div> 
        <Principal/>
        <Curriculo tecnologias={tecnologia.todas}/>
      </div>
  );
}
