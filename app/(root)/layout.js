import RootFooter from "@/components/root/rootfooter";
import RootNavigation from "@/components/root/rootnavigation";

export default function Layout({ children }) {
  return (
    <>
      <RootNavigation />
      {children}
      <RootFooter />
    </>
  );
}
