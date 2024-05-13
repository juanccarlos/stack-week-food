import { SearchIcon } from "lucide-react";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";

const Search = () => {
  return (
    <div className="flex gap-4">
      <Input placeholder="Buscar Restaurantes" className="border-none" />
      <Button size="icon">
        <SearchIcon size={20} />
      </Button>
    </div>
  );
};

export default Search;
