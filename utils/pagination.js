
export const arrayPagination = (array, page_size, page_number) => array.slice((page_number - 1) * page_size, page_number * page_size)
