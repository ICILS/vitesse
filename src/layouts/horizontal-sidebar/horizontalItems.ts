export default [
  {
    group: '/dashboards',
    model: false,
    icon: 'i-feather-home',
    title: 'Dashboards',
    class: 'two-column',
    to: '/dashboards',
    children: [
      {
        title: 'Analytical',
        icon: 'i-feather-mdi mdi-adjust',
        to: '/dashboards/analytical',
      },
      {
        title: 'Classic',
        icon: 'i-feather-mdi mdi-adjust',
        to: '/dashboards/classic',
      },
      {
        title: 'Demographical',
        icon: 'i-feather-mdi mdi-adjust',
        to: '/dashboards/demographical',
      },
      {
        title: 'Minimal',
        icon: 'i-feather-mdi mdi-adjust',
        to: '/dashboards/minimal',
      },
      {
        title: 'eCommerce',
        icon: 'i-feather-mdi mdi-adjust',
        to: '/dashboards/ecommerce',
      },
      {
        title: 'Modern',
        icon: 'i-feather-mdi mdi-adjust',
        to: '/dashboards/modern',
      },
    ],
  },

  {
    group: '/apps',
    model: false,
    icon: 'i-feather-inbox',
    title: 'Apps',
    to: '/apps',
    children: [
      {
        icon: 'i-feather-mdi mdi-comment-outline',
        title: 'Chat',
        to: '/apps/chat',
      },

      {
        icon: 'i-feather-mdi mdi-calendar',
        title: 'Calendar',
        to: '/apps/fullcalendar',
      },
      {
        icon: 'i-feather-mdi mdi-shopping',
        title: 'Ecommerce-Shop',
        to: '/apps/shop',
      },
      {
        icon: 'i-feather-mdi mdi-phone',
        title: 'Contact List',
        to: '/apps/contact-list',
      },
      {
        icon: 'i-feather-mdi mdi-phone-voip',
        title: 'Contact Grid',
        to: '/apps/contact-grid',
      },
      {
        icon: 'i-feather-mdi mdi-playlist-plus',
        title: 'Todo',
        to: '/apps/email/todo',
      },
    ],
  },

  {
    group: '/uicomponents',
    model: false,
    icon: 'i-feather-grid',
    title: 'Ui',
    extraclass: 'mega-dropdown',
    to: '/ui-components',
    children: [
      {
        title: 'Alerts',
        icon: 'i-feather-mdi mdi-alert',
        to: '/ui-components/alert',
      },
      {
        title: 'Avatar',
        icon: 'i-feather-mdi mdi-account-circle',
        to: '/ui-components/avatar',
      },
      {
        title: 'Badge',
        icon: 'i-feather-mdi mdi-relative-scale',
        to: '/ui-components/badge',
      },
      {
        title: 'Banner',
        icon: 'i-feather-mdi mdi-box-shadow',
        to: '/ui-components/banner',
      },
      {
        title: 'Appbar',
        icon: 'i-feather-mdi mdi-arrange-bring-to-front',
        to: '/ui-components/appbar',
      },
      {
        title: 'Toolbar',
        icon: 'i-feather-mdi mdi-table-column-plus-after',
        to: '/ui-components/toolbar',
      },
      {
        title: 'Systembar',
        icon: 'i-feather-mdi mdi-format-float-left',
        to: '/ui-components/systembar',
      },
      {
        title: 'Breadcrumb',
        icon: 'i-feather-mdi mdi-equal',
        to: '/ui-components/breadcrumb',
      },
      {
        title: 'Buttons',
        icon: 'i-feather-mdi mdi-toggle-switch',
        to: '/ui-components/buttons',
      },
      {
        title: 'Cards',
        icon: 'i-feather-mdi mdi-cards-outline',
        to: '/ui-components/cards',
      },
      {
        title: 'Carousel',
        icon: 'i-feather-mdi mdi-view-carousel',
        to: '/ui-components/carousel',
      },
      {
        title: 'Chips',
        icon: 'i-feather-mdi mdi-checkbox-multiple-blank-outline',
        to: '/ui-components/chips',
      },
      {
        title: 'Dialogs',
        icon: 'i-feather-mdi mdi-tablet',
        to: '/ui-components/dialogs',
      },
      {
        title: 'Dividers',
        icon: 'i-feather-mdi mdi-bandcamp',
        to: '/ui-components/dividers',
      },
      {
        title: 'Expansion Panel',
        icon: 'i-feather-mdi mdi-credit-card-multiple',
        to: '/ui-components/expansionpanel',
      },
      {
        title: 'Footer',
        icon: 'i-feather-mdi mdi-view-agenda',
        to: '/ui-components/footer',
      },
      {
        title: 'Grids',
        icon: 'i-feather-mdi mdi-grid',
        to: '/ui-components/grids',
      },
      {
        title: 'Button Group',
        icon: 'i-feather-mdi mdi-hexagon-multiple',
        to: '/ui-components/button-group',
      },
      {
        title: 'Chip Group',
        icon: 'i-feather-mdi mdi-image-filter-vintage',
        to: '/ui-components/chip-group',
      },
      {
        title: 'Item Group',
        icon: 'i-feather-mdi mdi-layers',
        to: '/ui-components/item-group',
      },
      {
        title: 'Slide Group',
        icon: 'i-feather-mdi mdi-recycle',
        to: '/ui-components/slide-group',
      },
      {
        title: 'Images',
        icon: 'i-feather-mdi mdi-image-area',
        to: '/ui-components/images',
      },

      {
        title: 'Menus',
        icon: 'i-feather-mdi mdi-launch',
        to: '/ui-components/menus',
      },
      {
        title: 'Navigation Drawers',
        icon: 'i-feather-mdi mdi-image-broken-variant',
        to: '/ui-components/navigation-drawers',
      },
      {
        title: 'Pagination',
        icon: 'i-feather-mdi mdi-book-open-variant',
        to: '/ui-components/pagination',
      },
      {
        title: 'Progress Circular',
        icon: 'i-feather-mdi mdi-compass',
        to: '/ui-components/progress-circular',
      },
      {
        title: 'Progress Linear',
        icon: 'i-feather-mdi mdi-crosshairs',
        to: '/ui-components/progress-linear',
      },
      {
        title: 'Rating',
        icon: 'i-feather-mdi mdi-star-circle',
        to: '/ui-components/rating',
      },
      {
        title: 'Tabs',
        icon: 'i-feather-mdi mdi-sort-variant',
        to: '/ui-components/tabs',
      },
      {
        title: 'Timeline',
        icon: 'i-feather-mdi mdi-clock-end',
        to: '/ui-components/timeline',
      },
      {
        title: 'Tooltips',
        icon: 'i-feather-mdi mdi-image-filter-vintage',
        to: '/ui-components/tooltips',
      },
      {
        title: 'Flex',
        icon: 'i-feather-mdi mdi-application',
        to: '/style-animation/flex',
      },
      {
        title: 'Elevation',
        icon: 'i-feather-mdi mdi-assistant',
        to: '/style-animation/levation',
      },
      {
        title: 'Spacing',
        icon: 'i-feather-mdi mdi-bridge',
        to: '/style-animation/spacing',
      },
      {
        title: 'Text and Typography',
        icon: 'i-feather-mdi mdi-bowling',
        to: '/style-animation/text-typography',
      },
      {
        title: 'Transitions',
        icon: 'i-feather-mdi mdi-text-shadow',
        to: '/style-animation/transitions',
      },
    ],
  },

  {
    group: '/charts',
    model: false,
    icon: 'i-feather-bar-chart-2',
    title: 'Charts',
    to: '/charts/apexcharts',
  },

  {
    group: '/form-elements',
    model: false,
    icon: 'i-feather-file-text',
    title: 'Forms',
    extraclass: 'two-column',
    to: '/form-elements',
    children: [
      {
        title: 'Autocompletes',
        icon: 'i-feather-mdi mdi-priority-low',
        to: '/form-elements/feautocompletes',
      },
      {
        title: 'Combobox',
        icon: 'i-feather-mdi mdi-rounded-corner',
        to: '/form-elements/fecombobox',
      },
      {
        title: 'File Inputs',
        icon: 'i-feather-mdi mdi-select-all',
        to: '/form-elements/fefileinputs',
      },
      {
        title: 'Inputs',
        icon: 'i-feather-mdi mdi-shape-plus',
        to: '/form-elements/feinputs',
      },
      {
        title: 'Selection Controls',
        icon: 'i-feather-mdi mdi-relative-scale',
        to: '/form-elements/feselectioncontrols',
      },
      {
        title: 'Selects',
        icon: 'i-feather-mdi mdi-tab-unselected',
        to: '/form-elements/feselects',
      },
      {
        title: 'Sliders',
        icon: 'i-feather-mdi mdi-vector-difference-ba',
        to: '/form-elements/fesliders',
      },
      {
        title: 'Textareas',
        icon: 'i-feather-mdi mdi-code-greater-than',
        to: '/form-elements/fetextareas',
      },
      {
        title: 'Textfields',
        icon: 'i-feather-mdi mdi-border-vertical',
        to: '/form-elements/fetextfields',
      },

      {
        title: 'Form Action',
        icon: 'i-feather-mdi mdi-code-equal',
        to: '/form-layouts/flformaction',
      },
      {
        title: 'Form Basic',
        icon: 'i-feather-mdi mdi-content-duplicate',
        to: '/form-layouts/flformbasic',
      },
      {
        title: 'Form Horizontal',
        icon: 'i-feather-mdi mdi-cards-variant',
        to: '/form-layouts/flformhorizontal',
      },
      {
        title: 'Custom Cards',
        icon: 'i-feather-mdi mdi-cards-variant',
        to: '/widgets/custom-cards',
      },
    ],
  },

  {
    group: '/tables',
    model: false,
    icon: 'i-feather-layout',
    title: 'Tables',
    to: '/tables',
    children: [
      {
        title: 'Simple Table',
        icon: 'i-feather-mdi mdi-table',
        to: '/tables',
      },
      {
        title: 'Editable Table',
        icon: 'i-feather-mdi mdi-table-edit',
        to: '/editable-table',
      },
    ],
  },

  {
    group: '/extra',
    model: false,
    icon: 'i-feather-layers',
    title: 'Extra',
    to: '/icons',
    children: [
      {
        title: 'Boxed Login',
        icon: 'i-feather-mdi mdi-account-key',
        to: '/authentication/boxedlogin',
      },
      {
        title: 'Login',
        icon: 'i-feather-mdi mdi-account-key',
        to: '/authentication/fulllogin',
      },
      {
        title: 'Boxed Register',
        icon: 'i-feather-mdi mdi-account-plus',
        to: '/authentication/boxedregister',
      },
      {
        title: 'Register',
        icon: 'i-feather-mdi mdi-account-plus',
        to: '/authentication/fullregister',
      },
      {
        title: 'Error',
        icon: 'i-feather-mdi mdi-alert-outline',
        to: '/authentication/error',
      },
      {
        title: 'Material',
        icon: 'i-feather-mdi mdi-emoticon',
        to: '/icons/material',
      },
      {
        title: 'Feather',
        icon: 'i-feather-mdi mdi-emoticon-cool',
        to: '/icons/feather',
      },
    ],
  },
]
