import { getEvents } from '@/data'
import { DashboardLayout } from './dashboard-layout'
 
export default async function Layout({ children }: { children: React.ReactNode }) {
    let events = await getEvents()
    return (
        <>
            <DashboardLayout events={events}>{children}</DashboardLayout>
        </>
    )
}