export interface VacacionModel {
    id?: string;
    tipo: string;
    fecha: string;
    desde: string;
    hasta: string;
    destino: string;
    motivo: string;
    estado: number;
    id_funcionario: string;
    updated_at?: string;
    created_at?: string;
}