(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-eagle-products-eagle-products-module"],{

/***/ "2sR0":
/*!*****************************************************************!*\
  !*** ./src/app/modules/eagle-products/eagle-products.module.ts ***!
  \*****************************************************************/
/*! exports provided: routes, EagleProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EagleProductsModule", function() { return EagleProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/material.module */ "5dmV");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _eagle_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eagle-products.component */ "G0yX");
/* harmony import */ var _eagle_content_eagle_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./eagle-content/eagle-content.component */ "NM1F");
/* harmony import */ var _eagle_sidebar_eagle_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./eagle-sidebar/eagle-sidebar.component */ "glLh");
/* harmony import */ var _eagle_content_eagle_product_list_eagle_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./eagle-content/eagle-product-list/eagle-product-list.component */ "6fn8");
/* harmony import */ var _eagle_sidebar_eagle_categories_eagle_categories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./eagle-sidebar/eagle-categories/eagle-categories.component */ "yLys");
/* harmony import */ var _eagle_content_eagle_shelf_header_eagle_shelf_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./eagle-content/eagle-shelf-header/eagle-shelf-header.component */ "F4cK");
/* harmony import */ var _shared_product_item_eagle_product_item_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/product-item/eagle-product-item.module */ "YN7n");
















const routes = [
    { path: '', component: _eagle_products_component__WEBPACK_IMPORTED_MODULE_7__["EagleProductsComponent"], pathMatch: 'full' },
    { path: ':name', component: _eagle_products_component__WEBPACK_IMPORTED_MODULE_7__["EagleProductsComponent"] },
    { path: ':id/:name', component: _eagle_products_component__WEBPACK_IMPORTED_MODULE_7__["EagleProductsComponent"] }
];
class EagleProductsModule {
}
EagleProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EagleProductsModule });
EagleProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EagleProductsModule_Factory(t) { return new (t || EagleProductsModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _shared_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
            _shared_product_item_eagle_product_item_module__WEBPACK_IMPORTED_MODULE_13__["EagleProductItemModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EagleProductsModule, { declarations: [_eagle_products_component__WEBPACK_IMPORTED_MODULE_7__["EagleProductsComponent"],
        _eagle_content_eagle_content_component__WEBPACK_IMPORTED_MODULE_8__["EagleContentComponent"],
        _eagle_sidebar_eagle_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["EagleSidebarComponent"],
        _eagle_content_eagle_product_list_eagle_product_list_component__WEBPACK_IMPORTED_MODULE_10__["EagleProductListComponent"],
        _eagle_sidebar_eagle_categories_eagle_categories_component__WEBPACK_IMPORTED_MODULE_11__["EagleCategoriesComponent"],
        _eagle_content_eagle_shelf_header_eagle_shelf_header_component__WEBPACK_IMPORTED_MODULE_12__["EagleShelfHeaderComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _shared_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
        _shared_product_item_eagle_product_item_module__WEBPACK_IMPORTED_MODULE_13__["EagleProductItemModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EagleProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _eagle_products_component__WEBPACK_IMPORTED_MODULE_7__["EagleProductsComponent"],
                    _eagle_content_eagle_content_component__WEBPACK_IMPORTED_MODULE_8__["EagleContentComponent"],
                    _eagle_sidebar_eagle_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["EagleSidebarComponent"],
                    _eagle_content_eagle_product_list_eagle_product_list_component__WEBPACK_IMPORTED_MODULE_10__["EagleProductListComponent"],
                    _eagle_sidebar_eagle_categories_eagle_categories_component__WEBPACK_IMPORTED_MODULE_11__["EagleCategoriesComponent"],
                    _eagle_content_eagle_shelf_header_eagle_shelf_header_component__WEBPACK_IMPORTED_MODULE_12__["EagleShelfHeaderComponent"],
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _shared_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
                    _shared_product_item_eagle_product_item_module__WEBPACK_IMPORTED_MODULE_13__["EagleProductItemModule"],
                ],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "6fn8":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/eagle-products/eagle-content/eagle-product-list/eagle-product-list.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: EagleProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EagleProductListComponent", function() { return EagleProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_product_item_eagle_product_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/product-item/eagle-product-item.component */ "LY8w");
/* harmony import */ var _store_eagle_shopping_cart_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/eagle-shopping-cart.actions */ "jn9S");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function EagleProductListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "eagle-product-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickIconBtn", function EagleProductListComponent_div_1_Template_eagle_product_item_clickIconBtn_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const productItem_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onClickIconBtn($event, productItem_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const productItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productItem", productItem_r1);
} }
class EagleProductListComponent {
    constructor(store, snackBar) {
        this.store = store;
        this.snackBar = snackBar;
        this.productItems = [
            {
                categoryName: 'Sport',
                productName: 'Sivasspor Bag',
                discount: 58,
                oldPrice: 80.5858,
                newPrice: 32.5858,
                imgUrl: 'assets/images/medium/ss_bag.png',
                count: 1
            },
            {
                categoryName: 'Accessory',
                productName: 'Sivasspor Clock',
                discount: 58,
                oldPrice: 80.5858,
                newPrice: 32.5858,
                imgUrl: 'assets/images/medium/ss_clock.jpeg',
                count: 1
            },
            {
                categoryName: 'Accessory',
                productName: 'Sivasspor Cup',
                discount: 58,
                oldPrice: 80.5858,
                newPrice: 32.5858,
                imgUrl: 'assets/images/medium/ss_cup.jpg',
                count: 1
            },
            {
                categoryName: 'Sport',
                productName: 'Sivasspor Bag',
                discount: 58,
                oldPrice: 80.5858,
                newPrice: 32.5858,
                imgUrl: 'assets/images/medium/ss_bag.png',
                count: 1
            },
            {
                categoryName: 'Accessory',
                productName: 'Sivasspor Clock',
                discount: 58,
                oldPrice: 80.5858,
                newPrice: 32.5858,
                imgUrl: 'assets/images/medium/ss_clock.jpeg',
                count: 1
            },
            {
                categoryName: 'Accessory',
                productName: 'Sivasspor Cup',
                discount: 58,
                oldPrice: 80.5858,
                newPrice: 32.5858,
                imgUrl: 'assets/images/medium/ss_cup.jpg',
                count: 1
            },
        ];
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    ngOnInit() {
        this._getCurrentShoppingCart();
    }
    onClickIconBtn(type, productItem) {
        if (type === _shared_product_item_eagle_product_item_component__WEBPACK_IMPORTED_MODULE_1__["ClickIconBtnType"].ADD_TO_BASKET) {
            this.store.dispatch(Object(_store_eagle_shopping_cart_actions__WEBPACK_IMPORTED_MODULE_2__["setShoppingCart"])({ shoppingCart: this._createShoppingCartObj(productItem) }));
            this.snackBar.open('Product added into shopping cart successfully.', 'OK', { duration: 3000 });
        }
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    _getCurrentShoppingCart() {
        const subs = this.store.select('shoppingCart').subscribe(res => {
            if (res === null || res === void 0 ? void 0 : res.shoppingCartObj) {
                this.currentShoppingCart = JSON.parse(JSON.stringify(res.shoppingCartObj));
            }
        });
        this.subscriptions.add(subs);
    }
    _createShoppingCartObj(productItem) {
        if (this.currentShoppingCart) {
            if (this.currentShoppingCart.cartItems) {
                if (this.currentShoppingCart.cartItems.some(item => item.productName === productItem.productName)) {
                    this.currentShoppingCart.cartItems
                        .map(cartItem => cartItem.count = cartItem.productName === productItem.productName ? cartItem.count + 1 : cartItem.count);
                }
                else {
                    this.currentShoppingCart.cartItems.push(productItem);
                }
            }
            else {
                this.currentShoppingCart.cartItems = [productItem];
            }
        }
        else {
            this.currentShoppingCart = { cartItems: [productItem] };
        }
        return this.currentShoppingCart;
    }
}
EagleProductListComponent.ɵfac = function EagleProductListComponent_Factory(t) { return new (t || EagleProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
EagleProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EagleProductListComponent, selectors: [["eagle-product-list"]], decls: 2, vars: 1, consts: [["fxLayout", "row wrap", 1, "products-wrapper"], ["fxFlex", "100", "fxFlex.gt-sm", "25", "fxFlex.sm", "50", "class", "col", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxFlex.gt-sm", "25", "fxFlex.sm", "50", 1, "col"], [3, "productItem", "clickIconBtn"]], template: function EagleProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EagleProductListComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productItems);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _shared_product_item_eagle_product_item_component__WEBPACK_IMPORTED_MODULE_1__["EagleProductItemComponent"]], styles: [".products-wrapper[_ngcontent-%COMP%] {\n  margin: 8px -8px;\n}\n.products-wrapper[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lYWdsZS1wcm9kdWN0cy9lYWdsZS1jb250ZW50L2VhZ2xlLXByb2R1Y3QtbGlzdC9lYWdsZS1wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGO0FBQUU7RUFDRSxZQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2VhZ2xlLXByb2R1Y3RzL2VhZ2xlLWNvbnRlbnQvZWFnbGUtcHJvZHVjdC1saXN0L2VhZ2xlLXByb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0cy13cmFwcGVye1xuICBtYXJnaW46IDhweCAtOHB4O1xuICAuY29se1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EagleProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'eagle-product-list',
                templateUrl: './eagle-product-list.component.html',
                styleUrls: ['./eagle-product-list.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "8yBR":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js ***!
  \**********************************************************************/
/*! exports provided: MatNestedTreeNode, MatTree, MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule, MatTreeNestedDataSource, MatTreeNode, MatTreeNodeDef, MatTreeNodeOutlet, MatTreeNodePadding, MatTreeNodeToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatNestedTreeNode", function() { return MatNestedTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTree", function() { return MatTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeFlatDataSource", function() { return MatTreeFlatDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeFlattener", function() { return MatTreeFlattener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeModule", function() { return MatTreeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNestedDataSource", function() { return MatTreeNestedDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNode", function() { return MatTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodeDef", function() { return MatTreeNodeDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodeOutlet", function() { return MatTreeNodeOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodePadding", function() { return MatTreeNodePadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodeToggle", function() { return MatTreeNodeToggle; });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

const _MatTreeNodeMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"]));
/**
 * Wrapper for the CdkTree node with Material design styles.
 */
class MatTreeNode extends _MatTreeNodeMixinBase {
    constructor(_elementRef, _tree, tabIndex) {
        super(_elementRef, _tree);
        this._elementRef = _elementRef;
        this._tree = _tree;
        this.role = 'treeitem';
        this.tabIndex = Number(tabIndex) || 0;
    }
}
MatTreeNode.ɵfac = function MatTreeNode_Factory(t) { return new (t || MatTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex')); };
MatTreeNode.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatTreeNode, selectors: [["mat-tree-node"]], hostAttrs: [1, "mat-tree-node"], hostVars: 3, hostBindings: function MatTreeNode_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.isExpanded)("aria-level", ctx.level + 1)("role", ctx.role);
    } }, inputs: { disabled: "disabled", tabIndex: "tabIndex", role: "role" }, exportAs: ["matTreeNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"], useExisting: MatTreeNode }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
MatTreeNode.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['tabindex',] }] }
];
MatTreeNode.propDecorators = {
    role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTreeNode, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'mat-tree-node',
                exportAs: 'matTreeNode',
                inputs: ['disabled', 'tabIndex'],
                host: {
                    '[attr.aria-expanded]': 'isExpanded',
                    '[attr.aria-level]': 'level + 1',
                    '[attr.role]': 'role',
                    'class': 'mat-tree-node'
                },
                providers: [{ provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"], useExisting: MatTreeNode }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['tabindex']
            }] }]; }, { role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/**
 * Wrapper for the CdkTree node definition with Material design styles.
 */
class MatTreeNodeDef extends _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeDef"] {
}
MatTreeNodeDef.ɵfac = function MatTreeNodeDef_Factory(t) { return ɵMatTreeNodeDef_BaseFactory(t || MatTreeNodeDef); };
MatTreeNodeDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatTreeNodeDef, selectors: [["", "matTreeNodeDef", ""]], inputs: { when: ["matTreeNodeDefWhen", "when"], data: ["matTreeNode", "data"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeDef"], useExisting: MatTreeNodeDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
MatTreeNodeDef.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matTreeNode',] }]
};
const ɵMatTreeNodeDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTreeNodeDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTreeNodeDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[matTreeNodeDef]',
                inputs: [
                    'when: matTreeNodeDefWhen'
                ],
                providers: [{ provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeDef"], useExisting: MatTreeNodeDef }]
            }]
    }], null, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matTreeNode']
        }] }); })();
