import { categoryTable } from "@/db/schema";

import { Button } from "../ui/button";

interface CategorySelectorProps {
    categories: (typeof categoryTable.$inferSelect)[];
}

const CategorySelector = ({ categories }: CategorySelectorProps) => {
    return ( 
    <div className="rounded-3xl p-6 bg-[#f4efff]">
        <div className="grid grid-cols-2 gap-3">
            {categories.map(category => (
                <Button key={category.id} variant="ghost" className="bg-white rounded-full font-semibold">
                    <p className="text-sm font-medium">{category.name}</p>
                </Button>
            ))}
        </div>
    </div>
     )
}

export default CategorySelector;