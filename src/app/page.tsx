import SearchForm from "@/components/SearchForm";
import TableCoins from "@/components/TableCoins";

function HomePage() {
  return (
    <main className="px-5 sm:px-0 container mx-auto">
      <SearchForm />
      <TableCoins />
    </main>
  );
}

export default HomePage;