/**
 * Wrapper for the CdkTree nested node with Material design styles.
 */
class MatNestedTreeNode extends _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkNestedTreeNode"] {
    constructor(_elementRef, _tree, _differs, tabIndex) {
        super(_elementRef, _tree, _differs);
        this._elementRef = _elementRef;
        this._tree = _tree;
        this._differs = _differs;
        this._disabled = false;
        this.tabIndex = Number(tabIndex) || 0;
    }
    /** Whether the node is disabled. */
    get disabled() { return this._disabled; }
    set disabled(value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); }
    /** Tabindex for the node. */
    get tabIndex() { return this.disabled ? -1 : this._tabIndex; }
    set tabIndex(value) {
        // If the specified tabIndex value is null or undefined, fall back to the default value.
        this._tabIndex = value != null ? value : 0;
    }
    // This is a workaround for https://github.com/angular/angular/issues/23091
    // In aot mode, the lifecycle hooks from parent class are not called.
    // TODO(tinayuangao): Remove when the angular issue #23091 is fixed
    ngAfterContentInit() {
        super.ngAfterContentInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
MatNestedTreeNode.ɵfac = function MatNestedTreeNode_Factory(t) { return new (t || MatNestedTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex')); };
MatNestedTreeNode.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatNestedTreeNode, selectors: [["mat-nested-tree-node"]], hostAttrs: [1, "mat-nested-tree-node"], hostVars: 2, hostBindings: function MatNestedTreeNode_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.isExpanded)("role", ctx.role);
    } }, inputs: { tabIndex: "tabIndex", disabled: "disabled", node: ["matNestedTreeNode", "node"] }, exportAs: ["matNestedTreeNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            { provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkNestedTreeNode"], useExisting: MatNestedTreeNode },
            { provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"], useExisting: MatNestedTreeNode },
            { provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"], useExisting: MatNestedTreeNode }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
MatNestedTreeNode.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['tabindex',] }] }
];
MatNestedTreeNode.propDecorators = {
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matNestedTreeNode',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatNestedTreeNode, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'mat-nested-tree-node',
                exportAs: 'matNestedTreeNode',
                host: {
                    '[attr.aria-expanded]': 'isExpanded',
                    '[attr.role]': 'role',
                    'class': 'mat-nested-tree-node'
                },
                providers: [
                    { provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkNestedTreeNode"], useExisting: MatNestedTreeNode },
                    { provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"], useExisting: MatNestedTreeNode },
                    { provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"], useExisting: MatNestedTreeNode }
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['tabindex']
            }] }]; }, { tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], node: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matNestedTreeNode']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Wrapper for the CdkTree padding with Material design styles.
 */
class MatTreeNodePadding extends _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodePadding"] {
    /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
    get level() { return this._level; }
    set level(value) { this._setLevelInput(value); }
    /** The indent for each level. Default number 40px from material design menu sub-menu spec. */
    get indent() { return this._indent; }
    set indent(indent) { this._setIndentInput(indent); }
}
MatTreeNodePadding.ɵfac = function MatTreeNodePadding_Factory(t) { return ɵMatTreeNodePadding_BaseFactory(t || MatTreeNodePadding); };
MatTreeNodePadding.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatTreeNodePadding, selectors: [["", "matTreeNodePadding", ""]], inputs: { level: ["matTreeNodePadding", "level"], indent: ["matTreeNodePaddingIndent", "indent"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodePadding"], useExisting: MatTreeNodePadding }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
MatTreeNodePadding.propDecorators = {
    level: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matTreeNodePadding',] }],
    indent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matTreeNodePaddingIndent',] }]
};
const ɵMatTreeNodePadding_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTreeNodePadding);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTreeNodePadding, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[matTreeNodePadding]',
                providers: [{ provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodePadding"], useExisting: MatTreeNodePadding }]
            }]
    }], null, { level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matTreeNodePadding']
        }], indent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matTreeNodePaddingIndent']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Outlet for nested CdkNode. Put `[matTreeNodeOutlet]` on a tag to place children dataNodes
 * inside the outlet.
 */
class MatTreeNodeOutlet {
    constructor(viewContainer, _node) {
        this.viewContainer = viewContainer;
        this._node = _node;
    }
}
MatTreeNodeOutlet.ɵfac = function MatTreeNodeOutlet_Factory(t) { return new (t || MatTreeNodeOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"], 8)); };
MatTreeNodeOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatTreeNodeOutlet, selectors: [["", "matTreeNodeOutlet", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
                provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeOutlet"],
                useExisting: MatTreeNodeOutlet
            }])] });
MatTreeNodeOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTreeNodeOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[matTreeNodeOutlet]',
                providers: [{
                        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeOutlet"],
                        useExisting: MatTreeNodeOutlet
                    }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"]]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Wrapper for the CdkTable with Material design styles.
 */
class MatTree extends _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"] {
}
MatTree.ɵfac = function MatTree_Factory(t) { return ɵMatTree_BaseFactory(t || MatTree); };
MatTree.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatTree, selectors: [["mat-tree"]], viewQuery: function MatTree_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](MatTreeNodeOutlet, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._nodeOutlet = _t.first);
    } }, hostAttrs: ["role", "tree", 1, "mat-tree"], exportAs: ["matTree"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"], useExisting: MatTree }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["matTreeNodeOutlet", ""]], template: function MatTree_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 0);
    } }, directives: [MatTreeNodeOutlet], styles: [".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}\n"], encapsulation: 2 });
