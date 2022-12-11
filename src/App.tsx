import { AuthProvider } from "./contexts/AuthContext";
import { RoutesMain } from "./routes";

export const App = () => {
  return (
    <AuthProvider>
      <RoutesMain />
    </AuthProvider>
  );
};
