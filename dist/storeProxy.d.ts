import { Middleware, Store } from "redux";
import { storeHistory } from "./store";
import { ActionsMap } from "./types";
declare const sagasMap: ActionsMap;
declare const reducersMap: ActionsMap;
declare const sagaNames: string[];
export declare function buildStore(storeMiddlewares: Middleware[], storeEnhancers: Function[], injectedModules: {
    type: string;
}[]): Store<any>;
export declare function getStore(): Store<any> | undefined;
export { storeHistory, sagasMap, reducersMap, sagaNames };
