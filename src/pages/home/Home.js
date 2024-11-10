import Button from "../../components/Button";

const Home = () => {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-6 text-purple-800">Bienvenido a Zully Recetas</h1>
          <p className="mb-8 text-xl text-purple-700">Descubre deliciosas recetas de todo el mundo.</p>
          <Button href="/recetas"/>
      </div>
)
}

export default Home;