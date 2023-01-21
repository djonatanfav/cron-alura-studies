import style from './Lista.module.scss'
import Item from './Item';
import ITarefa from '../../Interfaces/tarefa';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export function Lista({ tarefas, selecionaTarefa }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Lista</h2>
            <ul>
                {tarefas.map(item => (
                    <Item 
                    selecionaTarefa={selecionaTarefa}
                    key={item.id} 
                    {...item}
                     />
                ))}
            </ul>
        </aside>
    )
}