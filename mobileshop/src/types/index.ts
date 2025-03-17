export interface AttributesProps{
    Display?: string,
    Refresh_Rate?: string,
    Network_5G?: string,
    Storage?: string,
    Chipset?: string,
    RAM?: string,
    Battery?: string
}
export interface ReviewsProps{
    UserID: number,
    Review: string
}
export interface ProductsProps{
    ID: number,
    Name?: string,
    Description?: string,
    Price?: number,
    Currency?: string,
    Category?: string,
    Brand?: string,
    SKU?: string,
    Stock?: string,
    Images?: string[],
    Attributes?: AttributesProps,
    Rating?: number,
    Reviews?: ReviewsProps[]
}

export interface FilterProps {
    brand: string[]
}
