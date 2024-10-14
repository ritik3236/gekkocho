import React, { Suspense } from 'react';

import { Metadata } from 'next';

import { DashboardTabs } from '@/app/dashboard/utils/DashboardTabs';
import { Breadcrumbs } from '@/components/ui/Breadcrumb';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: 'Settings',
};
export default function SettingsLayout({ children }: { children: React.ReactNode }) {
    return (
        <section aria-label="Settings Layout" className="flex size-full flex-col pr-16">
            <Breadcrumbs/>
            <DashboardTabs tabs={siteConfig.dashboardSettingsNavItems}/>
            <Suspense>
                {children}
            </Suspense>
        </section>
    );
}
