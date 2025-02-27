export interface FuncionarioModel {
    id? : string; 
    paterno : string;
    materno : string;
    nombre : string;
    password : string;
    pin : string;
    item : number;
    cedula : string;
    fecha_nacimiento : String;
    genero : string;
    fecha_ingreso : string;
    fecha_baja : string;
    direccion : string;
    celular : string;
    foto : string;
    cargo : string;
    haber_mensual : string;
    hijos: number;
    id_departamento : string;
    id_rol : string;
    estado: number;
    created_at? : string;
    updated_at? : string;
}