MatTree.propDecorators = {
    _nodeOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [MatTreeNodeOutlet, { static: true },] }]
};
const ɵMatTree_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTree);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTree, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mat-tree',
                exportAs: 'matTree',
                template: `<ng-container matTreeNodeOutlet></ng-container>`,
                host: {
                    'class': 'mat-tree',
                    'role': 'tree'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                // See note on CdkTree for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
                providers: [{ provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"], useExisting: MatTree }],
                styles: [".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}\n"]
            }]
    }], null, { _nodeOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [MatTreeNodeOutlet, { static: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Wrapper for the CdkTree's toggle with Material design styles.
 */
// tslint:disable-next-line: coercion-types
class MatTreeNodeToggle extends _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeToggle"] {
    get recursive() { return this._recursive; }
    set recursive(value) {
        // TODO: when we remove support for ViewEngine, change this setter to an input
        // alias in the decorator metadata.
        this._recursive = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
    }
}
MatTreeNodeToggle.ɵfac = function MatTreeNodeToggle_Factory(t) { return ɵMatTreeNodeToggle_BaseFactory(t || MatTreeNodeToggle); };
MatTreeNodeToggle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatTreeNodeToggle, selectors: [["", "matTreeNodeToggle", ""]], inputs: { recursive: ["matTreeNodeToggleRecursive", "recursive"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeToggle"], useExisting: MatTreeNodeToggle }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
MatTreeNodeToggle.propDecorators = {
    recursive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matTreeNodeToggleRecursive',] }]
};
const ɵMatTreeNodeToggle_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTreeNodeToggle);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTreeNodeToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[matTreeNodeToggle]',
                providers: [{ provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeToggle"], useExisting: MatTreeNodeToggle }]
            }]
    }], null, { recursive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matTreeNodeToggleRecursive']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAT_TREE_DIRECTIVES = [
    MatNestedTreeNode,
    MatTreeNodeDef,
    MatTreeNodePadding,
    MatTreeNodeToggle,
    MatTree,
    MatTreeNode,
    MatTreeNodeOutlet
];
class MatTreeModule {
}
MatTreeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MatTreeModule });
MatTreeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MatTreeModule_Factory(t) { return new (t || MatTreeModule)(); }, imports: [[_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatTreeModule, { declarations: function () { return [MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet]; }, imports: function () { return [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]; }, exports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTreeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
                exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], MAT_TREE_DIRECTIVES],
                declarations: MAT_TREE_DIRECTIVES
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Tree flattener to convert a normal type of node to node with children & level information.
 * Transform nested nodes of type `T` to flattened nodes of type `F`.
 *
 * For example, the input data of type `T` is nested, and contains its children data:
 *   SomeNode: {
 *     key: 'Fruits',
 *     children: [
 *       NodeOne: {
 *         key: 'Apple',
 *       },
 *       NodeTwo: {
 *        key: 'Pear',
 *      }
 *    ]
 *  }
 *  After flattener flatten the tree, the structure will become
 *  SomeNode: {
 *    key: 'Fruits',
 *    expandable: true,
 *    level: 1
 *  },
 *  NodeOne: {
 *    key: 'Apple',
 *    expandable: false,
 *    level: 2
 *  },
 *  NodeTwo: {
 *   key: 'Pear',
 *   expandable: false,
 *   level: 2
 * }
 * and the output flattened type is `F` with additional information.
 */
class MatTreeFlattener {
    constructor(transformFunction, getLevel, isExpandable, getChildren) {
        this.transformFunction = transformFunction;
        this.getLevel = getLevel;
        this.isExpandable = isExpandable;
        this.getChildren = getChildren;
    }
    _flattenNode(node, level, resultNodes, parentMap) {
        const flatNode = this.transformFunction(node, level);
        resultNodes.push(flatNode);
        if (this.isExpandable(flatNode)) {
            const childrenNodes = this.getChildren(node);
            if (childrenNodes) {
                if (Array.isArray(childrenNodes)) {
                    this._flattenChildren(childrenNodes, level, resultNodes, parentMap);
                }
                else {
                    childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(children => {
                        this._flattenChildren(children, level, resultNodes, parentMap);
                    });
                }
            }
        }
        return resultNodes;
    }
    _flattenChildren(children, level, resultNodes, parentMap) {
        children.forEach((child, index) => {
            let childParentMap = parentMap.slice();
            childParentMap.push(index != children.length - 1);
            this._flattenNode(child, level + 1, resultNodes, childParentMap);
        });
    }
    /**
     * Flatten a list of node type T to flattened version of node F.
     * Please note that type T may be nested, and the length of `structuredData` may be different
     * from that of returned list `F[]`.
     */
    flattenNodes(structuredData) {
        let resultNodes = [];
        structuredData.forEach(node => this._flattenNode(node, 0, resultNodes, []));
        return resultNodes;
    }
    /**
     * Expand flattened node with current expansion status.
     * The returned list may have different length.
     */
    expandFlattenedNodes(nodes, treeControl) {
        let results = [];
        let currentExpand = [];
        currentExpand[0] = true;
        nodes.forEach(node => {
            let expand = true;
            for (let i = 0; i <= this.getLevel(node); i++) {
                expand = expand && currentExpand[i];
            }
            if (expand) {
                results.push(node);
            }
            if (this.isExpandable(node)) {
                currentExpand[this.getLevel(node) + 1] = treeControl.isExpanded(node);
            }
        });
        return results;
    }
}
/**
 * Data source for flat tree.
 * The data source need to handle expansion/collapsion of the tree node and change the data feed
 * to `MatTree`.
 * The nested tree nodes of type `T` are flattened through `MatTreeFlattener`, and converted
 * to type `F` for `MatTree` to consume.
 */
class MatTreeFlatDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["DataSource"] {
    constructor(_treeControl, _treeFlattener, initialData = []) {
        super();
        this._treeControl = _treeControl;
        this._treeFlattener = _treeFlattener;
        this._flattenedData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this._expandedData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this._data = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](initialData);
    }
    get data() { return this._data.value; }
    set data(value) {
        this._data.next(value);
        this._flattenedData.next(this._treeFlattener.flattenNodes(this.data));
        this._treeControl.dataNodes = this._flattenedData.value;
    }
    connect(collectionViewer) {
        const changes = [
            collectionViewer.viewChange,
            this._treeControl.expansionModel.changed,
            this._flattenedData
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(...changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(() => {
            this._expandedData.next(this._treeFlattener.expandFlattenedNodes(this._flattenedData.value, this._treeControl));
            return this._expandedData.value;
        }));
    }
    disconnect() {
        // no op
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Data source for nested tree.
 *
 * The data source for nested tree doesn't have to consider node flattener, or the way to expand
 * or collapse. The expansion/collapsion will be handled by TreeControl and each non-leaf node.
 */
class MatTreeNestedDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["DataSource"] {
    constructor() {
        super(...arguments);
        this._data = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
    }
    /**
     * Data for the nested tree
     */
    get data() { return this._data.value; }
    set data(value) { this._data.next(value); }
    connect(collectionViewer) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(...[collectionViewer.viewChange, this._data])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(() => {
            return this.data;
        }));
    }
    disconnect() {
        // no op
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=tree.js.map

/***/ }),

/***/ "F4cK":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/eagle-products/eagle-content/eagle-shelf-header/eagle-shelf-header.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: EagleShelfHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EagleShelfHeaderComponent", function() { return EagleShelfHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







const _c0 = ["sidenav"];
function EagleShelfHeaderComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EagleShelfHeaderComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onClickSideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EagleShelfHeaderComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EagleShelfHeaderComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const sort_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.changeSorting(sort_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sort_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sort_r12);
} }
function EagleShelfHeaderComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EagleShelfHeaderComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const offset__r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.changeOffsetLimit(offset__r15, null, "offset"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offset__r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offset__r15);
} }
function EagleShelfHeaderComponent_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EagleShelfHeaderComponent_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const count__r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.changeOffsetLimit(null, count__r18, "limit"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const count__r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](count__r18);
} }
class EagleShelfHeaderComponent {
    constructor() {
        this.sidenavClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sidenavOpen = true;
        this.sortings = ['Sort by Default', 'Best match', 'Lowest first', 'Highest first'];
        this.counts = [12, 24, 36];
        this.offsets = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.viewType = 'grid';
        this.viewCol = 25;
    }
    ngOnInit() {
        this.count = this.counts[0];
        this.sort = this.sortings[0];
        this.offset = this.offsets[0];
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
    }
    onWindowResize() {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    }
    changeSorting(sort) {
        this.sort = sort;
    }
    changeOffsetLimit(offset, count, type) {
    }
    changeViewType(viewType, viewCol) {
        this.viewType = viewType;
        this.viewCol = viewCol;
    }
    onClickSideNav() {
        this.sidenavClick.emit();
    }
}
EagleShelfHeaderComponent.ɵfac = function EagleShelfHeaderComponent_Factory(t) { return new (t || EagleShelfHeaderComponent)(); };
EagleShelfHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EagleShelfHeaderComponent, selectors: [["eagle-shelf-header"]], viewQuery: function EagleShelfHeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, hostBindings: function EagleShelfHeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function EagleShelfHeaderComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, outputs: { sidenavClick: "sidenavClick" }, decls: 40, vars: 10, consts: [["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "space-between center", 1, "filter-row", "mat-elevation-z1", "text-muted"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "matMenuTriggerFor"], ["sortMenuTrigger", "matMenuTrigger"], [1, "mat-icon-sm", "caret"], ["xPosition", "before", "overlapTrigger", "true", 1, "app-dropdown"], ["sortMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["offsetMenuTrigger", "matMenuTrigger"], ["offsetMenu", "matMenu"], ["countsMenuTrigger", "matMenuTrigger"], ["countsMenu", "matMenu"], ["mat-icon-button", "", 3, "click"], ["mat-menu-item", "", 3, "click"]], template: function EagleShelfHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EagleShelfHeaderComponent_button_1_Template, 3, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EagleShelfHeaderComponent_button_11_Template, 3, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 2, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-menu", 5, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EagleShelfHeaderComponent_button_21_Template, 3, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 2, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-menu", 5, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, EagleShelfHeaderComponent_button_30_Template, 3, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EagleShelfHeaderComponent_Template_button_click_31_listener() { return ctx.changeViewType("list", 100); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "view_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EagleShelfHeaderComponent_Template_button_click_34_listener() { return ctx.changeViewType("grid", 33.3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "view_module");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EagleShelfHeaderComponent_Template_button_click_37_listener() { return ctx.changeViewType("grid", 25); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "view_comfy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.sidenavOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.sort, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sortings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Offset ", ctx.offset, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.offsets);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Show ", ctx.count, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.counts);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZWFnbGUtcHJvZHVjdHMvZWFnbGUtY29udGVudC9lYWdsZS1zaGVsZi1oZWFkZXIvZWFnbGUtc2hlbGYtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EagleShelfHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'eagle-shelf-header',
                templateUrl: './eagle-shelf-header.component.html',
                styleUrls: ['./eagle-shelf-header.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidenav', { static: true }]
        }], sidenavClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }] }); })();


/***/ }),

/***/ "FvrZ":
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js ***!
  \*****************************************************************/
/*! exports provided: BaseTreeControl, CDK_TREE_NODE_OUTLET_NODE, CdkNestedTreeNode, CdkTree, CdkTreeModule, CdkTreeNode, CdkTreeNodeDef, CdkTreeNodeOutlet, CdkTreeNodeOutletContext, CdkTreeNodePadding, CdkTreeNodeToggle, FlatTreeControl, NestedTreeControl, getTreeControlFunctionsMissingError, getTreeControlMissingError, getTreeMissingMatchingNodeDefError, getTreeMultipleDefaultNodeDefsError, getTreeNoValidDataSourceError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseTreeControl", function() { return BaseTreeControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TREE_NODE_OUTLET_NODE", function() { return CDK_TREE_NODE_OUTLET_NODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkNestedTreeNode", function() { return CdkNestedTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTree", function() { return CdkTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeModule", function() { return CdkTreeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNode", function() { return CdkTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNodeDef", function() { return CdkTreeNodeDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNodeOutlet", function() { return CdkTreeNodeOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNodeOutletContext", function() { return CdkTreeNodeOutletContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNodePadding", function() { return CdkTreeNodePadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNodeToggle", function() { return CdkTreeNodeToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatTreeControl", function() { return FlatTreeControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedTreeControl", function() { return NestedTreeControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeControlFunctionsMissingError", function() { return getTreeControlFunctionsMissingError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeControlMissingError", function() { return getTreeControlMissingError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeMissingMatchingNodeDefError", function() { return getTreeMissingMatchingNodeDefError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeMultipleDefaultNodeDefsError", function() { return getTreeMultipleDefaultNodeDefsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeNoValidDataSourceError", function() { return getTreeNoValidDataSourceError; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Base tree control. It has basic toggle/expand/collapse operations on a single data node. */

