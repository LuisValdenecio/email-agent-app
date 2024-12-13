import { getEvents } from '@/data'
import { DashboardLayout } from './dashboard-layout'
 
export default async function Layout({ children }) {
    let events = await getEvents()
    return (
        <>
            <DashboardLayout events={events}>{children}</DashboardLayout>
        </>
    )
}