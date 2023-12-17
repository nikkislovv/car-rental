export const getPageCount = (totalCount, pageSize) => {
    return Math.ceil(totalCount / pageSize)
}