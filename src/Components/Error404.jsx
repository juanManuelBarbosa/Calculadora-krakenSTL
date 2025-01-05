const Error404 = ()=>{
    return (
        <div className=" w-7/12 mx-auto  border border-black border-2 m-3 shadow rounded-md">
            <h3 className="text-center text-7xl">La pagina que buscas no se encontro!</h3>
            <img 
            src="https://i.pinimg.com/236x/6a/4e/d3/6a4ed346ebbf3f9b81bbeaba0dae6fc2.jpg" alt="Imagen de gatito triste que depuestra que no se encontro la pagina solicitada" 
            className="mx-auto m-3 shadow border border-black border-2 rounded-sm"  />
            <p className="text-center text-3xl m-2">lo siento mucho </p>
        </div>
    )
}

export default Error404