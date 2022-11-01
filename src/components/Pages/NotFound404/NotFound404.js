import { BackgroundImg } from "../../BackgroundImg/BackgroundImg"

export const NotFound404 = () => {
  return (
    <section className="container">
      <BackgroundImg />
      <div>
        <h3>404 not found</h3>
        <p>La ruta ingresada no es válida</p>
        <button>Volver al inicio</button>
      </div>
    </section>
  )
}
