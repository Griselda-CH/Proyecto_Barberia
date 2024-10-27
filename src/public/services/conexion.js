//pg el que nos permite hacer la conexion de BD
///configuracion de la conexion de BD para ser utilizada
import pg from 'pg' ;
const {Client}= pg;

const config={
    user: 'barbergrisziel_db_user',
    host: 'dpg-cs9pnujqf0us739kkp3g-a.oregon-postgres.render.com',
    database: 'barbergrisziel_db',
    password: 'U6kFI8wABFFwYREaWXTZwREZXIP2Znu2',
    port: 5432,
    ssl:{
        rejectUnauthorized: false
    }
}
 export async function Conectar(params) {
    const cliente= new Client(config)
    try{
        await cliente.connect()
        console.log("Conectado a la base de datos")
    }catch(error){
        console.log(error)
    }
}