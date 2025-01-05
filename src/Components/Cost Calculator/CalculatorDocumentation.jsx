import Navbar from '../Navbar'
import Footer from '../Footer'



const CalculatorDocumentation = ()=>{
    
    return (<>
    <Navbar />
       <div className={"p-3 mx-auto w-11/12 text-fuchsia-950"} >
    <h2 className="text-3xl text-center mb-6">¿Qué es y cómo funciona la calculadora de costos?</h2>
    <section className="space-y-4">
        <p className="text-lg">La calculadora de costos es una herramienta esencial para cotizar impresiones en 3D de manera precisa. 
            Su funcionamiento se basa en la recopilación y análisis de datos proporcionados por el laminador, 
            permitiendo calcular el costo total de la impresión y determinar los porcentajes de ganancia y reinversión.</p>
        <p className="text-lg">Aquí te explicamos cómo funciona en detalle:</p>
    </section>
    <ul className="space-y-3">
        <li className="flex items-start">
            <span className="text-2xl mr-2">●</span>
            <p className="text-lg">Se toman en cuenta la duración de la impresión en horas y el costo energético por hora para calcular el gasto total de electricidad.</p>
        </li>

        <li className="flex items-start">
            <span className="text-2xl mr-2">●</span>
            <p className="text-lg">Utilizando el costo de la bobina por kilo y la cantidad de gramos utilizados, se calcula el gasto de material empleado en la impresión. Esta información se puede obtener fácilmente del laminador una vez que se segmenta.</p>
        </li>

        <li className="flex flex-col items-start gap-3">
            
            <p className="text-lg"><span className="text-2xl mr-2">●</span>Sumando los datos anteriores y cualquier gasto adicional, se obtiene el gasto básico de la pieza </p>
            <div>

                <p className=" text-center text-md bg-fuchsia-950 text-slate-300 rounded-md ">Gasto Básico = Gasto Energético + Gasto de Material + Gastos Extra.</p>
            </div>
            
        </li>

        <li className="flex items-start">
            <span className="text-2xl mr-2">●</span> 
            <p className="text-lg">El gasto básico se duplica para determinar el costo exacto de fabricación de la pieza. Este monto no solo cubre los costos directos de producción y posibles errores, sino que también contempla el desgaste de la maquinaria y deja un margen para el crecimiento del negocio.</p>
        </li>
        <div className="space-y-3">
            <p className="text-lg">A partir del costo de fabricación, se calcula el precio final de la pieza según dos escenarios:</p>
            <ul className="space-y-3">
                <li>
                    <p className="flex items-start"><span className="text-2xl mr-2">1➜</span>Si la impresión no está pintada, el costo se duplica y se divide equitativamente entre las ganancias del fabricante y el fondo de reinversión.</p>
                </li>
                <li>
                    <p className="flex items-start"><span className="text-2xl mr-2">2➜</span>Si la impresión está pintada, el costo se triplica, considerando los materiales adicionales utilizados en el posprocesado. Se asigna un porcentaje del costo total para las ganancias del fabricante y otro para la reinversión en el negocio.</p>
                </li>
            </ul>
        </div>
    </ul>
</div>

<div id='Explicacion' className={ "p-3 mx-auto w-11/12 text-fuchsia-950"} >
    <h2 className="text-3xl  mb-6">¿Cómo se calcula el costo de la luz?</h2>
    
    <section className="space-y-4 text-lg">
        <p>Si bien no todas las impresoras consumen lo mismo, por ende pueden tener  mas gasto energetico o menos, 
        todas las maquinas domesticas osilan un numero que va desde los 250w a los 400w como maximo!
        este numero lo podes encontrar facilmente en las especificacione de tu maquina, tene en cuenta que este 
        numero representa el consumo maximo de tu impresora. por lo que el consumo real puede ser menor en condiciones 
        normales de uso.</p>

        <p>
            Tambien tenemos que conseguir cuanto es el costo de kilowats por hora (KW/H), este se puede localizar en tu factura de luz
            y varia dependiendo el pais y region.
        </p>

        <p>
            Con estos dos datos se puede conseguir cuanto consume de electricidad por hora la impresora por ende, cuanto gasta por hora 
            la impresora funcionando. 
        </p>

        <ul className="flex flex-col gap-3">
            <li>
                <p><span>↦</span>Dividi el consumo eléctrico de la impresora 3D entre 1000 para obtener el consumo en kiloWats/hora (KW/H / 1000 = kWh).</p>
                <p>Por ejemplo, si tu impresora consume 300W, dividirías 300 entre 1000 para obtener 0.3 kWh.</p>
            </li>

            <li>
                <p><span>↦</span> Multiplica el consumo por hora en kWh por el costo de la electricidad por kWh.  </p>
                <p>Por ejemplo, si el costo de la electricidad es de 10 pesos por kiloWat/hora, multiplicarías 0.3 kWh por 10 pesos para obtener 
                    el costo de electricidad por hora.</p>  
            </li>

            <li>
            <p>No importa tu region o moneda, si sabes calcular el gasto de tu maquina 
                    la calculadora de costos te va a servir! 
                </p>
            </li>

        </ul>


    </section>
</div>

<Footer/>

    </>)
}
export default CalculatorDocumentation