class BaseTreeControl {
    constructor() {
        /** A selection model with multi-selection to track expansion status. */
        this.expansionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true);
    }
    /** Toggles one single data node's expanded/collapsed state. */
    toggle(dataNode) {
        this.expansionModel.toggle(this._trackByValue(dataNode));
    }
    /** Expands one single data node. */
    expand(dataNode) {
        this.expansionModel.select(this._trackByValue(dataNode));
    }
    /** Collapses one single data node. */
    collapse(dataNode) {
        this.expansionModel.deselect(this._trackByValue(dataNode));
    }
    /** Whether a given data node is expanded or not. Returns true if the data node is expanded. */
    isExpanded(dataNode) {
        return this.expansionModel.isSelected(this._trackByValue(dataNode));
    }
    /** Toggles a subtree rooted at `node` recursively. */
    toggleDescendants(dataNode) {
        this.expansionModel.isSelected(this._trackByValue(dataNode)) ?
            this.collapseDescendants(dataNode) :
            this.expandDescendants(dataNode);
    }
    /** Collapse all dataNodes in the tree. */
    collapseAll() {
        this.expansionModel.clear();
    }
    /** Expands a subtree rooted at given data node recursively. */
    expandDescendants(dataNode) {
        let toBeProcessed = [dataNode];
        toBeProcessed.push(...this.getDescendants(dataNode));
        this.expansionModel.select(...toBeProcessed.map(value => this._trackByValue(value)));
    }
    /** Collapses a subtree rooted at given data node recursively. */
    collapseDescendants(dataNode) {
        let toBeProcessed = [dataNode];
        toBeProcessed.push(...this.getDescendants(dataNode));
        this.expansionModel.deselect(...toBeProcessed.map(value => this._trackByValue(value)));
    }
    _trackByValue(value) {
        return this.trackBy ? this.trackBy(value) : value;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Flat tree control. Able to expand/collapse a subtree recursively for flattened tree. */
class FlatTreeControl extends BaseTreeControl {
    /** Construct with flat tree data node functions getLevel and isExpandable. */
    constructor(getLevel, isExpandable, options) {
        super();
        this.getLevel = getLevel;
        this.isExpandable = isExpandable;
        this.options = options;
        if (this.options) {
            this.trackBy = this.options.trackBy;
        }
    }
    /**
     * Gets a list of the data node's subtree of descendent data nodes.
     *
     * To make this working, the `dataNodes` of the TreeControl must be flattened tree nodes
     * with correct levels.
     */
    getDescendants(dataNode) {
        const startIndex = this.dataNodes.indexOf(dataNode);
        const results = [];
        // Goes through flattened tree nodes in the `dataNodes` array, and get all descendants.
        // The level of descendants of a tree node must be greater than the level of the given
        // tree node.
        // If we reach a node whose level is equal to the level of the tree node, we hit a sibling.
        // If we reach a node whose level is greater than the level of the tree node, we hit a
        // sibling of an ancestor.
        for (let i = startIndex + 1; i < this.dataNodes.length && this.getLevel(dataNode) < this.getLevel(this.dataNodes[i]); i++) {
            results.push(this.dataNodes[i]);
        }
        return results;
    }
    /**
     * Expands all data nodes in the tree.
     *
     * To make this working, the `dataNodes` variable of the TreeControl must be set to all flattened
     * data nodes of the tree.
     */
    expandAll() {
        this.expansionModel.select(...this.dataNodes.map(node => this._trackByValue(node)));
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Nested tree control. Able to expand/collapse a subtree recursively for NestedNode type. */
class NestedTreeControl extends BaseTreeControl {
    /** Construct with nested tree function getChildren. */
    constructor(getChildren, options) {
        super();
        this.getChildren = getChildren;
        this.options = options;
        if (this.options) {
            this.trackBy = this.options.trackBy;
        }
    }
    /**
     * Expands all dataNodes in the tree.
     *
     * To make this working, the `dataNodes` variable of the TreeControl must be set to all root level
     * data nodes of the tree.
     */
    expandAll() {
        this.expansionModel.clear();
        const allNodes = this.dataNodes.reduce((accumulator, dataNode) => [...accumulator, ...this.getDescendants(dataNode), dataNode], []);
        this.expansionModel.select(...allNodes.map(node => this._trackByValue(node)));
    }
    /** Gets a list of descendant dataNodes of a subtree rooted at given data node recursively. */
    getDescendants(dataNode) {
        const descendants = [];
        this._getDescendants(descendants, dataNode);
        // Remove the node itself
        return descendants.splice(1);
    }
    /** A helper function to get descendants recursively. */
    _getDescendants(descendants, dataNode) {
        descendants.push(dataNode);
        const childrenNodes = this.getChildren(dataNode);
        if (Array.isArray(childrenNodes)) {
            childrenNodes.forEach((child) => this._getDescendants(descendants, child));
        }
        else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(childrenNodes)) {
            // TypeScript as of version 3.5 doesn't seem to treat `Boolean` like a function that
            // returns a `boolean` specifically in the context of `filter`, so we manually clarify that.
            childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(Boolean))
                .subscribe(children => {
                for (const child of children) {
                    this._getDescendants(descendants, child);
                }
            });
        }
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token used to provide a `CdkTreeNode` to its outlet.
 * Used primarily to avoid circular imports.
 * @docs-private
 */
const CDK_TREE_NODE_OUTLET_NODE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_TREE_NODE_OUTLET_NODE');
/**
 * Outlet for nested CdkNode. Put `[cdkTreeNodeOutlet]` on a tag to place children dataNodes
 * inside the outlet.
 */
class CdkTreeNodeOutlet {
    constructor(viewContainer, _node) {
        this.viewContainer = viewContainer;
        this._node = _node;
    }
}
CdkTreeNodeOutlet.ɵfac = function CdkTreeNodeOutlet_Factory(t) { return new (t || CdkTreeNodeOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TREE_NODE_OUTLET_NODE, 8)); };
CdkTreeNodeOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkTreeNodeOutlet, selectors: [["", "cdkTreeNodeOutlet", ""]] });
CdkTreeNodeOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_TREE_NODE_OUTLET_NODE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNodeOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkTreeNodeOutlet]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [CDK_TREE_NODE_OUTLET_NODE]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Context provided to the tree node component. */
class CdkTreeNodeOutletContext {
    constructor(data) {
        this.$implicit = data;
    }
}
/**
 * Data node definition for the CdkTree.
 * Captures the node's template and a when predicate that describes when this node should be used.
 */
class CdkTreeNodeDef {
    /** @docs-private */
    constructor(template) {
        this.template = template;
    }
}
CdkTreeNodeDef.ɵfac = function CdkTreeNodeDef_Factory(t) { return new (t || CdkTreeNodeDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
CdkTreeNodeDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkTreeNodeDef, selectors: [["", "cdkTreeNodeDef", ""]], inputs: { when: ["cdkTreeNodeDefWhen", "when"] } });
CdkTreeNodeDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNodeDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkTreeNodeDef]',
                inputs: [
                    'when: cdkTreeNodeDefWhen'
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Returns an error to be thrown when there is no usable data.
 * @docs-private
 */
function getTreeNoValidDataSourceError() {
    return Error(`A valid data source must be provided.`);
}
/**
 * Returns an error to be thrown when there are multiple nodes that are missing a when function.
 * @docs-private
 */
function getTreeMultipleDefaultNodeDefsError() {
    return Error(`There can only be one default row without a when predicate function.`);
}
/**
 * Returns an error to be thrown when there are no matching node defs for a particular set of data.
 * @docs-private
 */
function getTreeMissingMatchingNodeDefError() {
    return Error(`Could not find a matching node definition for the provided node data.`);
}
/**
 * Returns an error to be thrown when there are tree control.
 * @docs-private
 */
function getTreeControlMissingError() {
    return Error(`Could not find a tree control for the tree.`);
}
/**
 * Returns an error to be thrown when tree control did not implement functions for flat/nested node.
 * @docs-private
 */
function getTreeControlFunctionsMissingError() {
    return Error(`Could not find functions for nested/flat tree in tree control.`);
}

/**
 * CDK tree component that connects with a data source to retrieve data of type `T` and renders
 * dataNodes with hierarchy. Updates the dataNodes when new data is provided by the data source.
 */
class CdkTree {
    constructor(_differs, _changeDetectorRef) {
        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /** Level of nodes */
        this._levels = new Map();
        // TODO(tinayuangao): Setup a listener for scrolling, emit the calculated view to viewChange.
        //     Remove the MAX_VALUE in viewChange
        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         */
        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ start: 0, end: Number.MAX_VALUE });
    }
    /**
     * Provides a stream containing the latest data array to render. Influenced by the tree's
     * stream of view window (what dataNodes are currently on screen).
     * Data source can be an observable of data array, or a data array to render.
     */
    get dataSource() { return this._dataSource; }
    set dataSource(dataSource) {
        if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
        }
    }
    ngOnInit() {
        this._dataDiffer = this._differs.find([]).create(this.trackBy);
        if (!this.treeControl && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTreeControlMissingError();
        }
    }
    ngOnDestroy() {
        this._nodeOutlet.viewContainer.clear();
        this.viewChange.complete();
        this._onDestroy.next();
        this._onDestroy.complete();
        if (this._dataSource && typeof this._dataSource.disconnect === 'function') {
            this.dataSource.disconnect(this);
        }
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
    }
    ngAfterContentChecked() {
        const defaultNodeDefs = this._nodeDefs.filter(def => !def.when);
        if (defaultNodeDefs.length > 1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTreeMultipleDefaultNodeDefsError();
        }
        this._defaultNodeDef = defaultNodeDefs[0];
        if (this.dataSource && this._nodeDefs && !this._dataSubscription) {
            this._observeRenderChanges();
        }
    }
    // TODO(tinayuangao): Work on keyboard traversal and actions, make sure it's working for RTL
    //     and nested trees.
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the node outlet. Otherwise start listening for new data.
     */
    _switchDataSource(dataSource) {
        if (this._dataSource && typeof this._dataSource.disconnect === 'function') {
            this.dataSource.disconnect(this);
        }
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
        // Remove the all dataNodes if there is now no data source
        if (!dataSource) {
            this._nodeOutlet.viewContainer.clear();
        }
        this._dataSource = dataSource;
        if (this._nodeDefs) {
            this._observeRenderChanges();
        }
    }
    /** Set up a subscription for the data provided by the data source. */
    _observeRenderChanges() {
        let dataStream;
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["isDataSource"])(this._dataSource)) {
            dataStream = this._dataSource.connect(this);
        }
        else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(this._dataSource)) {
            dataStream = this._dataSource;
        }
        else if (Array.isArray(this._dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this._dataSource);
        }
        if (dataStream) {
            this._dataSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._onDestroy))
                .subscribe(data => this.renderNodeChanges(data));
        }
        else if (typeof ngDevMode === 'undefined' || ngDevMode) {
            throw getTreeNoValidDataSourceError();
        }
    }
    /** Check for changes made in the data and render each change (node added/removed/moved). */
    renderNodeChanges(data, dataDiffer = this._dataDiffer, viewContainer = this._nodeOutlet.viewContainer, parentData) {
        const changes = dataDiffer.diff(data);
        if (!changes) {
            return;
        }
        changes.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
            if (item.previousIndex == null) {
                this.insertNode(data[currentIndex], currentIndex, viewContainer, parentData);
            }
            else if (currentIndex == null) {
                viewContainer.remove(adjustedPreviousIndex);
                this._levels.delete(item.item);
            }
            else {
                const view = viewContainer.get(adjustedPreviousIndex);
                viewContainer.move(view, currentIndex);
            }
        });
        this._changeDetectorRef.detectChanges();
    }
    /**
     * Finds the matching node definition that should be used for this node data. If there is only
     * one node definition, it is returned. Otherwise, find the node definition that has a when
     * predicate that returns true with the data. If none return true, return the default node
     * definition.
     */
    _getNodeDef(data, i) {
        if (this._nodeDefs.length === 1) {
            return this._nodeDefs.first;
        }
        const nodeDef = this._nodeDefs.find(def => def.when && def.when(i, data)) || this._defaultNodeDef;
        if (!nodeDef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTreeMissingMatchingNodeDefError();
        }
        return nodeDef;
    }
    /**
     * Create the embedded view for the data node template and place it in the correct index location
     * within the data node view container.
     */
    insertNode(nodeData, index, viewContainer, parentData) {
        const node = this._getNodeDef(nodeData, index);
        // Node context that will be provided to created embedded view
        const context = new CdkTreeNodeOutletContext(nodeData);
        // If the tree is flat tree, then use the `getLevel` function in flat tree control
        // Otherwise, use the level of parent node.
        if (this.treeControl.getLevel) {
            context.level = this.treeControl.getLevel(nodeData);
        }
        else if (typeof parentData !== 'undefined' && this._levels.has(parentData)) {
            context.level = this._levels.get(parentData) + 1;
        }
        else {
            context.level = 0;
        }
        this._levels.set(nodeData, context.level);
        // Use default tree nodeOutlet, or nested node's nodeOutlet
        const container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
        container.createEmbeddedView(node.template, context, index);
        // Set the data to just created `CdkTreeNode`.
        // The `CdkTreeNode` created from `createEmbeddedView` will be saved in static variable
        //     `mostRecentTreeNode`. We get it from static variable and pass the node data to it.
        if (CdkTreeNode.mostRecentTreeNode) {
            CdkTreeNode.mostRecentTreeNode.data = nodeData;
        }
    }
}
CdkTree.ɵfac = function CdkTree_Factory(t) { return new (t || CdkTree)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
CdkTree.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkTree, selectors: [["cdk-tree"]], contentQueries: function CdkTree_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkTreeNodeDef, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._nodeDefs = _t);
    } }, viewQuery: function CdkTree_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkTreeNodeOutlet, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._nodeOutlet = _t.first);
    } }, hostAttrs: ["role", "tree", 1, "cdk-tree"], inputs: { dataSource: "dataSource", treeControl: "treeControl", trackBy: "trackBy" }, exportAs: ["cdkTree"], decls: 1, vars: 0, consts: [["cdkTreeNodeOutlet", ""]], template: function CdkTree_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
    } }, directives: [CdkTreeNodeOutlet], encapsulation: 2 });
