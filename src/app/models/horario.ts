export interface HorarioModel {
    id? : string;
    descripcion : string;
    resolucion: string;
    fecha_inicio : string;
    fecha_final : string;
    lunes_entrada_uno : string;
    lunes_salida_uno : string;
    lunes_entrada_dos : string;
    lunes_salida_dos : string;
    martes_entrada_uno : string;
    martes_salida_uno : string;
    martes_entrada_dos : string;
    martes_salida_dos : string;
    miercoles_entrada_uno : string;
    miercoles_salida_uno : string;
    miercoles_entrada_dos : string;
    miercoles_salida_dos : string;
    jueves_entrada_uno : string;
    jueves_salida_uno : string;
    jueves_entrada_dos : string;
    jueves_salida_dos : string;
    viernes_entrada_uno : string;
    viernes_salida_uno : string;
    viernes_entrada_dos : string;
    viernes_salida_dos : string;
    sabado_entrada_uno : string; 
    sabado_salida_uno : string;
    sabado_entrada_dos : string;
    sabado_salida_dos : string;
    lunes_estado : number;
    martes_estado : number;
    miercoles_estado : number;
    jueves_estado : number;
    viernes_estado : number;
    sabado_estado : number;
    estado : number;
    updated_at? : string;
    created_at? : string;
}
