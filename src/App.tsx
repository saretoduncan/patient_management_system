import { useLocation } from "react-router";
import MainRoutes from "./routes/MainRoutes";
import { navigationData } from "./utils/NavigationUtils";
import { ENavDataTitles } from "./types/NavigationTypes";
import TopNavBar from "./components/navigation/TopNavBar";
import SideNavBar from "./components/navigation/SideNavBar";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
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
      <div className="min-h-screen  flex flex-col justify-between relative text-gray-900 font-serif">
        <section>
          <header className="fixed">
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
                  <div className="bg-gray-200  py-2 rounded-b-mb">
                    <SideNavBar />
                  </div>
                </nav>
              </div>
            ) : (
              ""
            )}
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
