import {
  faMicroscope,
  faCompass,
  faStretcher,
  faUserDoctorMessage,
  faUsersMedical,
  faGrid2,
  faCalendarPen,
  faHouseMedical,
  faHospital,
  faUserInjured,
  faChartMixed,
  faFileChartPie,
  faBookUser,
  faChartPie,
  faBookmark,
  faGear,
  faGears,
  faQuestion,
  faUniversalAccess,
  faScreenUsers,
  faHospitals,
} from '@fortawesome/pro-regular-svg-icons';

import { faCalendarDays } from '@fortawesome/pro-solid-svg-icons';

export const topMenuItems = [
  {
    label: 'Home',
    icon: faCompass,
    path: '/admin/home',
  },
  {
    label: 'Control Panel',
    icon: faGrid2,
    path: '/admin/control-panel',
    children: [
      {
        icon: faUniversalAccess,
        label: 'Universal Settings',
        path: '/admin/control-panel/universal-settings',
        children: [
          {
            icon: faHospitals,
            label: 'Health Facility Management',
            path: '/admin/control-panel/universal-settings/health-facility-management',
          },
        ],
      },
      {
        icon: faGears,
        label: 'Local Settings',
        path: '/admin/control-panel/local-settings',
        children: [
          {
            icon: faScreenUsers,
            label: 'Staff Management',
            path: '/admin/control-panel/local-settings/staff-management',
          },
        ],
      },
    ],
  },
  {
    label: 'Patient Registration',
    icon: faUsersMedical,
    path: '/admin/patient-registration',
  },
  {
    label: 'Clinical Consultation',
    icon: faUserDoctorMessage,
    path: '/admin/clinical-consultation',
  },
  {
    label: 'Investigations',
    icon: faMicroscope,
    path: '/admin/investigations',
  },
  {
    label: 'Patient Appointment',
    icon: faCalendarPen,
    path: '/admin/patient-appointment',
  },
  {
    label: 'Pharmacy',
    icon: faHospital,
    path: '/admin/pharmacy',
  },
  {
    label: 'Staff Management',
    icon: faScreenUsers,
    path: '/admin/control-panel/local-settings/staff-management',
  },
  {
    label: 'Patient AfterCare',
    icon: faStretcher,
    path: '/admin/patient-after-care',
  },
  {
    label: 'Planner',
    icon: faCalendarDays,
    path: '/admin/planner',
  },
  {
    label: 'Accident & Emergency',
    icon: faUserInjured,
    path: '/admin/accident-and-emergency',
  },
  {
    label: 'Treatment Room',
    icon: faHouseMedical,
    path: '/admin/treatment-room',
  },
  {
    label: 'Inventory & Supplies',
    icon: faChartMixed,
    path: '/admin/inventory-and-supplies',
  },
  {
    label: 'Dashboard & Reports',
    icon: faFileChartPie,
    path: '/admin/dashboard-and-reports',
  },
  {
    label: 'User Management',
    icon: faBookUser,
    path: '/admin/user-management',
  },
  {
    label: 'Management Dashboard',
    icon: faChartPie,
    path: '/admin/management-dashboard',
  },
];

export const bottomMenuItems = [
  {
    label: 'User Guide',
    icon: faBookmark,
    path: '/admin/user-guide',
  },
  {
    label: 'Help Center',
    icon: faQuestion,
    path: '/admin/help-center',
  },
  {
    label: 'Settings',
    icon: faGear,
    path: '/admin/settings',
  },
];
