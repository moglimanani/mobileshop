import { createContext } from "react";
import { FilterProps } from "../types";

const FilterContext = createContext({filter: {brand: ['']}, setFilter: (_val: FilterProps) => { } })

export default FilterContext