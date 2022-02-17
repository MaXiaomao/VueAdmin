import {createRouter, RouteRecordRaw, createWebHistory} from "vue-router"
import Main from "../pages/main.vue"

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		component: Main,
		children: [
			{
				path: "/home",
				component: import("../pages/Home/index.vue"),
			},
		],
	},
	{
		path: "/dataScreen",
		component: () => import("../pages/DataScreen/index.vue"),
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