CdkTree.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
CdkTree.propDecorators = {
    dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    treeControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    trackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    _nodeOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [CdkTreeNodeOutlet, { static: true },] }],
    _nodeDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkTreeNodeDef, {
                    // We need to use `descendants: true`, because Ivy will no longer match
                    // indirect descendants if it's left as false.
                    descendants: true
                },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTree, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-tree',
                exportAs: 'cdkTree',
                template: `<ng-container cdkTreeNodeOutlet></ng-container>`,
                host: {
                    'class': 'cdk-tree',
                    'role': 'tree'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
                // The view for `CdkTree` consists entirely of templates declared in other views. As they are
                // declared elsewhere, they are checked when their declaration points are checked.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }]; }, { dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], treeControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], trackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], _nodeOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkTreeNodeOutlet, { static: true }]
        }], _nodeDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkTreeNodeDef, {
                    // We need to use `descendants: true`, because Ivy will no longer match
                    // indirect descendants if it's left as false.
                    descendants: true
                }]
        }] }); })();
/**
 * Tree node for CdkTree. It contains the data in the tree node.
 */
class CdkTreeNode {
    constructor(_elementRef, _tree) {
        this._elementRef = _elementRef;
        this._tree = _tree;
        /** Subject that emits when the component has been destroyed. */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /** Emits when the node's data has changed. */
        this._dataChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * The role of the node should always be 'treeitem'.
         */
        // TODO: mark as deprecated
        this.role = 'treeitem';
        CdkTreeNode.mostRecentTreeNode = this;
    }
    /** The tree node's data. */
    get data() { return this._data; }
    set data(value) {
        if (value !== this._data) {
            this._data = value;
            this._setRoleFromData();
            this._dataChanges.next();
        }
    }
    get isExpanded() {
        return this._tree.treeControl.isExpanded(this._data);
    }
    get level() {
        return this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._data) : 0;
    }
    ngOnDestroy() {
        // If this is the last tree node being destroyed,
        // clear out the reference to avoid leaking memory.
        if (CdkTreeNode.mostRecentTreeNode === this) {
            CdkTreeNode.mostRecentTreeNode = null;
        }
        this._dataChanges.complete();
        this._destroyed.next();
        this._destroyed.complete();
    }
    /** Focuses the menu item. Implements for FocusableOption. */
    focus() {
        this._elementRef.nativeElement.focus();
    }
    // TODO: role should eventually just be set in the component host
    _setRoleFromData() {
        if (!this._tree.treeControl.isExpandable && !this._tree.treeControl.getChildren &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTreeControlFunctionsMissingError();
        }
        this.role = 'treeitem';
    }
}
CdkTreeNode.ɵfac = function CdkTreeNode_Factory(t) { return new (t || CdkTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTree)); };
CdkTreeNode.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkTreeNode, selectors: [["cdk-tree-node"]], hostAttrs: [1, "cdk-tree-node"], hostVars: 3, hostBindings: function CdkTreeNode_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", ctx.isExpanded)("aria-level", ctx.level + 1)("role", ctx.role);
    } }, inputs: { role: "role" }, exportAs: ["cdkTreeNode"] });
/**
 * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
 * in `CdkTree` and set the data to it.
 */
CdkTreeNode.mostRecentTreeNode = null;
CdkTreeNode.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: CdkTree }
];
CdkTreeNode.propDecorators = {
    role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNode, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'cdk-tree-node',
                exportAs: 'cdkTreeNode',
                host: {
                    '[attr.aria-expanded]': 'isExpanded',
                    '[attr.aria-level]': 'level + 1',
                    '[attr.role]': 'role',
                    'class': 'cdk-tree-node'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: CdkTree }]; }, { role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Nested node is a child of `<cdk-tree>`. It works with nested tree.
 * By using `cdk-nested-tree-node` component in tree node template, children of the parent node will
 * be added in the `cdkTreeNodeOutlet` in tree node template.
 * The children of node will be automatically added to `cdkTreeNodeOutlet`.
 */
class CdkNestedTreeNode extends CdkTreeNode {
    constructor(_elementRef, _tree, _differs) {
        super(_elementRef, _tree);
        this._elementRef = _elementRef;
        this._tree = _tree;
        this._differs = _differs;
    }
    ngAfterContentInit() {
        this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);
        if (!this._tree.treeControl.getChildren && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTreeControlFunctionsMissingError();
        }
        const childrenNodes = this._tree.treeControl.getChildren(this.data);
        if (Array.isArray(childrenNodes)) {
            this.updateChildrenNodes(childrenNodes);
        }
        else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(childrenNodes)) {
            childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed))
                .subscribe(result => this.updateChildrenNodes(result));
        }
        this.nodeOutlet.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed))
            .subscribe(() => this.updateChildrenNodes());
    }
    ngOnDestroy() {
        this._clear();
        super.ngOnDestroy();
    }
    /** Add children dataNodes to the NodeOutlet */
    updateChildrenNodes(children) {
        const outlet = this._getNodeOutlet();
        if (children) {
            this._children = children;
        }
        if (outlet && this._children) {
            const viewContainer = outlet.viewContainer;
            this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
        }
        else {
            // Reset the data differ if there's no children nodes displayed
            this._dataDiffer.diff([]);
        }
    }
    /** Clear the children dataNodes. */
    _clear() {
        const outlet = this._getNodeOutlet();
        if (outlet) {
            outlet.viewContainer.clear();
            this._dataDiffer.diff([]);
        }
    }
    /** Gets the outlet for the current node. */
    _getNodeOutlet() {
        const outlets = this.nodeOutlet;
        // Note that since we use `descendants: true` on the query, we have to ensure
        // that we don't pick up the outlet of a child node by accident.
        return outlets && outlets.find(outlet => !outlet._node || outlet._node === this);
    }
}
CdkNestedTreeNode.ɵfac = function CdkNestedTreeNode_Factory(t) { return new (t || CdkNestedTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"])); };
CdkNestedTreeNode.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkNestedTreeNode, selectors: [["cdk-nested-tree-node"]], contentQueries: function CdkNestedTreeNode_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkTreeNodeOutlet, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.nodeOutlet = _t);
    } }, hostAttrs: [1, "cdk-tree-node", "cdk-nested-tree-node"], hostVars: 2, hostBindings: function CdkNestedTreeNode_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", ctx.isExpanded)("role", ctx.role);
    } }, exportAs: ["cdkNestedTreeNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            { provide: CdkTreeNode, useExisting: CdkNestedTreeNode },
            { provide: CDK_TREE_NODE_OUTLET_NODE, useExisting: CdkNestedTreeNode }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
CdkNestedTreeNode.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: CdkTree },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }
];
CdkNestedTreeNode.propDecorators = {
    nodeOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkTreeNodeOutlet, {
                    // We need to use `descendants: true`, because Ivy will no longer match
                    // indirect descendants if it's left as false.
                    descendants: true
                },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkNestedTreeNode, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'cdk-nested-tree-node',
                exportAs: 'cdkNestedTreeNode',
                host: {
                    '[attr.aria-expanded]': 'isExpanded',
                    '[attr.role]': 'role',
                    'class': 'cdk-tree-node cdk-nested-tree-node'
                },
                providers: [
                    { provide: CdkTreeNode, useExisting: CdkNestedTreeNode },
                    { provide: CDK_TREE_NODE_OUTLET_NODE, useExisting: CdkNestedTreeNode }
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: CdkTree }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }]; }, { nodeOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkTreeNodeOutlet, {
                    // We need to use `descendants: true`, because Ivy will no longer match
                    // indirect descendants if it's left as false.
                    descendants: true
                }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Regex used to split a string on its CSS units. */
const cssUnitPattern = /([A-Za-z%]+)$/;
/**
 * Indent for the children tree dataNodes.
 * This directive will add left-padding to the node to show hierarchy.
 */
class CdkTreeNodePadding {
    constructor(_treeNode, _tree, 
    /**
     * @deprecated _renderer parameter no longer being used. To be removed.
     * @breaking-change 11.0.0
     */
    _renderer, _element, _dir) {
        this._treeNode = _treeNode;
        this._tree = _tree;
        this._element = _element;
        this._dir = _dir;
        /** Subject that emits when the component has been destroyed. */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /** CSS units used for the indentation value. */
        this.indentUnits = 'px';
        this._indent = 40;
        this._setPadding();
        if (_dir) {
            _dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(() => this._setPadding(true));
        }
        // In Ivy the indentation binding might be set before the tree node's data has been added,
        // which means that we'll miss the first render. We have to subscribe to changes in the
        // data to ensure that everything is up to date.
        _treeNode._dataChanges.subscribe(() => this._setPadding());
    }
    /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
    get level() { return this._level; }
    set level(value) { this._setLevelInput(value); }
    /**
     * The indent for each level. Can be a number or a CSS string.
     * Default number 40px from material design menu sub-menu spec.
     */
    get indent() { return this._indent; }
    set indent(indent) { this._setIndentInput(indent); }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /** The padding indent value for the tree node. Returns a string with px numbers if not null. */
    _paddingIndent() {
        const nodeLevel = (this._treeNode.data && this._tree.treeControl.getLevel)
            ? this._tree.treeControl.getLevel(this._treeNode.data)
            : null;
        const level = this._level == null ? nodeLevel : this._level;
        return typeof level === 'number' ? `${level * this._indent}${this.indentUnits}` : null;
    }
    _setPadding(forceChange = false) {
        const padding = this._paddingIndent();
        if (padding !== this._currentPadding || forceChange) {
            const element = this._element.nativeElement;
            const paddingProp = this._dir && this._dir.value === 'rtl' ? 'paddingRight' : 'paddingLeft';
            const resetProp = paddingProp === 'paddingLeft' ? 'paddingRight' : 'paddingLeft';
            element.style[paddingProp] = padding || '';
            element.style[resetProp] = '';
            this._currentPadding = padding;
        }
    }
    /**
     * This has been extracted to a util because of TS 4 and VE.
     * View Engine doesn't support property rename inheritance.
     * TS 4.0 doesn't allow properties to override accessors or vice-versa.
     * @docs-private
     */
    _setLevelInput(value) {
        // Set to null as the fallback value so that _setPadding can fall back to the node level if the
        // consumer set the directive as `cdkTreeNodePadding=""`. We still want to take this value if
        // they set 0 explicitly.
        this._level = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value, null);
        this._setPadding();
    }
    /**
     * This has been extracted to a util because of TS 4 and VE.
     * View Engine doesn't support property rename inheritance.
     * TS 4.0 doesn't allow properties to override accessors or vice-versa.
     * @docs-private
     */
    _setIndentInput(indent) {
        let value = indent;
        let units = 'px';
        if (typeof indent === 'string') {
            const parts = indent.split(cssUnitPattern);
            value = parts[0];
            units = parts[1] || units;
        }
        this.indentUnits = units;
        this._indent = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value);
        this._setPadding();
    }
}
CdkTreeNodePadding.ɵfac = function CdkTreeNodePadding_Factory(t) { return new (t || CdkTreeNodePadding)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTreeNode), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8)); };
CdkTreeNodePadding.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkTreeNodePadding, selectors: [["", "cdkTreeNodePadding", ""]], inputs: { level: ["cdkTreeNodePadding", "level"], indent: ["cdkTreeNodePaddingIndent", "indent"] } });
CdkTreeNodePadding.ctorParameters = () => [
    { type: CdkTreeNode },
    { type: CdkTree },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
CdkTreeNodePadding.propDecorators = {
    level: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkTreeNodePadding',] }],
    indent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkTreeNodePaddingIndent',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNodePadding, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkTreeNodePadding]'
            }]
    }], function () { return [{ type: CdkTreeNode }, { type: CdkTree }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['cdkTreeNodePadding']
        }], indent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['cdkTreeNodePaddingIndent']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Node toggle to expand/collapse the node.
 */
