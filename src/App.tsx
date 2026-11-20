import { Layout } from "./components/Layout";
import { useHashRoute } from "./hooks/useHashRoute";
import { HomePage } from "./pages/HomePage";
import { ReleasesPage } from "./pages/ReleasesPage";
import { ReleaseDetailPage } from "./pages/ReleaseDetailPage";
export function App() {
  const route = useHashRoute();
  return (
    <Layout>
      {route.startsWith("#/releases/") ? (
        <ReleaseDetailPage version={route.slice("#/releases/".length)} />
      ) : route === "#/releases" ? (
        <ReleasesPage />
      ) : (
        <HomePage />
      )}
    </Layout>
  );
}
