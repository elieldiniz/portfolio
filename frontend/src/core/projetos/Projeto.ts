/**
 * Interface representing a project.
 */
export default interface Projeto {
  /**
   * Unique identifier for the project.
   */
  id: number;

  /**
   * Name of the project.
   */
  nome: string;

  /**
   * Brief description of the project.
   */
  descricao: string;

  /**
   * Array of image URLs associated with the project.
   */
  imagens: string[];

  /**
   * Type of the project.
   */
  tipo: Tipo;

  /**
   * Level of the project.
   */
  nivel: Nivel;

  /**
   * URL of the project repository.
   */
  repositorio: string;

  /**
   * Flag indicating whether the project is highlighted.
   */
  destaque: boolean;

  /**
   * Array of technologies used in the project.
   */
  tecnologias: Tecnologia[];
}import Tecnologia from "../tecnologia/Tecnologia";
import { Nivel } from "./Nivel";
import { Tipo } from "./Tipo";

export default interface  Projeto {
    id: number;
    nome: string;
    descricao: string;
    imagens:string[]
    tipo : Tipo
    nivel: Nivel
    repositorio: string
    destaque: boolean
    tecnologias: Tecnologia[]
}