class CdkTreeNodeToggle {
    constructor(_tree, _treeNode) {
        this._tree = _tree;
        this._treeNode = _treeNode;
        this._recursive = false;
    }
    /** Whether expand/collapse the node recursively. */
    get recursive() { return this._recursive; }
    set recursive(value) { this._recursive = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _toggle(event) {
        this.recursive
            ? this._tree.treeControl.toggleDescendants(this._treeNode.data)
            : this._tree.treeControl.toggle(this._treeNode.data);
        event.stopPropagation();
    }
}
CdkTreeNodeToggle.ɵfac = function CdkTreeNodeToggle_Factory(t) { return new (t || CdkTreeNodeToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTreeNode)); };
CdkTreeNodeToggle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkTreeNodeToggle, selectors: [["", "cdkTreeNodeToggle", ""]], hostBindings: function CdkTreeNodeToggle_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CdkTreeNodeToggle_click_HostBindingHandler($event) { return ctx._toggle($event); });
    } }, inputs: { recursive: ["cdkTreeNodeToggleRecursive", "recursive"] } });
CdkTreeNodeToggle.ctorParameters = () => [
    { type: CdkTree },
    { type: CdkTreeNode }
];
CdkTreeNodeToggle.propDecorators = {
    recursive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkTreeNodeToggleRecursive',] }],
    _toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['click', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNodeToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[cdkTreeNodeToggle]' }]
    }], function () { return [{ type: CdkTree }, { type: CdkTreeNode }]; }, { recursive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['cdkTreeNodeToggleRecursive']
        }], 
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _toggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const EXPORTED_DECLARATIONS = [
    CdkNestedTreeNode,
    CdkTreeNodeDef,
    CdkTreeNodePadding,
    CdkTreeNodeToggle,
    CdkTree,
    CdkTreeNode,
    CdkTreeNodeOutlet,
];
class CdkTreeModule {
}
CdkTreeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CdkTreeModule });
CdkTreeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function CdkTreeModule_Factory(t) { return new (t || CdkTreeModule)(); }, providers: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CdkTreeModule, { declarations: [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet], exports: [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                exports: EXPORTED_DECLARATIONS,
                declarations: EXPORTED_DECLARATIONS,
                providers: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=tree.js.map

/***/ }),

/***/ "G0yX":
/*!********************************************************************!*\
  !*** ./src/app/modules/eagle-products/eagle-products.component.ts ***!
  \********************************************************************/
/*! exports provided: EagleProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EagleProductsComponent", function() { return EagleProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _eagle_sidebar_eagle_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eagle-sidebar/eagle-sidebar.component */ "glLh");
/* harmony import */ var _eagle_content_eagle_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eagle-content/eagle-content.component */ "NM1F");







const _c0 = ["sidenav"];
class EagleProductsComponent {
    constructor() {
        this.sidenavOpen = true;
        this.sortings = ['Sort by Default', 'Best match', 'Lowest first', 'Highest first'];
        this.counts = [12, 24, 36];
        this.viewType = 'grid';
        this.viewCol = 25;
    }
    ngOnInit() {
        this.count = this.counts[0];
        this.sort = this.sortings[0];
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
    }
    onWindowResize() {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    }
    changeSorting(sort) {
        this.sort = sort;
    }
    changeCount(count) {
        this.count = count;
    }
    changeViewType(viewType, viewCol) {
        this.viewType = viewType;
        this.viewCol = viewCol;
    }
}
EagleProductsComponent.ɵfac = function EagleProductsComponent_Factory(t) { return new (t || EagleProductsComponent)(); };
EagleProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EagleProductsComponent, selectors: [["eagle-products"]], viewQuery: function EagleProductsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, hostBindings: function EagleProductsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function EagleProductsComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 7, vars: 2, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between", 1, "sidenav-container"], ["fxFlex", "20", "fxFlex.xs", "50", "fxFlex.sm", "50", "perfectScrollbar", "", 3, "opened", "mode"], ["sidenav", ""], ["fxFlex", ""], [3, "sidenavClick"]], template: function EagleProductsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "eagle-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-sidenav-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "eagle-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavClick", function EagleProductsComponent_Template_eagle_content_sidenavClick_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.sidenavOpen)("mode", ctx.sidenavOpen ? "side" : "over");
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"], _eagle_sidebar_eagle_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["EagleSidebarComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContent"], _eagle_content_eagle_content_component__WEBPACK_IMPORTED_MODULE_5__["EagleContentComponent"]], styles: ["main[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #fafafa;\n  padding: 16px;\n}\nmain[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: auto;\n  margin-bottom: 16px;\n}\nmain[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%] {\n  min-width: 20%;\n  width: 100%;\n}\n@media only screen and (max-width: 600px) {\n  main[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n  main[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n  main[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lYWdsZS1wcm9kdWN0cy9lYWdsZS1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFBRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQUNOO0FBR0U7RUFmRjtJQWdCSSxxQkFBQTtFQUFGO0VBQ0U7SUFDRSxxQkFBQTtFQUNKO0VBQ0U7SUFDRSxlQUFBO0VBQ0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZWFnbGUtcHJvZHVjdHMvZWFnbGUtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbm1haW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIC5zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICBtYXQtc2lkZW5hdiB7XG4gICAgICBtaW4td2lkdGg6IDIwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgbWF0LXNpZGVuYXYtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EagleProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'eagle-products',
                templateUrl: './eagle-products.component.html',
                styleUrls: ['./eagle-products.component.scss']
            }]
    }], null, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidenav', { static: true }]
        }], onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }] }); })();


/***/ }),

/***/ "LY8w":
/*!*********************************************************************!*\
  !*** ./src/app/shared/product-item/eagle-product-item.component.ts ***!
  \*********************************************************************/
