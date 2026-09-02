import {createController} from "remix/router"
import { routes } from "../../routes.ts";
import { StoresListPage } from "./list.page.tsx";

const storesController = createController(routes.stores, {
    actions: {
        list(context) {
            return context.render(<StoresListPage />)
        }
    }
})

export default storesController;