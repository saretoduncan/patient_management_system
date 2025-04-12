import { useLocation } from "react-router";
import MainRoutes from "./routes/MainRoutes";
import { navigationData } from "./utils/NavigationUtils";
import { ENavDataTitles } from "./types/NavigationTypes";
import TopNavBar from "./components/navigation/TopNavBar";
import SideNavBar from "./components/navigation/SideNavBar";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import LogoComponent from "./components/navigation/LogoComponent";
function App() {
  const location = useLocation();
  const hideNavRoutes = [
    navigationData.get(ENavDataTitles.LOGIN_PAGE)?.linkName,
  ];
  const isSideNavOpen = useSelector(
    (state: RootState) => state.navigationBarReducer.isOpen
  );
  return (
    <>
      <div className="min-h-screen  flex flex-col justify-between  text-gray-900 font-serif relative ">
        <section>
          <header className="fixed lg:hidden z-100">
            {!hideNavRoutes.includes(location.pathname) ? (
              <div className="relative z-100">
                <nav aria-label="Top Navigation" className="bg-gray-200 shadow">
                  <TopNavBar />
                </nav>
                <nav
                  aria-label="Side navigation"
                  className={`relative top-0 bottom-0 -z-[1]   w-screen  transform ease-in-out duration-300 ${
                    isSideNavOpen ? "translate-y-0" : "-translate-y-[100%]"
                  }  `}
                >
                  <div className="bg-gray-200  py-2 rounded-b-mb lg:hidden">
                    <SideNavBar />
                  </div>
                </nav>
              </div>
            ) : (
              ""
            )}
          </header>

          <main>
            <div className="lg:grid lg:grid-cols-12 relative ">
              <aside className=" hidden lg:block lg:col-span-3 xl:col-span-2 relative  ">
                <div className=" lg:sticky h-screen bg-gray-200 left-0 right-0 top-0 bottom-0 overflow-auto  p-4 space-y-6 ">
                  <section className="px-2">
                    <LogoComponent />
                  </section>
                  <section>
                    <SideNavBar />
                  </section>
                </div>
              </aside>
              <div className="h-[10000px]">
                <MainRoutes />
              </div>
            </div>
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
