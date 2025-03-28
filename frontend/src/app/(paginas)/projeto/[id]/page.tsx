import Cabecalho from "@/components/shared/Cabecalho";

export default async function PaginaProjeto(props: {params: Promise<{id: string}>}){
    const {id} = await props.params
    return <div className="">
        <div>
            <Cabecalho />
            <div>Projeto {id}</div>
        </div>
    </div>
}