/*! exports provided: EagleProductItemComponent, ClickIconBtnType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EagleProductItemComponent", function() { return EagleProductItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickIconBtnType", function() { return ClickIconBtnType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function EagleProductItemComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r0.productItem.oldPrice, "1.2-2"), "");
} }
class EagleProductItemComponent {
    constructor() {
        this.clickIconBtn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clickIconBtnType = ClickIconBtnType;
    }
    onClickIconBtn(type) {
        this.clickIconBtn.emit(type);
    }
}
EagleProductItemComponent.ɵfac = function EagleProductItemComponent_Factory(t) { return new (t || EagleProductItemComponent)(); };
EagleProductItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EagleProductItemComponent, selectors: [["eagle-product-item"]], inputs: { productItem: "productItem" }, outputs: { clickIconBtn: "clickIconBtn" }, decls: 21, vars: 9, consts: [[1, "product-item", "text-center"], ["color", "warn", "selected", "true"], [1, "image-link"], ["alt", "", 3, "src"], [1, "category", "text-muted"], [1, "title", "text-truncate"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "prices"], ["fxLayout", "column", "fxLayoutAlign", "center start"], [1, "old-price", "text-muted"], [4, "ngIf"], [1, "new-price"], [1, "divider", "mt-2"], [1, "icons"], [1, "fas", "fa-shopping-cart", "fa-lg", 2, "margin-right", "8px", "cursor", "pointer", 3, "click"], [1, "fas", "fa-eye", "fa-lg", 2, "cursor", "pointer", 3, "click"]], template: function EagleProductItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-chip-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-chip", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EagleProductItemComponent_span_13_Template, 3, 4, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EagleProductItemComponent_Template_i_click_19_listener() { return ctx.onClickIconBtn(ctx.clickIconBtnType.ADD_TO_BASKET); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EagleProductItemComponent_Template_i_click_20_listener() { return ctx.onClickIconBtn(ctx.clickIconBtnType.VIEW_ON_BASKET); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.productItem.discount, "% OFF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.productItem.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.productItem.categoryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productItem.productName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 6, ctx.productItem.newPrice, "1.2-2"), "");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChip"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: [".product-item[_ngcontent-%COMP%] {\n  position: relative;\n}\n.product-item[_ngcontent-%COMP%]   .mat-chip-list[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n.product-item[_ngcontent-%COMP%]   .mat-chip-list.list-view[_ngcontent-%COMP%] {\n  left: 10px;\n}\n.product-item[_ngcontent-%COMP%]   .image-link[_ngcontent-%COMP%] {\n  display: block;\n}\n.product-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin-bottom: 12px;\n  max-height: 100px;\n}\n.product-item[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.product-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: block;\n  color: inherit;\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 18px;\n}\n.product-item[_ngcontent-%COMP%]   .prices[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}\n.product-item[_ngcontent-%COMP%]   .prices[_ngcontent-%COMP%]   .old-price[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  height: 15px;\n}\n.product-item[_ngcontent-%COMP%]   .prices[_ngcontent-%COMP%]   .new-price[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n}\n.product-item[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  margin-top: 18px;\n}\n.old-price[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Byb2R1Y3QtaXRlbS9lYWdsZS1wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNFLFVBQUE7QUFHTjtBQUFFO0VBQ0UsY0FBQTtBQUVKO0FBQUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUVKO0FBQUU7RUFDRSxrQkFBQTtBQUVKO0FBQUU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRUo7QUFBRTtFQUNFLGNBQUE7QUFFSjtBQURJO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0FBR047QUFESTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUdOO0FBQUU7RUFDRSxnQkFBQTtBQUVKO0FBQ0E7RUFDRSw2QkFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3Byb2R1Y3QtaXRlbS9lYWdsZS1wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1pdGVte1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5tYXQtY2hpcC1saXN0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgJi5saXN0LXZpZXd7XG4gICAgICBsZWZ0OiAxMHB4O1xuICAgIH1cbiAgfVxuICAuaW1hZ2UtbGlua3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBpbWd7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgbWF4LWhlaWdodDogMTAwcHg7XG4gIH1cbiAgLmNhdGVnb3J5e1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgfVxuICAudGl0bGV7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5wcmljZXN7XG4gICAgbWFyZ2luOiAxMnB4IDA7XG4gICAgLm9sZC1wcmljZXtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgIH1cbiAgICAubmV3LXByaWNle1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cbiAgLmljb25ze1xuICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gIH1cbn1cbi5vbGQtcHJpY2V7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EagleProductItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'eagle-product-item',
                templateUrl: './eagle-product-item.component.html',
                styleUrls: ['./eagle-product-item.component.scss']
            }]
    }], null, { productItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clickIconBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
var ClickIconBtnType;
(function (ClickIconBtnType) {
    ClickIconBtnType["ADD_TO_BASKET"] = "add";
    ClickIconBtnType["VIEW_ON_BASKET"] = "view";
})(ClickIconBtnType || (ClickIconBtnType = {}));


/***/ }),

/***/ "NM1F":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/eagle-products/eagle-content/eagle-content.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EagleContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EagleContentComponent", function() { return EagleContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _eagle_shelf_header_eagle_shelf_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eagle-shelf-header/eagle-shelf-header.component */ "F4cK");
/* harmony import */ var _eagle_product_list_eagle_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eagle-product-list/eagle-product-list.component */ "6fn8");




class EagleContentComponent {
    constructor() {
        this.sidenavClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onClickSideNav() {
        this.sidenavClick.emit();
    }
}
EagleContentComponent.ɵfac = function EagleContentComponent_Factory(t) { return new (t || EagleContentComponent)(); };
EagleContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EagleContentComponent, selectors: [["eagle-content"]], outputs: { sidenavClick: "sidenavClick" }, decls: 2, vars: 0, consts: [[3, "sidenavClick"]], template: function EagleContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "eagle-shelf-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavClick", function EagleContentComponent_Template_eagle_shelf_header_sidenavClick_0_listener() { return ctx.onClickSideNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "eagle-product-list");
    } }, directives: [_eagle_shelf_header_eagle_shelf_header_component__WEBPACK_IMPORTED_MODULE_1__["EagleShelfHeaderComponent"], _eagle_product_list_eagle_product_list_component__WEBPACK_IMPORTED_MODULE_2__["EagleProductListComponent"]], styles: ["mat-sidenav-content {\n  padding-left: 16px;\n}\nmat-sidenav-content .filter-row {\n  background: #fff;\n  padding: 8px 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lYWdsZS1wcm9kdWN0cy9lYWdsZS1jb250ZW50L2VhZ2xlLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2VhZ2xlLXByb2R1Y3RzL2VhZ2xlLWNvbnRlbnQvZWFnbGUtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIC5maWx0ZXItcm93e1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogOHB4IDEycHg7XG4gIH1cbn1cbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EagleContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'eagle-content',
                templateUrl: './eagle-content.component.html',
                styleUrls: ['./eagle-content.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], null, { sidenavClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "YN7n":
/*!******************************************************************!*\
  !*** ./src/app/shared/product-item/eagle-product-item.module.ts ***!
  \******************************************************************/
/*! exports provided: EagleProductItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EagleProductItemModule", function() { return EagleProductItemModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared.module */ "PCNd");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material.module */ "5dmV");
/* harmony import */ var _eagle_product_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eagle-product-item.component */ "LY8w");





class EagleProductItemModule {
}
EagleProductItemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EagleProductItemModule });
EagleProductItemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EagleProductItemModule_Factory(t) { return new (t || EagleProductItemModule)(); }, imports: [[
            _shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EagleProductItemModule, { declarations: [_eagle_product_item_component__WEBPACK_IMPORTED_MODULE_3__["EagleProductItemComponent"]], imports: [_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"]], exports: [_eagle_product_item_component__WEBPACK_IMPORTED_MODULE_3__["EagleProductItemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EagleProductItemModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _eagle_product_item_component__WEBPACK_IMPORTED_MODULE_3__["EagleProductItemComponent"]
                ],
                imports: [
                    _shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                ],
                exports: [
                    _eagle_product_item_component__WEBPACK_IMPORTED_MODULE_3__["EagleProductItemComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "buM5":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/eagle-products/eagle-sidebar/eagle-categories/mock-dynamic-database.service.ts ***!
  \********************************************************************************************************/
/*! exports provided: DynamicFlatNode, DynamicDatabase, DynamicDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFlatNode", function() { return DynamicFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDatabase", function() { return DynamicDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDataSource", function() { return DynamicDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




/** Flat node with expandable and level information */
class DynamicFlatNode {
    constructor(item, level = 1, expandable = false, isLoading = false) {
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.isLoading = isLoading;
    }
}
/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
class DynamicDatabase {
    constructor() {
        this.dataMap = new Map([
            ['Sports', ['Sivasspor Bag', 'Glasses']],
            ['Accessories', ['Hats', 'Gloves', 'Clocks']],
            ['Glasses', ['Sunglasses', 'Swimming glasses']],
            ['Clocks', ['Wall clocks', 'Watches']]
        ]);
        this.rootLevelNodes = ['Sports', 'Accessories'];
    }
    /** Initial data from database */
    initialData() {
        return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
    }
    getChildren(node) {
        return this.dataMap.get(node);
    }
    isExpandable(node) {
        return this.dataMap.has(node);
    }
}
DynamicDatabase.ɵfac = function DynamicDatabase_Factory(t) { return new (t || DynamicDatabase)(); };
DynamicDatabase.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DynamicDatabase, factory: DynamicDatabase.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicDatabase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
class DynamicDataSource {
    constructor(_treeControl, _database) {
        this._treeControl = _treeControl;
        this._database = _database;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    get data() { return this.dataChange.value; }
    set data(value) {
        this._treeControl.dataNodes = value;
        this.dataChange.next(value);
    }
    connect(collectionViewer) {
        this._treeControl.expansionModel.changed.subscribe(change => {
            if (change.added ||
                change.removed) {
                this.handleTreeControl(change);
            }
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(collectionViewer.viewChange, this.dataChange).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.data));
    }
    disconnect(collectionViewer) { }
    /** Handle expand/collapse behaviors */
    handleTreeControl(change) {
        if (change.added) {
            change.added.forEach(node => this.toggleNode(node, true));
        }
        if (change.removed) {
            change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
        }
    }
    /**
     * Toggle the node, remove from display list
     */
    toggleNode(node, expand) {
        const children = this._database.getChildren(node.item); // todo: Burası servisten gelecek.
        const index = this.data.indexOf(node);
        if (!children || index < 0) { // If no children, or cannot find the node, no op
            return;
        }
        node.isLoading = true;
        setTimeout(() => {
            if (expand) {
                const nodes = children.map(name => new DynamicFlatNode(name, node.level + 1, this._database.isExpandable(name)));
                this.data.splice(index + 1, 0, ...nodes);
            }
            else {
                let count = 0;
                for (let i = index + 1; i < this.data.length
                    && this.data[i].level > node.level; i++, count++) { }
                this.data.splice(index + 1, count);
            }
            // notify the change
            this.dataChange.next(this.data);
            node.isLoading = false;
        }, 1000);
    }
}


/***/ }),

/***/ "bv9b":
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js ***!
  \******************************************************************************/
/*! exports provided: MAT_PROGRESS_BAR_LOCATION, MAT_PROGRESS_BAR_LOCATION_FACTORY, MatProgressBar, MatProgressBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION", function() { return MAT_PROGRESS_BAR_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION_FACTORY", function() { return MAT_PROGRESS_BAR_LOCATION_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatProgressBar", function() { return MatProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatProgressBarModule", function() { return MatProgressBarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatProgressBar.
/** @docs-private */



const _c0 = ["primaryValueBar"];
class MatProgressBarBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatProgressBarMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(MatProgressBarBase, 'primary');
/**
 * Injection token used to provide the current location to `MatProgressBar`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * @docs-private
 */
const MAT_PROGRESS_BAR_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-progress-bar-location', { providedIn: 'root', factory: MAT_PROGRESS_BAR_LOCATION_FACTORY });
/** @docs-private */
function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
    const _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]);
    const _location = _document ? _document.location : null;
    return {
        // Note that this needs to be a function, rather than a property, because Angular
        // will only resolve it once, but we want the current path on each call.
        getPathname: () => _location ? (_location.pathname + _location.search) : ''
    };
}
/** Counter used to generate unique IDs for progress bars. */
let progressbarId = 0;
/**
 * `<mat-progress-bar>` component.
 */
class MatProgressBar extends _MatProgressBarMixinBase {
    constructor(_elementRef, _ngZone, _animationMode, 
    /**
     * @deprecated `location` parameter to be made required.
     * @breaking-change 8.0.0
     */
    location) {
        super(_elementRef);
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._animationMode = _animationMode;
        /** Flag that indicates whether NoopAnimations mode is set to true. */
        this._isNoopAnimation = false;
        this._value = 0;
        this._bufferValue = 0;
        /**
         * Event emitted when animation of the primary progress bar completes. This event will not
         * be emitted when animations are disabled, nor will it be emitted for modes with continuous
         * animations (indeterminate and query).
         */
        this.animationEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Reference to animation end subscription to be unsubscribed on destroy. */
        this._animationEndSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Mode of the progress bar.
         *
         * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
         * 'determinate'.
         * Mirrored to mode attribute.
         */
        this.mode = 'determinate';
        /** ID of the progress bar. */
        this.progressbarId = `mat-progress-bar-${progressbarId++}`;
        // We need to prefix the SVG reference with the current path, otherwise they won't work
        // in Safari if the page has a `<base>` tag. Note that we need quotes inside the `url()`,
        // because named route URLs can contain parentheses (see #12338). Also we don't use since
        // we can't tell the difference between whether
        // the consumer is using the hash location strategy or not, because `Location` normalizes
        // both `/#/foo/bar` and `/foo/bar` to the same thing.
        const path = location ? location.getPathname().split('#')[0] : '';
        this._rectangleFillValue = `url('${path}#${this.progressbarId}')`;
        this._isNoopAnimation = _animationMode === 'NoopAnimations';
    }
    /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */
    get value() { return this._value; }
    set value(v) {
        this._value = clamp(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(v) || 0);
    }
    /** Buffer value of the progress bar. Defaults to zero. */
    get bufferValue() { return this._bufferValue; }
    set bufferValue(v) { this._bufferValue = clamp(v || 0); }
    /** Gets the current transform value for the progress bar's primary indicator. */
    _primaryTransform() {
        const scale = this.value / 100;
        return { transform: `scaleX(${scale})` };
    }
    /**
     * Gets the current transform value for the progress bar's buffer indicator. Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     */
    _bufferTransform() {
        if (this.mode === 'buffer') {
            const scale = this.bufferValue / 100;
            return { transform: `scaleX(${scale})` };
        }
        return null;
    }
    ngAfterViewInit() {
        // Run outside angular so change detection didn't get triggered on every transition end
        // instead only on the animation that we care about (primary value bar's transitionend)
        this._ngZone.runOutsideAngular((() => {
            const element = this._primaryValueBar.nativeElement;
            this._animationEndSubscription =
                Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(element, 'transitionend')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(((e) => e.target === element)))
                    .subscribe(() => {
                    if (this.mode === 'determinate' || this.mode === 'buffer') {
                        this._ngZone.run(() => this.animationEnd.next({ value: this.value }));
                    }
                });
        }));
    }
    ngOnDestroy() {
        this._animationEndSubscription.unsubscribe();
    }
}
MatProgressBar.ɵfac = function MatProgressBar_Factory(t) { return new (t || MatProgressBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_BAR_LOCATION, 8)); };
MatProgressBar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatProgressBar, selectors: [["mat-progress-bar"]], viewQuery: function MatProgressBar_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._primaryValueBar = _t.first);
    } }, hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "mat-progress-bar"], hostVars: 4, hostBindings: function MatProgressBar_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.mode === "indeterminate" || ctx.mode === "query" ? null : ctx.value)("mode", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._isNoopAnimation);
    } }, inputs: { color: "color", mode: "mode", value: "value", bufferValue: "bufferValue" }, outputs: { animationEnd: "animationEnd" }, exportAs: ["matProgressBar"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 4, consts: [["width", "100%", "height", "4", "focusable", "false", 1, "mat-progress-bar-background", "mat-progress-bar-element"], ["x", "4", "y", "0", "width", "8", "height", "4", "patternUnits", "userSpaceOnUse", 3, "id"], ["cx", "2", "cy", "2", "r", "2"], ["width", "100%", "height", "100%"], [1, "mat-progress-bar-buffer", "mat-progress-bar-element", 3, "ngStyle"], [1, "mat-progress-bar-primary", "mat-progress-bar-fill", "mat-progress-bar-element", 3, "ngStyle"], ["primaryValueBar", ""], [1, "mat-progress-bar-secondary", "mat-progress-bar-fill", "mat-progress-bar-element"]], template: function MatProgressBar_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pattern", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.progressbarId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx._rectangleFillValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx._bufferTransform());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx._primaryTransform());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"], encapsulation: 2, changeDetection: 0 });
