/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-trailing-spaces */
import * as React from 'react';

import { Routes, Route, Outlet, BrowserRouter } from 'react-router-dom';

import ErrorBoundary from '@app/container/ErrorBoundary';
import ScreenLoader from '@app/container/ScreenLoader';
import PageNotFound from '@app/container/PageNotFound';
import RequireAuth from '@app/container/RequireAuth';
import FingerprintUsername from '@app/container/authentication/fingerprint-username/FingerprintUsername';
import FingerprintPassword from '@app/container/authentication/fingerprint-password/FingerprintPassword';
import SessionTimeOut from '@app/services/SessionTimeOut';

const Login = React.lazy(() =>
  import('@app/container/authentication/login/Login')
);
const ForgotPassword = React.lazy(() =>
  import('@app/container/authentication/forgot-password/ForgotPassword')
);

const SetNewPassword = React.lazy(() =>
  import('@app/container/authentication/set-new-password/SetNewPassword')
);

const AnswerSecurityQuestions = React.lazy(() =>
  import(
    '@app/container/authentication/answer-security-questions/AnswerSecurityQuestions'
  )
);
const Home = React.lazy(() => import('@app/container/admin/home/Home'));
const PatientRegistration = React.lazy(() =>
  import('@app/container/admin/patient-registration/PatientRegistration')
);
const ClinicalConsultation = React.lazy(() =>
  import('@app/container/admin/clinical-consultations/ClinicalConsultation')
);
const Investigations = React.lazy(() =>
  import('@app/container/admin/investigations/Investigations')
);

const PatientAfterCare = React.lazy(() =>
  import('@app/container/admin/patient-after-care/PatientAfterCare')
);
const Pharmacy = React.lazy(() =>
  import('@app/container/admin/pharmacy/Pharmacy')
);
const StaffManagement = React.lazy(() =>
  import('@app/container/admin/staff-management/StaffManagement')
);
const AccidentAndEmergency = React.lazy(() =>
  import('@app/container/admin/accident-and-emergency/AccidentAndEmergency')
);
const TreatmentRoom = React.lazy(() =>
  import('@app/container/admin/treatment-room/TreatmentRoom')
);
const InventoryAndSupplies = React.lazy(() =>
  import('@app/container/admin/inventory-and-supplies/InventoryAndSupplies')
);
const DashboardAndReports = React.lazy(() =>
  import('@app/container/admin/dashboard-and-reports/DashboardAndReports')
);
const UserManagement = React.lazy(() =>
  import('@app/container/admin/user-management/UserManagement')
);
const ManagementDashboard = React.lazy(() =>
  import('@app/container/admin/management-dashboard/ManagementDashboard')
);
const PatientAppointment = React.lazy(() =>
  import('@app/container/admin/patient-appointment/PatientAppointment')
);
const Settings = React.lazy(() =>
  import('@app/container/admin/settings/Settings')
);
const UserGuide = React.lazy(() =>
  import('@app/container/admin/user-guide/UserGuide')
);
const AdminLayout = React.lazy(() =>
  import('@app/layouts/admin-layout/AdminLayout')
);
const ChatUI = React.lazy(() => import('@app/container/admin/chat-ui/ChatUI'));
const FacilityManagement = React.lazy(() =>
  import(
    '@app/container/admin/health-facility-management/HealthFacilityManagement'
  )
);

const Planner = React.lazy(() =>
  import('@app/container/admin/planner/Planner')
);
const HelpCenter = React.lazy(() =>
  import('@app/container/admin/help-center/HelpCenter')
);

function AppRoutes() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <React.Suspense fallback={<ScreenLoader />}>
          <Routes>
            {/* ===================================== authentication routes */}
            <Route path="/" element={<Outlet />}>
              <Route index element={<Login />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route
                path="fingerprint-username"
                element={<FingerprintUsername />}
              />
              <Route
                path="fingerprint-password"
                element={<FingerprintPassword />}
              />
              <Route
                path="answer-security-questions"
                element={<AnswerSecurityQuestions />}
              />
              <Route path="set-new-password" element={<SetNewPassword />} />
            </Route>
            {/* ===================================== admin routes */}
            <Route
              path="/admin"
              element={
                <RequireAuth>
                  <AdminLayout />
                </RequireAuth>
              }
            >
              <Route path="home" element={<Home />} />
              <Route path="chat" element={<ChatUI />} />

              {/* ============================================= control panel routes start here */}
              <Route path="control-panel" element={<Outlet />}>
                <Route path="universal-settings" element={<Outlet />}>
                  <Route
                    path="health-facility-management"
                    element={<FacilityManagement />}
                  />
                </Route>
                <Route path="local-settings" element={<Outlet />}>
                  <Route
                    path="staff-management"
                    element={<StaffManagement />}
                  />
                </Route>
              </Route>
              {/* ============================================= control panel routes end here */}

              <Route path="planner" element={<Planner />} />
              <Route
                path="patient-registration"
                element={<PatientRegistration />}
              />
              <Route
                path="patient-appointment"
                element={<PatientAppointment />}
              />
              <Route
                path="clinical-consultation"
                element={<ClinicalConsultation />}
              />
              <Route path="investigations" element={<Investigations />} />
              <Route path="pharmacy" element={<Pharmacy />} />

              <Route path="patient-after-care" element={<PatientAfterCare />} />
              <Route
                path="accident-and-emergency"
                element={<AccidentAndEmergency />}
              />
              <Route path="treatment-room" element={<TreatmentRoom />} />
              <Route
                path="inventory-and-supplies"
                element={<InventoryAndSupplies />}
              />
              <Route
                path="dashboard-and-reports"
                element={<DashboardAndReports />}
              />
              <Route path="user-management" element={<UserManagement />} />
              <Route
                path="management-dashboard"
                element={<ManagementDashboard />}
              />

              <Route path="settings" element={<Settings />} />
              <Route path="user-guide" element={<UserGuide />} />
              <Route path="help-center" element={<HelpCenter />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </React.Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default AppRoutes;
