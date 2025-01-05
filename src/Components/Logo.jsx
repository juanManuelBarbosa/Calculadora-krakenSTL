const Logo = () => {
    return (
      <div className="flex items-center pt-7">
        {/* Aseguramos un tamaño completamente fijo para la imagen */}
        <img 
          src="https://krakenstl.wordpress.com/wp-content/uploads/2024/06/krakenstl-logo.png?resize=219%2C219" 
          alt="LOGO" 
          style={{ width: "100px", height: "100px", marginTop: "-26px"}} // Tamaño fijo para la imagen
        />
      </div>
    );
  };
  
  export default Logo;
  