MatProgressBar.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_PROGRESS_BAR_LOCATION,] }] }
];
MatProgressBar.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    bufferValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _primaryValueBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['primaryValueBar',] }],
    animationEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-progress-bar',
                exportAs: 'matProgressBar',
                host: {
                    'role': 'progressbar',
                    'aria-valuemin': '0',
                    'aria-valuemax': '100',
                    '[attr.aria-valuenow]': '(mode === "indeterminate" || mode === "query") ? null : value',
                    '[attr.mode]': 'mode',
                    'class': 'mat-progress-bar',
                    '[class._mat-animation-noopable]': '_isNoopAnimation'
                },
                inputs: ['color'],
                template: "<!--\n  The background div is named as such because it appears below the other divs and is not sized based\n  on values.\n-->\n<svg width=\"100%\" height=\"4\" focusable=\"false\" class=\"mat-progress-bar-background mat-progress-bar-element\">\n  <defs>\n    <pattern [id]=\"progressbarId\" x=\"4\" y=\"0\" width=\"8\" height=\"4\" patternUnits=\"userSpaceOnUse\">\n      <circle cx=\"2\" cy=\"2\" r=\"2\"/>\n    </pattern>\n  </defs>\n  <rect [attr.fill]=\"_rectangleFillValue\" width=\"100%\" height=\"100%\"/>\n</svg>\n<div class=\"mat-progress-bar-buffer mat-progress-bar-element\" [ngStyle]=\"_bufferTransform()\"></div>\n<div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" [ngStyle]=\"_primaryTransform()\" #primaryValueBar></div>\n<div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MAT_PROGRESS_BAR_LOCATION]
            }] }]; }, { animationEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bufferValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _primaryValueBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['primaryValueBar']
        }] }); })();
/** Clamps a value to be between two numbers, by default 0 and 100. */
function clamp(v, min = 0, max = 100) {
    return Math.max(min, Math.min(max, v));
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatProgressBarModule {
}
MatProgressBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatProgressBarModule });
MatProgressBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatProgressBarModule_Factory(t) { return new (t || MatProgressBarModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatProgressBarModule, { declarations: function () { return [MatProgressBar]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]; }, exports: function () { return [MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
                exports: [MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
                declarations: [MatProgressBar]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ "glLh":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/eagle-products/eagle-sidebar/eagle-sidebar.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EagleSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EagleSidebarComponent", function() { return EagleSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _eagle_categories_eagle_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eagle-categories/eagle-categories.component */ "yLys");





class EagleSidebarComponent {
    ngOnInit() {
    }
}
EagleSidebarComponent.ɵfac = function EagleSidebarComponent_Factory(t) { return new (t || EagleSidebarComponent)(); };
EagleSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EagleSidebarComponent, selectors: [["eagle-sidebar"]], decls: 42, vars: 0, consts: [["displayMode", "flat", "multi", "true"], ["expanded", ""], ["perfectScrollbar", "", 1, ""], [2, "margin-left", "8px"]], template: function EagleSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "eagle-categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Price listesi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Size ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " S, M, L, XL, XXL, XXXL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Condition ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " New, 2. hand from \u015E\u00FCkr\u00FC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Brand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Efes, Tuborg, Marmara");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarDirective"], _eagle_categories_eagle_categories_component__WEBPACK_IMPORTED_MODULE_3__["EagleCategoriesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZWFnbGUtcHJvZHVjdHMvZWFnbGUtc2lkZWJhci9lYWdsZS1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EagleSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'eagle-sidebar',
                templateUrl: './eagle-sidebar.component.html',
                styleUrls: ['./eagle-sidebar.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "yLys":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/eagle-products/eagle-sidebar/eagle-categories/eagle-categories.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EagleCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EagleCategoriesComponent", function() { return EagleCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mock_dynamic_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-dynamic-database.service */ "buM5");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");










function EagleCategoriesComponent_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r2.item, " ");
} }
function EagleCategoriesComponent_mat_tree_node_2_mat_progress_bar_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 8);
} }
function EagleCategoriesComponent_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EagleCategoriesComponent_mat_tree_node_2_mat_progress_bar_5_Template, 1, 0, "mat-progress-bar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Toggle " + node_r3.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.treeControl.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r3.item, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", node_r3.isLoading);
} }
class EagleCategoriesComponent {
    constructor(database) {
        this.getLevel = (node) => node.level;
        this.isExpandable = (node) => node.expandable;
        this.hasChild = (_, _nodeData) => _nodeData.expandable;
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new _mock_dynamic_database_service__WEBPACK_IMPORTED_MODULE_1__["DynamicDataSource"](this.treeControl, database);
        this.dataSource.data = database.initialData();
    }
}
EagleCategoriesComponent.ɵfac = function EagleCategoriesComponent_Factory(t) { return new (t || EagleCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mock_dynamic_database_service__WEBPACK_IMPORTED_MODULE_1__["DynamicDatabase"])); };
EagleCategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EagleCategoriesComponent, selectors: [["eagle-categories"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["mode", "indeterminate", "class", "example-tree-progress-bar", 4, "ngIf"], ["mode", "indeterminate", 1, "example-tree-progress-bar"]], template: function EagleCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EagleCategoriesComponent_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EagleCategoriesComponent_mat_tree_node_2_Template, 6, 4, "mat-tree-node", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [_angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeNodeDef"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeNodePadding"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeNodeToggle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBar"]], styles: [".example-tree-progress-bar[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lYWdsZS1wcm9kdWN0cy9lYWdsZS1zaWRlYmFyL2VhZ2xlLWNhdGVnb3JpZXMvZWFnbGUtY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2VhZ2xlLXByb2R1Y3RzL2VhZ2xlLXNpZGViYXIvZWFnbGUtY2F0ZWdvcmllcy9lYWdsZS1jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtdHJlZS1wcm9ncmVzcy1iYXIge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EagleCategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'eagle-categories',
                templateUrl: './eagle-categories.component.html',
                styleUrls: ['./eagle-categories.component.scss']
            }]
    }], function () { return [{ type: _mock_dynamic_database_service__WEBPACK_IMPORTED_MODULE_1__["DynamicDatabase"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-eagle-products-eagle-products-module.js.map