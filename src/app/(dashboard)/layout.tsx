import * as React from 'react';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <DashboardLayout defaultSidebarCollapsed={true}>
      <PageContainer className='bg-gray-200'>
        {props.children}
      </PageContainer>
    </DashboardLayout>
  );
}  
