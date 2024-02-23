import { Link } from "react-router-dom";
const SideBar = () => {
    const sideMenus=[
        {
            id:1,
            menu:"Mood",
            path:"mood"
        },
        {
            id:2,
            menu:"Interests",
            path:"interests"
        },
        {
            id:3,
            menu:"Preferences",
            path:"preferences"
        },
      
    ]
  return (
    <>
      <div
        class="main-menu menu-fixed menu-light menu-accordion menu-shadow"
        data-scroll-to-active="true"
      >
        <div class="navbar-header">
          <ul class="nav navbar-nav flex-row">
            <li class="nav-item me-auto">
              <a
                class="navbar-brand"
                href="../../../html/ltr/vertical-menu-template-bordered/index.html"
              >
                <span class="brand-logo"></span>
                <h2 class="brand-text">Vuexy</h2>
              </a>
            </li>
            <li class="nav-item nav-toggle">
              <a
                class="nav-link modern-nav-toggle pe-0"
                data-bs-toggle="collapse"
              >
                <i
                  class="d-block d-xl-none text-primary toggle-icon font-medium-4"
                  data-feather="x"
                ></i>
                <i
                  class="d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary"
                  data-feather="disc"
                  data-ticon="disc"
                ></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="shadow-bottom"></div>
        <div class="main-menu-content">
          <ul
            class="navigation navigation-main"
            id="main-menu-navigation"
            data-menu="menu-navigation"
          >
            <li class=" nav-item">
              <Link class="d-flex align-items-center" to="/">
                <i data-feather="home"></i>
                <span class="menu-title text-truncate" data-i18n="Dashboards">
                  Dashboards
                </span>
                <span class="badge badge-light-warning rounded-pill ms-auto me-1">
                  2
                </span>
              </Link>
         
            </li>
            <li class=" navigation-header">
              <span data-i18n="Apps &amp; Pages">Apps &amp; Pages</span>
              <i data-feather="more-horizontal"></i>
            </li>
            {
                sideMenus.map((menu)=>{
                    return(
                        <li class=" nav-item" key={menu.id}>
                        <Link class="d-flex align-items-center" to={`${menu.path}`}>
                          <i data-feather="mail"></i>
                          <span class="menu-title text-truncate" data-i18n="Email">
                            {menu.menu}
                          </span>
                        </Link>
                      </li>
                    )
                })
            }
           
         
           
            <li class=" navigation-header">
              <span data-i18n="User Interface">User Interface</span>
              <i data-feather="more-horizontal"></i>
            </li>
            <li class=" nav-item">
              <a class="d-flex align-items-center" href="ui-typography.html">
                <i data-feather="type"></i>
                <span class="menu-title text-truncate" data-i18n="Typography">
                  Typography
                </span>
              </a>
            </li>
            <li class=" nav-item">
              <a class="d-flex align-items-center" href="ui-feather.html">
                <i data-feather="eye"></i>
                <span class="menu-title text-truncate" data-i18n="Feather">
                  Feather
                </span>
              </a>
            </li>
            <li class=" nav-item">
              <a class="d-flex align-items-center" href="#">
                <i data-feather="credit-card"></i>
                <span class="menu-title text-truncate" data-i18n="Card">
                  Card
                </span>
                <span class="badge badge-light-success rounded-pill ms-auto me-1">
                  New
                </span>
              </a>
              <ul class="menu-content">
                <li>
                  <a class="d-flex align-items-center" href="card-basic.html">
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Basic">
                      Basic
                    </span>
                  </a>
                </li>
                <li>
                  <a class="d-flex align-items-center" href="card-advance.html">
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Advance">
                      Advance
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="card-statistics.html"
                  >
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Statistics"
                    >
                      Statistics
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="card-analytics.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Analytics">
                      Analytics
                    </span>
                  </a>
                </li>
                <li>
                  <a class="d-flex align-items-center" href="card-actions.html">
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Card Actions"
                    >
                      Card Actions
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li class=" nav-item">
              <a class="d-flex align-items-center" href="#">
                <i data-feather="briefcase"></i>
                <span class="menu-title text-truncate" data-i18n="Components">
                  Components
                </span>
              </a>
              <ul class="menu-content">
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-accordion.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Accordion">
                      Accordion
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-alerts.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Alerts">
                      Alerts
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-avatar.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Avatar">
                      Avatar
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-badges.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Badges">
                      Badges
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-breadcrumbs.html"
                  >
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Breadcrumbs"
                    >
                      Breadcrumbs
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-buttons.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Buttons">
                      Buttons
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-carousel.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Carousel">
                      Carousel
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-collapse.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Collapse">
                      Collapse
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-divider.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Divider">
                      Divider
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-dropdowns.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Dropdowns">
                      Dropdowns
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-list-group.html"
                  >
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="List Group"
                    >
                      List Group
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-modals.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Modals">
                      Modals
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-navs-component.html"
                  >
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Navs Component"
                    >
                      Navs Component
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-offcanvas.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Offcanvas">
                      Offcanvas
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-pagination.html"
                  >
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Pagination"
                    >
                      Pagination
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-pill-badges.html"
                  >
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Pill Badges"
                    >
                      Pill Badges
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-pills-component.html"
                  >
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Pills Component"
                    >
                      Pills Component
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-popovers.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Popovers">
                      Popovers
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-progress.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Progress">
                      Progress
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-spinner.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Spinner">
                      Spinner
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-tabs-component.html"
                  >
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Tabs Component"
                    >
                      Tabs Component
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-timeline.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Timeline">
                      Timeline
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-bs-toast.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Toasts">
                      Toasts
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="component-tooltips.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Tooltips">
                      Tooltips
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li class=" nav-item">
              <a class="d-flex align-items-center" href="#">
                <i data-feather="box"></i>
                <span class="menu-title text-truncate" data-i18n="Extensions">
                  Extensions
                </span>
              </a>
              <ul class="menu-content">
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="ext-component-sweet-alerts.html"
                  >
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Sweet Alert"
                    >
                      Sweet Alert
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="ext-component-blockui.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Block UI">
                      BlockUI
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="ext-component-toastr.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Toastr">
                      Toastr
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="ext-component-sliders.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Sliders">
                      Sliders
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="ext-component-drag-drop.html"
                  >
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Drag &amp; Drop"
                    >
                      Drag &amp; Drop
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="ext-component-tour.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Tour">
                      Tour
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="ext-component-clipboard.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Clipboard">
                      Clipboard
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="ext-component-media-player.html"
                  >
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Media player"
                    >
                      Media Player
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="ext-component-context-menu.html"
                  >
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Context Menu"
                    >
                      Context Menu
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="ext-component-swiper.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="swiper">
                      Swiper
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="ext-component-tree.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Tree">
                      Tree
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="ext-component-ratings.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Ratings">
                      Ratings
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="ext-component-i18n.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="l18n">
                      l18n
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li class=" nav-item">
              <a class="d-flex align-items-center" href="#">
                <i data-feather="layout"></i>
                <span class="menu-title text-truncate" data-i18n="Page Layouts">
                  Page Layouts
                </span>
              </a>
              <ul class="menu-content">
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="layout-collapsed-menu.html"
                  >
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Collapsed Menu"
                    >
                      Collapsed Menu
                    </span>
                  </a>
                </li>
                <li>
                  <a class="d-flex align-items-center" href="layout-full.html">
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Layout Full"
                    >
                      Layout Full
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="layout-without-menu.html"
                  >
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Without Menu"
                    >
                      Without Menu
                    </span>
                  </a>
                </li>
                <li>
                  <a class="d-flex align-items-center" href="layout-empty.html">
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Layout Empty"
                    >
                      Layout Empty
                    </span>
                  </a>
                </li>
                <li>
                  <a class="d-flex align-items-center" href="layout-blank.html">
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Layout Blank"
                    >
                      Layout Blank
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li class=" navigation-header">
              <span data-i18n="Forms &amp; Tables">Forms &amp; Tables</span>
              <i data-feather="more-horizontal"></i>
            </li>
            <li class=" nav-item">
              <a class="d-flex align-items-center" href="#">
                <i data-feather="copy"></i>
                <span
                  class="menu-title text-truncate"
                  data-i18n="Form Elements"
                >
                  Form Elements
                </span>
              </a>
              <ul class="menu-content">
                <li>
                  <a class="d-flex align-items-center" href="form-input.html">
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Input">
                      Input
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="form-input-groups.html"
                  >
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Input Groups"
                    >
                      Input Groups
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="form-input-mask.html"
                  >
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Input Mask"
                    >
                      Input Mask
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="form-textarea.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Textarea">
                      Textarea
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="form-checkbox.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Checkbox">
                      Checkbox
                    </span>
                  </a>
                </li>
                <li>
                  <a class="d-flex align-items-center" href="form-radio.html">
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Radio">
                      Radio
                    </span>
                  </a>
                </li>
                <li>
                  <a class="d-flex align-items-center" href="form-switch.html">
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Switch">
                      Switch
                    </span>
                  </a>
                </li>
                <li>
                  <a class="d-flex align-items-center" href="form-select.html">
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Select">
                      Select
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="form-number-input.html"
                  >
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Number Input"
                    >
                      Number Input
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="form-file-uploader.html"
                  >
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="File Uploader"
                    >
                      File Uploader
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="form-quill-editor.html"
                  >
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Quill Editor"
                    >
                      Quill Editor
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="form-date-time-picker.html"
                  >
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Date &amp; Time Picker"
                    >
                      Date &amp; Time Picker
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li class=" nav-item">
              <a class="d-flex align-items-center" href="form-layout.html">
                <i data-feather="box"></i>
                <span class="menu-title text-truncate" data-i18n="Form Layout">
                  Form Layout
                </span>
              </a>
            </li>
            <li class=" nav-item">
              <a class="d-flex align-items-center" href="form-wizard.html">
                <i data-feather="package"></i>
                <span class="menu-title text-truncate" data-i18n="Form Wizard">
                  Form Wizard
                </span>
              </a>
            </li>
            <li class=" nav-item">
              <a class="d-flex align-items-center" href="form-validation.html">
                <i data-feather="check-circle"></i>
                <span
                  class="menu-title text-truncate"
                  data-i18n="Form Validation"
                >
                  Form Validation
                </span>
              </a>
            </li>
            <li class=" nav-item">
              <a class="d-flex align-items-center" href="form-repeater.html">
                <i data-feather="rotate-cw"></i>
                <span
                  class="menu-title text-truncate"
                  data-i18n="Form Repeater"
                >
                  Form Repeater
                </span>
              </a>
            </li>
            <li class=" nav-item">
              <a class="d-flex align-items-center" href="table-bootstrap.html">
                <i data-feather="server"></i>
                <span class="menu-title text-truncate" data-i18n="Table">
                  Table
                </span>
              </a>
            </li>
            <li class=" nav-item">
              <a class="d-flex align-items-center" href="#">
                <i data-feather="grid"></i>
                <span class="menu-title text-truncate" data-i18n="Datatable">
                  Datatable
                </span>
              </a>
              <ul class="menu-content">
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="table-datatable-basic.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Basic">
                      Basic
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="table-datatable-advanced.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Advanced">
                      Advanced
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li class=" navigation-header">
              <span data-i18n="Charts &amp; Maps">Charts &amp; Maps</span>
              <i data-feather="more-horizontal"></i>
            </li>
            <li class=" nav-item">
              <a class="d-flex align-items-center" href="#">
                <i data-feather="pie-chart"></i>
                <span class="menu-title text-truncate" data-i18n="Charts">
                  Charts
                </span>
                <span class="badge badge-light-danger rounded-pill ms-auto me-2">
                  2
                </span>
              </a>
              <ul class="menu-content">
                <li>
                  <a class="d-flex align-items-center" href="chart-apex.html">
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Apex">
                      Apex
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="chart-chartjs.html"
                  >
                    <i data-feather="circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Chartjs">
                      Chartjs
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li class=" nav-item">
              <a class="d-flex align-items-center" href="maps-leaflet.html">
                <i data-feather="map"></i>
                <span class="menu-title text-truncate" data-i18n="Leaflet Maps">
                  Leaflet Maps
                </span>
              </a>
            </li>
            <li class=" navigation-header">
              <span data-i18n="Misc">Misc</span>
              <i data-feather="more-horizontal"></i>
            </li>
            <li class=" nav-item">
              <a class="d-flex align-items-center" href="#">
                <i data-feather="menu"></i>
                <span class="menu-title text-truncate" data-i18n="Menu Levels">
                  Menu Levels
                </span>
              </a>
              <ul class="menu-content">
                <li>
                  <a class="d-flex align-items-center" href="#">
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Second Level"
                    >
                      Second Level 2.1
                    </span>
                  </a>
                </li>
                <li>
                  <a class="d-flex align-items-center" href="#">
                    <i data-feather="circle"></i>
                    <span
                      class="menu-item text-truncate"
                      data-i18n="Second Level"
                    >
                      Second Level 2.2
                    </span>
                  </a>
                  <ul class="menu-content">
                    <li>
                      <a class="d-flex align-items-center" href="#">
                        <span
                          class="menu-item text-truncate"
                          data-i18n="Third Level"
                        >
                          Third Level 3.1
                        </span>
                      </a>
                    </li>
                    <li>
                      <a class="d-flex align-items-center" href="#">
                        <span
                          class="menu-item text-truncate"
                          data-i18n="Third Level"
                        >
                          Third Level 3.2
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="disabled nav-item">
              <a class="d-flex align-items-center" href="#">
                <i data-feather="eye-off"></i>
                <span
                  class="menu-title text-truncate"
                  data-i18n="Disabled Menu"
                >
                  Disabled Menu
                </span>
              </a>
            </li>
            <li class=" nav-item">
              <a
                class="d-flex align-items-center"
                href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation"
                target="_blank"
              >
                <i data-feather="folder"></i>
                <span
                  class="menu-title text-truncate"
                  data-i18n="Documentation"
                >
                  Documentation
                </span>
              </a>
            </li>
            <li class=" nav-item">
              <a
                class="d-flex align-items-center"
                href="https://pixinvent.ticksy.com/"
                target="_blank"
              >
                <i data-feather="life-buoy"></i>
                <span
                  class="menu-title text-truncate"
                  data-i18n="Raise Support"
                >
                  Raise Support
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default SideBar;
