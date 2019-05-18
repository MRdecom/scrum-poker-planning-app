import AddStoryListPage from "./pages/AddStoryListPage";
import DeveloperPlanningPage from "./pages/DeveloperPlanningPage";
import ScrumMasterPlanningPage from "./pages/ScrumMasterPlanningPage";

export const Routes = [
    {
        path: '/AddStoryList',
        component: AddStoryListPage
    },
    {
        path: '/DeveloperPlanning',
        component: DeveloperPlanningPage
    },
    {
        path: '/ScrumMasterPlanning',
        component: ScrumMasterPlanningPage
    },
    {
        component: AddStoryListPage
    }
];