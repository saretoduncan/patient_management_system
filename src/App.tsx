import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <div className="min-h-screen  flex flex-col justify-between relative text-gray-900 font-serif">
        <section>
          <header>
            <nav></nav>
          </header>

          <main>
            <MainRoutes />
          </main>
        </section>
        <section>
          <footer></footer>
        </section>
      </div>
    </>
  );
}

export default App;
