import { Routes } from '@angular/router';
import { TaskList } from './tasklist/tasklist';
import { Loginpage } from './loginpage/loginpage';
import { Forgotpassword } from './forgotpassword/forgotpassword';

export const routes: Routes = [

    { path: '',component: Loginpage },
    { path: 'list',component: TaskList},
    { path: 'forgot',component:Forgotpassword}
];
