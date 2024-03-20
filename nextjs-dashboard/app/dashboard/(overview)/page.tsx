import RevenueChart from '../../ui/dashboard/revenue-chart';
import LatestInvoices from '../../ui/dashboard/latest-invoices';

import { fetchLatestInvoices, fetchCardData } from '@/app/lib/data';
import CardWrapper from '@/app/ui/dashboard/cards';
import { Suspense } from 'react';



export default async function Page() {
  // const revenue = await fetchRevenue();
  //const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
    return (
      <main>
        <h1 className={'${lustiana.className} mb-4 text-xl md:text-2xl'}>
          Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense >
          <CardWrapper />
        </Suspense>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense >
          <RevenueChart />
        </Suspense>
        <Suspense >
          <LatestInvoices  />
        </Suspense>
        </div>
      </main>


    );
  }