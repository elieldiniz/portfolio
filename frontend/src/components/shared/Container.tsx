

export interface ContainerProps{
    children: React.ReactNode
    className?: string
    
 }

export default function Container(props: ContainerProps){
    return <div className={`max-2-7x1 mx-auto px-4 ${props.className}`}> {props.children}</div>
}