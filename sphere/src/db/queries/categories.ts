import type { Categories } from "@prisma/client";
import { db } from "@/db";
import { cache } from "react";

export const fetchCategories = cache((id: number) => {
    return db.categories.findMany({
        where: { id: id },
    });
});
