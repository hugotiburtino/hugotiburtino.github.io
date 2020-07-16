function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/aboutme/aboutme.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/aboutme/aboutme.component.ts ***!
    \**********************************************/

  /*! exports provided: AboutmeComponent */

  /***/
  function srcAppAboutmeAboutmeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutmeComponent", function () {
      return AboutmeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_aboutme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/aboutme.service */
    "./src/app/services/aboutme.service.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AboutmeComponent = /*#__PURE__*/function () {
      function AboutmeComponent(service) {
        _classCallCheck(this, AboutmeComponent);

        this.service = service;
      }

      _createClass(AboutmeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.service.getAboutme().subscribe(function (data) {
            _this.completeName = data.completeName;
            _this.elevatorPitch = data.elevatorPitch;
            _this.city = data.city;
            _this.status = data.status;
          }, function (err) {
            return console.error('Error occurred while fetching projects data: ', err);
          });
        }
      }]);

      return AboutmeComponent;
    }();

    AboutmeComponent.ɵfac = function AboutmeComponent_Factory(t) {
      return new (t || AboutmeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_aboutme_service__WEBPACK_IMPORTED_MODULE_1__["AboutmeService"]));
    };

    AboutmeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutmeComponent,
      selectors: [["app-aboutme"]],
      decls: 8,
      vars: 4,
      consts: [[1, "", 3, "innerHTML"]],
      template: function AboutmeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.completeName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.elevatorPitch, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Status: ", ctx.status, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.city);
        }
      },
      directives: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0bWUvYWJvdXRtZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutmeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-aboutme',
          templateUrl: './aboutme.component.html',
          styleUrls: ['./aboutme.component.css']
        }]
      }], function () {
        return [{
          type: _services_aboutme_service__WEBPACK_IMPORTED_MODULE_1__["AboutmeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./aboutme/aboutme.component */
    "./src/app/aboutme/aboutme.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _projects_panel_projects_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./projects-panel/projects-panel.component */
    "./src/app/projects-panel/projects-panel.component.ts");
    /* harmony import */


    var _skills_panel_skills_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./skills-panel/skills-panel.component */
    "./src/app/skills-panel/skills-panel.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 0,
      consts: [["autosize", "", 1, ""], ["mode", "over", 1, "sidebar"], ["drawer", ""], [3, "aboutMeBarActive"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-aboutme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("aboutMeBarActive", function AppComponent_Template_app_header_aboutMeBarActive_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-projects-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-skills-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"], _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_2__["AboutmeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _projects_panel_projects_panel_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsPanelComponent"], _skills_panel_skills_panel_component__WEBPACK_IMPORTED_MODULE_5__["SkillsPanelComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
      styles: [".sidebar[_ngcontent-%COMP%] {\n    padding: 5%;\n    max-width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xuICAgIHBhZGRpbmc6IDUlO1xuICAgIG1heC13aWR0aDogODAlO1xufVxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _submodules_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./submodules/app-routing.module */
    "./src/app/submodules/app-routing.module.ts");
    /* harmony import */


    var _submodules_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./submodules/material.module */
    "./src/app/submodules/material.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _projects_panel_projects_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./projects-panel/projects-panel.component */
    "./src/app/projects-panel/projects-panel.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _lib_idref_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./lib/idref.pipe */
    "./src/app/lib/idref.pipe.ts");
    /* harmony import */


    var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./aboutme/aboutme.component */
    "./src/app/aboutme/aboutme.component.ts");
    /* harmony import */


    var _skills_panel_skills_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./skills-panel/skills-panel.component */
    "./src/app/skills-panel/skills-panel.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _submodules_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _submodules_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _projects_panel_projects_panel_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsPanelComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _lib_idref_pipe__WEBPACK_IMPORTED_MODULE_11__["IdRefPipe"], _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_12__["AboutmeComponent"], _skills_panel_skills_panel_component__WEBPACK_IMPORTED_MODULE_13__["SkillsPanelComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _submodules_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _submodules_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _projects_panel_projects_panel_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsPanelComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _lib_idref_pipe__WEBPACK_IMPORTED_MODULE_11__["IdRefPipe"], _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_12__["AboutmeComponent"], _skills_panel_skills_panel_component__WEBPACK_IMPORTED_MODULE_13__["SkillsPanelComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _submodules_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _submodules_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 2,
      vars: 0,
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent(matIconRegistry, domSanitizer) {
        _classCallCheck(this, FooterComponent);

        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.matIconRegistry.addSvgIcon('github', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/github.svg'));
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.githubAccount = 'https://github.com/hugotiburtino';
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 8,
      vars: 1,
      consts: [["id", "contact", 1, "text-center"], ["matTooltip", "Hugo's GitHub Account", "target", "_blank", 3, "href"], ["svgIcon", "github"], ["href", "https://www.freelancermap.com/freelancers-directory/freelancer-profiles/development/183699-profil-hugo-bezerra-tiburtino-full-stack-web-developer-aus-munich.html", "target", "_blank", "title", "Profile of Hugo Bezerra Tiburtino on www.freelancermap.com", "matTooltip", "Hugo's Profile at Freelancermap"], ["src", "https://www.freelancermap.com/images/widgets/button/square-32.png"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Last update: 03 July 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.githubAccount, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]],
      styles: ["#contact[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n    justify-content: center;\n}\n\np[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-size: 0.7em;\n    float: right;\n    margin-right: 1em;\n}\n\na[_ngcontent-%COMP%] {\n    margin: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFjdCB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxucCB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG5hIHtcbiAgICBtYXJnaW46IDAuNWVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.title = 'Hugo Tiburtino';
        this.subtitle = '';
        this.aboutMeBarActive = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showAboutMe",
        value: function showAboutMe() {
          this.aboutMeBarActive.emit(true);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      outputs: {
        aboutMeBarActive: "aboutMeBarActive"
      },
      decls: 9,
      vars: 2,
      consts: [["color", "primary"], ["mat-button", "", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() {
            return ctx.showAboutMe();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitle);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, {
        aboutMeBarActive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/lib/idref.pipe.ts":
  /*!***********************************!*\
    !*** ./src/app/lib/idref.pipe.ts ***!
    \***********************************/

  /*! exports provided: IdRefPipe */

  /***/
  function srcAppLibIdrefPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdRefPipe", function () {
      return IdRefPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * Makes a hyper-reference to an id
     */

    /*
     * Raise the value exponentially
     * Takes an exponent argument that defaults to 1.
     * Usage:
     *   value | exponentialStrength:exponent
     * Example:
     *   {{ 2 | exponentialStrength:10 }}
     *   formats to: 1024
    */


    var IdRefPipe = /*#__PURE__*/function () {
      function IdRefPipe() {
        _classCallCheck(this, IdRefPipe);
      }

      _createClass(IdRefPipe, [{
        key: "transform",
        value: function transform(ref) {
          return '#' + ref;
        }
      }]);

      return IdRefPipe;
    }();

    IdRefPipe.ɵfac = function IdRefPipe_Factory(t) {
      return new (t || IdRefPipe)();
    };

    IdRefPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "idref",
      type: IdRefPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdRefPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'idref'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/lib/skill-category.enum.ts":
  /*!********************************************!*\
    !*** ./src/app/lib/skill-category.enum.ts ***!
    \********************************************/

  /*! exports provided: SkillCategory */

  /***/
  function srcAppLibSkillCategoryEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillCategory", function () {
      return SkillCategory;
    });

    var SkillCategory;

    (function (SkillCategory) {
      SkillCategory["Backend"] = "Back-end";
      SkillCategory["Frontend"] = "Front-end";
      SkillCategory["CICD"] = "CI/CD";
      SkillCategory["BestPractices"] = "Best Practices";
      SkillCategory["TDD"] = "TDD";
      SkillCategory["DBMS"] = "DBMS";
      SkillCategory["ESB"] = "ESB";
    })(SkillCategory || (SkillCategory = {}));
    /***/

  },

  /***/
  "./src/app/lib/tab.class.ts":
  /*!**********************************!*\
    !*** ./src/app/lib/tab.class.ts ***!
    \**********************************/

  /*! exports provided: Tab */

  /***/
  function srcAppLibTabClassTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab", function () {
      return Tab;
    });

    var Tab = function Tab(name, ref) {
      _classCallCheck(this, Tab);

      this.name = name;
      this.ref = ref;
    };
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lib_tab_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../lib/tab.class */
    "./src/app/lib/tab.class.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.tabs = [new _lib_tab_class__WEBPACK_IMPORTED_MODULE_1__["Tab"]('Projects', 'projects-panel'), new _lib_tab_class__WEBPACK_IMPORTED_MODULE_1__["Tab"]('Contact')];
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 2,
      vars: 0,
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects-panel/projects-panel.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/projects-panel/projects-panel.component.ts ***!
    \************************************************************/

  /*! exports provided: ProjectsPanelComponent */

  /***/
  function srcAppProjectsPanelProjectsPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsPanelComponent", function () {
      return ProjectsPanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/projects.service */
    "./src/app/services/projects.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");

    function ProjectsPanelComponent_mat_card_4_mat_chip_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tech_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tech_r4, " ");
      }
    }

    function ProjectsPanelComponent_mat_card_4_button_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "See");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProjectsPanelComponent_mat_card_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-chip-list", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectsPanelComponent_mat_card_4_mat_chip_8_Template, 2, 1, "mat-chip", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-actions", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPanelComponent_mat_card_4_Template_mat_card_actions_click_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var proj_r1 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.onClick($event.target, proj_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectsPanelComponent_mat_card_4_button_10_Template, 2, 0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Source Code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var proj_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proj_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proj_r1.summary);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", proj_r1.techs);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", proj_r1.url);
      }
    }
    /**
     * Component that is responsable for displaying data
     * about projects
     */


    var ProjectsPanelComponent = /*#__PURE__*/function () {
      /**
       * @param ProjectsService service that provides info
       * to fill up the projects list
       */
      function ProjectsPanelComponent(service) {
        _classCallCheck(this, ProjectsPanelComponent);

        this.service = service;
        this.title = 'Personal Projects';
      }

      _createClass(ProjectsPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // Get projects from ProjectService and add them to projects list
          this.service.getProjects().subscribe(function (projectsData) {
            return _this2.projects = projectsData;
          }, function (err) {
            return console.error('Error occurred while fetching projects data: ', err);
          }); // TODO: better error handling
        }
        /**
         * Handles the action button clicks of a project card
         * @param target The button clicked
         * @param project The project whose card button was clicked
         */

      }, {
        key: "onClick",
        value: function onClick(target, project) {
          /**
           * Since Angular Material wraps text of the button element
           * into a node by itself, we need to find the value of the button first
           */
          var value = target.value | target.parentElement.value;
          var SEE = 0,
              INFO = 1,
              SOURCE_CODE = 2;

          if (value === SEE) {
            window.open(project.url, '_blank').focus();
          } else if (value === INFO) {// Implementme
          } else if (value === SOURCE_CODE) {
            window.open(project.srcCodeUrl, '_blank').focus();
          }
        }
      }]);

      return ProjectsPanelComponent;
    }();

    ProjectsPanelComponent.ɵfac = function ProjectsPanelComponent_Factory(t) {
      return new (t || ProjectsPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsService"]));
    };

    ProjectsPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsPanelComponent,
      selectors: [["app-projects-panel"]],
      decls: 5,
      vars: 2,
      consts: [[1, "container"], [1, "row", "d-flex", "justify-content-center"], ["class", "project-card", 4, "ngFor", "ngForOf"], [1, "project-card"], ["selectable", "false"], ["disableRipple", "true", 4, "ngFor", "ngForOf"], [3, "click"], ["value", "0", "role", "link", "matTooltip", "See it in production", "mat-button", "", 4, "ngIf"], ["value", "2", "matTooltip", "See source code repo", "mat-button", ""], ["disableRipple", "true"], ["value", "0", "role", "link", "matTooltip", "See it in production", "mat-button", ""]],
      template: function ProjectsPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsPanelComponent_mat_card_4_Template, 13, 4, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipList"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChip"]],
      styles: [".project-card[_ngcontent-%COMP%] {\n    margin: 1em 1em;\n    width: 25em;\n}\n\nh2[_ngcontent-%COMP%] {\n    margin-top: 2em;\n    text-align: center;\n    justify-content: center;\n}\n\n.mat-chip[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n    min-height: 24px;\n}\n\n.mat-chip[_ngcontent-%COMP%]::after {\n    background-color: #e0e0e0;\n}\n\n.mat-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled):active {\n    box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMtcGFuZWwvcHJvamVjdHMtcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy1wYW5lbC9wcm9qZWN0cy1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3QtY2FyZCB7XG4gICAgbWFyZ2luOiAxZW0gMWVtO1xuICAgIHdpZHRoOiAyNWVtO1xufVxuXG5oMiB7XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1hdC1jaGlwIHtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIG1pbi1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tYXQtY2hpcDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG59XG5cbi5tYXQtY2hpcDpub3QoLm1hdC1jaGlwLWRpc2FibGVkKTphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projects-panel',
          templateUrl: './projects-panel.component.html',
          styleUrls: ['./projects-panel.component.css']
        }]
      }], function () {
        return [{
          type: _services_projects_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/aboutme.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/aboutme.service.ts ***!
    \*********************************************/

  /*! exports provided: AboutmeService */

  /***/
  function srcAppServicesAboutmeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutmeService", function () {
      return AboutmeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AboutmeService = /*#__PURE__*/function () {
      function AboutmeService(http) {
        _classCallCheck(this, AboutmeService);

        this.http = http;
        this.dataUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].aboutmeUrl;
      }
      /**
       * Reads info "about me"
       * @returns Observable<Aboutme>
       */


      _createClass(AboutmeService, [{
        key: "getAboutme",
        value: function getAboutme() {
          return this.http.get(this.dataUrl);
        }
      }]);

      return AboutmeService;
    }();

    AboutmeService.ɵfac = function AboutmeService_Factory(t) {
      return new (t || AboutmeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AboutmeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AboutmeService,
      factory: AboutmeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutmeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/projects.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/projects.service.ts ***!
    \**********************************************/

  /*! exports provided: ProjectsService */

  /***/
  function srcAppServicesProjectsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsService", function () {
      return ProjectsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /**
     * Service that provides info about projects
     */


    var ProjectsService = /*#__PURE__*/function () {
      function ProjectsService(http) {
        _classCallCheck(this, ProjectsService);

        this.http = http;
        this.dataUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].projectsUrl;
      }
      /**
       * Reads current list of projects from json file
       * @returns Observable<Project[]>
       */


      _createClass(ProjectsService, [{
        key: "getProjects",
        value: function getProjects() {
          return this.http.get(this.dataUrl);
        }
      }]);

      return ProjectsService;
    }();

    ProjectsService.ɵfac = function ProjectsService_Factory(t) {
      return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ProjectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProjectsService,
      factory: ProjectsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/skills-panel/skills-panel.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/skills-panel/skills-panel.component.ts ***!
    \********************************************************/

  /*! exports provided: SkillsPanelComponent */

  /***/
  function srcAppSkillsPanelSkillsPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsPanelComponent", function () {
      return SkillsPanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lib_skill_category_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../lib/skill-category.enum */
    "./src/app/lib/skill-category.enum.ts");
    /* harmony import */


    var _services_aboutme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/aboutme.service */
    "./src/app/services/aboutme.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");

    function SkillsPanelComponent_mat_list_3_mat_chip_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skill_r3.subject, " ");
      }
    }

    function SkillsPanelComponent_mat_list_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list-item", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-chip-list", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SkillsPanelComponent_mat_list_3_mat_chip_5_Template, 2, 1, "mat-chip", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.value);
      }
    }

    var SkillsPanelComponent = /*#__PURE__*/function () {
      function SkillsPanelComponent(service) {
        _classCallCheck(this, SkillsPanelComponent);

        this.service = service;
        this.title = 'Programming Skills';
        this.category = _lib_skill_category_enum__WEBPACK_IMPORTED_MODULE_1__["SkillCategory"];
        /** Map of skills
         * Key: Skill category
         * Value: Array of skills
         */

        this.skillsMap = new Map();
      }

      _createClass(SkillsPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.service.getAboutme().subscribe(function (data) {
            _this3.skills = data.skills;

            _this3.categorize();
          }, function (err) {
            return console.error('Error occurred while fetching projects data: ', err);
          });
        }
        /**
         * Method that fills up the Map of skills
         */

      }, {
        key: "categorize",
        value: function categorize() {
          var _this4 = this;

          var _loop = function _loop() {
            var item = _Object$keys[_i];

            _this4.skillsMap.set(_this4.category[item], _this4.skills.filter(function (sk) {
              return sk.categories && sk.categories.includes(_this4.category[item]);
            }));
          };

          for (var _i = 0, _Object$keys = Object.keys(this.category); _i < _Object$keys.length; _i++) {
            _loop();
          }
        }
      }]);

      return SkillsPanelComponent;
    }();

    SkillsPanelComponent.ɵfac = function SkillsPanelComponent_Factory(t) {
      return new (t || SkillsPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_aboutme_service__WEBPACK_IMPORTED_MODULE_2__["AboutmeService"]));
    };

    SkillsPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillsPanelComponent,
      selectors: [["app-skills-panel"]],
      decls: 5,
      vars: 4,
      consts: [[1, "container-fluid"], ["role", "list", 4, "ngFor", "ngForOf"], ["role", "list"], [1, "row", "d-flex", "justify-content-center"], ["role", "listitem", 1, "d-flex", "justify-content-center"], ["selectable", "false", 1, "col-sm-12", "d-flex", "justify-content-center"], ["color", "primary", "selected", "", "disableRipple", "true", 4, "ngFor", "ngForOf"], ["color", "primary", "selected", "", "disableRipple", "true"]],
      template: function SkillsPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SkillsPanelComponent_mat_list_3_Template, 6, 2, "mat-list", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx.skillsMap));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChip"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]],
      styles: ["h2[_ngcontent-%COMP%] {\n    text-align: center;\n    justify-content: center;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n    padding: 2em;\n    background-color: #cccccc\n}\n\n.mat-chip[_ngcontent-%COMP%]::after {\n    background-color: var(--indigo);\n}\n\n.mat-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled):active {\n    box-shadow: none;\n}\n\n.mat-chip-list[_ngcontent-%COMP%] {\n    margin: 0 1em 0 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzLXBhbmVsL3NraWxscy1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc2tpbGxzLXBhbmVsL3NraWxscy1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2Ncbn1cblxuLm1hdC1jaGlwOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvKTtcbn1cblxuLm1hdC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLm1hdC1jaGlwLWxpc3Qge1xuICAgIG1hcmdpbjogMCAxZW0gMCAxZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-skills-panel',
          templateUrl: './skills-panel.component.html',
          styleUrls: ['./skills-panel.component.css']
        }]
      }], function () {
        return [{
          type: _services_aboutme_service__WEBPACK_IMPORTED_MODULE_2__["AboutmeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/submodules/app-routing.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/submodules/app-routing.module.ts ***!
    \**************************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppSubmodulesAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/submodules/material.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/submodules/material.module.ts ***!
    \***********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppSubmodulesMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: false,
      aboutmeUrl: '../../assets/aboutme.json',
      projectsUrl: '../../assets/projects.json'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/hugo/ws/hugotiburtino.github/client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map