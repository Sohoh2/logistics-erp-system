import React from 'react';
import { Route, Switch } from 'react-router-dom';

// 거래처
import ClinetList from "../pages/client/clientListPage"
import ClientRegistration from "../pages/client/clientRegistrationPage"

// 제품
import ProductList from "../pages/product/productListPage"
import ProductRegistration from "../pages/product/productRegistrationPage"

// 재고
import InventoryList from "../pages/inventory/inventoryListPage"
import InventoryRegistration from "../pages/inventory/inventoryRegistrationPage"
import InventoryStocktaking from "../pages/inventory/inventoryStocktakingPage"
import SafetyStockList from "../pages/inventory/safetyStockPage/safetyStockList"
import SafetyStockRegistration from "../pages/inventory/safetyStockPage/safetyStockRegistration"

// 발주
import PoList from "../pages/purchaseOrder/poListPage"
import PoRegistration from "../pages/purchaseOrder/poRegistrationPage"

// 판매
import ShippingList from "../pages/shipping/shippingListPage"
import ShippingRegistration from "../pages/shipping/shippingRegistrationPage"
import AccountsReceivable from "../pages/shipping/AccountsReceivablePage"

// 창고
import WarehouseList from "../pages/warehouse/warehouseListPage"
import WarehouseRegistration from "../pages/warehouse/warehouseRegistrationPage"






const Router = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={ClinetList} />
            {/* 거래처 */}
            <Route exact path='/client/clinetList' component={ClinetList} />
            <Route exact path='/client/clientRegistration' component={ClientRegistration} />

            {/* 제품 */}
            <Route exact path='/product/productList' component={ProductList} />
            <Route exact path='/product/productRegistration' component={ProductRegistration} />

            {/* 재고 */}
            <Route exact path='/inventory/inventoryList' component={InventoryList} />
            <Route exact path='/inventory/inventoryRegistration' component={InventoryRegistration} />
            <Route exact path='/inventory/inventoryStocktaking' component={InventoryStocktaking} />
            <Route exact path='/inventory/safetyStock/safetyStockList' component={SafetyStockList} />
            <Route exact path='/inventory/safetyStock/safetyStockRegistration' component={SafetyStockRegistration} />

            {/* 발주 */}
            <Route exact path='/purchaseOrder/poList' component={PoList} />

            {/* 판매 */}
            <Route exact path='/shipping/shippingList' component={ShippingList} />
            <Route exact path='/shipping/shippingregistration' component={ShippingRegistration} />
            <Route exact path='/shipping/accountsReceivable' component={AccountsReceivable} />

            {/* 창고 */}
            <Route exact path='/warehouse/warehouseList' component={WarehouseList} />
            <Route exact path='/warehouse/warehouseRegistration' component={WarehouseRegistration} />


            <Route component={ClinetList} />
        </Switch>

    )
};

export default Router;