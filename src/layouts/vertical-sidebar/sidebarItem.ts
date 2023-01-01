export default [
  { header: 'Home' },
  {
    title: 'Analytical',
    icon: 'i-feather-pie-chart',
    to: '/dashboards/analytical',
  },
  {
    title: 'Classic',
    icon: 'i-feather-archive',
    to: '/dashboards/classic',
  },
  {
    header: 'Apps',
  },
  {
    title: 'Chat',
    icon: 'i-feather-message-square',
    to: '/apps/chat',
  },
  {
    title: 'Contact List',
    icon: 'i-feather-phone',
    to: '/apps/contact-list',
  },
  {
    title: 'Contact Grid',
    icon: 'i-feather-smartphone',
    to: '/apps/contact-grid',
  },
  {
    title: 'Todo',
    icon: 'i-feather-check-square',
    to: '/apps/todo',
  },
  { header: 'Components' },
  {
    group: '/ui-components/',

    model: false,
    icon: 'i-feather-grid',
    title: 'UI Components',
    children: [
      {
        title: 'Alerts',
        icon: 'i-feather-disc',
        to: '/ui-components/alerts',
      },
      {
        title: 'Avatar',
        icon: 'i-feather-disc',
        to: '/ui-components/avatar',
      },
      {
        title: 'Badge',
        icon: 'i-feather-disc',
        to: '/ui-components/badge',
      },
      {
        title: 'Banner',
        icon: 'i-feather-disc',
        to: '/ui-components/banner',
      },
      {
        title: 'Appbar',
        icon: 'i-feather-disc',
        to: '/ui-components/appbar',
      },
      {
        title: 'Toolbar',
        icon: 'i-feather-disc',
        to: '/ui-components/toolbar',
      },
      {
        title: 'Systembar',
        icon: 'i-feather-disc',
        to: '/ui-components/systembar',
      },
      {
        title: 'Breadcrumb',
        icon: 'i-feather-disc',
        to: '/ui-components/breadcrumb',
      },
      {
        title: 'Buttons',
        icon: 'i-feather-disc',
        to: '/ui-components/buttons',
      },
      {
        title: 'Cards',
        icon: 'i-feather-disc',
        to: '/ui-components/cards',
      },
      {
        title: 'Carousel',
        icon: 'i-feather-disc',
        to: '/ui-components/carousel',
      },
      {
        title: 'Chips',
        icon: 'i-feather-disc',
        to: '/ui-components/chips',
      },
      {
        title: 'Dialogs',
        icon: 'i-feather-disc',
        to: '/ui-components/dialogs',
      },
      {
        title: 'Dividers',
        icon: 'i-feather-disc',
        to: '/ui-components/dividers',
      },
      {
        title: 'Expansion Panel',
        icon: 'i-feather-disc',
        to: '/ui-components/expansionpanel',
      },
      {
        title: 'Footer',
        icon: 'i-feather-disc',
        to: '/ui-components/footer',
      },
      {
        title: 'Grids',
        icon: 'i-feather-disc',
        to: '/ui-components/grids',
      },
      {
        title: 'Button Groups',
        icon: 'i-feather-disc',
        to: '/ui-components/button-groups',
      },
      {
        title: 'Chip Groups',
        icon: 'i-feather-disc',
        to: '/ui-components/chip-groups',
      },
      {
        title: 'Item Group',
        icon: 'i-feather-disc',
        to: '/ui-components/item-group',
      },
      {
        title: 'Slide Group',
        icon: 'i-feather-disc',
        to: '/ui-components/slide-group',
      },
      {
        title: 'Images',
        icon: 'i-feather-disc',
        to: '/ui-components/images',
      },
      {
        title: 'Menus',
        icon: 'i-feather-disc',
        to: '/ui-components/menus',
      },
      {
        title: 'Navigation Drawers',
        icon: 'i-feather-disc',
        to: '/ui-components/navigation-drawers',
      },
      {
        title: 'Pagination',
        icon: 'i-feather-disc',
        to: '/ui-components/pagination',
      },
      {
        title: 'Progress Circular',
        icon: 'i-feather-disc',
        to: '/ui-components/progress-circular',
      },
      {
        title: 'Progress Linear',
        icon: 'i-feather-disc',
        to: '/ui-components/progress-linear',
      },
      {
        title: 'Rating',
        icon: 'i-feather-disc',
        to: '/ui-components/rating',
      },
      {
        title: 'Tabs',
        icon: 'i-feather-disc',
        to: '/ui-components/tabs',
      },
      {
        title: 'Timeline',
        icon: 'i-feather-disc',
        to: '/ui-components/timeline',
      },
      {
        title: 'Tooltips',
        icon: 'i-feather-disc',
        to: '/ui-components/tooltips',
      },
    ],
  },
  {
    group: '/style-animation',
    model: false,
    icon: 'i-feather-loader',
    title: 'Style & Animation',
    children: [
      {
        title: 'Border Radius',
        icon: 'i-feather-disc',
        to: '/style-animation/border-radius',
      },
      {
        title: 'Elevation',
        icon: 'i-feather-disc',
        to: '/style-animation/elevation',
      },
      {
        title: 'Flex',
        icon: 'i-feather-disc',
        to: '/style-animation/flex',
      },
      {
        title: 'Text and Typography',
        icon: 'i-feather-disc',
        to: '/style-animation/text-typography',
      },
      {
        title: 'Transitions',
        icon: 'i-feather-disc',
        to: '/style-animation/transitions',
      },
    ],
  },
  { header: 'Charts' },
  {
    title: 'ApexCharts',
    icon: 'i-feather-bar-chart-2',
    to: '/charts/apex-charts',
  },
  { header: 'Forms' },
  {
    group: '/form-elements',
    model: false,
    icon: 'i-feather-file',
    title: 'Form Elements',
    children: [
      {
        title: 'Autocompletes',
        icon: 'i-feather-disc',
        to: '/form-elements/feautocompletes',
      },
      {
        title: 'Combobox',
        icon: 'i-feather-disc',
        to: '/form-elements/fecombobox',
      },
      {
        title: 'File Inputs',
        icon: 'i-feather-disc',
        to: '/form-elements/fefileinputs',
      },
      {
        title: 'Inputs',
        icon: 'i-feather-disc',
        to: '/form-elements/feinputs',
      },

      {
        title: 'Selection Controls',
        icon: 'i-feather-disc',
        to: '/form-elements/feselectioncontrols',
      },
      {
        title: 'Selects',
        icon: 'i-feather-disc',
        to: '/form-elements/feselects',
      },
      {
        title: 'Sliders',
        icon: 'i-feather-disc',
        to: '/form-elements/fesliders',
      },
      {
        title: 'Textareas',
        icon: 'i-feather-disc',
        to: '/form-elements/fetextareas',
      },
      {
        title: 'Textfields',
        icon: 'i-feather-disc',
        to: '/form-elements/fetextfields',
      },
    ],
  },
  {
    group: '/form-layouts',
    model: false,
    icon: 'i-feather-layout',
    title: 'Form Layouts',
    children: [
      {
        title: 'Form Action',
        icon: 'i-feather-disc',
        to: '/form-layouts/form-action',
      },
      {
        title: 'Form Basic',
        icon: 'i-feather-disc',
        to: '/form-layouts/form-basic',
      },

      {
        title: 'Form Horizontal',
        icon: 'i-feather-disc',
        to: '/form-layouts/form-horizontal',
      },
    ],
  },
  { header: 'Widgets' },
  {
    title: 'Custom Cards',
    icon: 'i-feather-copy',
    to: '/widgets/custom-cards',
  },
  { header: 'Tables' },
  {
    title: 'Simple Table',
    icon: 'i-feather-layout',
    to: '/tables',
  },
  {
    title: 'Editable Table',
    icon: 'i-feather-edit',
    to: '/editable-table',
  },
  { header: 'Authentication' },
  {
    title: 'Boxed Login',
    icon: 'i-feather-log-in',
    to: '/authentication/boxedlogin',
  },
  {
    title: 'Login',
    icon: 'i-feather-unlock',
    to: '/authentication/fulllogin',
  },
  {
    title: 'Boxed Register',
    icon: 'i-feather-user-plus',
    to: '/authentication/boxedregister',
  },
  {
    title: 'Register',
    icon: 'i-feather-user',
    to: '/authentication/fullregister',
  },
  {
    title: 'Error',
    icon: 'i-feather-alert-triangle',
    to: '/authentication/error',
  },
  { header: 'Icons' },
  /* {
    title: 'Material',
    icon: 'i-feather-grid',
    to: '/icons/material',
  }, */
  {
    title: 'Feather',
    icon: 'i-feather-feather',
    to: '/icons/feather',
  },
]
