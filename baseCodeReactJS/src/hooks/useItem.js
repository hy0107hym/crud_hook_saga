import { useDispatch, useSelector } from "react-redux"
import { ItemAction } from "../actions/ItemActions"

export const UseItem = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.items.listItem)
    const totalPage = useSelector((state) => state.items.totalPage)
    const activePage = useSelector((state) => state.items.activePage)
    const nameSearch = useSelector((state) => state.items.textSearch)
    const handleGetItem = () => dispatch(ItemAction.getRequest())
    const handleAddItem = (data) => dispatch(ItemAction.addRequest(data))
    const handleDeleteItem = (data) => dispatch(ItemAction.deleteRequest(data))
    const handleUpdateItem = (data) => dispatch(ItemAction.updateRequest(data))
    const handlePaginateItem = (data) => dispatch(ItemAction.paginateRequest(data))
    const handleSearchItem = (data) => dispatch(ItemAction.searchRequest(data))
    return {
        items,
        totalPage,
        activePage,
        nameSearch,
        handleGetItem, 
        handleAddItem,
        handleDeleteItem,
        handleUpdateItem,
        handlePaginateItem,
        handleSearchItem
    } 
}