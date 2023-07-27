const routes = [
	{
		path: "/profile",
		component: () => import("layouts/MainLayout.vue"),
		children: [{ path: "",name: "profile", component: () => import("pages/Profile.vue") }],
	},
	{
		path: "/calendar",
		component: () => import("layouts/MainLayout.vue"),
		children: [{ path: "",name: "calendar", component: () => import("pages/Calendar.vue") }],
	},
	{
		path: "/trainer",
		component: () => import("layouts/MainLayout.vue"),
		children: [{ path: "",name: "trainer", component: () => import("pages/Trainer.vue") }],
	},
	{
		path: "/gymlist",
		component: () => import("layouts/MainLayout.vue"),
		children: [{ path: "",name: "gymlist", component: () => import("pages/GymList.vue") }],
	},
	{
		path: "/routine",
		component: () => import("layouts/MainLayout.vue"),
		children: [
      { path: "", name:"routine", component: () => import("pages/Routine.vue") },
      { path: "mylist", name:"mylist", component: () => import("pages/MyList.vue") },
      { path: "records", name:"records", component: () => import("pages/Records.vue") },
    ],
	},
	{
		path: "/auth/login",
		component: () => import("pages/Login.vue"),
	},
	{
		path: "/",
		component: () => import("pages/Loading.vue"),
	},
	{
		path: "/manager",
		component: () => import("pages/Manager.vue"),
	},
	// Always leave this as last one,
	// but you can also remove it
	{
		path: "/:catchAll(.*)*",
		component: () => import("pages/ErrorNotFound.vue"),
	},
];

export default routes;
