import AddStoryListPage from "./pages/AddStoryListPage";
import DeveloperPlanningPage from "./pages/DeveloperPlanningPage";
import ScrumMasterPlanningPage from "./pages/ScrumMasterPlanningPage";

export const Routes = [
    {
        path: '/add-story-list',
        component: AddStoryListPage
    },
    {
        path: '/developer-planning',
        component: DeveloperPlanningPage
    },
    {
        path: '/scrum-master-planning',
        component: ScrumMasterPlanningPage
    },
    {
        component: AddStoryListPage
    }
];