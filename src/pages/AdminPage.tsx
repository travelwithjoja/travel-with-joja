import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { AdminLayout, AdminTab } from '../components/admin/AdminLayout';
import { AdminDashboardHome } from '../components/admin/AdminDashboardHome';
import { AdminBookings } from '../components/admin/AdminBookings';
import { AdminPackages } from '../components/admin/AdminPackages';
import { AdminDestinations } from '../components/admin/AdminDestinations';
import { AdminGallery } from '../components/admin/AdminGallery';
import { AdminReviews } from '../components/admin/AdminReviews';
import { AdminPayments } from '../components/admin/AdminPayments';
import { AdminUsers } from '../components/admin/AdminUsers';
import { AdminSettings } from '../components/admin/AdminSettings';
import { AdminLoginModal } from '../components/admin/AdminLoginModal';
import { ToastContainer } from '../components/common/ToastContainer';

export const AdminPage: React.FC = () => {
  const { isAdminLoggedIn } = useApp();
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');

  if (!isAdminLoggedIn) {
    return (
      <>
        <AdminLoginModal />
        <ToastContainer />
      </>
    );
  }

  return (
    <>
      <AdminLayout activeTab={activeTab} setActiveTab={setActiveTab}>
        {activeTab === 'dashboard' && <AdminDashboardHome onNavigate={setActiveTab} />}
        {activeTab === 'bookings' && <AdminBookings />}
        {activeTab === 'packages' && <AdminPackages />}
        {activeTab === 'destinations' && <AdminDestinations />}
        {activeTab === 'gallery' && <AdminGallery />}
        {activeTab === 'reviews' && <AdminReviews />}
        {activeTab === 'payments' && <AdminPayments />}
        {activeTab === 'users' && <AdminUsers />}
        {activeTab === 'settings' && <AdminSettings />}
      </AdminLayout>
      <ToastContainer />
    </>
  );
};
